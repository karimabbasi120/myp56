// Study cheatsheets pitched at MYP Years 4-5 (grades 9-10), the level actually
// assessed in the on-screen examinations. Notes assume the basics are known and
// focus on mechanisms, precise definitions, equations with units, and the
// distinctions that separate a level 3-4 answer from a 7-8 one.
//
// Language Acquisition is deliberately excluded: vocabulary lists add nothing
// at this level, and the practice questions cover that ground instead.

export const CHEATSHEETS = {
  biology: [
    {
      title: 'Cells and transport',
      points: [
        'Surface area : volume ratio falls as an organism grows, which is why large organisms need specialised exchange surfaces (alveoli, villi, gills) rather than relying on diffusion across the body surface.',
        'Diffusion, osmosis and active transport are distinguished by gradient and energy: diffusion and osmosis are passive and move down a gradient; active transport moves against it using ATP from respiration.',
        'Osmosis is defined precisely as the movement of water from a region of higher water potential to lower water potential across a partially permeable membrane. Saying "from dilute to concentrated" without naming water potential loses marks.',
        'A plant cell in a hypertonic solution becomes plasmolysed (protoplast pulls away from the wall); in a hypotonic solution it becomes turgid, not burst, because the cell wall resists. Animal cells lyse because they have no wall.',
        'Rate of diffusion is proportional to surface area and concentration gradient, and inversely proportional to diffusion distance (Fick’s relationship).',
      ],
    },
    {
      title: 'Enzymes',
      points: [
        'Enzymes are globular proteins whose tertiary structure creates an active site complementary to a specific substrate.',
        'Temperature: rate rises with kinetic energy until the optimum, then falls sharply as hydrogen and ionic bonds break and the active site changes shape. Denaturation is permanent, so cooling does not restore activity.',
        'pH: each enzyme has an optimum (pepsin about pH 2, most human enzymes about pH 7). Extremes disrupt bonding and denature the enzyme.',
        'Common exam trap: enzymes are not "used up" and do not "die". They lower activation energy and are unchanged by the reaction.',
        'Beyond a certain substrate concentration the rate plateaus because all active sites are occupied - enzyme concentration becomes the limiting factor.',
      ],
    },
    {
      title: 'Photosynthesis and respiration',
      points: [
        'Photosynthesis: 6CO2 + 6H2O to C6H12O6 + 6O2, requiring light and chlorophyll. It is endothermic, storing light energy as chemical energy.',
        'Limiting factors: light intensity, carbon dioxide concentration and temperature. On a rate graph, a plateau means a factor other than the one plotted has become limiting.',
        'Aerobic respiration: C6H12O6 + 6O2 to 6CO2 + 6H2O, releasing roughly 2900 kJ per mole, occurring in the mitochondria.',
        'Anaerobic respiration in muscle produces lactic acid and an oxygen debt; in yeast it produces ethanol and CO2. Both release far less energy per glucose molecule because glucose is only partly broken down.',
        'Respiration happens in all living cells at all times, including in plants in daylight. A common error is to treat photosynthesis as the plant equivalent of respiration.',
      ],
    },
    {
      title: 'Transport and exchange in humans',
      points: [
        'Double circulation: blood passes through the heart twice per circuit, maintaining higher pressure to the body than to the lungs.',
        'Arteries have thick muscular and elastic walls to withstand and smooth high pressure; veins have wide lumens and valves; capillaries are one cell thick for exchange.',
        'Gas exchange in alveoli depends on a large surface area, a one-cell-thick wall, moist lining and a dense capillary network that maintains the concentration gradient.',
        'Ventilation is the mechanical movement of air; gas exchange is diffusion across the alveolar surface; respiration is the chemical release of energy in cells. These three are frequently confused in exams.',
        'Villi and microvilli in the small intestine increase surface area for absorption, with a rich blood supply maintaining the gradient.',
      ],
    },
    {
      title: 'Homeostasis and response',
      points: [
        'Homeostasis maintains a constant internal environment through negative feedback: a change is detected by a receptor, a coordination centre processes it, and an effector produces a response that reverses the change.',
        'Blood glucose: insulin lowers it by promoting uptake and glycogen storage; glucagon raises it by mobilising glycogen. Type 1 diabetes is failure of insulin secretion; type 2 is reduced cell sensitivity to insulin.',
        'Thermoregulation: vasodilation and sweating increase heat loss; vasoconstriction, shivering and erector muscles reduce it. Blood vessels themselves do not move closer to the skin surface - a very common misconception.',
        'Reflex arc: receptor, sensory neurone, relay neurone in the CNS, motor neurone, effector. It is rapid and involuntary because it bypasses conscious processing in the brain.',
        'Synaptic transmission: neurotransmitter diffuses across the synaptic cleft and binds receptors on the next neurone, ensuring one-way transmission.',
      ],
    },
    {
      title: 'Genetics',
      points: [
        'Genotype is the alleles present; phenotype is the expressed characteristic, produced by genotype interacting with the environment.',
        'Homozygous means two identical alleles; heterozygous means two different alleles. A recessive phenotype requires homozygous recessive genotype.',
        'A monohybrid cross of two heterozygotes (Bb x Bb) gives a 3:1 phenotypic ratio; a cross of heterozygous with homozygous recessive (Bb x bb) gives 1:1. Always show the Punnett square and define your symbols.',
        'Mitosis produces two genetically identical diploid cells for growth and repair. Meiosis produces four genetically distinct haploid gametes, with variation from crossing over and independent assortment.',
        'Sex determination: XX female, XY male. The father determines sex because only he can contribute a Y chromosome.',
        'Mutations are random changes in DNA base sequence. Most are neutral or harmful, but they are the ultimate source of the variation natural selection acts on.',
      ],
    },
    {
      title: 'Evolution and classification',
      points: [
        'Natural selection requires: variation exists, more offspring are produced than can survive, individuals with advantageous alleles survive and reproduce, and those alleles increase in frequency over generations.',
        'Crucially, organisms do not adapt during their lifetime in response to need. Writing that an organism "developed" a feature "because it needed it" is Lamarckism and loses marks.',
        'Antibiotic resistance is the strongest evidence available at this level: mutation confers resistance, the antibiotic is the selection pressure, resistant bacteria reproduce rapidly.',
        'Speciation occurs when populations become reproductively isolated, accumulate different mutations under different selection pressures, and can no longer interbreed to produce fertile offspring.',
        'Selective breeding is artificial selection by humans; it reduces genetic diversity and can concentrate harmful recessive alleles.',
      ],
    },
    {
      title: 'Ecology',
      points: [
        'Only about 10% of energy passes between trophic levels; the rest is lost through respiration as heat, in movement, and in undigested material in faeces. This limits food chains to roughly four or five levels.',
        'Carbon cycle: photosynthesis fixes CO2; respiration, decomposition and combustion return it. Fossil fuel combustion releases carbon locked away for millions of years, which is why it disturbs the balance.',
        'Interdependence means removing one species affects others through the food web, sometimes disproportionately if it is a keystone species.',
        'Distinguish biotic factors (predation, competition, disease) from abiotic factors (light, temperature, pH, water availability).',
        'Sampling: quadrats estimate the abundance of non-motile organisms and transects show distribution along an environmental gradient. Random sampling avoids bias; more quadrats improve reliability.',
      ],
    },
    {
      title: 'Health and disease',
      points: [
        'Communicable diseases are caused by pathogens (bacteria, viruses, fungi, protists). Non-communicable diseases such as cardiovascular disease and type 2 diabetes are influenced by lifestyle and genetics.',
        'Defence layers: physical and chemical barriers (skin, mucus, stomach acid), then white blood cells that phagocytose pathogens, produce antibodies and produce antitoxins.',
        'Vaccination introduces antigens, provoking antibody production and memory cells so a second exposure produces a faster, larger secondary response.',
        'Herd immunity protects those who cannot be vaccinated by reducing transmission below the level needed to sustain an outbreak.',
        'Antibiotics kill bacteria and have no effect on viruses. Overprescription and failure to complete courses accelerate resistance.',
        'Correlation is not causation: risk factors are statistically linked to disease, but a mechanism must be shown to establish cause.',
      ],
    },
  ],

  chemistry: [
    {
      title: 'Atomic structure',
      points: [
        'Atomic number equals the number of protons and defines the element. Mass number is protons plus neutrons.',
        'Isotopes have the same proton number but different neutron numbers, so they are chemically identical but differ in mass. Relative atomic mass is the weighted mean of an element’s isotopes.',
        'Electron configuration fills 2, 8, 8 for the first twenty elements. The number of outer electrons determines chemical behaviour and group number.',
        'Ions form to achieve a full outer shell: metals lose electrons to form cations, non-metals gain electrons to form anions.',
      ],
    },
    {
      title: 'Periodic table trends',
      points: [
        'Group 1 reactivity increases down the group: atomic radius and shielding increase, so the outer electron is lost more easily.',
        'Group 7 reactivity decreases down the group, for the mirror-image reason: a larger atom attracts an incoming electron less strongly.',
        'A more reactive halogen displaces a less reactive one from solution, which is the standard way to establish the order experimentally.',
        'Group 0 is unreactive because the outer shell is already full, so there is no energetic advantage in gaining, losing or sharing electrons.',
        'Transition metals differ from Group 1: harder, denser, higher melting points, variable oxidation states, coloured compounds, and often catalytic.',
      ],
    },
    {
      title: 'Bonding and structure',
      points: [
        'Ionic bonding: electrostatic attraction between oppositely charged ions in a giant lattice. High melting point; conducts only when molten or dissolved, because ions must be free to move.',
        'Simple covalent: strong bonds within molecules but weak intermolecular forces between them, so melting points are low. These substances do not conduct because there are no free charged particles.',
        'Giant covalent: diamond is hard with four bonds per carbon; graphite has three bonds per carbon leaving delocalised electrons, so it conducts and its layers slide.',
        'Metallic bonding: a lattice of cations in a sea of delocalised electrons, explaining conductivity, malleability and high melting point.',
        'Structure and bonding questions are answered by linking the bonding type to the property being explained, not by describing the structure alone.',
      ],
    },
    {
      title: 'Quantitative chemistry',
      points: [
        'Conservation of mass: atoms are rearranged, never created or destroyed. Apparent mass changes in open systems are due to a gas entering or escaping.',
        'Relative formula mass (Mr) is the sum of the relative atomic masses in the formula.',
        'Percentage yield = (actual yield / theoretical yield) x 100. It can never exceed 100%; a value above that indicates impurity or an incompletely dried product.',
        'Yields are below 100% because reactions may be reversible, product is lost in transfer, or side reactions occur.',
        'Balancing: adjust coefficients only, never subscripts, since changing a subscript changes the substance.',
      ],
    },
    {
      title: 'Rates of reaction',
      points: [
        'Collision theory: a reaction occurs only when particles collide with energy greater than or equal to the activation energy and in the correct orientation.',
        'Concentration and pressure increase collision frequency. Surface area increases the area available for collisions. Temperature increases both frequency and the proportion of collisions exceeding activation energy, which is why its effect is largest.',
        'A catalyst provides an alternative pathway with a lower activation energy and is chemically unchanged at the end.',
        'Rate is measured from the gradient of a graph of product formed or reactant used against time. The gradient is steepest at the start and reaches zero when a reactant is exhausted.',
      ],
    },
    {
      title: 'Energy changes',
      points: [
        'Exothermic reactions release energy to the surroundings and the temperature rises: combustion, neutralisation, most oxidations.',
        'Endothermic reactions absorb energy and the temperature falls: thermal decomposition, and the reaction of citric acid with sodium hydrogen carbonate.',
        'Bond breaking is endothermic, bond making is exothermic. Overall energy change = energy to break bonds minus energy released making bonds. A negative value means exothermic.',
        'On a reaction profile, activation energy is the barrier from reactants to the peak; the overall energy change is the difference between reactant and product levels.',
      ],
    },
    {
      title: 'Acids, bases and salts',
      points: [
        'The pH scale is logarithmic: each unit represents a ten-fold change in hydrogen ion concentration, so pH 3 is 100 times more acidic than pH 5.',
        'Strong acids fully dissociate; weak acids partially dissociate. Concentration and strength are different ideas - a concentrated weak acid is possible.',
        'Acid + metal to salt + hydrogen. Acid + base to salt + water. Acid + carbonate to salt + water + carbon dioxide.',
        'Gas tests: hydrogen gives a squeaky pop, oxygen relights a glowing splint, carbon dioxide turns limewater milky.',
        'Titration requires a pipette for the fixed volume, a burette for the variable volume, and concordant titres within 0.10 cm3 before a mean is calculated.',
      ],
    },
    {
      title: 'Electrolysis and reactivity',
      points: [
        'Reactivity series: potassium, sodium, calcium, magnesium, aluminium, carbon, zinc, iron, hydrogen, copper, silver, gold.',
        'Metals below carbon are extracted by reduction with carbon; those above it require electrolysis, which explains why aluminium extraction is so energy intensive.',
        'In electrolysis, cations are reduced at the cathode (gain electrons) and anions are oxidised at the anode (lose electrons). Remember OIL RIG and that reduction happens at the cathode.',
        'In aqueous solution, hydrogen is produced at the cathode if the metal is more reactive than hydrogen.',
        'Displacement reactions are redox: the more reactive metal is oxidised and the less reactive metal ion is reduced.',
      ],
    },
    {
      title: 'Organic chemistry and the atmosphere',
      points: [
        'Alkanes are saturated with the general formula CnH2n+2; alkenes are unsaturated with a C=C double bond and formula CnH2n.',
        'Alkenes decolourise bromine water, which is the standard test to distinguish them from alkanes.',
        'Crude oil is separated by fractional distillation according to boiling point, which depends on chain length and therefore on intermolecular forces.',
        'Cracking breaks long, less useful chains into shorter alkanes and alkenes, matching supply to demand and providing alkenes for polymers.',
        'Complete combustion yields carbon dioxide and water; incomplete combustion yields carbon monoxide, a toxic gas that binds irreversibly to haemoglobin, plus soot.',
        'The greenhouse effect is natural and necessary; the enhanced greenhouse effect from additional CO2 and methane is what drives climate change. Confusing the two is a common error.',
      ],
    },
  ],

  physics: [
    {
      title: 'Forces and motion',
      points: [
        'Scalars have magnitude only (distance, speed, mass, energy); vectors have magnitude and direction (displacement, velocity, force, momentum).',
        'Newton’s first law: an object continues at rest or constant velocity unless acted on by a resultant force. Constant velocity therefore means balanced forces, not zero force.',
        'Newton’s second law: F = ma, with force in newtons, mass in kilograms and acceleration in m/s2.',
        'Newton’s third law pairs act on different objects, are equal in magnitude, opposite in direction and of the same type. If they acted on the same object nothing could ever accelerate.',
        'Weight = mass x gravitational field strength. Mass is constant everywhere; weight depends on the field.',
        'Terminal velocity: as speed increases, drag increases until it balances weight, so the resultant force and therefore the acceleration become zero.',
      ],
    },
    {
      title: 'Motion graphs and equations',
      points: [
        'Distance-time graph: gradient is speed. A curved line means changing speed.',
        'Velocity-time graph: gradient is acceleration and the area beneath the line is displacement. Confusing these two graphs is one of the most common errors in the paper.',
        'Acceleration = change in velocity / time taken, in m/s2.',
        'A negative gradient on a velocity-time graph means deceleration; a line below the axis means motion in the opposite direction.',
        'Moments: moment = force x perpendicular distance from the pivot. An object is balanced when total clockwise moments equal total anticlockwise moments.',
      ],
    },
    {
      title: 'Energy',
      points: [
        'Energy is conserved: it is transferred between stores, never created or destroyed. Describe transfers between named stores rather than saying energy is "lost".',
        'Kinetic energy = 1/2 x m x v2. Note that doubling speed quadruples kinetic energy, which is why braking distance rises so steeply with speed.',
        'Gravitational potential energy = m x g x h.',
        'Efficiency = useful energy output / total energy input, expressed as a decimal or percentage. It can never exceed 1 or 100%.',
        'Power = energy transferred / time, measured in watts. One watt is one joule per second.',
        'Dissipated energy is spread into the surroundings, usually as heat, and becomes too diffuse to be useful. Insulation, lubrication and streamlining reduce these losses.',
      ],
    },
    {
      title: 'Electricity',
      points: [
        'Current is the rate of flow of charge (Q = I x t) and is measured with an ammeter in series. Potential difference is energy transferred per unit charge and is measured with a voltmeter in parallel.',
        'Ohm’s law: V = I x R, valid only at constant temperature.',
        'Series circuits: current is identical everywhere, potential differences add, and total resistance is the sum of the components.',
        'Parallel circuits: potential difference across each branch is the same, currents add, and total resistance is less than the smallest single resistor.',
        'A filament lamp’s I-V graph curves because resistance rises with temperature; a diode conducts in only one direction.',
        'Electrical power P = V x I = I2 x R, and energy transferred E = P x t.',
      ],
    },
    {
      title: 'Waves',
      points: [
        'Wave equation: v = f x lambda, with speed in m/s, frequency in Hz and wavelength in m.',
        'Transverse waves oscillate perpendicular to the direction of energy transfer (light, all electromagnetic waves, water); longitudinal waves oscillate parallel to it, producing compressions and rarefactions (sound).',
        'Waves transfer energy and information without transferring matter. The medium itself does not travel with the wave.',
        'Electromagnetic spectrum in order of increasing frequency and energy: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. All travel at 3 x 10^8 m/s in a vacuum.',
        'Refraction occurs because the wave changes speed when entering a new medium; the wavelength changes but the frequency does not.',
        'Law of reflection: angle of incidence equals angle of reflection, both measured from the normal.',
      ],
    },
    {
      title: 'Radioactivity',
      points: [
        'Alpha is a helium nucleus, highly ionising, stopped by paper. Beta is a fast electron from a neutron decaying, stopped by a few millimetres of aluminium. Gamma is electromagnetic, weakly ionising, reduced by thick lead.',
        'Alpha decay reduces mass number by 4 and atomic number by 2. Beta decay leaves mass number unchanged and increases atomic number by 1.',
        'Half-life is the time for half the unstable nuclei, and therefore the activity, to decay. It is constant for a given isotope and unaffected by temperature or chemical state.',
        'Decay is random: you cannot predict which nucleus decays next, only the probability across a large sample.',
        'Irradiation is exposure to radiation from a source; contamination is the transfer of the radioactive material itself, and is more dangerous because exposure continues.',
      ],
    },
    {
      title: 'Particle model and pressure',
      points: [
        'Density = mass / volume. An object floats if its mean density is lower than that of the fluid.',
        'Specific heat capacity is the energy needed to raise 1 kg by 1 degree Celsius; specific latent heat is the energy for a change of state at constant temperature.',
        'During a change of state the temperature is constant because the energy is breaking intermolecular bonds rather than increasing kinetic energy. Flat sections on a heating curve are frequently misread.',
        'Gas pressure results from particle collisions with the container walls. Raising temperature increases the speed and therefore the force and frequency of collisions.',
        'Pressure = force / area, so a smaller contact area produces greater pressure for the same force.',
      ],
    },
    {
      title: 'Magnetism and space',
      points: [
        'A current-carrying conductor produces a magnetic field; the field of a solenoid resembles that of a bar magnet and is strengthened by more turns, greater current or an iron core.',
        'Motor effect: a current-carrying conductor in a magnetic field experiences a force, maximised when the wire is perpendicular to the field.',
        'Electromagnetic induction: moving a conductor through a field, or changing the field through a coil, induces a potential difference. This underlies generators and transformers.',
        'Gravity provides the centripetal force keeping planets in orbit. Orbital speed is constant in magnitude but velocity changes continuously because direction changes.',
        'Red-shift of distant galaxies, increasing with distance, is evidence that the universe is expanding and supports the Big Bang model.',
      ],
    },
  ],

  mathematics: [
    {
      title: 'Number',
      points: [
        'Standard form is a x 10^n with 1 <= a < 10. Multiplying adds indices, dividing subtracts them.',
        'Index laws: a^m x a^n = a^(m+n); a^m / a^n = a^(m-n); (a^m)^n = a^(mn); a^0 = 1; a^(-n) = 1/a^n; a^(1/2) = square root of a.',
        'Surds: simplify by extracting square factors, and rationalise a denominator by multiplying numerator and denominator by the surd.',
        'Upper and lower bounds: a value given to the nearest unit lies within plus or minus half a unit. For a maximum quotient, use the maximum numerator with the minimum denominator.',
        'Recurring decimals convert to fractions using an algebraic method: multiply by a power of ten, subtract, then solve.',
      ],
    },
    {
      title: 'Algebraic manipulation',
      points: [
        'Expanding double brackets: (x + a)(x + b) = x2 + (a + b)x + ab.',
        'Difference of two squares: a2 - b2 = (a + b)(a - b). Recognising this shortcut saves significant time.',
        'Factorising a quadratic with leading coefficient 1: find two numbers whose product is the constant and whose sum is the coefficient of x.',
        'Completing the square: x2 + bx + c = (x + b/2)2 - (b/2)2 + c, which also gives the turning point directly.',
        'Rearranging formulae: when the subject appears more than once, collect those terms on one side and factorise.',
      ],
    },
    {
      title: 'Equations and inequalities',
      points: [
        'Quadratic formula: x = (-b plus or minus the square root of (b2 - 4ac)) / 2a.',
        'The discriminant b2 - 4ac determines the number of roots: positive gives two, zero gives one repeated root, negative gives none.',
        'Simultaneous equations: eliminate by adding or subtracting when coefficients match; substitute when one equation is already arranged for a variable. A linear and a quadratic pair always require substitution.',
        'Inequalities behave like equations except that multiplying or dividing by a negative number reverses the sign.',
        'Always check solutions in the original equation, particularly where you squared both sides or cancelled a variable.',
      ],
    },
    {
      title: 'Sequences and functions',
      points: [
        'Linear (arithmetic) sequences have a constant first difference d, and nth term = dn + (first term - d).',
        'Quadratic sequences have a constant second difference; the coefficient of n2 is half that second difference.',
        'Geometric sequences have a constant ratio between consecutive terms, giving exponential growth or decay.',
        'A straight line is y = mx + c. Parallel lines share a gradient; perpendicular gradients multiply to -1.',
        'Gradient between two points = (y2 - y1) / (x2 - x1). Gradient describes rate of change, which is what Criterion D questions usually want interpreted in context.',
      ],
    },
    {
      title: 'Geometry and measure',
      points: [
        'Interior angle sum of a polygon = (n - 2) x 180 degrees; exterior angles always sum to 360 degrees.',
        'Circle theorems worth knowing: the angle in a semicircle is 90 degrees; the angle at the centre is twice the angle at the circumference; angles in the same segment are equal; opposite angles in a cyclic quadrilateral sum to 180 degrees.',
        'Area of a circle = pi r2, circumference = 2 pi r. Volume of a cylinder = pi r2 h; volume of a prism = cross-sectional area x length.',
        'Similar shapes: if lengths scale by k, areas scale by k2 and volumes by k3. This is regularly tested and regularly forgotten.',
        'Pythagoras applies only to right-angled triangles; the hypotenuse is always the longest side, opposite the right angle.',
      ],
    },
    {
      title: 'Trigonometry',
      points: [
        'SOH CAH TOA for right-angled triangles: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent.',
        'To find an angle, apply the inverse function. Label the sides relative to the angle in use before choosing a ratio.',
        'Exact values worth memorising: sin 30 = 1/2, cos 60 = 1/2, tan 45 = 1, sin 45 = cos 45 = 1 over root 2.',
        'For non-right-angled triangles use the sine rule (a/sin A = b/sin B) when you have a matching side and angle pair, and the cosine rule when you have two sides and the included angle, or all three sides.',
        'Bearings are measured clockwise from north and always written with three figures.',
      ],
    },
    {
      title: 'Ratio, proportion and rates',
      points: [
        'To share in a ratio, sum the parts, divide the total, then multiply by each share.',
        'Direct proportion: y = kx, a straight line through the origin. Inverse proportion: y = k/x, a reciprocal curve.',
        'Percentage change = (change / original) x 100. The original value is the denominator, which is the most common error.',
        'Compound interest uses repeated multiplication: final = initial x (multiplier)^n. Depreciation uses a multiplier below 1.',
        'Reverse percentages: divide by the multiplier rather than subtracting the percentage. Taking 20% off a post-increase figure does not return the original.',
        'Compound measures: speed = distance/time, density = mass/volume, pressure = force/area. Always convert units before substituting.',
      ],
    },
    {
      title: 'Statistics and probability',
      points: [
        'Mean is affected by outliers; the median is resistant to them, which is why it is preferred for skewed data such as income.',
        'For grouped data, estimate the mean using midpoints; the result is an estimate because the original values are unknown.',
        'Correlation does not imply causation. A strong relationship may be coincidental or driven by a third variable.',
        'Probabilities of all outcomes sum to 1, so P(not A) = 1 - P(A).',
        'Tree diagrams: multiply along branches for combined events, add between branches for alternatives. Without replacement, the denominator decreases at the second stage.',
        'Sample size and sampling method determine reliability; a biased sample cannot be fixed by increasing its size.',
      ],
    },
  ],

  history: [
    {
      title: 'Working with sources',
      points: [
        'Evaluate sources using origin, purpose, content, value and limitation. Value and limitation must both follow from origin and purpose, not from personal opinion.',
        'Reliability and utility are different. A source can be unreliable yet highly useful: propaganda is poor evidence of events but excellent evidence of official attitudes and methods of persuasion.',
        'Provenance means who produced the source, when, where and why. A source produced privately, with no intended audience, often has different value from one produced for publication.',
        'Cross-referencing between sources establishes corroboration. A claim supported only by a single interested party should be treated cautiously.',
        'Primary does not mean reliable and secondary does not mean unreliable. A later historian with access to archives may be more accurate than a confused eyewitness.',
      ],
    },
    {
      title: 'Second-order concepts',
      points: [
        'Causation: distinguish long-term causes, short-term causes and the immediate trigger, and be prepared to argue which mattered most rather than merely listing them.',
        'Consequence: separate short-term from long-term, and intended from unintended consequences.',
        'Change and continuity: strong answers recognise that dramatic events often leave much of daily life unchanged, and that change occurs at different rates for different groups.',
        'Significance is not the same as fame. An event is significant if it was important at the time, affected many people, or had lasting consequences.',
        'Interpretations differ because historians select different evidence, ask different questions, and write in different contexts. Explaining why they differ scores far more than noting that they do.',
      ],
    },
    {
      title: 'Industrialisation and empire',
      points: [
        'Industrialisation from around 1750 shifted production from cottage industry to factories, driven by steam power, coal, iron and improved transport.',
        'Consequences were uneven: rapid urbanisation produced overcrowding, poor sanitation and disease, alongside rising overall national wealth.',
        'Reform came gradually through Factory Acts, public health legislation and the growth of trade unions, usually after sustained pressure rather than voluntary concession.',
        'The transatlantic slave trade underpinned much European economic growth. Britain abolished the trade in 1807 and slavery across most of the empire in 1833, driven by a combination of moral campaigning, enslaved people’s own resistance, and shifting economic interests.',
        'Empire should be assessed from multiple perspectives: economic exploitation and cultural destruction alongside claims of infrastructure and administration.',
      ],
    },
    {
      title: 'The First World War',
      points: [
        'Long-term causes are summarised as MAIN: militarism, alliances, imperialism, nationalism. The assassination of Franz Ferdinand in June 1914 was the trigger, not the cause.',
        'The alliance system converted a regional dispute into a continental war through chains of obligation.',
        'Trench warfare produced stalemate on the Western Front because defensive technology, particularly the machine gun and artillery, outpaced offensive tactics.',
        'Total war mobilised civilian populations and economies, which accelerated changes in women’s employment and the role of the state.',
        'The Treaty of Versailles (1919) imposed territorial losses, reparations and the war guilt clause. Historians debate whether it was too harsh, or not harsh enough to prevent German recovery.',
      ],
    },
    {
      title: 'Interwar years and the Second World War',
      points: [
        'The Great Depression from 1929 caused mass unemployment and discredited existing governments, creating conditions in which extremist parties gained support.',
        'Hitler became Chancellor in 1933 through legal means, then dismantled democracy using the Reichstag Fire Decree and the Enabling Act.',
        'Appeasement is best assessed in context: memories of the First World War, military unpreparedness and fear of communism made it appear reasonable at the time, even if it appears mistaken in hindsight.',
        'The Second World War became global with the invasion of the Soviet Union and the attack on Pearl Harbor in 1941.',
        'The Holocaust was the systematic, state-organised genocide of six million Jewish people, alongside Roma, disabled people, political opponents and others. It escalated through stages from discrimination and segregation to mass murder.',
      ],
    },
    {
      title: 'The Cold War',
      points: [
        'The Cold War was an ideological, economic and military rivalry between the capitalist United States and the communist Soviet Union, avoiding direct large-scale conflict between them.',
        'Containment, expressed through the Truman Doctrine and Marshall Plan, aimed to prevent the further spread of communism rather than to remove it where it existed.',
        'Berlin was the central flashpoint: the blockade and airlift of 1948-49, then the Wall from 1961 until 1989.',
        'The Cuban Missile Crisis of 1962 brought the superpowers closest to nuclear war and led to improved communication and later arms control agreements.',
        'Mutually assured destruction arguably prevented direct war, while proxy conflicts in Korea, Vietnam and elsewhere caused enormous casualties.',
      ],
    },
    {
      title: 'Rights and decolonisation',
      points: [
        'The US Civil Rights Movement combined legal challenges such as Brown v Board of Education with mass non-violent direct action including boycotts, sit-ins and marches.',
        'Legislative change came through the Civil Rights Act of 1964 and the Voting Rights Act of 1965, though economic inequality persisted.',
        'Apartheid in South Africa (1948-1994) legally enforced racial segregation. Its end resulted from internal resistance, international sanctions and negotiated transition.',
        'Decolonisation accelerated after 1945 as European powers weakened and independence movements strengthened. Outcomes varied from largely negotiated transitions to prolonged armed conflict.',
        'Assessing these movements requires weighing legal change against lived experience, and recognising the role of ordinary participants alongside prominent leaders.',
      ],
    },
  ],

  geography: [
    {
      title: 'Tectonic processes',
      points: [
        'Plates move due to convection in the mantle, with slab pull and ridge push now regarded as the dominant mechanisms.',
        'Destructive (convergent) margins produce subduction, deep-focus earthquakes, explosive composite volcanoes and ocean trenches.',
        'Constructive (divergent) margins produce shallow earthquakes and effusive shield volcanoes with basaltic lava.',
        'Conservative margins produce earthquakes but no volcanoes, since no magma is generated.',
        'Hazard risk depends on the interaction of the physical event with vulnerability and capacity to cope. This is why an earthquake of equal magnitude causes very different death tolls in higher and lower income countries.',
        'Management is divided into prediction, preparation, protection and planning; strong answers evaluate which is most effective and why.',
      ],
    },
    {
      title: 'Rivers',
      points: [
        'Erosion processes: hydraulic action, abrasion, attrition and solution. Transport processes: traction, saltation, suspension and solution.',
        'Upper course features result from vertical erosion: V-shaped valleys, interlocking spurs, waterfalls and gorges formed by undercutting and retreat.',
        'Middle and lower course features result from lateral erosion and deposition: meanders with erosion on the outer bank and deposition on the inner, ox-bow lakes, floodplains and levees.',
        'A hydrograph shows discharge against time. Lag time shortens and peak discharge rises with impermeable geology, urbanisation, steep slopes, deforestation and saturated ground.',
        'Hard engineering (dams, embankments, channel straightening) is effective but costly and can transfer flood risk downstream. Soft engineering (afforestation, floodplain zoning, wetland restoration) works with natural processes and is usually more sustainable.',
      ],
    },
    {
      title: 'Coasts',
      points: [
        'Destructive waves have high frequency and strong backwash, causing erosion; constructive waves have low frequency and strong swash, causing deposition.',
        'Headlands and bays form where alternating resistant and less resistant rock meets the coast at right angles; erosion sequence on a headland runs crack, cave, arch, stack, stump.',
        'Longshore drift moves sediment along the coast where waves approach at an angle, building spits and bars.',
        'Sea walls and groynes protect specific areas but are expensive and groynes starve beaches further along the coast of sediment.',
        'Managed retreat allows the coast to flood in low-value areas, creating salt marsh that absorbs wave energy. It is cheaper and more sustainable but socially contentious.',
      ],
    },
    {
      title: 'Weather and climate',
      points: [
        'Weather is short-term atmospheric conditions; climate is the average over roughly thirty years.',
        'Global atmospheric circulation: air rises at the equator producing low pressure and high rainfall, and sinks around 30 degrees latitude producing high pressure and the major desert belts.',
        'Depressions bring low pressure, frontal rainfall and changeable conditions; anticyclones bring high pressure and settled weather, which can mean heatwaves in summer and fog or frost in winter.',
        'Tropical storms require sea temperatures above about 27 degrees Celsius, sufficient depth of warm water, and distance from the equator for the Coriolis effect to generate rotation. They weaken over land as the energy source is removed.',
        'Relief, convectional and frontal rainfall are distinguished by the mechanism forcing air to rise.',
      ],
    },
    {
      title: 'Climate change',
      points: [
        'Distinguish the natural greenhouse effect, which makes the planet habitable, from the enhanced greenhouse effect caused by additional emissions.',
        'Evidence includes ice cores, tree rings, direct temperature records and shrinking glacier extent. Natural causes such as orbital change and volcanic activity exist but cannot account for the recent rate of warming.',
        'Effects are unevenly distributed: low-lying and lower income regions face the greatest risk despite contributing least to emissions.',
        'Mitigation reduces the cause (renewables, efficiency, carbon capture, afforestation); adaptation reduces the impact (flood defences, drought-resistant crops, managed relocation).',
        'Evaluating any strategy requires weighing effectiveness, cost, and who bears the burden.',
      ],
    },
    {
      title: 'Population and urbanisation',
      points: [
        'The Demographic Transition Model runs from high birth and death rates through falling death rates and rapid growth, to low rates and eventual natural decrease. It is a model based on European experience and does not fit every country.',
        'Push and pull factors drive migration; strong answers distinguish voluntary economic migration from forced displacement.',
        'Rapid urbanisation in lower income countries produces informal settlements when housing and services cannot keep pace with in-migration.',
        'Urban challenges include congestion, air pollution, inequality and waste management. Sustainable strategies include integrated public transport, brownfield redevelopment and green space provision.',
        'Counter-urbanisation and re-urbanisation are the corresponding processes in higher income countries.',
      ],
    },
    {
      title: 'Development',
      points: [
        'Single indicators such as GNI per capita conceal distribution. Composite measures such as the HDI combine income, health and education for a fuller picture.',
        'Causes of the development gap include physical factors (climate, landlocked location, hazard exposure), historical factors (colonialism and its legacies) and economic factors (trade terms and debt).',
        'Strategies for reducing the gap include aid, fair trade, microfinance, debt relief, intermediate technology and investment. Each has trade-offs: aid may create dependency, while investment may prioritise external interests.',
        'Top-down projects are large and government-led; bottom-up projects are small, community-led and often more sustainable but smaller in scale.',
        'Sustainable development meets present needs without compromising the ability of future generations to meet theirs, balancing environmental, social and economic dimensions.',
      ],
    },
    {
      title: 'Resources and fieldwork skills',
      points: [
        'Food, water and energy security all increase in pressure as population and consumption rise.',
        'Energy sources are evaluated on carbon emissions, reliability, cost and land use. Renewables are low carbon but often intermittent, requiring storage or backup capacity.',
        'The water balance compares supply with demand; surplus and deficit regions drive transfer schemes, which are contentious where they cross political boundaries.',
        'Fieldwork requires a justified sampling strategy: random avoids bias, systematic gives even coverage, stratified represents known subgroups.',
        'Data presentation should match the data type: choropleth maps for regional density, proportional symbols for magnitude, scatter graphs for relationships between two variables.',
      ],
    },
  ],

  english: [
    {
      title: 'Analysing language',
      points: [
        'Analysis explains how a specific choice creates a specific effect on the reader. Naming a device without explaining its effect is identification, not analysis, and caps the level achievable.',
        'Zoom in on individual words. Discussing the connotations of a single verb or adjective usually earns more credit than listing three devices.',
        'Connotation is what a word suggests; denotation is its literal meaning. The gap between them is where most analysis lives.',
        'A semantic field is a cluster of related words running through a text, revealing its preoccupations and often its underlying attitude.',
        'Consider what is absent as well as present: omission, understatement and silence are deliberate choices.',
      ],
    },
    {
      title: 'Figurative and rhetorical devices',
      points: [
        'Metaphor asserts identity; simile asserts likeness. The distinction matters because metaphor makes the stronger claim.',
        'Personification, pathetic fallacy and symbolism all invest the non-human with meaning, but pathetic fallacy specifically uses nature or weather to mirror mood.',
        'Juxtaposition places contrasting elements together; antithesis balances opposites within a structure; oxymoron compresses contradiction into a phrase.',
        'Irony means a gap between what is said and what is meant. Dramatic irony is a gap between what a character knows and what the audience knows.',
        'Rhetorical patterning: tricolon, anaphora, direct address and the rhetorical question. Explain why the pattern suits the speaker’s purpose rather than simply labelling it.',
      ],
    },
    {
      title: 'Structure and form',
      points: [
        'Structure is the order in which meaning is revealed. Consider openings, shifts in focus, turning points, and endings that resolve or refuse to resolve.',
        'Narrative perspective shapes sympathy: first person creates intimacy but limits reliability; third person limited restricts us to one consciousness; omniscient narration allows judgement across characters.',
        'An unreliable narrator invites the reader to read against the narration, noticing what the narrator will not admit.',
        'In poetry, comment on enjambment, caesura, stanza length and rhyme scheme only where they do something. Regular form can suggest control or constraint; disrupted form can suggest breakdown.',
        'In drama, examine stage directions, soliloquy, aside and dramatic irony as tools for controlling audience knowledge and sympathy.',
      ],
    },
    {
      title: 'Comparison',
      points: [
        'Organise a comparative response by point, not by text. Handling one text fully and then the other prevents genuine comparison and limits Criterion B.',
        'Compare writers’ methods and effects, not merely content. The strongest comparisons address why two writers treat similar material differently.',
        'Use precise comparative connectives: whereas, conversely, similarly, by contrast, in a comparable way.',
        'Where possible, comment on which treatment is more effective and why, since evaluation lifts a response above description.',
        'Include both texts in each paragraph and return explicitly to the question wording.',
      ],
    },
    {
      title: 'Writing analytically',
      points: [
        'Structure paragraphs with PEEL: point, evidence, explanation, link. The explanation should be the longest element.',
        'Embed short quotations inside your own sentences so the argument keeps moving. Long block quotations dilute analysis.',
        'Use precise analytical verbs: implies, suggests, evokes, undercuts, foregrounds, juxtaposes. Avoid vague verbs such as says or shows.',
        'A thesis statement in the introduction should stake a position that the essay then proves, not merely restate the question.',
        'Refer to the writer as the agent of choices: "Orwell positions the reader to..." rather than "it says in the text...".',
      ],
    },
    {
      title: 'Producing text',
      points: [
        'Identify form, audience and purpose before writing; every stylistic decision should follow from those three.',
        'Match register deliberately: an editorial, a speech and a personal blog demand different levels of formality and different relationships with the reader.',
        'In creative writing, prioritise a controlled voice and a tight focus over an eventful plot. Examiners reward precision of language, not incident.',
        'Use structure deliberately: a cyclical ending, a shift in time, or a deliberate withholding of information demonstrates craft.',
        'Persuasive techniques (AFOREST) work only when integrated with a coherent argument. Piling up devices without a line of reasoning reads as formulaic.',
      ],
    },
    {
      title: 'Using language accurately',
      points: [
        'Vary sentence structures purposefully: a short sentence after several long ones creates emphasis.',
        'Punctuate for effect: the semicolon links closely related independent clauses; the colon introduces explanation or a list; the dash creates an abrupt aside.',
        'Common accuracy errors that cost Criterion D marks: comma splices, its versus it’s, misplaced apostrophes in plurals, and inconsistent tense.',
        'Prefer the active voice for clarity and directness; use the passive deliberately when the agent is unknown or unimportant.',
        'Proofread specifically for one error type at a time rather than rereading generally, which is far more effective under time pressure.',
      ],
    },
    {
      title: 'Reading unseen texts',
      points: [
        'Read the questions before the text so you read with purpose and annotate selectively.',
        'For visual texts, analyse composition, framing, camera or viewing angle, lighting, colour and gaze. A low angle conventionally confers power; a high angle suggests vulnerability.',
        'For non-fiction, identify the argument, the intended audience, and the techniques used to position that audience.',
        'Infer from evidence rather than speculating: every inference should be traceable to something in the text.',
        'Allocate time in proportion to marks. A 20-mark comparison deserves roughly double the time of a 10-mark analysis.',
      ],
    },
  ],
}
