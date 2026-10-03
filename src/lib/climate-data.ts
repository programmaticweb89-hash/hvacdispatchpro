export interface StateClimateProfile {
  region: string;
  climateZone: string;
  winterLow: string;
  summerHigh: string;
  primaryHeatFuel: string;
  commonEquipment: string;
  seasonalSummary: string;
  commonBreakdowns: string[];
  winterPrepNote: string;
}

export const STATE_CLIMATE: Record<string, StateClimateProfile> = {
  AL: {
    region: "Deep South",
    climateZone: "Humid Subtropical",
    winterLow: "30s to low 40s",
    summerHigh: "90s with high Gulf humidity",
    primaryHeatFuel: "Natural gas and central electric heat",
    commonEquipment: "Central split-system air conditioners and forced-air gas or electric furnaces",
    seasonalSummary: "Long, humid cooling seasons followed by sharp winter cold snaps that test central heating units",
    commonBreakdowns: [
      "Clogged primary condensate drain lines and rusted evaporator pans from heavy summer humidity",
      "Burned condenser fan capacitors and pitted contactor relays after months of continuous cooling",
      "Dirty flame sensors and weak hot surface ignitors when the furnace fires up for the first fall freeze"
    ],
    winterPrepNote: "In Alabama, central furnaces sit idle for seven months while humidity builds up in the cabinet. Scheduling a furnace cleaning in October prevents ignition lockouts on the first freezing night."
  },
  AK: {
    region: "Far North",
    climateZone: "Subarctic and Maritime Cold",
    winterLow: "Below zero to teens",
    summerHigh: "60s to low 70s",
    primaryHeatFuel: "Natural gas and heating fuel",
    commonEquipment: "High-output forced-air central furnaces and heavy-duty central heating systems",
    seasonalSummary: "Extended sub-freezing winter heating duty cycles where heating reliability is a household safety requirement",
    commonBreakdowns: [
      "Blocked intake or exhaust PVC furnace vents from frost, ice, and drifting snow",
      "Cracked heat exchangers and worn inducer draft motors from eight-month heating seasons",
      "Failed blower wheel bearings and high-limit switch trips on overworked central furnaces"
    ],
    winterPrepNote: "With sub-zero temperatures common across Alaska, an annual combustion inspection and heat exchanger test before deep winter protects both heating uptime and indoor air safety."
  },
  AZ: {
    region: "Southwest",
    climateZone: "Arid Desert and Highland",
    winterLow: "30s to 40s in the valleys, teens in northern elevations",
    summerHigh: "105 to 118 degrees in desert metros",
    primaryHeatFuel: "Natural gas and electric central heating",
    commonEquipment: "High-SEER2 central split-system air conditioners, rooftop package units, and gas forced-air furnaces",
    seasonalSummary: "Extreme summer heat loads paired with dusty desert air and chilly desert nights from November through February",
    commonBreakdowns: [
      "Thermal overload trips on outdoor AC compressors and failed dual-run capacitors during triple-digit heat",
      "Fine desert dust coating outdoor condenser coils and indoor furnace blower wheels",
      "Cracked hot surface ignitors and restricted return air filters when switching from cooling to heating"
    ],
    winterPrepNote: "Desert dust coats burner assemblies and blower cages all summer. Cleaning the furnace burners and testing the gas valve in autumn keeps night heating dependable when desert temperatures drop."
  },
  AR: {
    region: "South Central",
    climateZone: "Humid Subtropical",
    winterLow: "20s to mid 30s",
    summerHigh: "90s with heavy river valley humidity",
    primaryHeatFuel: "Natural gas and electric central heating",
    commonEquipment: "Central split-system air conditioners paired with gas forced-air furnaces",
    seasonalSummary: "Hot, muggy summers and winter ice storms that put heavy demand on both central AC and gas heating",
    commonBreakdowns: [
      "Frozen evaporator coils caused by restricted airflow or low refrigerant charge in July and August",
      "Corroded furnace flame sensors and stuck gas valves during the first November cold front",
      "Worn blower motors and failing run capacitors from year-round air handler operation"
    ],
    winterPrepNote: "Arkansas winter cold fronts arrive fast. A pre-season furnace cleaning and safety check ensures your gas burners light cleanly before freezing rain or ice hits."
  },
  CA: {
    region: "West Coast",
    climateZone: "Mediterranean Coastal to Inland Desert and Alpine",
    winterLow: "30s to 40s in valleys and coast, 20s in mountain communities",
    summerHigh: "80s near the coast to over 100 degrees across inland valleys",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Central forced-air gas furnaces and split-system central air conditioners",
    seasonalSummary: "Heavy inland summer cooling loads followed by cool, damp winter nights that expose neglected gas furnaces",
    commonBreakdowns: [
      "Older central gas furnaces failing to ignite after sitting unused from April through October",
      "Outdoor condenser coils packed with dust, pollen, and wildfire ash reducing cooling output",
      "Tripped high-limit switches and weak blower capacitors in attic and garage air handlers"
    ],
    winterPrepNote: "Many California homeowners do not turn on their central furnace until the first chilly night in late October or November. Clearing dust from the burners and flame sensor early stops no-heat calls."
  },
  CO: {
    region: "Mountain West",
    climateZone: "High-Altitude Semi-Arid and Alpine",
    winterLow: "Single digits to 20s",
    summerHigh: "80s to mid 90s along the Front Range",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "High-altitude calibrated gas forced-air furnaces and central split-system air conditioners",
    seasonalSummary: "Dry, high-altitude air with early October snowstorms and seven months of heavy furnace operation",
    commonBreakdowns: [
      "Improper fuel-air mixture and soot buildup on gas burners that are not derated for high elevation",
      "Cracked heat exchangers caused by steep temperature swings between mild afternoons and sub-zero nights",
      "Failed draft inducer motors and pressure switch lockouts during high Front Range winds"
    ],
    winterPrepNote: "Colorado regularly sees freezing weather by October. Checking heat exchanger integrity, burner orifice calibration, and flue draft before winter is essential at high altitude."
  },
  CT: {
    region: "New England",
    climateZone: "Humid Continental",
    winterLow: "Teens to low 20s",
    summerHigh: "80s with coastal humidity",
    primaryHeatFuel: "Natural gas and heating oil",
    commonEquipment: "High-efficiency condensing gas furnaces and central split-system air conditioners",
    seasonalSummary: "Cold, snowy New England winters requiring five months of continuous heating and warm, muggy summers",
    commonBreakdowns: [
      "Clogged condensate traps and frozen PVC vent lines on high-efficiency 90%+ AFUE gas furnaces",
      "Soot buildup and ignition lockouts on older basement furnaces during January cold snaps",
      "Corroded outdoor AC condenser fins and refrigerant leaks on coastal and suburban cooling units"
    ],
    winterPrepNote: "Connecticut heating systems work hard from October through April. Cleaning the burner assembly and verifying safe flue venting prevents mid-winter emergency shutdowns."
  },
  DC: {
    region: "Mid-Atlantic",
    climateZone: "Humid Subtropical",
    winterLow: "20s to low 30s",
    summerHigh: "80s to 90s with high Potomac humidity",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Central forced-air gas furnaces and split-system central air conditioners",
    seasonalSummary: "Dense urban housing with hot, humid summers and brisk winters that demand reliable central heating and cooling",
    commonBreakdowns: [
      "Restricted return airflow and overheating blower motors in tight utility closets and basements",
      "Condensate drain pan overflows and float switch shutoffs during peak summer humidity",
      "Worn hot surface ignitors and dirty flame rods when switching to heat in late October"
    ],
    winterPrepNote: "Rowhomes and single-family residences in DC rely on compact utility rooms where clean filters and tuned furnace burners make a major difference in winter comfort."
  },
  DE: {
    region: "Mid-Atlantic",
    climateZone: "Humid Subtropical and Coastal",
    winterLow: "20s to low 30s",
    summerHigh: "80s to low 90s",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Central forced-air gas furnaces and central air conditioning split systems",
    seasonalSummary: "Coastal salt air and humid summers paired with freezing winter winds off the Delaware Bay",
    commonBreakdowns: [
      "Salt air corrosion on outdoor AC condenser coils and electrical contactors near the coast",
      "Rusted furnace burner crossovers and weak flame sensors caused by damp basement air",
      "Blower capacitor failures during peak July heat and January freeze events"
    ],
    winterPrepNote: "Coastal humidity accelerates rust inside furnace cabinets. Inspecting burners, heat exchangers, and electrical terminals in autumn keeps heating dependable all winter."
  },
  FL: {
    region: "Southeast",
    climateZone: "Humid Subtropical and Tropical",
    winterLow: "40s in North Florida to 60s in South Florida",
    summerHigh: "90s with extreme humidity",
    primaryHeatFuel: "Central electric heating and natural gas",
    commonEquipment: "Central split-system air conditioners and central air handlers with electric heat strips or gas furnaces",
    seasonalSummary: "Nine to ten months of heavy air conditioning runtime with brief winter cold fronts that test backup heating",
    commonBreakdowns: [
      "Algae and bio-slime blocking AC condensate drain lines and tripping float safety switches",
      "Salt air corrosion eating through outdoor aluminium condenser coils and copper refrigerant tubing",
      "Burned heating sequencer relays and dusty electric heat strips smoking or failing during winter cold snaps"
    ],
    winterPrepNote: "Because Florida air conditioners run almost year-round, coil cleaning and condensate flushing prevent water damage, while testing the heating assembly before winter cold fronts stops burnt-dust odors and no-heat calls."
  },
  GA: {
    region: "Southeast",
    climateZone: "Humid Subtropical",
    winterLow: "20s in North Georgia to 30s and 40s in central and coastal areas",
    summerHigh: "90s with heavy humidity",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Central forced-air gas furnaces and central split-system air conditioners",
    seasonalSummary: "Long, hot summers with heavy pine pollen in spring and freezing winter nights from November through February",
    commonBreakdowns: [
      "Thick yellow pine pollen and yard debris choking outdoor AC condenser coils",
      "Failed dual-run capacitors and overheated compressor windings during 95-degree summer stretches",
      "Dirty furnace flame sensors causing burners to light for three seconds and shut right back off"
    ],
    winterPrepNote: "Georgia homes experience sharp temperature drops in late autumn. Having your gas furnace cleaned and safety-checked in October ensures steady heat when the first freeze arrives."
  },
  HI: {
    region: "Pacific Islands",
    climateZone: "Tropical Trade-Wind",
    winterLow: "60s to low 70s",
    summerHigh: "80s to low 90s with coastal salt air",
    primaryHeatFuel: "Electric central climate systems",
    commonEquipment: "Central split-system air conditioners and corrosion-protected outdoor condensers",
    seasonalSummary: "Year-round cooling demand with constant ocean salt air and high moisture levels",
    commonBreakdowns: [
      "Accelerated salt-air corrosion on outdoor condenser fins, fan blades, and service valves",
      "Clogged condensate drain lines and microbial buildup on indoor evaporator coils",
      "Electrical contactor pitting and capacitor swelling from continuous cooling operation"
    ],
    winterPrepNote: "Year-round cooling in Hawaii means condenser and evaporator coils need regular chemical cleaning to stop salt corrosion and keep electric bills under control."
  },
  ID: {
    region: "Pacific Northwest / Mountain",
    climateZone: "Semi-Arid Steppe and Continental",
    winterLow: "Single digits to 20s",
    summerHigh: "90s in the Treasure Valley, 80s in northern valleys",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "High-efficiency gas forced-air furnaces and central split-system air conditioners",
    seasonalSummary: "Cold, snowy winters requiring months of steady gas furnace output and hot, dry July and August afternoons",
    commonBreakdowns: [
      "Frosted high-efficiency furnace exhaust pipes and pressure switch lockouts in freezing weather",
      "Cracked hot surface ignitors and worn blower motors from long winter duty cycles",
      "Dust-clogged outdoor condenser coils and weak capacitors during 100-degree Boise valley summers"
    ],
    winterPrepNote: "Idaho temperatures drop below freezing early in autumn. Servicing your gas furnace before November prevents midnight no-heat emergencies when parts stores are closed."
  },
  IL: {
    region: "Midwest",
    climateZone: "Humid Continental",
    winterLow: "Single digits to teens with sub-zero wind chills",
    summerHigh: "80s to low 90s with high Midwest humidity",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Forced-air natural gas furnaces and central split-system air conditioners",
    seasonalSummary: "Bitter Lake Michigan and prairie winter freezes paired with hot, muggy summers",
    commonBreakdowns: [
      "Cracked heat exchangers and tripped rollout switches on older gas furnaces during sub-zero cold waves",
      "Seized draft inducer fan assemblies and brittle pressure switch tubing",
      "Cottonwood seed and yard debris matting outdoor AC condenser coils in early summer"
    ],
    winterPrepNote: "In Illinois, a dead furnace in January can freeze household water pipes in hours. Testing your furnace ignition, blower, and heat exchanger in October is the smartest protection you can buy."
  },
  IN: {
    region: "Midwest",
    climateZone: "Humid Continental",
    winterLow: "Teens to low 20s",
    summerHigh: "80s to low 90s",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Central forced-air gas furnaces and central split-system air conditioners",
    seasonalSummary: "Cold, windy winters with frequent freeze-thaw cycles and warm, humid summers",
    commonBreakdowns: [
      "Dirty flame sensors and carbon buildup on gas burners causing short-cycling",
      "Clogged condensate traps on high-efficiency condensing gas furnaces",
      "Failed AC compressor capacitors and dirty evaporator coils during humid July heatwaves"
    ],
    winterPrepNote: "Indiana furnaces run hard from October through April. Pre-winter burner cleaning and safety testing keeps fuel bills lower and prevents sudden lockouts."
  },
  IA: {
    region: "Midwest",
    climateZone: "Humid Continental",
    winterLow: "Single digits to teens",
    summerHigh: "80s to low 90s",
    primaryHeatFuel: "Natural gas and propane",
    commonEquipment: "High-AFUE forced-air gas furnaces and central air conditioning split systems",
    seasonalSummary: "Harsh prairie winters with sub-zero cold snaps and humid corn-belt summers",
    commonBreakdowns: [
      "Frozen PVC furnace intake and exhaust pipes during blowing snow events",
      "Worn blower motor bearings and cracked ignitors after months of non-stop winter heating",
      "Agricultural dust and pollen clogging outdoor AC condenser coils"
    ],
    winterPrepNote: "Sub-zero Iowa winds push residential furnaces to their limit. Have your burners, heat exchanger, and venting inspected before the first hard freeze."
  },
  KS: {
    region: "Great Plains",
    climateZone: "Continental Steppe and Humid Continental",
    winterLow: "Teens to 20s",
    summerHigh: "90s to over 100 degrees",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Forced-air gas furnaces and central split-system air conditioners",
    seasonalSummary: "Wide temperature swings with 100-degree windy summers and freezing plains winters",
    commonBreakdowns: [
      "High winds blowing out pilot lights or triggering pressure switch faults on furnace vents",
      "Dust buildup on indoor evaporator coils and outdoor AC condensers",
      "Overheated AC fan motors and blown run capacitors during peak summer heat"
    ],
    winterPrepNote: "Plains cold fronts can drop temperatures 40 degrees in a single afternoon. Make sure your gas furnace is cleaned and tested before winter arrives."
  },
  KY: {
    region: "South Central",
    climateZone: "Humid Subtropical",
    winterLow: "20s to low 30s",
    summerHigh: "80s to low 90s",
    primaryHeatFuel: "Natural gas and electric central heating",
    commonEquipment: "Central forced-air gas furnaces and split-system central air conditioners",
    seasonalSummary: "Damp, chilly winters with occasional ice storms and warm, humid Ohio Valley summers",
    commonBreakdowns: [
      "Rusted burner assemblies and oxidized flame sensors in damp basements and crawl spaces",
      "Frozen AC coils and clogged drain lines during humid summer months",
      "Failing blower capacitors and sticking gas valves during winter cold snaps"
    ],
    winterPrepNote: "Crawl space and basement moisture in Kentucky often causes rust on furnace burners over the summer. An autumn tune-up and cleaning ensures reliable ignition."
  },
  LA: {
    region: "Gulf Coast",
    climateZone: "Humid Subtropical",
    winterLow: "30s to 40s",
    summerHigh: "90s with intense Gulf humidity",
    primaryHeatFuel: "Natural gas and central electric heat",
    commonEquipment: "Central split-system air conditioners and forced-air gas or electric furnaces",
    seasonalSummary: "Heavy Gulf Coast cooling loads for eight months and brief, damp winter freezes",
    commonBreakdowns: [
      "Overflowing condensate pans and plugged drain lines in attic air handlers",
      "Corroded outdoor condenser coils and pitted electrical contactors from humid Gulf air",
      "Dusty furnace burners and sticking ignition relays when heat is needed in December and January"
    ],
    winterPrepNote: "Attic furnaces in Louisiana collect dust all summer while the AC runs. Cleaning the burners and checking safety limits in fall prevents smoke smells and ignition failures."
  },
  ME: {
    region: "New England",
    climateZone: "Humid Continental",
    winterLow: "Single digits to teens",
    summerHigh: "70s to mid 80s",
    primaryHeatFuel: "Heating oil, natural gas, and propane",
    commonEquipment: "Forced-air central furnaces and central air conditioning split systems",
    seasonalSummary: "Long, severe northern winters with heavy snow and short, mild summers",
    commonBreakdowns: [
      "Soot accumulation inside furnace heat exchangers and blocked flue pipes",
      "Failed ignitors, flame sensors, and draft inducer motors during deep winter cold",
      "Frozen condensate lines on high-efficiency condensing furnaces"
    ],
    winterPrepNote: "Maine winters leave zero margin for heating failure. Annual furnace cleaning and combustion testing in early fall keeps your home safe and warm."
  },
  MD: {
    region: "Mid-Atlantic",
    climateZone: "Humid Subtropical and Continental",
    winterLow: "20s to low 30s",
    summerHigh: "80s to low 90s with Chesapeake humidity",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Central forced-air gas furnaces and split-system central air conditioners",
    seasonalSummary: "Humid Chesapeake summers and freezing winter nights from the mountains to the bay",
    commonBreakdowns: [
      "Dirty flame sensors and worn hot surface ignitors on gas furnaces in autumn",
      "Clogged AC condensate drains and frozen evaporator coils in July and August",
      "Corroded outdoor condenser fins on homes near the bay and coast"
    ],
    winterPrepNote: "Checking your gas furnace and cleaning the burner assembly before November prevents emergency no-heat calls during Mid-Atlantic winter storms."
  },
  MA: {
    region: "New England",
    climateZone: "Humid Continental",
    winterLow: "Teens to 20s",
    summerHigh: "80s with coastal humidity",
    primaryHeatFuel: "Natural gas and heating oil",
    commonEquipment: "High-efficiency forced-air gas furnaces and central split-system air conditioners",
    seasonalSummary: "Nor'easter winter freezes that run heating equipment non-stop and warm, humid summers",
    commonBreakdowns: [
      "Blocked intake/exhaust vents and trapped condensate water on high-efficiency gas furnaces",
      "Cracked heat exchangers and worn blower motors in older New England basements",
      "Salt air corrosion and failed capacitors on outdoor AC condensing units"
    ],
    winterPrepNote: "Massachusetts heating seasons start in October and last into May. A thorough furnace cleaning and safety inspection keeps your system running safely through winter."
  },
  MI: {
    region: "Upper Midwest / Great Lakes",
    climateZone: "Humid Continental",
    winterLow: "Single digits to low 20s",
    summerHigh: "80s",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "High-efficiency forced-air gas furnaces and central split-system air conditioners",
    seasonalSummary: "Six months of Great Lakes winter cold and snow followed by warm, humid summer stretches",
    commonBreakdowns: [
      "Failed hot surface ignitors and fouled flame sensors during early winter cold snaps",
      "Cracked heat exchangers and noisy draft inducer motors on aging gas furnaces",
      "Clogged outdoor AC condensers from cottonwood fluff and spring yard debris"
    ],
    winterPrepNote: "In Michigan, furnaces carry the load from October through April. Cleaning the burners, blower wheel, and flame sensor before winter prevents costly midnight breakdowns."
  },
  MN: {
    region: "Upper Midwest",
    climateZone: "Continental Cold",
    winterLow: "Below zero to single digits",
    summerHigh: "80s",
    primaryHeatFuel: "Natural gas and propane",
    commonEquipment: "95%+ AFUE condensing gas furnaces and central air conditioning split systems",
    seasonalSummary: "Extreme sub-zero winter cold snaps where furnace reliability protects life and property",
    commonBreakdowns: [
      "Hoarfrost and ice plugging exterior PVC furnace intake and exhaust pipes",
      "High-limit switch lockouts and blower motor failures from continuous 24-hour runtime",
      "Cracked heat exchangers and gas valve failures on high-mileage furnaces"
    ],
    winterPrepNote: "Sub-zero Minnesota cold snaps will expose any weak furnace part immediately. Have your furnace cleaned, tested, and inspected before freezing weather sets in."
  },
  MS: {
    region: "Deep South",
    climateZone: "Humid Subtropical",
    winterLow: "30s to low 40s",
    summerHigh: "90s with heavy humidity",
    primaryHeatFuel: "Natural gas and central electric heat",
    commonEquipment: "Central split-system air conditioners and forced-air gas or electric furnaces",
    seasonalSummary: "Long, sweltering summers with heavy moisture loads and brief, sharp winter freezes",
    commonBreakdowns: [
      "Plugged AC condensate drain lines and rusted evaporator coil pans",
      "Failed compressor run capacitors and overheated outdoor fan motors",
      "Corroded furnace flame sensors and dusty burners failing on the first cold night"
    ],
    winterPrepNote: "High summer humidity causes surface rust on idle furnace burners and ignitors. A fall furnace check ensures your heat turns on cleanly when temperatures dip."
  },
  MO: {
    region: "Midwest",
    climateZone: "Humid Continental and Subtropical",
    winterLow: "Teens to 20s",
    summerHigh: "90s with high river humidity",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Central forced-air gas furnaces and split-system air conditioners",
    seasonalSummary: "Hot, muggy summers and freezing winter storms that demand strong heating and cooling performance",
    commonBreakdowns: [
      "Dirty furnace flame rods and weak ignitors causing repeated ignition lockouts",
      "Frozen indoor AC coils from dirty filters or low refrigerant during July heatwaves",
      "Worn blower motors and control board relay failures on older central systems"
    ],
    winterPrepNote: "Missouri weather swings rapidly in October and November. Cleaning your furnace and testing the heat exchanger before winter keeps your family comfortable."
  },
  MT: {
    region: "Northern Rockies",
    climateZone: "Semi-Arid Continental and Alpine",
    winterLow: "Below zero to teens",
    summerHigh: "80s to low 90s",
    primaryHeatFuel: "Natural gas and propane",
    commonEquipment: "High-efficiency forced-air gas furnaces and central air conditioning units",
    seasonalSummary: "Long, frigid mountain winters starting as early as September or October",
    commonBreakdowns: [
      "Blocked furnace exhaust vents from snowdrifts and freezing condensate traps",
      "Cracked heat exchangers and worn inducer motors from prolonged winter operation",
      "Wildfire smoke particulates loading up indoor air filters and blower cages in late summer"
    ],
    winterPrepNote: "After summer smoke season, replacing filters and cleaning your furnace blower and burners in autumn prepares your heating system for seven months of Montana cold."
  },
  NE: {
    region: "Great Plains",
    climateZone: "Humid Continental",
    winterLow: "Single digits to teens",
    summerHigh: "80s to 90s",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Forced-air gas furnaces and central split-system air conditioners",
    seasonalSummary: "Bitter winter plains winds and hot, humid summers across eastern and central valleys",
    commonBreakdowns: [
      "Pressure switch trips and draft inducer faults during high winter winds",
      "Cracked hot surface ignitors and dirty flame sensors on gas furnaces",
      "Dirty outdoor condenser coils and blown capacitors during 95-degree summer weather"
    ],
    winterPrepNote: "Sub-freezing plains winds test every furnace component. Schedule your furnace cleaning and safety inspection before November."
  },
  NV: {
    region: "Southwest / Great Basin",
    climateZone: "Arid Desert and High Desert",
    winterLow: "30s in southern desert valleys, teens in northern Nevada",
    summerHigh: "100 to 115 degrees in southern Nevada, 90s in the north",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "High-capacity split-system air conditioners, rooftop package units, and gas forced-air furnaces",
    seasonalSummary: "Extreme desert summer cooling loads followed by chilly desert nights from November through February",
    commonBreakdowns: [
      "Failed AC dual-run capacitors, burnt contactors, and compressor thermal lockouts in 110-degree heat",
      "Desert sand and fine dust coating condenser coils and furnace blower wheels",
      "Dry, dusty gas furnace burners failing to light when switched to heat in late fall"
    ],
    winterPrepNote: "After months of 105-degree cooling in Nevada, your air handler blower and furnace burners are coated in fine desert dust. Cleaning them in autumn ensures smooth winter heating."
  },
  NH: {
    region: "New England",
    climateZone: "Humid Continental",
    winterLow: "Single digits to teens",
    summerHigh: "80s",
    primaryHeatFuel: "Natural gas, propane, and heating oil",
    commonEquipment: "High-efficiency forced-air furnaces and central air conditioning split systems",
    seasonalSummary: "Deep New England winter freezes with heavy snow and warm July and August afternoons",
    commonBreakdowns: [
      "Iced-over PVC furnace vent terminations and clogged condensate traps in sub-zero weather",
      "Sooted burners and cracked heat exchangers on older basement furnaces",
      "Worn blower motors and bad run capacitors during peak seasonal use"
    ],
    winterPrepNote: "New Hampshire winters demand dependable heat from October through April. Have your furnace burners and heat exchanger inspected before the first freeze."
  },
  NJ: {
    region: "Mid-Atlantic",
    climateZone: "Humid Continental and Coastal Subtropical",
    winterLow: "Teens to 20s",
    summerHigh: "80s to low 90s",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Central forced-air gas furnaces and split-system central air conditioners",
    seasonalSummary: "Cold, damp winters and humid summers with salt air along the Jersey Shore",
    commonBreakdowns: [
      "Salt-air corrosion on outdoor AC condenser coils and electrical disconnects near the shore",
      "Dirty flame sensors and failed hot surface ignitors on gas furnaces in October and November",
      "Clogged condensate drain lines and frozen evaporator coils during summer heatwaves"
    ],
    winterPrepNote: "Whether you are in North Jersey or near the shore, testing and cleaning your gas furnace in October prevents no-heat emergencies when winter storms hit."
  },
  NM: {
    region: "Southwest",
    climateZone: "Arid Steppe and High Mountain",
    winterLow: "Teens to 20s in high desert and mountains",
    summerHigh: "90s to over 100 degrees in southern valleys",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "High-altitude gas forced-air furnaces and central split-system air conditioners",
    seasonalSummary: "Sunny, dusty summers and surprisingly cold high-elevation winter nights",
    commonBreakdowns: [
      "Windblown dust fouling gas furnace burners, flame sensors, and outdoor AC coils",
      "Improper burner combustion on high-elevation gas furnaces that need orifice calibration",
      "Weak run capacitors and overheated condenser fan motors in summer"
    ],
    winterPrepNote: "High-desert temperatures drop below freezing quickly after sunset in autumn. Cleaning dust out of your furnace cabinet early keeps winter heating reliable."
  },
  NY: {
    region: "Northeast",
    climateZone: "Humid Continental",
    winterLow: "Single digits upstate to 20s downstate",
    summerHigh: "80s to low 90s",
    primaryHeatFuel: "Natural gas and heating oil",
    commonEquipment: "Forced-air gas furnaces and central air conditioning split systems",
    seasonalSummary: "Heavy lake-effect snow and deep freezes upstate paired with cold, windy winters downstate and humid summers",
    commonBreakdowns: [
      "Ignition lockouts, cracked ignitors, and dirty flame sensors during the first autumn cold snap",
      "Blocked high-efficiency furnace vents from snow and ice accumulation",
      "Cracked heat exchangers and worn blower assemblies in older residential furnaces"
    ],
    winterPrepNote: "Across New York State, heating season begins in October. A professional furnace cleaning and combustion check stops preventable winter breakdowns."
  },
  NC: {
    region: "Southeast",
    climateZone: "Humid Subtropical to Appalachian Mountain",
    winterLow: "20s in the mountains to 30s in the Piedmont and coast",
    summerHigh: "80s to 90s with high humidity",
    primaryHeatFuel: "Natural gas and central electric heat",
    commonEquipment: "Central forced-air gas furnaces and split-system central air conditioners",
    seasonalSummary: "Hot, humid summers across the Piedmont and coast with freezing winter nights statewide",
    commonBreakdowns: [
      "Plugged condensate drains and tripped float switches in attic and crawl-space air handlers",
      "Oxidized flame sensors and spider webs blocking gas furnace burner orifices after summer",
      "Failed AC capacitors and corroded outdoor coils near the coast"
    ],
    winterPrepNote: "Crawl-space and attic furnaces in North Carolina sit in humid air all summer. Cleaning the burners and testing ignition in October ensures trouble-free winter heat."
  },
  ND: {
    region: "Upper Midwest / Northern Plains",
    climateZone: "Continental Cold",
    winterLow: "Below zero",
    summerHigh: "80s",
    primaryHeatFuel: "Natural gas and propane",
    commonEquipment: "High-output condensing gas furnaces and central air conditioning units",
    seasonalSummary: "Severe sub-zero plains winters where uninterrupted central heating is critical",
    commonBreakdowns: [
      "Frozen furnace intake and exhaust pipes during blizzard winds",
      "Blower motor fatigue and cracked heat exchangers from extreme winter runtime",
      "Failed ignitors and gas valve solenoids during sub-zero nights"
    ],
    winterPrepNote: "North Dakota winter freezes start early and hit hard. Inspecting and cleaning your furnace before winter is essential for household safety."
  },
  OH: {
    region: "Midwest",
    climateZone: "Humid Continental",
    winterLow: "Teens to low 20s",
    summerHigh: "80s to low 90s",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Forced-air natural gas furnaces and central split-system air conditioners",
    seasonalSummary: "Cold, gray Great Lakes and Ohio Valley winters requiring five months of dependable gas heat",
    commonBreakdowns: [
      "Dirty flame sensors and cracked silicon nitride ignitors on gas furnaces",
      "Noisy draft inducer motors and clogged condensate traps on high-efficiency furnaces",
      "Frozen AC evaporator coils and weak capacitors during muggy July weather"
    ],
    winterPrepNote: "Ohio homeowners depend on natural gas furnaces from October through April. A fall furnace cleaning and safety check catches weak parts before freezing weather arrives."
  },
  OK: {
    region: "South Central / Plains",
    climateZone: "Humid Subtropical and Continental Steppe",
    winterLow: "20s to low 30s",
    summerHigh: "95 to over 100 degrees",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Central split-system air conditioners and forced-air gas furnaces",
    seasonalSummary: "Triple-digit summer heatwaves and sudden winter ice storms and cold fronts",
    commonBreakdowns: [
      "Blown AC compressor capacitors and overheated condenser fan motors in 100-degree heat",
      "Red dirt and dust clogging outdoor condenser fins and indoor blower wheels",
      "Furnace pressure switch and ignition failures during windy winter ice storms"
    ],
    winterPrepNote: "Oklahoma cold fronts can drop temperatures from 70 to 25 degrees overnight. Make sure your gas furnace is cleaned and ready before the first freeze."
  },
  OR: {
    region: "Pacific Northwest",
    climateZone: "Marine West Coast and High Desert",
    winterLow: "30s in western valleys, teens east of the Cascades",
    summerHigh: "80s to 90s",
    primaryHeatFuel: "Natural gas and electric central heating",
    commonEquipment: "High-efficiency forced-air gas furnaces and central split-system air conditioners",
    seasonalSummary: "Cool, wet winters west of the Cascades and freezing high-desert winters in eastern Oregon",
    commonBreakdowns: [
      "Damp air corroding furnace flame sensors, burner crossovers, and electrical terminals",
      "Wildfire smoke and pollen loading up furnace filters and indoor evaporator coils",
      "Clogged condensate drains on condensing gas furnaces during rainy winter months"
    ],
    winterPrepNote: "Cool, damp Pacific Northwest weather runs furnaces steadily from October through May. Cleaning burners and checking venting in autumn prevents mid-winter lockouts."
  },
  PA: {
    region: "Northeast / Mid-Atlantic",
    climateZone: "Humid Continental",
    winterLow: "Teens to 20s",
    summerHigh: "80s to low 90s",
    primaryHeatFuel: "Natural gas and heating oil",
    commonEquipment: "Forced-air gas furnaces and central split-system air conditioners",
    seasonalSummary: "Cold mountain and valley winters with heavy heating demand and warm, humid summers",
    commonBreakdowns: [
      "Sooted burners, fouled flame sensors, and failed ignitors when furnaces start up in October",
      "Cracked heat exchangers and worn draft inducer assemblies on older basement furnaces",
      "Clogged AC drain lines and failed run capacitors during humid summer peaks"
    ],
    winterPrepNote: "Across Pennsylvania, October is peak furnace preparation month. Cleaning your burners and checking heat exchanger safety now avoids emergency winter breakdowns."
  },
  RI: {
    region: "New England",
    climateZone: "Humid Continental and Maritime",
    winterLow: "Teens to 20s",
    summerHigh: "80s with ocean humidity",
    primaryHeatFuel: "Natural gas and heating oil",
    commonEquipment: "Central forced-air gas furnaces and split-system air conditioners",
    seasonalSummary: "Cold coastal winters with freezing bay winds and humid summer months",
    commonBreakdowns: [
      "Salt-air corrosion on outdoor AC condenser units and electrical disconnects",
      "Clogged condensate traps and ignition failures on basement gas furnaces",
      "Worn blower motors and dirty indoor coils reducing airflow"
    ],
    winterPrepNote: "Coastal moisture and cold New England winters are tough on heating gear. Have your furnace cleaned and tested before November."
  },
  SC: {
    region: "Southeast",
    climateZone: "Humid Subtropical",
    winterLow: "30s to low 40s",
    summerHigh: "90s with heavy coastal and inland humidity",
    primaryHeatFuel: "Natural gas and central electric heat",
    commonEquipment: "Central split-system air conditioners and forced-air gas or electric furnaces",
    seasonalSummary: "Long, hot cooling seasons with high humidity and frosty winter nights from December through February",
    commonBreakdowns: [
      "Algae-blocked AC condensate drains and water safety switch trips in summer",
      "Salt corrosion on coastal outdoor AC condensers and electrical contactors",
      "Rusted furnace burners and dirty flame sensors failing during the first winter freeze"
    ],
    winterPrepNote: "High summer humidity in South Carolina often leaves rust on gas furnace burners and flame rods. A fall furnace cleaning ensures dependable heat when winter arrives."
  },
  SD: {
    region: "Upper Midwest / Plains",
    climateZone: "Continental",
    winterLow: "Single digits to below zero",
    summerHigh: "80s to 90s",
    primaryHeatFuel: "Natural gas and propane",
    commonEquipment: "High-efficiency forced-air gas furnaces and central air conditioning units",
    seasonalSummary: "Frigid, windy plains winters and hot summer stretches",
    commonBreakdowns: [
      "Snow and frost blocking exterior PVC furnace intake and exhaust pipes",
      "Cracked heat exchangers and worn blower bearings from heavy winter duty",
      "Failed hot surface ignitors and pressure switch lockouts during plains blizzards"
    ],
    winterPrepNote: "With sub-zero wind chills common across South Dakota, an autumn furnace inspection and burner cleaning is essential before winter hits."
  },
  TN: {
    region: "South Central",
    climateZone: "Humid Subtropical",
    winterLow: "20s to low 30s",
    summerHigh: "90s with valley humidity",
    primaryHeatFuel: "Natural gas and central electric heat",
    commonEquipment: "Central forced-air gas furnaces and split-system central air conditioners",
    seasonalSummary: "Hot, humid summers and freezing winter nights across West, Middle, and East Tennessee",
    commonBreakdowns: [
      "Dirty flame sensors and weak ignitors causing gas furnaces to short-cycle in late fall",
      "Clogged AC condensate drains and frozen evaporator coils in July and August",
      "Worn blower capacitors and dusty indoor coils in crawl-space and attic units"
    ],
    winterPrepNote: "Tennessee winter temperatures drop below freezing regularly starting in November. Cleaning and testing your central furnace in October keeps your home warm."
  },
  TX: {
    region: "South Central / Southwest",
    climateZone: "Subtropical Humid to Semi-Arid Steppe",
    winterLow: "20s in North Texas and Panhandle to 40s in South Texas",
    summerHigh: "95 to over 105 degrees",
    primaryHeatFuel: "Natural gas and central electric heat",
    commonEquipment: "High-SEER2 central split-system air conditioners and forced-air gas or electric furnaces",
    seasonalSummary: "Months of 100-degree summer cooling loads followed by sudden winter blue northers and hard freezes",
    commonBreakdowns: [
      "Failed AC dual-run capacitors, burnt compressor terminals, and dirty condenser coils from marathon summer cooling",
      "Clogged attic AC condensate drain pans and float switch shutoffs",
      "Attic gas furnaces failing to ignite during sudden winter freezes due to dusty burners or bad ignitors"
    ],
    winterPrepNote: "Texas winter cold fronts hit fast and drop temperatures below freezing overnight. Testing and cleaning your furnace in autumn ensures you are never caught without heat during a winter freeze."
  },
  UT: {
    region: "Mountain West",
    climateZone: "Semi-Arid High Desert and Alpine",
    winterLow: "Teens to 20s along the Wasatch Front, single digits in mountain valleys",
    summerHigh: "90s to over 100 degrees",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "High-altitude calibrated gas forced-air furnaces and central split-system air conditioners",
    seasonalSummary: "Cold, snowy winters with valley temperature inversions and hot, dry summers",
    commonBreakdowns: [
      "Sooted burners and improper air-fuel mix on gas furnaces not calibrated for Utah elevation",
      "Failed draft inducer motors and cracked heat exchangers from long winter heating seasons",
      "Dust-packed outdoor AC condenser coils and weak capacitors in July and August"
    ],
    winterPrepNote: "Wasatch Front and mountain winters start early. Have your gas furnace burners, venting, and heat exchanger inspected before freezing weather arrives."
  },
  VT: {
    region: "New England",
    climateZone: "Humid Continental Cold",
    winterLow: "Single digits to teens",
    summerHigh: "70s to low 80s",
    primaryHeatFuel: "Natural gas, propane, and heating oil",
    commonEquipment: "High-efficiency forced-air furnaces and central air conditioning systems",
    seasonalSummary: "Long, snowy mountain winters requiring six months of dependable central heat",
    commonBreakdowns: [
      "Iced furnace exhaust terminations and frozen condensate drain lines",
      "Soot accumulation and cracked heat exchangers on overworked furnaces",
      "Failed ignitors and draft inducer motors during sub-zero January nights"
    ],
    winterPrepNote: "Vermont heating systems run from September through May. Annual pre-winter furnace cleaning and safety testing is a must."
  },
  VA: {
    region: "Mid-Atlantic",
    climateZone: "Humid Subtropical and Mountain Continental",
    winterLow: "20s in the Shenandoah and Piedmont to 30s near the coast",
    summerHigh: "80s to low 90s with high humidity",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Central forced-air gas furnaces and split-system central air conditioners",
    seasonalSummary: "Warm, muggy summers and freezing winter nights from Northern Virginia to Tidewater and the Blue Ridge",
    commonBreakdowns: [
      "Oxidized flame sensors and weak hot surface ignitors when switching to heat in autumn",
      "Clogged AC condensate lines and frozen indoor coils during humid summer months",
      "Salt-air corrosion on outdoor AC condensers in coastal Hampton Roads communities"
    ],
    winterPrepNote: "Scheduling a furnace cleaning and safety inspection in October keeps your Virginia home ready for winter freezes."
  },
  WA: {
    region: "Pacific Northwest",
    climateZone: "Marine West Coast and Continental East",
    winterLow: "30s around Puget Sound, teens to 20s in Eastern Washington",
    summerHigh: "70s to 80s in the west, 90s in the east",
    primaryHeatFuel: "Natural gas and electric central heating",
    commonEquipment: "High-efficiency forced-air gas furnaces and central split-system air conditioners",
    seasonalSummary: "Damp, chilly winters in Western Washington and snowy, freezing winters east of the Cascades",
    commonBreakdowns: [
      "Moisture corrosion on furnace flame sensors, ignitors, and burner manifolds",
      "Blocked condensate drains and algae buildup on 90%+ AFUE condensing gas furnaces",
      "Summer wildfire smoke and pine needles restricting airflow across coils and filters"
    ],
    winterPrepNote: "Damp autumn weather in Washington puts steady demand on central furnaces. Cleaning the burner assembly and condensate trap early stops winter lockouts."
  },
  WV: {
    region: "Appalachian / Mid-Atlantic",
    climateZone: "Humid Continental",
    winterLow: "Teens to 20s",
    summerHigh: "80s",
    primaryHeatFuel: "Natural gas",
    commonEquipment: "Forced-air gas furnaces and central split-system air conditioners",
    seasonalSummary: "Cold mountain winters with frequent snow and damp valley summers",
    commonBreakdowns: [
      "Rusted furnace burners and fouled flame sensors in damp basements and crawl spaces",
      "Cracked heat exchangers and worn blower motors on older gas furnaces",
      "Blocked flue vents and pressure switch failures during mountain winter storms"
    ],
    winterPrepNote: "Mountain cold sets in early across West Virginia. Have your gas furnace cleaned and safety-tested before November."
  },
  WI: {
    region: "Upper Midwest / Great Lakes",
    climateZone: "Humid Continental Cold",
    winterLow: "Single digits to teens with sub-zero wind chills",
    summerHigh: "80s",
    primaryHeatFuel: "Natural gas and propane",
    commonEquipment: "High-efficiency condensing gas furnaces and central split-system air conditioners",
    seasonalSummary: "Long, freezing Great Lakes winters that push residential furnaces for six straight months",
    commonBreakdowns: [
      "Frost and ice blocking exterior PVC furnace intake and exhaust pipes",
      "Cracked heat exchangers, worn inducer motors, and failed ignitors from heavy winter runtime",
      "Dirty outdoor AC condenser coils and failed capacitors during humid summer weeks"
    ],
    winterPrepNote: "In Wisconsin, heating season runs from October into May. A complete furnace cleaning and heat exchanger check before winter prevents dangerous mid-winter outages."
  },
  WY: {
    region: "Mountain West",
    climateZone: "High-Altitude Semi-Arid and Alpine",
    winterLow: "Single digits to teens",
    summerHigh: "80s to low 90s",
    primaryHeatFuel: "Natural gas and propane",
    commonEquipment: "High-altitude calibrated forced-air gas furnaces and central air conditioning units",
    seasonalSummary: "High winds, early autumn snows, and long sub-freezing winters at high elevation",
    commonBreakdowns: [
      "High winds triggering furnace pressure switch lockouts and draft issues",
      "Soot buildup on burners not properly adjusted for high altitude",
      "Cracked heat exchangers and blower bearing wear from seven-month heating seasons"
    ],
    winterPrepNote: "Wyoming winter weather arrives by October. Checking burner calibration, venting, and heat exchanger integrity early keeps your heating running safely."
  }
};
