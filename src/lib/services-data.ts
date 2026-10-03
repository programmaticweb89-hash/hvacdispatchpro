export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  category: "Heating" | "Cooling";
  heroTagline: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  introParagraphs: string[];
  whatItIs: string[];
  problemsSolved: string[];
  benefits: string[];
  whenToCall: string[];
  processSteps: { title: string; detail: string }[];
  includedChecklist: string[];
  serviceOptions: { option: string; description: string; bestFor: string }[];
  commonFaults: { part: string; symptom: string; fix: string }[];
  pricingNotes: string[];
  equipmentNote: string;
  relatedSlugs: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "furnace-repair",
    name: "Furnace Repair",
    shortName: "Furnace Repair",
    category: "Heating",
    heroTagline: "Same-day central furnace diagnostics and repair when your heat quits.",
    shortDescription:
      "Fast troubleshooting and part replacement for gas, electric, and propane forced-air central furnaces that blow cold air, short-cycle, or fail to ignite.",
    metaTitle: "24/7 Furnace Repair Near You | Central Heating Technicians",
    metaDescription:
      "No heat from your central furnace? Call (855) 734-0279 for 24/7 furnace repair. Licensed technicians fix ignitors, flame sensors, blowers, gas valves, and limit switches.",
    introParagraphs: [
      "A central furnace almost always fails on the coldest night of the season. When the indoor temperature starts dropping and the vents are blowing cold air or nothing at all, you need a technician who carries the right diagnostic meters and replacement parts on the truck.",
      "Our local furnace repair teams work on residential forced-air natural gas, propane, and central electric furnaces. Whether your system is locked out on a safety code, short-cycling every three minutes, or making a loud grinding sound from the blower cabinet, we test the entire heating sequence and give you a clear, upfront repair price before any work starts."
    ],
    whatItIs: [
      "Furnace repair is a structured mechanical and electrical diagnostic service for ducted central heating equipment. Modern forced-air furnaces run a strict safety sequence before they ever allow gas to flow or heat to enter your ductwork: thermostat call, draft inducer startup, pressure switch verification, hot surface ignition, gas valve opening, flame rectification sensing, and main blower engagement.",
      "When even one component in that chain drifts out of spec, the integrated furnace control board shuts the burner down to protect the home. Our technicians do not guess or swap parts blindly. We measure microamps on the flame rod, test pressure switch water-column ratings with a manometer, check capacitor microfarads, and inspect the heat exchanger so the actual root cause gets fixed on the first visit."
    ],
    problemsSolved: [
      "Furnace blower fan runs continuously but only cold air comes out of the supply registers",
      "Burners light for two to five seconds and immediately shut back off (flame sensor lockout)",
      "Furnace turns on and off every few minutes without reaching the thermostat setting (short-cycling)",
      "Clicking or humming from the furnace cabinet with no burner ignition",
      "High-pitched squealing, rattling, or metal grinding from the draft inducer or main blower wheel",
      "Electronic control board flashing error codes through the lower inspection window",
      "Burning dust odor, electrical smell, or tripped circuit breaker when heating starts",
      "Uneven heating where distant bedrooms stay freezing while the hallway warms up"
    ],
    benefits: [
      "Restores safe, steady central heat the same day without the cost of replacing the entire unit",
      "Verifies heat exchanger integrity and carbon monoxide safety before the furnace is left running",
      "Stops minor electrical wear from burning out expensive blower motors or control boards",
      "Reduces wasted natural gas or electricity caused by short-cycling and restricted airflow",
      "Clear flat-rate quote presented in writing before any repair work begins"
    ],
    whenToCall: [
      "Call immediately if your indoor temperature drops below 60 degrees during freezing weather, as stagnant water lines in exterior walls can freeze and burst.",
      "Book a repair visit as soon as you notice the furnace taking multiple attempts to light, cycling more frequently than normal, or making new mechanical noises during startup.",
      "Safety reminder: If you ever smell raw natural gas or rotten eggs, or if your carbon monoxide alarm sounds, shut the system off, leave the house right away, and call 911 or your gas utility first. Once the utility clears the line, call us to repair the furnace."
    ],
    processSteps: [
      {
        title: "Call Our 24/7 Dispatch Desk",
        detail: "Call (855) 734-0279 with your zip code and tell us what your central furnace is doing. We confirm coverage and schedule a licensed technician for your home."
      },
      {
        title: "Full Ignition and Airflow Diagnostic",
        detail: "The technician checks thermostat signals, reads control board fault codes, tests the ignitor, flame sensor, pressure switches, gas valve, and blower assembly."
      },
      {
        title: "Upfront Written Repair Quote",
        detail: "Before turning a wrench, the tech shows you which component failed and gives you a straightforward price for the repair."
      },
      {
        title: "Part Replacement and Safety Test",
        detail: "Once approved, the faulty part is replaced, gas manifold pressure and temperature rise are verified, and the system is tested through a complete heating cycle."
      }
    ],
    includedChecklist: [
      "Complete ignition sequence and safety circuit diagnostic",
      "Heat exchanger visual and combustion safety check",
      "Flame sensor microamp reading and surface cleaning",
      "Hot surface ignitor resistance test",
      "Draft inducer motor and pressure switch tube inspection",
      "Gas valve manifold pressure and electrical solenoid test",
      "Blower motor amperage draw and run capacitor test",
      "High-limit switch and flame rollout safety verification",
      "Thermostat wiring and heat anticipation check"
    ],
    serviceOptions: [
      {
        option: "Standard Same-Day Furnace Repair",
        description: "Scheduled diagnostic and repair during regular service hours using stocked truck parts.",
        bestFor: "Furnaces that are short-cycling, noisy, or struggling to keep up in mild to cool weather."
      },
      {
        option: "24/7 Emergency No-Heat Dispatch",
        description: "Priority dispatch for nights, weekends, and freezing weather when the furnace is completely down.",
        bestFor: "Complete heating loss during sub-freezing weather, snowstorms, or homes with young children and seniors."
      },
      {
        option: "Side-by-Side Repair vs. Replacement Evaluation",
        description: "Exact pricing for repairing the current fault compared against installing a new high-efficiency furnace.",
        bestFor: "Central furnaces over 15 years old facing a major motor, board, or heat exchanger failure."
      }
    ],
    commonFaults: [
      {
        part: "Oxidized Flame Sensor Rod",
        symptom: "Burners ignite with a whoosh, stay lit for 3 seconds, and shut off repeatedly.",
        fix: "Clean carbon silicate buildup from the sensor rod or install a new flame sensor and verify microamp signal."
      },
      {
        part: "Cracked Hot Surface Ignitor",
        symptom: "Inducer fan runs, clicks, no orange glow appears, and no gas ignites.",
        fix: "Replace the brittle silicon carbide or silicon nitride ignitor and verify voltage from the board."
      },
      {
        part: "Failed Blower Run Capacitor or Motor",
        symptom: "Burners light, cabinet gets very hot, high-limit switch trips, and no air blows from vents.",
        fix: "Replace the weak dual/single run capacitor or install a replacement multi-speed blower motor."
      },
      {
        part: "Blocked Pressure Switch or Inducer Port",
        symptom: "Small exhaust fan spins at the top of the furnace, but the system locks out on a pressure code.",
        fix: "Clear condensate trap, flush pressure switch tubing, clear the inducer port, or replace a stuck diaphragm switch."
      },
      {
        part: "Tripped High-Limit or Rollout Switch",
        symptom: "Blower fan runs non-stop and burners refuse to fire.",
        fix: "Restore restricted return airflow, replace clogged filter, inspect heat exchanger, and replace weak limit switch."
      }
    ],
    pricingNotes: [
      "Furnace repair costs depend on which part failed, whether the unit is a standard 80% AFUE furnace or a 95%+ condensing model, and whether OEM or universal parts are used.",
      "Common wearable parts like flame sensors, run capacitors, ignitors, and pressure switches sit at the lower end of the repair scale and are usually completed in under an hour.",
      "Major assemblies such as variable-speed ECM blower motors, integrated ignition control boards, gas valves, and draft inducer blowers cost more in parts and labor.",
      "Your technician always checks active manufacturer parts warranty coverage using your unit's serial number and gives you an exact quote before starting."
    ],
    equipmentNote:
      "We repair residential ducted central furnaces (natural gas, propane, and central electric forced-air systems). We do not service portable space heaters, window units, or ductless mini-split equipment.",
    relatedSlugs: ["furnace-cleaning", "furnace-replacement", "air-conditioning-repair"],
    faqs: [
      {
        q: "Why is my furnace blowing cold air when set to heat?",
        a: "The two most common causes are a dirty flame sensor that shuts the burners off right after startup, or an overheated furnace where the high-limit safety switch turns the burners off while keeping the blower fan running to cool down the cabinet."
      },
      {
        q: "Is it worth repairing a 14-year-old gas furnace?",
        a: "If the heat exchanger is intact and the failure is a minor wear item like an ignitor, capacitor, or flame sensor, repairing it usually makes financial sense. If the heat exchanger is cracked or both the blower and control board have failed, furnace replacement is the safer long-term move."
      },
      {
        q: "How fast can a technician get to my house for a no-heat call?",
        a: "We operate a 24/7 dispatch line. When you call (855) 734-0279 and provide your zip code, we check open truck schedules in your area for same-day or emergency service."
      },
      {
        q: "Do you work on ductless mini-splits?",
        a: "No. Our technicians specialize strictly in central ducted furnaces and central air conditioning systems. We do not repair ductless mini-splits or window units."
      }
    ]
  },
  {
    slug: "furnace-replacement",
    name: "Furnace Replacement",
    shortName: "Furnace Replacement",
    category: "Heating",
    heroTagline: "Properly sized central furnace replacement and new heating installation.",
    shortDescription:
      "Complete removal of old or unsafe furnaces and professional installation of new 80% to 98% AFUE central gas and electric forced-air heating systems.",
    metaTitle: "Central Furnace Replacement & Installation | Upfront Quotes",
    metaDescription:
      "Need a new central furnace? Call (855) 734-0279 for furnace replacement. Proper BTU load sizing, safe gas and flue hookups, and high-efficiency 80% to 98% AFUE installs.",
    introParagraphs: [
      "When a central furnace reaches 15 to 20 years of service, develops a cracked heat exchanger, or starts needing expensive motor and board repairs every winter, putting more money into the old cabinet stops making sense. A properly sized furnace replacement eliminates surprise winter breakdowns and cuts monthly heating bills right away.",
      "Our installation teams handle complete residential central furnace replacements across the country. We calculate the true heating load of your home, match the new furnace to your existing ductwork and central air conditioning coil, bring gas piping and flue venting up to current code, and test static pressure and temperature rise before we leave."
    ],
    whatItIs: [
      "Furnace replacement is the complete change-out of an aging, inefficient, or red-tagged central forced-air furnace with a new, code-compliant heating unit. Unlike a quick part swap, a replacement involves mechanical sheet-metal transition work, gas line sediment trap verification, electrical wiring, flue exhaust engineering, and airflow commissioning.",
      "Installing a furnace with the exact same BTU rating as your 20-year-old unit is often a mistake. Older furnaces were frequently oversized by 30 to 50 percent, causing loud airflow, short-cycling, and hot-and-cold rooms. We verify square footage, insulation levels, window area, and duct capacity so your new furnace runs smooth, quiet cycles."
    ],
    problemsSolved: [
      "Red-tagged or shut-down furnace due to a cracked heat exchanger or carbon monoxide leak risk",
      "Furnace is 15 to 25 years old with discontinued parts or a rusted-out burner and blower cabinet",
      "Skyrocketing winter gas or electric bills caused by an old 65% to 75% AFUE unit",
      "Rooms on the second floor or far end of the house that never get warm enough",
      "Loud booming ignition noises and whistling return ducts from an oversized old furnace",
      "Repeated repair bills that exceed half the value of a brand-new heating system"
    ],
    benefits: [
      "Full manufacturer parts warranty (typically 10 years registered) and fresh labor protection",
      "Lower monthly winter utility bills when upgrading from an older unit to an 80% or 95%+ AFUE furnace",
      "Quieter operation and steadier room-to-room temperatures with two-stage or variable-speed blowers",
      "Peace of mind during sub-freezing winter nights with brand-new ignition, safety limits, and heat exchanger",
      "Improved summer cooling airflow because the furnace blower also circulates air for your central AC"
    ],
    whenToCall: [
      "Call immediately if a technician or utility inspector has shut off your furnace due to a cracked heat exchanger or unsafe combustion readings.",
      "Schedule an estimate in early autumn (October or November) if your furnace is over 15 years old and struggled through last winter, so you do not have to rush a replacement during a January blizzard.",
      "Consider combined replacement if you are already replacing a 15-year-old central air conditioner, since matching the furnace blower and indoor coil at the same time saves labor and improves efficiency."
    ],
    processSteps: [
      {
        title: "Call for a Heating Replacement Consultation",
        detail: "Call (855) 734-0279 and provide your zip code. We schedule an on-site evaluation of your current furnace, ductwork, venting, and gas or electric supply."
      },
      {
        title: "Heat Load Calculation and Equipment Options",
        detail: "We compare single-stage, two-stage, and variable-speed furnaces in both 80% AFUE (metal flue) and 95%+ AFUE (PVC condensing) configurations with transparent pricing."
      },
      {
        title: "Old Unit Removal and Code-Compliant Install",
        detail: "Our crew disconnects and hauls away the old furnace, fabricates sheet-metal plenum transitions, connects gas with a proper drip leg, installs venting, and wires the thermostat."
      },
      {
        title: "Combustion, Gas Pressure, and Airflow Commissioning",
        detail: "We dial in the gas manifold pressure, measure supply-to-return temperature rise, check static duct pressure, and walk you through your new system and warranty."
      }
    ],
    includedChecklist: [
      "Safe disconnection, removal, and disposal of the old central furnace",
      "BTU heating load and indoor airflow sizing check",
      "Sheet-metal supply and return plenum transition sealing",
      "Code-compliant gas shutoff valve, flex connector, and sediment trap check",
      "Flue exhaust venting (B-vent metal or two-pipe PVC for condensing units)",
      "Condensate drain line and neutralizer/pump setup (for 90%+ AFUE models)",
      "High-voltage electrical connection, service switch, and thermostat wiring",
      "Full startup commissioning: gas pressure, temperature rise, and CO test"
    ],
    serviceOptions: [
      {
        option: "80% AFUE Standard-Efficiency Gas Furnace",
        description: "Uses existing metal chimney/B-vent flue without needing new PVC wall venting or condensate drains.",
        bestFor: "Mild to moderate climates, tight utility closets, or straightforward budget-friendly replacements."
      },
      {
        option: "95% to 98% AFUE High-Efficiency Condensing Furnace",
        description: "Uses a secondary heat exchanger and sealed PVC venting to convert almost every dollar of gas into heat.",
        bestFor: "Cold states with long winters where natural gas savings quickly pay back the upgrade."
      },
      {
        option: "Two-Stage or Variable-Speed Comfort System",
        description: "Runs at low capacity 80% of the time for quiet, even heat and steps up to 100% only on the coldest nights.",
        bestFor: "Two-story homes, houses with uneven room temperatures, and homeowners wanting quiet airflow."
      }
    ],
    commonFaults: [
      {
        part: "Cracked Primary Heat Exchanger",
        symptom: "Flame rollout, fluttering burner flames when the blower starts, or carbon monoxide traces.",
        fix: "Full furnace replacement (or heat exchanger swap if under factory warranty)."
      },
      {
        part: "Rusted Secondary Condensing Coil",
        symptom: "Water leaking inside the blower compartment, foul exhaust odor, and pressure switch lockouts.",
        fix: "Replace the aging condensing furnace and pitch the new condensate drain line properly."
      },
      {
        part: "Obsolete Control and Motor Assembly",
        symptom: "Multiple expensive failures on an R-22 era furnace where replacement parts exceed half the price of a new unit.",
        fix: "Upgrade to a modern ECM-equipped central furnace with a 10-year factory warranty."
      }
    ],
    pricingNotes: [
      "Total furnace replacement cost depends on BTU capacity (typically 40,000 to 120,000 BTU), efficiency rating (80% vs. 96% AFUE), blower type (single-stage vs. variable-speed), and installation access (basement vs. tight attic or crawl space).",
      "Switching from an 80% furnace to a 95%+ condensing furnace requires running PVC intake and exhaust pipes to an exterior wall and routing a condensate drain, which adds a modest one-time installation step.",
      "Every quote is provided in writing upfront after inspecting your setup, with no hidden add-ons on installation day."
    ],
    equipmentNote:
      "We install ducted central gas, propane, and electric forced-air furnaces. We do not install ductless mini-splits or window units.",
    relatedSlugs: ["furnace-repair", "furnace-cleaning", "ac-replacement"],
    faqs: [
      {
        q: "How long does a central furnace replacement take?",
        a: "Most standard basement, closet, or garage furnace replacements are completed in 4 to 8 hours on a single day, so your heat is back on the same evening."
      },
      {
        q: "Should I choose an 80% AFUE or 96% AFUE gas furnace?",
        a: "In northern and mountain states with long, freezing winters, a 95% to 96% AFUE furnace saves substantial money on gas every winter. In milder southern states or apartments where running new PVC vent pipes through exterior walls is impractical, an 80% AFUE furnace is often the cleanest fit."
      },
      {
        q: "Do I have to replace my central AC at the same time as my furnace?",
        a: "No, you can replace just the furnace if your central air conditioner is still in good shape. However, if both units are over 14 years old, replacing them together saves on overlapping labor and guarantees a matched blower and indoor coil."
      }
    ]
  },
  {
    slug: "furnace-cleaning",
    name: "Furnace Cleaning",
    shortName: "Furnace Cleaning",
    category: "Heating",
    heroTagline: "Pre-winter furnace cleaning, burner tune-up, and combustion safety check.",
    shortDescription:
      "Thorough cleaning of gas burners, flame sensors, blower wheels, condensate traps, and heat exchangers to prevent winter no-heat lockouts.",
    metaTitle: "Professional Furnace Cleaning & Pre-Winter Tune-Up",
    metaDescription:
      "Get your central furnace ready for winter. Call (855) 734-0279 for professional furnace cleaning: burner brushing, flame sensor polishing, blower cleaning, and CO check.",
    introParagraphs: [
      "Over eighty percent of early-winter no-heat emergency calls happen because dust, rust scale, or carbon buildup accumulated inside the furnace while it sat idle all summer. When you flip the thermostat to heat in October or November, a fouled flame rod, clogged condensate trap, or dusty blower wheel can shut the whole heating system down.",
      "Our professional furnace cleaning service goes far beyond sliding in a new air filter. A licensed technician opens the burner and blower compartments, brushes carbon scale off the gas burners, polishes the flame rectification rod, cleans the squirrel-cage blower wheel, flushes the condensate trap, and tests for safe combustion and zero carbon monoxide leakage."
    ],
    whatItIs: [
      "Furnace cleaning is a hands-on mechanical cleaning and safety calibration of your central forced-air heating unit. Every cubic foot of air that circulates through your house passes through your furnace blower wheel and across your heat exchanger. Even with a standard filter, fine dust coats the curved blades of the blower wheel, reducing airflow by up to 20 percent and forcing the heat exchanger to run hotter than designed.",
      "Inside the combustion chamber, natural gas or propane burners form microscopic carbon and oxidation deposits over time. Cleaning the burner orifices, crossover channels, and flame sensor restores a crisp blue flame and prevents nuisance ignition lockouts on freezing nights."
    ],
    problemsSolved: [
      "Strong burnt-dust smell filling the house the first time you turn the heat on in autumn",
      "Delayed burner ignition that makes a loud mini-boom or rumble when the gas finally lights",
      "Yellow or flickering orange burner flames instead of a clean, steady blue flame",
      "Weak airflow coming out of bedroom and living room floor or ceiling registers",
      "Short-cycling caused by a dusty flame sensor or restricted return air path",
      "Backed-up water leaking from a high-efficiency condensing furnace drain trap"
    ],
    benefits: [
      "Prevents avoidable midnight no-heat breakdowns during the first winter freeze",
      "Restores full CFM airflow by removing caked dust from the blower wheel and motor housing",
      "Verifies safe operation with a heat exchanger inspection and carbon monoxide test",
      "Lowers monthly winter heating bills by ensuring clean fuel combustion and heat transfer",
      "Keeps manufacturer warranty coverage valid (most brands require annual documented maintenance)"
    ],
    whenToCall: [
      "Early autumn (September through November) is the best time to schedule furnace cleaning, before winter cold snaps book up every technician's schedule.",
      "Book a cleaning right away if you just moved into a home and do not know when the central furnace was last serviced, or if you recently finished indoor remodeling that created drywall or sawdust.",
      "If your furnace ran all last winter without service, cleaning it before the next deep freeze catches weak capacitors and brittle ignitors before they strand you without heat."
    ],
    processSteps: [
      {
        title: "Book Your Furnace Cleaning Appointment",
        detail: "Call (855) 734-0279 with your zip code to schedule a convenient furnace cleaning and safety inspection."
      },
      {
        title: "Burner, Ignitor, and Flame Sensor Cleaning",
        detail: "We shut off gas and power, pull and brush the burner assembly, clean the crossover slots, polish the flame sensor rod, and test ignitor ohms."
      },
      {
        title: "Blower Compartment and Drain Trap Flush",
        detail: "We vacuum the furnace cabinet, clean dust buildup off the blower wheel and motor vents, flush the condensate trap on 90%+ units, and inspect the filter rack."
      },
      {
        title: "Live Firing, Temperature Rise, and CO Check",
        detail: "We fire the furnace, measure gas manifold pressure, verify supply air temperature rise, and test ambient carbon monoxide levels."
      }
    ],
    includedChecklist: [
      "Gas burner assembly removal, brushing, and orifice inspection",
      "Flame sensor rod cleaning and microamp signal verification",
      "Hot surface ignitor inspection and resistance reading",
      "Blower wheel, housing, and motor cooling vent cleaning",
      "High-efficiency condensate drain trap removal and flushing",
      "Heat exchanger inspection for cracks, rust, or separation",
      "Flue pipe draft and pressure switch tubing check",
      "Electrical terminal tightening and capacitor microfarad test",
      "Carbon monoxide and combustion safety test"
    ],
    serviceOptions: [
      {
        option: "Pre-Winter Furnace Cleaning & Safety Tune-Up",
        description: "Complete burner, flame sensor, drain trap, and cabinet cleaning with full combustion and safety testing.",
        bestFor: "Annual autumn readiness on any natural gas, propane, or electric central furnace."
      },
      {
        option: "Deep Blower Wheel & Evaporator Access Cleaning",
        description: "Pulling the main blower assembly to deep-clean heavily impacted fan blades and inspect the underside of the indoor coil.",
        bestFor: "Homes with pets, recent remodeling dust, or noticeably weak register airflow."
      }
    ],
    commonFaults: [
      {
        part: "Clogged Burner Crossover Channels",
        symptom: "First burner lights, but the rest of the burners delay lighting and ignite with a loud thump.",
        fix: "Brush rust and carbon scale out of the burner crossover slots so flame travels smoothly across all burners."
      },
      {
        part: "Sludge-Blocked Condensate Trap",
        symptom: "High-efficiency furnace gurgles and shuts down on a pressure switch error code.",
        fix: "Remove the internal condensate trap, flush out combustion sediment, and prime the trap with fresh water."
      },
      {
        part: "Dust-Heavy Squirrel Cage Blower Wheel",
        symptom: "Furnace runs loud, vibrates, and trips the high-limit switch from poor air movement.",
        fix: "Clean each curved blade of the blower wheel so it moves its rated cubic feet per minute of air."
      }
    ],
    pricingNotes: [
      "A standard residential furnace cleaning and safety tune-up is one of the most affordable services we offer and typically takes 60 to 90 minutes.",
      "If the technician spots a worn part during cleaning (such as a cracked ignitor or weak capacitor that is about to fail), they will show you the meter reading and give you an optional quote before replacing anything."
    ],
    equipmentNote:
      "We clean and tune residential ducted gas, propane, and electric central furnaces. We do not service ductless mini-splits or window units.",
    relatedSlugs: ["furnace-repair", "furnace-replacement", "air-conditioning-cleaning"],
    faqs: [
      {
        q: "How often should a central gas furnace be cleaned?",
        a: "Once a year, ideally in autumn before heavy winter use begins. Annual cleaning keeps the flame sensor, burners, condensate trap, and blower wheel free of buildup that causes mid-winter lockouts."
      },
      {
        q: "Does furnace cleaning include checking for carbon monoxide?",
        a: "Yes. Every furnace cleaning includes a visual heat exchanger inspection, flue venting check, and carbon monoxide testing while the system is firing."
      },
      {
        q: "Why did my furnace smell like burning when I turned it on for the first time?",
        a: "Household dust settles on the heat exchanger and electric heating elements over the summer. A brief dusty smell for 15 minutes can happen, but heavy odors, smoke, or smells that do not clear up indicate caked debris in the cabinet or an overheating blower motor that needs professional cleaning."
      }
    ]
  },
  {
    slug: "air-conditioning-repair",
    name: "Air Conditioning Repair",
    shortName: "AC Repair",
    category: "Cooling",
    heroTagline: "Fast central air conditioning repair when your cooling system breaks down.",
    shortDescription:
      "Same-day diagnostics and repair for central split-system air conditioners blowing warm air, freezing up, leaking water, or failing to start outside.",
    metaTitle: "24/7 Air Conditioning Repair Near You | Central AC Techs",
    metaDescription:
      "Central AC blowing warm air or not turning on? Call (855) 734-0279 for fast air conditioning repair. We fix capacitors, contactors, refrigerant leaks, coils, and drain lines.",
    introParagraphs: [
      "When your central air conditioner stops cooling during a hot afternoon, indoor heat and humidity climb fast. Whether the outdoor condenser fan refuses to spin, ice is building up on the copper refrigerant lines, or water is dripping from the indoor air handler pan, running a broken AC will only cause deeper damage to the compressor.",
      "Our licensed HVAC technicians troubleshoot and repair residential central split-system air conditioners and packaged cooling units. We carry dual-run capacitors, contactors, fan motors, hard-start kits, and refrigerant diagnostic gauges on our service trucks so most central AC repairs are finished in a single visit."
    ],
    whatItIs: [
      "Air conditioning repair covers the electrical, mechanical, airflow, and refrigerant-circuit diagnostics needed to restore cooling on a ducted central AC system. A split-system air conditioner relies on two halves working together: the indoor evaporator coil and blower inside your furnace or air handler, and the outdoor condensing unit containing the compressor, condenser coil, and fan.",
      "Our technicians check subcooling and superheat pressures, measure compressor and fan motor amperage, inspect low-voltage thermostat control wiring, verify indoor static airflow, and clear condensate drain safety switches so we fix the actual problem rather than just adding refrigerant and walking away."
    ],
    problemsSolved: [
      "Central AC vents are blowing warm or room-temperature air even with the thermostat set to cool",
      "Outdoor condensing unit hums loudly or clicks every few minutes without the fan or compressor starting",
      "Ice or white frost forming on the indoor evaporator coil or outdoor copper suction line",
      "Water pooling around the indoor furnace/air handler or tripping the condensate float switch",
      "Outdoor AC breaker in the main electrical panel keeps tripping whenever the compressor kicks on",
      "Loud screeching, rattling, or clanking noises coming from the outdoor condenser cabinet",
      "House feels damp, sticky, and humid even when the AC runs all afternoon"
    ],
    benefits: [
      "Restores cool, dehumidified air across your home on the same day in most cases",
      "Protects the expensive outdoor compressor from burning up due to a bad capacitor or dirty coil",
      "Stops indoor water damage from overflowing condensate pans and thawing ice blocks",
      "Cuts wasted electric utility costs caused by low refrigerant charge or slipping blower fans",
      "Upfront written repair quote before any work is performed"
    ],
    whenToCall: [
      "Shut the AC off at the thermostat and call right away if you see ice on the copper pipes or hear the outdoor unit buzzing without starting. Continuing to run a frozen or locked-rotor AC can destroy the compressor.",
      "Call as soon as you see water in your secondary drain pan or notice cooling cycles taking twice as long as usual to bring the indoor temperature down."
    ],
    processSteps: [
      {
        title: "Call Our Dispatch Line",
        detail: "Call (855) 734-0279 with your zip code and tell us what your central air conditioner is doing."
      },
      {
        title: "Complete Split-System Diagnostic",
        detail: "The technician tests outdoor electrical components, refrigerant pressures, indoor airflow, evaporator coil temperature drop, and condensate drainage."
      },
      {
        title: "Clear Written Repair Price",
        detail: "You receive a plain-English explanation of what failed and the exact cost to fix it before any work starts."
      },
      {
        title: "On-the-Spot Repair and Cooling Test",
        detail: "We install the replacement part, verify a 16 to 22 degree temperature drop across the indoor coil, and confirm steady cooling."
      }
    ],
    includedChecklist: [
      "Outdoor dual-run capacitor and start capacitor microfarad test",
      "Contactor relay and high-voltage disconnect inspection",
      "Compressor winding resistance and amp-draw test",
      "Condenser fan motor and blade balance check",
      "Refrigerant superheat and subcooling pressure check",
      "Indoor evaporator coil temperature drop and freeze check",
      "Primary and secondary condensate drain line and float switch check",
      "Indoor blower motor and return air static pressure check"
    ],
    serviceOptions: [
      {
        option: "Same-Day Electrical & Mechanical AC Repair",
        description: "Immediate replacement of failed capacitors, contactors, fan motors, relays, transformers, or thermostats.",
        bestFor: "Outdoor units that will not turn on, fans that stopped spinning, or tripped float switches."
      },
      {
        option: "Refrigerant Leak Detection & Recharge",
        description: "Electronic or nitrogen leak testing, repair of accessible brazed joints or Schrader cores, and charging to factory weight.",
        bestFor: "Frozen evaporator coils, hissing indoor coils, and warm supply air caused by low refrigerant."
      },
      {
        option: "Emergency Heatwave Cooling Dispatch",
        description: "Priority scheduling when indoor temperatures become unsafe during peak summer heat.",
        bestFor: "Complete central AC breakdowns during 90+ degree weather."
      }
    ],
    commonFaults: [
      {
        part: "Swollen or Dead Dual-Run Capacitor",
        symptom: "Indoor blower runs, but outside unit only hums and clicks off on thermal overload.",
        fix: "Install a properly rated 370V/440V dual-run capacitor and verify fan and compressor amp draw."
      },
      {
        part: "Pitted or Welded Contactor Relay",
        symptom: "Outdoor unit either refuses to start when called or keeps running nonstop even after the thermostat is turned off.",
        fix: "Replace the burned 24V coil contactor and tighten high-voltage lugs."
      },
      {
        part: "Frozen Indoor Evaporator Coil",
        symptom: "Very weak airflow from vents, ice on the thick copper line outside, and water leaking indoors as ice melts.",
        fix: "Thaw the coil, restore indoor blower airflow or locate and fix the refrigerant leak."
      },
      {
        part: "Clogged Condensate Drain and Float Switch",
        symptom: "Thermostat screen goes blank or cooling shuts off completely because water backed up in the drain pan.",
        fix: "Vacuum and flush the PVC condensate drain line, clean the trap, and reset the safety float switch."
      }
    ],
    pricingNotes: [
      "Electrical and airflow repairs (capacitors, contactors, drain line clearing, hard-start kits, and relays) are fast, straightforward fixes at the lower end of the price range.",
      "Condenser fan motors, indoor ECM blower motors, thermostatic expansion valves (TXVs), and refrigerant leak repairs require more labor and materials.",
      "If your older system uses phased-out R-22 refrigerant and has a major compressor or coil leak, we will give you honest pricing for both repair and full AC replacement so you can make the smartest financial call."
    ],
    equipmentNote:
      "We repair residential ducted central split-system air conditioners and packaged HVAC units. We do not repair window AC units or ductless mini-splits.",
    relatedSlugs: ["air-conditioning-cleaning", "ac-replacement", "furnace-repair"],
    faqs: [
      {
        q: "Why is my central AC running inside, but the outside fan is not spinning?",
        a: "In most cases, the dual-run capacitor or contactor inside the outdoor condensing unit has failed, or the outdoor circuit breaker has tripped. Turn the cooling off at the thermostat right away so the compressor does not overheat, and call for a repair tech."
      },
      {
        q: "What should I do before the technician arrives if my AC coil is frozen?",
        a: "Switch your thermostat from Cool to Off, and set the fan switch to On. That shuts off the outdoor compressor while using indoor air to melt the ice off the evaporator coil before the technician arrives, otherwise the tech cannot take accurate refrigerant readings through a solid block of ice."
      },
      {
        q: "Do you service window air conditioners or ductless mini-splits?",
        a: "No. We only service central ducted air conditioning systems and residential split or packaged HVAC units."
      }
    ]
  },
  {
    slug: "ac-replacement",
    name: "AC Replacement",
    shortName: "AC Replacement",
    category: "Cooling",
    heroTagline: "High-efficiency central AC replacement and split-system installation.",
    shortDescription:
      "Complete replacement of old, leaking, or dead central air conditioners with new SEER2-compliant outdoor condensers and matched indoor evaporator coils.",
    metaTitle: "Central AC Replacement & New Air Conditioner Installation",
    metaDescription:
      "Replacing an old central air conditioner? Call (855) 734-0279 for AC replacement. Matched indoor evaporator coils, SEER2 condensers, proper tonnage sizing, and upfront quotes.",
    introParagraphs: [
      "When an older central air conditioner locks up a compressor, springs a major evaporator coil leak, or struggles to cool your home while driving summer electric bills through the roof, replacing the unit is often far more cost-effective than pouring another thousand dollars into old parts.",
      "Our installation crews replace residential central split-system air conditioners and packaged cooling systems. Every AC replacement includes replacing both the outdoor condensing unit and the matched indoor evaporator coil, flushing or replacing the copper refrigerant line set, pulling a deep micron vacuum, and weighing in the exact factory refrigerant charge."
    ],
    whatItIs: [
      "AC replacement is the complete removal of your worn-out outdoor air conditioning condenser and indoor evaporator coil, followed by the installation and commissioning of a new, factory-matched SEER2 central cooling system.",
      "Replacing only the outdoor condenser while leaving a 15-year-old indoor coil in place is one of the worst mistakes in HVAC: mismatched coils restrict refrigerant flow, kill efficiency, and void manufacturer warranties. We install properly matched outdoor condensers and indoor A-coils or N-coils so your new system delivers its full cooling capacity and humidity removal."
    ],
    problemsSolved: [
      "Dead or grounded outdoor AC compressor on a system out of warranty",
      "Leaking indoor evaporator coil or obsolete R-22 Freon system that costs too much to recharge",
      "Central air conditioner is 12 to 20 years old and cannot keep the house below 78 degrees in summer",
      "High summer electric bills from an outdated 10 SEER or 12 SEER cooling unit",
      "Clammy, humid indoor air caused by an improperly sized or worn-out air conditioner",
      "Noisy, rusted outdoor condenser cabinet disturbing your patio or neighbors"
    ],
    benefits: [
      "Up to 30% to 40% reduction in summer cooling electricity use when upgrading from an older 10-12 SEER unit to a modern SEER2 system",
      "Matched indoor evaporator coil and outdoor condenser backed by a 10-year manufacturer parts warranty",
      "Stronger indoor humidity control and steadier temperatures across every room",
      "Clean, quiet operation with modern scroll compressors and swept-wing condenser fans",
      "Option to bundle furnace replacement at the same time for a fully matched heating and cooling system"
    ],
    whenToCall: [
      "Call for a replacement quote whenever a repair estimate on an AC over 12 years old exceeds 35% to 40% of the cost of a new system.",
      "Request an evaluation if your system loses refrigerant every summer, uses phased-out R-22 refrigerant, or has a shorted compressor.",
      "Off-season replacements in spring or autumn offer the most flexible scheduling, while our emergency install crews handle urgent replacements when a compressor fails in the middle of summer."
    ],
    processSteps: [
      {
        title: "Call for an On-Site AC Replacement Quote",
        detail: "Call (855) 734-0279 with your zip code. We inspect your existing outdoor unit, indoor coil, furnace blower, line set, and electrical circuit."
      },
      {
        title: "Cooling Load Check and System Selection",
        detail: "We verify the right tonnage (1.5 to 5 tons) for your home and provide clear written quotes for standard single-stage, two-stage, or variable-capacity SEER2 systems."
      },
      {
        title: "EPA Refrigerant Recovery and Matched Coil Install",
        detail: "We recover old refrigerant safely, set a new outdoor pad and disconnect box, install the new outdoor condenser and indoor evaporator coil, and braze the copper lines with nitrogen."
      },
      {
        title: "Deep Vacuum, Subcooling Charge, and Startup",
        detail: "We pressure-test with dry nitrogen, evacuate the lines below 500 microns, dial in factory subcooling/superheat, and verify cold supply air at your registers."
      }
    ],
    includedChecklist: [
      "EPA-compliant recovery of old refrigerant and haul-away of old AC equipment",
      "New outdoor SEER2 condensing unit on a leveled composite equipment pad",
      "New matched indoor cased or uncased evaporator coil with TXV/metering device",
      "Copper refrigerant line set flush or replacement and fresh suction-line insulation",
      "Nitrogen-purged brazing and 500-micron deep vacuum evacuation",
      "New exterior high-voltage electrical disconnect box and weatherproof whip",
      "Primary condensate drain line reconnection and overflow safety float switch",
      "Full startup commissioning: static pressure, superheat, subcooling, and temperature split"
    ],
    serviceOptions: [
      {
        option: "Standard SEER2 Single-Stage Split AC Replacement",
        description: "Dependable, code-compliant outdoor condenser and matched indoor evaporator coil.",
        bestFor: "Homeowners wanting reliable cooling and a strong warranty at the lowest upfront replacement price."
      },
      {
        option: "Two-Stage / Variable-Capacity High-SEER2 System",
        description: "Runs at lower speed during mild heat to pull maximum humidity out of the air and lower electric bills.",
        bestFor: "Hot, humid climates, two-story homes, and homeowners keeping their house long-term."
      },
      {
        option: "Complete Matched AC + Furnace Combo Replacement",
        description: "Replacing the outdoor condenser, indoor coil, and central furnace together as one engineered system.",
        bestFor: "Homes where both the furnace and air conditioner are 14+ years old."
      }
    ],
    commonFaults: [
      {
        part: "Grounded or Locked-Rotor Compressor",
        symptom: "Outdoor breaker trips instantly when cooling is called; compressor windings test shorted to ground.",
        fix: "Full condenser and indoor coil replacement on systems out of warranty."
      },
      {
        part: "Formicary Corrosion in Indoor Evaporator Coil",
        symptom: "Microscopic pinhole leaks in the indoor coil causing refrigerant loss every season.",
        fix: "Upgrade to a modern all-aluminum evaporator coil and matched SEER2 condenser."
      },
      {
        part: "Undersized or Oversized Legacy Tonnage",
        symptom: "Old unit either runs nonstop without cooling or blasts cold air for 5 minutes and leaves the house muggy.",
        fix: "Right-size the replacement tonnage and match airflow at the furnace blower."
      }
    ],
    pricingNotes: [
      "Central AC replacement pricing depends on cooling capacity (1.5 ton to 5 ton), SEER2 efficiency rating, staging (single-stage vs. two-stage), and indoor coil location (basement, closet, or tight attic).",
      "Replacing the indoor evaporator coil at the same time as the outdoor unit is standard practice so your new compressor is protected and your 10-year manufacturer warranty remains valid.",
      "You get a complete, itemized written price before you commit to anything."
    ],
    equipmentNote:
      "We install ducted central split-system air conditioners and packaged cooling units. We do not install window AC units or ductless mini-split systems.",
    relatedSlugs: ["air-conditioning-repair", "air-conditioning-cleaning", "furnace-replacement"],
    faqs: [
      {
        q: "How long does it take to replace a central air conditioner?",
        a: "A standard central AC condenser and indoor evaporator coil replacement takes 5 to 8 hours and is completed in a single day."
      },
      {
        q: "Why do I need to replace the indoor coil if only the outside unit broke?",
        a: "The outdoor condenser and indoor evaporator coil are a sealed refrigerant loop calibrated to work together. Pairing a new SEER2 outdoor unit with an old indoor coil causes wrong refrigerant pressures, contaminates the new compressor with old oil, and voids the manufacturer warranty."
      },
      {
        q: "How do I know what tonnage AC my house needs?",
        a: "Tonnage is based on square footage, ceiling height, window exposure, duct capacity, and local climate zone, not just copying what was installed 15 years ago. Our technician verifies the correct sizing during your on-site visit."
      }
    ]
  },
  {
    slug: "air-conditioning-cleaning",
    name: "Air Conditioning Cleaning",
    shortName: "AC Cleaning",
    category: "Cooling",
    heroTagline: "Deep condenser coil washing, evaporator cleaning, and drain line flushing.",
    shortDescription:
      "Professional cleaning of outdoor AC condenser coils, indoor evaporator coils, condensate drain lines, and blower assemblies to restore cold airflow and prevent breakdowns.",
    metaTitle: "Central Air Conditioning Cleaning & Coil Washing Service",
    metaDescription:
      "Lower electric bills and stop AC freeze-ups. Call (855) 734-0279 for central air conditioning cleaning: outdoor condenser coil wash, indoor coil cleaning, and drain flush.",
    introParagraphs: [
      "A central air conditioner does not create cold air out of nothing; it absorbs heat from inside your house at the indoor evaporator coil and dumps that heat outside through the aluminum fins of the outdoor condenser coil. When even a 1/16-inch blanket of grass clippings, cottonwood fluff, dust, or pet hair coats those coils, the heat cannot escape.",
      "Our air conditioning cleaning service restores heat transfer and airflow across your entire central cooling system. We chemically wash the outdoor condenser coil from the inside out, clean accessible indoor evaporator coil surfaces, flush algae and sludge out of the PVC condensate drain line, and test your electrical capacitors and refrigerant charge."
    ],
    whatItIs: [
      "Air conditioning cleaning is a comprehensive mechanical cleaning and performance tune-up for ducted central split-system and packaged air conditioners. Outdoor condensing units act like giant vacuum cleaners in your yard, pulling thousands of cubic feet of air per minute through tightly spaced aluminum fins that trap dirt, pollen, mulch dust, and lawn debris.",
      "When the outdoor coil is compacted with grime, head pressure inside the compressor spikes by 50 to 100 PSI, increasing electricity consumption by up to 25 percent and cooking the dual-run capacitor and compressor windings. Meanwhile, indoor humidity and dust combine on the wet indoor evaporator coil and drain pan to form algae slime that blocks the condensate pipe and causes indoor water leaks."
    ],
    problemsSolved: [
      "Central AC runs all day long but struggles to bring the house down to your thermostat setting",
      "Outdoor condenser fins visibly packed with dirt, grass clippings, cottonwood seeds, or pet hair",
      "Musty, damp odor coming from the supply vents whenever the air conditioner starts up",
      "Water dripping from the indoor air handler pan or tripping the condensate float switch",
      "High summer electric bills compared to previous cooling seasons",
      "Outdoor compressor running dangerously hot and tripping the circuit breaker in the afternoon"
    ],
    benefits: [
      "Drops compressor operating pressure and amp draw immediately, extending compressor life",
      "Prevents ceiling and floor water damage by clearing algae and sludge out of the condensate drain line",
      "Restores colder supply air temperatures at every room register",
      "Reduces monthly cooling electricity bills by restoring clean coil heat transfer",
      "Catches swollen capacitors or pitted contactors before they fail on a 95-degree weekend"
    ],
    whenToCall: [
      "Spring and early summer are ideal for annual preventive AC cleaning, before triple-digit heat puts maximum stress on your system.",
      "Schedule an immediate AC cleaning if your outdoor unit is coated in yard debris, if you forgot to change an indoor filter for several months, or if your condensate safety switch has tripped.",
      "In warm southern and desert states (Florida, Texas, Arizona, Nevada, California), cleaning the coils in autumn after a brutal summer cooling season protects the system and keeps indoor airflow clean for winter."
    ],
    processSteps: [
      {
        title: "Schedule Your Central AC Cleaning",
        detail: "Call (855) 734-0279 with your zip code to book a professional central air conditioning coil and drain cleaning."
      },
      {
        title: "Outdoor Condenser Disassembly and Coil Wash",
        detail: "We disconnect power, remove the top fan grille or outer panels, clear leaves from the base pan, apply coil-safe cleaner, and rinse dirt out of the condenser fins without bending them."
      },
      {
        title: "Indoor Evaporator Inspection and Condensate Flush",
        detail: "We inspect and clean accessible indoor evaporator coil surfaces, vacuum the drain pan, flush the PVC condensate drain line, and verify the float switch."
      },
      {
        title: "Electrical, Airflow, and Refrigerant Verification",
        detail: "We test the run capacitor, contactor, fan motor amps, refrigerant pressures, and indoor temperature split."
      }
    ],
    includedChecklist: [
      "Outdoor condenser cabinet debris removal and coil washing",
      "Condenser fin inspection and airflow check",
      "Accessible indoor evaporator coil surface inspection and cleaning",
      "Primary condensate drain pan and PVC drain line flush",
      "Condensate overflow safety float switch test",
      "Dual-run capacitor microfarad test and contactor inspection",
      "Compressor and condenser fan motor amperage check",
      "Refrigerant operating pressure and temperature drop verification"
    ],
    serviceOptions: [
      {
        option: "Standard Central AC Cleaning & Seasonal Tune-Up",
        description: "Outdoor condenser coil washing, condensate drain flush, electrical meter testing, and cooling performance check.",
        bestFor: "Annual maintenance on any residential split-system central air conditioner."
      },
      {
        option: "Heavy-Duty Indoor Evaporator & Blower Cleaning",
        description: "Deep foaming coil treatment and blower wheel cleaning for systems impacted by pet hair, drywall dust, or neglected filters.",
        bestFor: "Systems with weak vent airflow, recurring coil freeze-ups, or musty vent odors."
      }
    ],
    commonFaults: [
      {
        part: "Impacted Outdoor Condenser Coil Blanket",
        symptom: "Air blowing out the top of the outdoor unit feels barely warm or compressor shuts off on high-head-pressure overload.",
        fix: "Remove outer louvre panels and wash the split condenser coil layers clean with coil-safe foaming cleaner."
      },
      {
        part: "Bio-Slime Plugged Condensate Drain Trap",
        symptom: "Water backs up into the auxiliary drain pan and trips the float switch, shutting down the AC.",
        fix: "Pressurize and vacuum out the condensate drain line, clean the P-trap, and treat the pan."
      },
      {
        part: "Matted Indoor Evaporator Coil Underside",
        symptom: "Air filter was missing or collapsed, allowing lint and hair to plaster the wet underside of the A-coil and cause ice buildup.",
        fix: "Open the coil access panel, brush and foam-clean the evaporator fins, and restore proper static pressure."
      }
    ],
    pricingNotes: [
      "Routine outdoor condenser coil washing and condensate drain flushing is a straightforward, fixed-rate service completed in about an hour.",
      "If an indoor evaporator coil is severely impacted and requires opening sheet-metal plenum access panels or pumping down the coil for a deep chemical wash, your technician will provide an exact upfront price before starting."
    ],
    equipmentNote:
      "We clean residential ducted central split-system and packaged air conditioners. We do not clean portable window AC units or ductless mini-split wall heads.",
    relatedSlugs: ["air-conditioning-repair", "ac-replacement", "furnace-cleaning"],
    faqs: [
      {
        q: "Can I just spray my outside AC unit with a garden hose myself?",
        a: "Spraying from the outside with a high-pressure nozzle often bends the delicate aluminum fins flat and pushes dirt deeper between double-row condenser coils. Our technicians remove the top fan assembly to wash from the inside out using non-acidic coil cleaner that dissolves grease and pollen safely."
      },
      {
        q: "How often should a central air conditioner be cleaned?",
        a: "Once a year in most climates, and twice a year in heavy-cooling states like Florida, Texas, Arizona, and Nevada or in yards with cottonwood trees, pine pollen, or frequent mowing."
      },
      {
        q: "Will cleaning my AC coils really lower my electric bill?",
        a: "Yes. A dirty outdoor condenser coil forces the compressor to run at much higher head pressure and stay on longer for every cycle. Cleaning impacted coils typically drops compressor amp draw by 10% to 25% immediately."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
