import coverageRaw from "@/data/coverage.json";
import { STATE_CLIMATE, StateClimateProfile } from "./climate-data";
import { ZIP3_PROFILES, Zip3Profile } from "./zip-profiles";
import { SERVICES_DATA, ServiceData } from "./services-data";

export interface CityRecord {
  name: string;
  slug: string;
  p: number;
  zips: string[];
}

export interface StateRecord {
  abbr: string;
  name: string;
  slug: string;
  cities: Record<string, CityRecord>;
}

export interface ZipDetails {
  zip: string;
  cityName: string;
  citySlug: string;
  stateName: string;
  stateSlug: string;
  stateAbbr: string;
  payout: number;
  siblingZips: string[];
  nearbyCities: CityRecord[];
  climate: StateClimateProfile;
  local: Zip3Profile;
  buildingCount: number;
  cityZipCount: number;
}

const statesMap = coverageRaw as Record<string, StateRecord>;

/**
 * Safety net for any prefix missing from the generated table. Keeps the page
 * rendering with state-level values rather than throwing.
 */
function fallbackProfile(abbr: string): Zip3Profile {
  const c = STATE_CLIMATE[abbr] || STATE_CLIMATE.CA;
  return {
    region: c.region,
    climateZone: c.climateZone,
    winterLow: c.winterLow,
    summerHigh: c.summerHigh,
    heatDesignTemp: "local design temperature",
    housingStock: c.commonEquipment,
    utility: "the local electric and gas utility",
    localIssue: c.commonBreakdowns[0] || "seasonal wear on central heating and cooling equipment",
  };
}

export { fallbackProfile };

// Precompute flat lookup maps once per server instance
const zipLookup = new Map<
  string,
  {
    stateSlug: string;
    citySlug: string;
  }
>();

const allCityPaths: { stateSlug: string; citySlug: string; payout: number; zipCount: number }[] = [];
const allZipCodes: string[] = [];

for (const [sSlug, stateObj] of Object.entries(statesMap)) {
  for (const [cSlug, cityObj] of Object.entries(stateObj.cities)) {
    allCityPaths.push({
      stateSlug: sSlug,
      citySlug: cSlug,
      payout: cityObj.p,
      zipCount: cityObj.zips.length,
    });
    for (const z of cityObj.zips) {
      zipLookup.set(z, { stateSlug: sSlug, citySlug: cSlug });
      allZipCodes.push(z);
    }
  }
}

allZipCodes.sort();

export function getAllStates(): {
  slug: string;
  name: string;
  abbr: string;
  cityCount: number;
  zipCount: number;
  maxPayout: number;
}[] {
  return Object.values(statesMap)
    .map((s) => {
      const citiesArr = Object.values(s.cities);
      const zipCount = citiesArr.reduce((acc, c) => acc + c.zips.length, 0);
      const maxPayout = citiesArr.reduce((max, c) => (c.p > max ? c.p : max), 0);
      return {
        slug: s.slug,
        name: s.name,
        abbr: s.abbr,
        cityCount: citiesArr.length,
        zipCount,
        maxPayout,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getTopStatesByCoverage(limit = 16) {
  return getAllStates()
    .sort((a, b) => b.zipCount - a.zipCount)
    .slice(0, limit);
}

export function getStateBySlug(stateSlug: string) {
  const state = statesMap[stateSlug];
  if (!state) return null;
  const cities = Object.values(state.cities).sort((a, b) => {
    if (b.zips.length !== a.zips.length) return b.zips.length - a.zips.length;
    return a.name.localeCompare(b.name);
  });
  const totalZips = cities.reduce((acc, c) => acc + c.zips.length, 0);
  const climate = STATE_CLIMATE[state.abbr] || STATE_CLIMATE.CA;
  return {
    ...state,
    citiesList: cities,
    totalZips,
    climate,
  };
}

export function getCityDetails(stateSlug: string, citySlug: string) {
  const state = statesMap[stateSlug];
  if (!state) return null;
  const city = state.cities[citySlug];
  if (!city) return null;

  const allStateCities = Object.values(state.cities).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const idx = allStateCities.findIndex((c) => c.slug === citySlug);

  // Pick up to 8 nearby/related cities in the same state using a deterministic ring
  const nearbyCities: CityRecord[] = [];
  if (allStateCities.length > 1) {
    const count = Math.min(8, allStateCities.length - 1);
    for (let i = 1; i <= count; i++) {
      nearbyCities.push(allStateCities[(idx + i) % allStateCities.length]);
    }
  }

  //Also pick top metro cities in the same state
  const majorStateCities = Object.values(state.cities)
    .filter((c) => c.slug !== citySlug)
    .sort((a, b) => b.zips.length - a.zips.length)
    .slice(0, 6);

  const climate = STATE_CLIMATE[state.abbr] || STATE_CLIMATE.CA;
  const primaryZip = city.zips[0] || "";
  const local =
    ZIP3_PROFILES[`${state.abbr}:${primaryZip.slice(0, 3)}`] || fallbackProfile(state.abbr);

  // Deterministic hash to rotate featured heating and cooling services
  const hash = (citySlug.length * 7 + state.abbr.charCodeAt(0) * 13) % 3;
  const heatingServices = SERVICES_DATA.filter((s) => s.category === "Heating");
  const coolingServices = SERVICES_DATA.filter((s) => s.category === "Cooling");
  const featuredHeating: ServiceData = heatingServices[hash % heatingServices.length];
  const featuredCooling: ServiceData = coolingServices[(hash + 1) % coolingServices.length];

  return {
    city,
    state: {
      name: state.name,
      abbr: state.abbr,
      slug: state.slug,
      cityCount: allStateCities.length,
    },
    climate,
    local,
    nearbyCities,
    majorStateCities,
    featuredHeating,
    featuredCooling,
  };
}

export function getZipDetails(zip: string): ZipDetails | null {
  const ref = zipLookup.get(zip);
  if (!ref) return null;
  const state = statesMap[ref.stateSlug];
  const city = state.cities[ref.citySlug];
  const climate = STATE_CLIMATE[state.abbr] || STATE_CLIMATE.CA;
  const local = ZIP3_PROFILES[`${state.abbr}:${zip.slice(0, 3)}`] || fallbackProfile(state.abbr);

  // Sibling zips in same city or numerically adjacent zips in same state
  let siblingZips = city.zips.filter((z) => z !== zip).slice(0, 10);
  if (siblingZips.length < 6) {
    const stateZips: string[] = [];
    for (const c of Object.values(state.cities)) {
      for (const z of c.zips) {
        if (z !== zip) stateZips.push(z);
      }
    }
    stateZips.sort((a, b) => Math.abs(Number(a) - Number(zip)) - Math.abs(Number(b) - Number(zip)));
    siblingZips = stateZips.slice(0, 8);
  }

  const allStateCities = Object.values(state.cities).sort((a, b) => b.zips.length - a.zips.length);
  const nearbyCities = allStateCities.filter((c) => c.slug !== city.slug).slice(0, 6);

  return {
    zip,
    cityName: city.name,
    citySlug: city.slug,
    stateName: state.name,
    stateSlug: state.slug,
    stateAbbr: state.abbr,
    payout: city.p,
    siblingZips,
    nearbyCities,
    climate,
    local,
    buildingCount: city.zips.length,
    cityZipCount: city.zips.length,
  };
}

export function getPriorityCities(limit = 60) {
  return [...allCityPaths]
    .sort((a, b) => {
      if (b.payout !== a.payout) return b.payout - a.payout;
      return b.zipCount - a.zipCount;
    })
    .slice(0, limit)
    .map((item) => {
      const s = statesMap[item.stateSlug];
      const c = s.cities[item.citySlug];
      return {
        stateSlug: s.slug,
        stateName: s.name,
        stateAbbr: s.abbr,
        citySlug: c.slug,
        cityName: c.name,
        zipCount: c.zips.length,
        sampleZip: c.zips[0],
        payout: c.p,
      };
    });
}

export function getAllCitySitemapChunks(chunkSize = 4500) {
  const urls: string[] = [];
  for (const [sSlug, stateObj] of Object.entries(statesMap)) {
    for (const cSlug of Object.keys(stateObj.cities)) {
      urls.push(`/areas/${sSlug}/${cSlug}/`);
    }
  }
  const chunks: string[][] = [];
  for (let i = 0; i < urls.length; i += chunkSize) {
    chunks.push(urls.slice(i, i + chunkSize));
  }
  return chunks;
}

export function getAllZipSitemapChunks(chunkSize = 4500) {
  const urls = allZipCodes.map((z) => `/zip/${z}/`);
  const chunks: string[][] = [];
  for (let i = 0; i < urls.length; i += chunkSize) {
    chunks.push(urls.slice(i, i + chunkSize));
  }
  return chunks;
}
