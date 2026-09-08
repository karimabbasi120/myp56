// Replacement bank for the retired legacy question sets, written to the same
// standard as questionsSciences.js and questionsOther.js: MYP Years 4-5.
//
// Standard applied to every question here:
//   - requires reasoning, application or multi-step thinking, never bare recall
//   - no single-step arithmetic and no "what is the unit of X" definition items
//   - distractors represent real misconceptions, not filler
//   - the explanation teaches the underlying principle, not just the answer

export const EXPANSION_QUESTIONS = [
  /* ==================== BIOLOGY ==================== */
  {
    id: 'bioX-1', subject: 'biology', criterion: 'A', topic: 'Exchange surfaces',
    prompt: 'A single-celled organism relies on diffusion alone, but a mammal of the same shape scaled up 100 times could not. This is because…',
    options: [
      'volume increases faster than surface area, so the surface cannot supply the interior',
      'diffusion stops working in larger organisms',
      'larger organisms have thicker membranes',
      'larger organisms respire anaerobically',
    ],
    answer: 0,
    explanation:
      'Surface area scales with the square of length while volume scales with the cube, so the surface area to volume ratio falls. This is precisely why large organisms evolved specialised exchange surfaces such as alveoli and villi.',
  },
  {
    id: 'bioX-2', subject: 'biology', criterion: 'A', topic: 'Osmosis',
    prompt: 'Potato cylinders are left in sucrose solutions. In the most concentrated solution the cylinders lose mass. This is because water moved…',
    options: [
      'out of the cells, since the solution had a lower water potential than the cell sap',
      'into the cells, since sucrose attracts water',
      'out of the cells by active transport',
      'into the cells, causing them to become turgid',
    ],
    answer: 0,
    explanation:
      'Water moves down a water potential gradient. A concentrated external solution has lower water potential than the cell contents, so water leaves and the tissue loses mass. The point of zero mass change identifies the cell sap concentration.',
  },
  {
    id: 'bioX-3', subject: 'biology', criterion: 'A', topic: 'Respiration',
    prompt: 'After a sprint an athlete continues breathing heavily for several minutes. This oxygen debt is repaid in order to…',
    options: [
      'oxidise the lactic acid that built up during anaerobic respiration',
      'refill the lungs with air',
      'cool the body down',
      'replace glucose used in the muscles',
    ],
    answer: 0,
    explanation:
      'Anaerobic respiration in muscle produces lactic acid. Extra oxygen taken in afterwards oxidises it to carbon dioxide and water, which is why deep breathing continues after exercise stops.',
  },
  {
    id: 'bioX-4', subject: 'biology', criterion: 'A', topic: 'Photosynthesis',
    prompt: 'A greenhouse grower increases light intensity but the rate of photosynthesis does not rise. The most likely explanation is that…',
    options: [
      'another factor such as carbon dioxide or temperature has become limiting',
      'light is not needed for photosynthesis',
      'the plants have stopped respiring',
      'chlorophyll has been used up',
    ],
    answer: 0,
    explanation:
      'When a rate plateaus, the factor being changed is no longer limiting. Identifying which factor has taken over is the standard interpretation required for limiting factor graphs.',
  },
  {
    id: 'bioX-5', subject: 'biology', criterion: 'A', topic: 'Circulation',
    prompt: 'Why does the left ventricle have a much thicker muscular wall than the right ventricle?',
    options: [
      'It pumps blood around the whole body, requiring higher pressure',
      'It holds a much greater volume of blood',
      'It pumps blood to the lungs, which are further away',
      'It contains deoxygenated blood, which is denser',
    ],
    answer: 0,
    explanation:
      'The right ventricle pumps only to the lungs, a short low-pressure circuit. The left ventricle must generate enough pressure for the entire systemic circulation, so its wall is thicker.',
  },
  {
    id: 'bioX-6', subject: 'biology', criterion: 'A', topic: 'Inheritance',
    prompt: 'Two parents without a genetic condition have a child who has it. This shows the condition is…',
    options: [
      'recessive, and both parents are carriers',
      'dominant, and one parent must be affected',
      'caused only by the environment',
      'carried on the Y chromosome',
    ],
    answer: 0,
    explanation:
      'If unaffected parents produce an affected child, each parent must carry a recessive allele without expressing it. A dominant condition would require an affected parent.',
  },
  {
    id: 'bioX-7', subject: 'biology', criterion: 'A', topic: 'Nervous system',
    prompt: 'A reflex action is faster than a voluntary response mainly because…',
    options: [
      'the impulse passes through the spinal cord without waiting for conscious processing',
      'reflex neurones are thicker',
      'reflexes do not use synapses',
      'the brain is not involved in any way at any point',
    ],
    answer: 0,
    explanation:
      'The reflex arc routes the impulse via a relay neurone in the spinal cord, so the response begins before the brain processes it. The brain is still informed, but afterwards.',
  },
  {
    id: 'bioX-8', subject: 'biology', criterion: 'A', topic: 'Immunity',
    prompt: 'A person exposed to a pathogen a second time usually shows no symptoms because the secondary response…',
    options: [
      'produces antibodies faster and in greater quantity, thanks to memory cells',
      'produces a completely different type of antibody',
      'destroys the pathogen using stomach acid',
      'relies on antibiotics already in the blood',
    ],
    answer: 0,
    explanation:
      'Memory cells formed during the primary response allow rapid, large-scale antibody production on re-exposure, clearing the pathogen before symptoms develop. This is the principle behind vaccination.',
  },
  {
    id: 'bioX-9', subject: 'biology', criterion: 'B', topic: 'Variables',
    prompt: 'In an osmosis investigation using potato cylinders, which is the most important control variable?',
    options: [
      'The surface area and length of each cylinder',
      'The colour of the beaker',
      'The brand of potato',
      'The time of day',
    ],
    answer: 0,
    explanation:
      'Rate of water movement depends on surface area, so cylinders of different sizes would change mass at different rates regardless of concentration, confounding the results.',
  },
  {
    id: 'bioX-10', subject: 'biology', criterion: 'B', topic: 'Method',
    prompt: 'Why should potato cylinders be blotted dry before being reweighed?',
    options: [
      'Surface liquid would add mass that is not due to osmosis',
      'Wet cylinders are harder to handle',
      'Blotting stops osmosis continuing',
      'It keeps the balance clean',
    ],
    answer: 0,
    explanation:
      'Any solution clinging to the surface is measured as mass gain, producing a systematic error that overstates water uptake in every reading.',
  },
  {
    id: 'bioX-11', subject: 'biology', criterion: 'B', topic: 'Sampling',
    prompt: 'To estimate dandelion abundance in a field, quadrats should be placed…',
    options: [
      'at randomly generated coordinates across the whole field',
      'where the most dandelions are visible',
      'in a single line along one edge',
      'wherever the ground is easiest to reach',
    ],
    answer: 0,
    explanation:
      'Random placement avoids bias. Deliberately choosing dense patches overestimates abundance; a transect is used to study change along a gradient, not overall abundance.',
  },
  {
    id: 'bioX-12', subject: 'biology', criterion: 'C', topic: 'Data analysis',
    prompt: 'A student concludes "the enzyme works best at 40 °C" after testing only 20 °C and 40 °C. The main weakness is that…',
    options: [
      'the optimum could lie anywhere between or beyond those values, since only two were tested',
      'the enzyme was the wrong type',
      'they should have used a thermometer',
      '40 °C is too high for enzymes',
    ],
    answer: 0,
    explanation:
      'Two data points cannot locate an optimum. A valid conclusion needs at least five values across a range, including some above the suspected optimum to show the fall.',
  },
  {
    id: 'bioX-13', subject: 'biology', criterion: 'C', topic: 'Evaluation',
    prompt: 'Counting oxygen bubbles from pondweed is a weak measure of photosynthesis rate mainly because…',
    options: [
      'bubbles vary in size, so bubble count is not proportional to gas volume',
      'oxygen is not produced in photosynthesis',
      'bubbles are too fast to count at any light level',
      'pondweed does not photosynthesise underwater',
    ],
    answer: 0,
    explanation:
      'Bubble counting assumes uniform bubble size, which does not hold. Collecting the gas in a syringe and measuring volume gives valid quantitative data.',
  },
  {
    id: 'bioX-14', subject: 'biology', criterion: 'D', topic: 'Science and society',
    prompt: 'Which is the strongest argument that antibiotic resistance is a societal rather than individual problem?',
    options: [
      'Resistant strains spread between people, so one person’s misuse affects everyone',
      'Antibiotics are expensive to buy',
      'Some people dislike taking tablets',
      'Antibiotics have unpleasant side effects',
    ],
    answer: 0,
    explanation:
      'Resistance is transmissible, so the consequences of misuse are collective. That is why antibiotic stewardship is regulated at population level rather than left to individuals.',
  },

  /* ==================== CHEMISTRY ==================== */
  {
    id: 'chemX-1', subject: 'chemistry', criterion: 'A', topic: 'Bonding',
    prompt: 'Sodium chloride conducts electricity when molten or dissolved but not when solid. This is because…',
    options: [
      'the ions are held in fixed positions in the solid lattice and can only move when free',
      'solid sodium chloride contains no ions',
      'melting converts the ionic bonds into covalent bonds',
      'electrons are released only on melting',
    ],
    answer: 0,
    explanation:
      'Conduction requires mobile charge carriers. The ions exist in the solid but are locked in the lattice; melting or dissolving frees them to move and carry current.',
  },
  {
    id: 'chemX-2', subject: 'chemistry', criterion: 'A', topic: 'Structure',
    prompt: 'Why does carbon dioxide have a much lower boiling point than silicon dioxide, despite both containing covalent bonds?',
    options: [
      'CO2 is a simple molecule with weak intermolecular forces; SiO2 is a giant covalent lattice',
      'CO2 has weaker covalent bonds within the molecule',
      'SiO2 is ionic',
      'CO2 contains metallic bonding',
    ],
    answer: 0,
    explanation:
      'Boiling a simple molecular substance overcomes only the weak forces between molecules, not the strong covalent bonds inside them. A giant covalent lattice requires breaking covalent bonds throughout, needing far more energy.',
  },
  {
    id: 'chemX-3', subject: 'chemistry', criterion: 'A', topic: 'Periodic trends',
    prompt: 'Chlorine displaces bromine from potassium bromide solution. This shows that…',
    options: [
      'chlorine is more reactive and gains electrons more readily than bromine',
      'bromine is more reactive than chlorine',
      'chlorine has a larger atomic radius',
      'the two halogens have equal reactivity',
    ],
    answer: 0,
    explanation:
      'Halogen reactivity decreases down the group because a larger atom attracts an incoming electron less strongly. A more reactive halogen displaces a less reactive one from its salt.',
  },
  {
    id: 'chemX-4', subject: 'chemistry', criterion: 'A', topic: 'Conservation of mass',
    prompt: 'Magnesium is burned in an open crucible and the mass increases. This is because…',
    options: [
      'oxygen from the air has combined with the magnesium',
      'mass has been created in the reaction',
      'the crucible has absorbed heat',
      'magnesium expands when heated',
    ],
    answer: 0,
    explanation:
      'Mass is conserved. In an open system the apparent gain is oxygen entering from the air; a reaction that appears to lose mass is releasing a gas.',
  },
  {
    id: 'chemX-5', subject: 'chemistry', criterion: 'A', topic: 'Rates',
    prompt: 'Raising temperature increases reaction rate more than increasing concentration by an equivalent factor. This is because temperature…',
    options: [
      'increases both collision frequency and the proportion of collisions exceeding activation energy',
      'only increases the number of particles present',
      'lowers the activation energy of the reaction',
      'changes the products formed',
    ],
    answer: 0,
    explanation:
      'Concentration raises collision frequency alone. Temperature does that and shifts the energy distribution, so many more collisions are successful. Only a catalyst lowers activation energy.',
  },
  {
    id: 'chemX-6', subject: 'chemistry', criterion: 'A', topic: 'Energetics',
    prompt: 'A reaction has a total bond-breaking energy of 1200 kJ and bond-making energy of 1450 kJ. The reaction is…',
    options: [
      'exothermic, with an overall change of -250 kJ',
      'endothermic, with an overall change of +250 kJ',
      'exothermic, with an overall change of +250 kJ',
      'neither, since the energies cancel',
    ],
    answer: 0,
    explanation:
      'Overall change = energy in to break bonds minus energy out from making them = 1200 - 1450 = -250 kJ. A negative value means energy is released overall, so the reaction is exothermic.',
  },
  {
    id: 'chemX-7', subject: 'chemistry', criterion: 'A', topic: 'Acids',
    prompt: 'A concentrated solution of a weak acid may have a higher pH than a dilute solution of a strong acid. This is because…',
    options: [
      'strength describes the degree of dissociation, which is independent of concentration',
      'weak acids contain no hydrogen ions at all',
      'concentration and strength mean the same thing',
      'dilute solutions always have a lower pH',
    ],
    answer: 0,
    explanation:
      'A strong acid fully dissociates, releasing all its hydrogen ions; a weak acid only partly dissociates. Concentration measures how much acid is present, strength measures how completely it ionises.',
  },
  {
    id: 'chemX-8', subject: 'chemistry', criterion: 'A', topic: 'Electrolysis',
    prompt: 'During the electrolysis of copper chloride solution, copper forms at the cathode because copper ions…',
    options: [
      'are positive and gain electrons at the negative electrode',
      'are negative and lose electrons at the positive electrode',
      'are attracted to the anode',
      'are reduced at the anode',
    ],
    answer: 0,
    explanation:
      'Cations migrate to the cathode and gain electrons, which is reduction. Remember that reduction always occurs at the cathode, regardless of the electrolyte.',
  },
  {
    id: 'chemX-9', subject: 'chemistry', criterion: 'B', topic: 'Variables',
    prompt: 'Investigating how surface area affects the rate of the marble chip and acid reaction, the total mass of marble must be kept constant because otherwise…',
    options: [
      'the amount of reactant would differ, changing the total gas produced as well as the rate',
      'the acid would evaporate',
      'the chips would dissolve at different temperatures',
      'the balance would be inaccurate',
    ],
    answer: 0,
    explanation:
      'Changing both surface area and quantity confounds the investigation: you could not tell whether a difference in rate came from particle size or from having more reactant.',
  },
  {
    id: 'chemX-10', subject: 'chemistry', criterion: 'B', topic: 'Method',
    prompt: 'Which method gives the most valid measure of reaction rate for a reaction producing gas?',
    options: [
      'Measuring gas volume in a syringe at fixed time intervals',
      'Judging by eye when bubbling appears to stop',
      'Timing until the mixture looks clear',
      'Weighing the flask once at the end',
    ],
    answer: 0,
    explanation:
      'Continuous quantitative measurement at set intervals gives a rate curve from which gradients can be taken. Judgements by eye introduce large, inconsistent errors.',
  },
  {
    id: 'chemX-11', subject: 'chemistry', criterion: 'B', topic: 'Safety',
    prompt: 'Which is a properly expressed control measure in a risk assessment?',
    options: [
      'Wear eye protection because dilute acid is an irritant and can splash',
      'Be careful with the acid',
      'Acid is dangerous',
      'Do not have accidents',
    ],
    answer: 0,
    explanation:
      'A control measure must name the hazard, the risk it poses and the specific action taken. Vague instructions to take care score nothing in Criterion B.',
  },
  {
    id: 'chemX-12', subject: 'chemistry', criterion: 'B', topic: 'Apparatus',
    prompt: 'A burette reading is recorded as 23.00 cm3 rather than 23 cm3 because…',
    options: [
      'it communicates the precision of the instrument to two decimal places',
      'it makes the number look more accurate',
      'burettes always measure whole numbers',
      'it is required for the mean to work',
    ],
    answer: 0,
    explanation:
      'Recording to the resolution of the apparatus shows the precision actually achieved. Dropping decimal places discards genuine information about the measurement.',
  },
  {
    id: 'chemX-13', subject: 'chemistry', criterion: 'C', topic: 'Graphs',
    prompt: 'On a graph of gas volume against time for two concentrations, the more concentrated acid gives a steeper initial gradient but the same final volume. This shows that concentration affects…',
    options: [
      'the rate of reaction but not the total amount of product',
      'both the rate and the total product',
      'the total product but not the rate',
      'neither rate nor product',
    ],
    answer: 0,
    explanation:
      'The limiting reactant determines the final yield. Concentration changes how quickly that yield is reached, which is why the curves converge at the same plateau.',
  },
  {
    id: 'chemX-14', subject: 'chemistry', criterion: 'C', topic: 'Errors',
    prompt: 'A student uses a balance that reads 0.20 g too high for every measurement. This is…',
    options: [
      'a systematic error, which repeats cannot reduce',
      'a random error, which repeats will average out',
      'an anomaly to be excluded',
      'a rounding error only',
    ],
    answer: 0,
    explanation:
      'A consistent offset in the same direction is systematic. Repeating measurements cannot remove it; only recalibrating or zeroing the instrument will.',
  },
  {
    id: 'chemX-15', subject: 'chemistry', criterion: 'C', topic: 'Calculations',
    prompt: 'A titration gives titres of 24.10, 25.60 and 24.15 cm3. The mean titre should be…',
    options: [
      '24.13 cm3, using only the two concordant results',
      '24.62 cm3, using all three results',
      '25.60 cm3, the largest result',
      '24.10 cm3, the first result',
    ],
    answer: 0,
    explanation:
      'Only concordant titres, within 0.10 cm3 of each other, are averaged. The 25.60 reading is an outlier and including it would distort the mean.',
  },
  {
    id: 'chemX-16', subject: 'chemistry', criterion: 'C', topic: 'Conclusions',
    prompt: 'Which conclusion is best supported by data showing rate rising steadily with concentration?',
    options: [
      'Rate increases as concentration increases, consistent with more frequent collisions',
      'Concentration is the only factor affecting rate',
      'Rate will keep increasing without limit',
      'The reaction is exothermic',
    ],
    answer: 0,
    explanation:
      'A strong conclusion states the trend, links it to theory and does not overreach. Claiming the relationship holds without limit, or that no other factor matters, goes beyond the evidence.',
  },
  {
    id: 'chemX-17', subject: 'chemistry', criterion: 'D', topic: 'Sustainability',
    prompt: 'Which is the strongest environmental argument for recycling aluminium rather than extracting it?',
    options: [
      'Recycling uses a small fraction of the electrical energy required for electrolysis',
      'Recycled aluminium is a different metal',
      'Aluminium ore is unlimited',
      'Recycling requires no energy at all',
    ],
    answer: 0,
    explanation:
      'Electrolytic extraction is extremely energy intensive, so recycling avoids most of the associated emissions. Claiming zero energy would be an overstatement and would weaken the argument.',
  },
  {
    id: 'chemX-18', subject: 'chemistry', criterion: 'D', topic: 'Atmosphere',
    prompt: 'A student writes that "the greenhouse effect is damaging the planet". The most accurate correction is that…',
    options: [
      'the natural greenhouse effect makes Earth habitable; the enhanced effect from extra emissions is the problem',
      'the greenhouse effect does not exist',
      'the greenhouse effect only occurs in greenhouses',
      'carbon dioxide cools the atmosphere',
    ],
    answer: 0,
    explanation:
      'Without the natural greenhouse effect the Earth would be far too cold for life. The issue is the enhancement caused by additional carbon dioxide and methane from human activity.',
  },
  {
    id: 'chemX-19', subject: 'chemistry', criterion: 'D', topic: 'Evaluating sources',
    prompt: 'A claim about a fuel’s emissions comes from a study funded by that fuel’s producer. A chemist should…',
    options: [
      'treat the funding as a possible conflict of interest and compare with independent studies',
      'reject the study without reading it',
      'accept it because it is a scientific study',
      'ignore the funding source entirely',
    ],
    answer: 0,
    explanation:
      'Funding is a limitation to weigh, not automatic grounds for dismissal. Triangulating against independent, peer-reviewed work is the scientifically defensible response.',
  },

  /* ==================== PHYSICS ==================== */
  {
    id: 'physX-1', subject: 'physics', criterion: 'A', topic: 'Forces',
    prompt: 'A car travels at a constant 30 m/s along a straight road. The resultant force on it is…',
    options: [
      'zero, because driving force balances friction and drag',
      'forward, because it is moving forward',
      'backward, because of friction',
      'equal to its weight',
    ],
    answer: 0,
    explanation:
      'Constant velocity means zero acceleration, so by Newton’s first law the resultant force is zero. Assuming motion requires a net force is the single most common mechanics misconception.',
  },
  {
    id: 'physX-2', subject: 'physics', criterion: 'A', topic: 'Newton’s laws',
    prompt: 'A book rests on a table. The reaction pair to the book’s weight is…',
    options: [
      'the gravitational pull of the book on the Earth',
      'the normal contact force of the table on the book',
      'the weight of the table',
      'friction between book and table',
    ],
    answer: 0,
    explanation:
      'Third-law pairs act on different objects and are the same type of force. Weight is gravitational, so its pair is the book pulling the Earth. The normal force is a separate contact force that happens to balance the weight.',
  },
  {
    id: 'physX-3', subject: 'physics', criterion: 'A', topic: 'Kinetic energy',
    prompt: 'A car doubles its speed. Its braking distance, assuming the same braking force, becomes approximately…',
    options: [
      'four times as long, because kinetic energy depends on v squared',
      'twice as long',
      'the same',
      'half as long',
    ],
    answer: 0,
    explanation:
      'Kinetic energy = 1/2 m v squared, so doubling speed quadruples the energy that the braking force must remove over the stopping distance. This is why speed limits matter disproportionately.',
  },
  {
    id: 'physX-4', subject: 'physics', criterion: 'A', topic: 'Motion graphs',
    prompt: 'A velocity-time graph shows a horizontal line above the time axis. The object is…',
    options: [
      'moving at constant velocity',
      'stationary',
      'accelerating uniformly',
      'decelerating',
    ],
    answer: 0,
    explanation:
      'Gradient gives acceleration, and a horizontal line has zero gradient, so velocity is constant. A horizontal line on a distance-time graph would mean stationary, which is the classic confusion.',
  },
  {
    id: 'physX-5', subject: 'physics', criterion: 'A', topic: 'Circuits',
    prompt: 'Two identical lamps are connected in parallel rather than series across the same supply. Compared with the series arrangement, they will be…',
    options: [
      'brighter, because each receives the full supply voltage',
      'dimmer, because the current is shared',
      'the same brightness',
      'unlit, because parallel circuits need more voltage',
    ],
    answer: 0,
    explanation:
      'In parallel each lamp has the full supply potential difference across it, so each dissipates more power. In series the supply voltage is divided between them.',
  },
  {
    id: 'physX-6', subject: 'physics', criterion: 'A', topic: 'Waves',
    prompt: 'A wave passes from air into glass and slows down. Its frequency and wavelength…',
    options: [
      'frequency stays the same, wavelength decreases',
      'frequency decreases, wavelength stays the same',
      'both decrease',
      'both stay the same',
    ],
    answer: 0,
    explanation:
      'Frequency is set by the source and cannot change at a boundary. Since v = f x lambda and v falls, the wavelength must decrease proportionally.',
  },
  {
    id: 'physX-7', subject: 'physics', criterion: 'A', topic: 'Thermal physics',
    prompt: 'During melting, energy is supplied but the temperature stays constant because the energy is…',
    options: [
      'breaking the forces between particles rather than increasing their kinetic energy',
      'lost to the surroundings entirely',
      'being converted into mass',
      'increasing the kinetic energy of the particles',
    ],
    answer: 0,
    explanation:
      'Temperature measures mean kinetic energy. During a change of state the supplied energy increases potential energy by separating particles, so the temperature plateaus on a heating curve.',
  },
  {
    id: 'physX-8', subject: 'physics', criterion: 'A', topic: 'Radioactivity',
    prompt: 'A sample’s activity falls from 640 Bq to 40 Bq in 12 hours. Its half-life is…',
    options: ['3 hours', '4 hours', '6 hours', '2 hours'],
    answer: 0,
    explanation:
      '640 to 320 to 160 to 80 to 40 is four halvings. 12 hours divided by 4 gives a half-life of 3 hours.',
  },
  {
    id: 'physX-9', subject: 'physics', criterion: 'A', topic: 'Momentum',
    prompt: 'Crumple zones reduce injury in a collision because they…',
    options: [
      'increase the time over which momentum changes, reducing the average force',
      'increase the change in momentum',
      'make the car heavier',
      'reduce the mass of the passengers',
    ],
    answer: 0,
    explanation:
      'For the same change in momentum, a longer contact time gives a smaller average force. This is the reasoning behind airbags, helmets and safety barriers as well.',
  },
  {
    id: 'physX-10', subject: 'physics', criterion: 'B', topic: 'Variables',
    prompt: 'Investigating how the length of a wire affects its resistance, why must the current be kept low and switched on only briefly?',
    options: [
      'Heating changes the wire’s resistance, confounding the results',
      'High current is expensive',
      'Low current is easier to read',
      'It makes the wire longer',
    ],
    answer: 0,
    explanation:
      'Resistance of a metal rises with temperature. Allowing the wire to heat introduces an uncontrolled variable, so the measured resistance would not depend on length alone.',
  },
  {
    id: 'physX-11', subject: 'physics', criterion: 'B', topic: 'Method',
    prompt: 'Timing 20 oscillations of a pendulum rather than one reduces the effect of…',
    options: [
      'random error from human reaction time',
      'systematic error in the ruler',
      'air resistance',
      'the mass of the bob',
    ],
    answer: 0,
    explanation:
      'Reaction time is a roughly fixed uncertainty per timing event. Spreading it across many oscillations reduces its proportional effect on each calculated period.',
  },
  {
    id: 'physX-12', subject: 'physics', criterion: 'B', topic: 'Hypothesis',
    prompt: 'Which hypothesis is best suited to Criterion B?',
    options: [
      'Resistance will increase in proportion to length, because a longer wire means more collisions between electrons and ions',
      'Length will change the resistance',
      'I think resistance will go up',
      'Resistance and length are related',
    ],
    answer: 0,
    explanation:
      'Criterion B rewards a directional, quantitative prediction supported by correct scientific reasoning. The other options state that something will change without explaining why.',
  },
  {
    id: 'physX-13', subject: 'physics', criterion: 'B', topic: 'Apparatus',
    prompt: 'To measure the small extension of a spring accurately, the best approach is to…',
    options: [
      'use a ruler with a fixed pointer at eye level to avoid parallax',
      'estimate the extension by eye',
      'measure once and multiply',
      'use a metre rule held by hand',
    ],
    answer: 0,
    explanation:
      'Parallax error arises when the scale is read at an angle. A fixed reference pointer and eye-level reading remove that systematic error.',
  },
  {
    id: 'physX-14', subject: 'physics', criterion: 'C', topic: 'Graphs',
    prompt: 'A force-extension graph is linear then curves at higher force. Beyond the curve, the spring…',
    options: [
      'has passed its limit of proportionality and no longer obeys Hooke’s law',
      'has become stronger',
      'is following Hooke’s law more closely',
      'has zero extension',
    ],
    answer: 0,
    explanation:
      'Hooke’s law holds only while extension is proportional to force. Beyond the limit of proportionality the spring deforms and may not return to its original length.',
  },
  {
    id: 'physX-15', subject: 'physics', criterion: 'C', topic: 'Uncertainty',
    prompt: 'A length is measured five times as 12.1, 12.2, 12.1, 12.3 and 12.1 cm. The results are best described as…',
    options: [
      'precise, since the values are closely grouped, though accuracy cannot be judged without a true value',
      'accurate but not precise',
      'both accurate and precise',
      'neither accurate nor precise',
    ],
    answer: 0,
    explanation:
      'Precision is about agreement between repeats; accuracy is closeness to the true value. Without knowing the true length, only precision can be assessed from this data.',
  },
  {
    id: 'physX-16', subject: 'physics', criterion: 'C', topic: 'Analysis',
    prompt: 'A graph of resistance against length passes through the origin as a straight line. This shows resistance is…',
    options: [
      'directly proportional to length',
      'inversely proportional to length',
      'independent of length',
      'proportional to length squared',
    ],
    answer: 0,
    explanation:
      'Direct proportionality requires both a straight line and passage through the origin. A straight line with a non-zero intercept shows a linear relationship but not proportionality.',
  },
  {
    id: 'physX-17', subject: 'physics', criterion: 'C', topic: 'Evaluation',
    prompt: 'Which statement is a genuine evaluation rather than a description?',
    options: [
      'Heat loss to the surroundings was not controlled, so the measured energy transfer was lower than the true value',
      'We used a thermometer and a stopwatch',
      'The experiment was carried out carefully',
      'The results were recorded in a table',
    ],
    answer: 0,
    explanation:
      'Evaluation identifies a specific weakness and states the direction of its effect on the results. Listing equipment or asserting care describes the method instead.',
  },
  {
    id: 'physX-18', subject: 'physics', criterion: 'D', topic: 'Energy resources',
    prompt: 'Which is the fairest comparison of solar power with gas-fired generation?',
    options: [
      'Solar emits no CO2 in operation but is intermittent, so storage or backup is required',
      'Solar is better in every respect',
      'Gas is better because it is always available',
      'Both have identical environmental impacts',
    ],
    answer: 0,
    explanation:
      'A balanced evaluation names a genuine advantage and a genuine limitation. One-sided claims in either direction score poorly in Criterion D.',
  },
  {
    id: 'physX-19', subject: 'physics', criterion: 'D', topic: 'Technology and risk',
    prompt: 'Which best explains why radiographers stand behind a screen while patients do not?',
    options: [
      'Patients receive a single justified dose, while staff would accumulate exposure from many patients',
      'X-rays are harmless to patients',
      'The screen makes the image clearer',
      'Patients are protected by their clothing',
    ],
    answer: 0,
    explanation:
      'Risk depends on cumulative dose. A single diagnostic exposure carries small risk that is justified by the benefit, but repeated daily exposure would not be.',
  },
  {
    id: 'physX-20', subject: 'physics', criterion: 'D', topic: 'Science in society',
    prompt: 'Which is a scientific rather than an ethical objection to a new power station?',
    options: [
      'Modelling shows the cooling water would raise river temperature and reduce oxygen for fish',
      'Local residents were not consulted properly',
      'It would benefit shareholders more than the community',
      'Future generations did not agree to it',
    ],
    answer: 0,
    explanation:
      'Scientific objections rest on measurable physical consequences. The others concern fairness, consent and distribution of benefit, which are ethical dimensions.',
  },

  /* ==================== MATHEMATICS ==================== */
  {
    id: 'mathX-1', subject: 'mathematics', criterion: 'A', topic: 'Percentages',
    levels: ['standard', 'extended'],
    prompt: 'After a 20% increase, a price is $84. The original price was…',
    options: ['$70.00', '$67.20', '$64.00', '$105.00'],
    answer: 0,
    explanation:
      'This is a reverse percentage: divide by the multiplier rather than subtracting. 84 / 1.2 = $70. Subtracting 20% from 84 gives 67.20, the classic wrong answer.',
  },
  {
    id: 'mathX-2', subject: 'mathematics', criterion: 'A', topic: 'Compound interest',
    levels: ['standard', 'extended'],
    prompt: 'A car worth $18 000 depreciates by 15% per year. Its value after 3 years is closest to…',
    options: ['$11 048', '$9 900', '$12 750', '$8 100'],
    answer: 0,
    explanation:
      '18000 x 0.85 cubed = 18000 x 0.614125 = $11 054 approximately. Subtracting 45% in one step gives $9900, which ignores that each year applies to a reducing balance.',
  },
  {
    id: 'mathX-3', subject: 'mathematics', criterion: 'A', topic: 'Similar shapes',
    levels: ['standard', 'extended'],
    prompt: 'Two similar solids have lengths in the ratio 2 : 3. Their volumes are in the ratio…',
    options: ['8 : 27', '2 : 3', '4 : 9', '6 : 9'],
    answer: 0,
    explanation:
      'Volume scales with the cube of the length ratio, so 2 cubed : 3 cubed = 8 : 27. Area would scale with the square, giving 4 : 9.',
  },
  {
    id: 'mathX-4', subject: 'mathematics', criterion: 'A', topic: 'Bounds',
    levels: ['extended'],
    prompt: 'A length is measured as 24 cm to the nearest centimetre. The upper bound is…',
    options: ['24.5 cm', '24.4 cm', '25 cm', '24.9 cm'],
    answer: 0,
    explanation:
      'Rounding to the nearest unit means the true value lies within plus or minus half a unit, so the interval is 23.5 to 24.5 cm.',
  },
  {
    id: 'mathX-5', subject: 'mathematics', criterion: 'A', topic: 'Simultaneous equations',
    levels: ['extended'],
    prompt: 'Solve 3x + 2y = 16 and x - y = 3.',
    options: [
      'x = 4.4, y = 1.4',
      'x = 3, y = 0',
      'x = 5, y = 2',
      'x = 2, y = 5',
    ],
    answer: 0,
    explanation:
      'From the second equation x = y + 3. Substituting: 3(y + 3) + 2y = 16, so 5y + 9 = 16, giving y = 1.4 and x = 4.4.',
  },
  {
    id: 'mathX-6', subject: 'mathematics', criterion: 'A', topic: 'Circle theorems',
    levels: ['extended'],
    prompt: 'A triangle is drawn with one side as the diameter of a circle and the opposite vertex on the circumference. That vertex angle is…',
    options: ['90 degrees', '60 degrees', '45 degrees', 'variable'],
    answer: 0,
    explanation:
      'The angle in a semicircle is always a right angle, whatever the position of the vertex on the circumference. This is a standard circle theorem.',
  },
  {
    id: 'mathX-7', subject: 'mathematics', criterion: 'A', topic: 'Trigonometry',
    levels: ['extended'],
    prompt: 'In a triangle with sides 7 cm and 9 cm enclosing an angle of 40 degrees, which rule finds the third side?',
    options: [
      'The cosine rule',
      'The sine rule',
      'Pythagoras',
      'SOH CAH TOA',
    ],
    answer: 0,
    explanation:
      'With two sides and the included angle, the cosine rule applies. The sine rule needs a matching side and opposite angle pair, and Pythagoras requires a right angle.',
  },
  {
    id: 'mathX-8', subject: 'mathematics', criterion: 'A', topic: 'Indices',
    levels: ['extended'],
    prompt: 'Evaluate 16 to the power of three quarters.',
    options: ['8', '12', '64', '4'],
    answer: 0,
    explanation:
      'A fractional index means root then power: the fourth root of 16 is 2, and 2 cubed is 8.',
  },
  {
    id: 'mathX-9', subject: 'mathematics', criterion: 'B', topic: 'Sequences',
    levels: ['standard', 'extended'],
    prompt: 'A sequence has nth term 2n squared + 1. The difference between the 5th and 4th terms is…',
    options: ['18', '9', '20', '2'],
    answer: 0,
    explanation:
      '5th term = 2(25) + 1 = 51; 4th term = 2(16) + 1 = 33. The difference is 18. Note the differences are not constant, confirming a quadratic rule.',
  },
  {
    id: 'mathX-10', subject: 'mathematics', criterion: 'B', topic: 'Generalisation',
    levels: ['standard', 'extended'],
    prompt: 'A pattern of dots grows 1, 5, 12, 22. The second differences are 3, so the rule is…',
    options: [
      'quadratic, with 1.5n squared as the leading term',
      'linear, with 3n as the leading term',
      'exponential',
      'impossible to determine',
    ],
    answer: 0,
    explanation:
      'Constant second differences indicate a quadratic rule, and the coefficient of n squared is half the second difference, giving 1.5n squared.',
  },
  {
    id: 'mathX-11', subject: 'mathematics', criterion: 'B', topic: 'Proof',
    levels: ['extended'],
    prompt: 'Which argument proves that the sum of two consecutive integers is always odd?',
    options: [
      'Let the integers be n and n + 1; their sum is 2n + 1, which is one more than an even number',
      'Testing 3 + 4, 7 + 8 and 11 + 12 gives odd answers each time',
      'It is obvious from the pattern',
      'Odd plus even is always odd',
    ],
    answer: 0,
    explanation:
      'A proof must hold for all cases, which requires algebra. Testing examples verifies but never proves, and this distinction is exactly what Criterion B assesses at the top levels.',
  },
  {
    id: 'mathX-12', subject: 'mathematics', criterion: 'B', topic: 'Investigation',
    levels: ['standard', 'extended'],
    prompt: 'A student finds a rule that fits terms 1 to 5 but fails at term 6. The best next step is to…',
    options: [
      'revisit the rule, since a single counterexample disproves it',
      'ignore term 6 as an anomaly',
      'keep the rule because it works most of the time',
      'test more terms until it works again',
    ],
    answer: 0,
    explanation:
      'One counterexample is sufficient to disprove a general rule. Data can contain anomalies, but a mathematical rule cannot simply exclude inconvenient cases.',
  },
  {
    id: 'mathX-13', subject: 'mathematics', criterion: 'D', topic: 'Modelling',
    levels: ['standard', 'extended'],
    prompt: 'A phone plan is modelled as C = 0.05m + 12, where m is minutes used. The 12 represents…',
    options: [
      'the fixed monthly charge regardless of usage',
      'the cost per minute',
      'the number of free minutes',
      'the total monthly cost',
    ],
    answer: 0,
    explanation:
      'In a linear model the intercept is the value when the variable is zero, here the standing charge. The gradient 0.05 is the cost per minute.',
  },
  {
    id: 'mathX-14', subject: 'mathematics', criterion: 'D', topic: 'Accuracy',
    levels: ['standard', 'extended'],
    prompt: 'A calculation for the number of buses needed for 130 students, each bus holding 45, gives 2.888. The correct answer in context is…',
    options: [
      '3 buses, since a fraction of a bus cannot be hired',
      '2.9 buses',
      '2 buses',
      '2.888 buses',
    ],
    answer: 0,
    explanation:
      'Criterion D requires interpreting the answer in context. Rounding down would leave students without transport, so the answer must round up regardless of the decimal.',
  },
  {
    id: 'mathX-15', subject: 'mathematics', criterion: 'D', topic: 'Interpreting statistics',
    levels: ['standard', 'extended'],
    prompt: 'Mean income in a town is $54 000 but the median is $31 000. This suggests that…',
    options: [
      'a small number of very high incomes are pulling the mean upward',
      'most people earn above $54 000',
      'the data must contain an error',
      'the median is always the better average',
    ],
    answer: 0,
    explanation:
      'A mean well above the median indicates positive skew from high outliers. This is why median income is normally quoted when describing typical earnings.',
  },
  {
    id: 'mathX-16', subject: 'mathematics', criterion: 'D', topic: 'Probability',
    levels: ['standard', 'extended'],
    prompt: 'A fair coin lands heads five times in a row. The probability the next flip is heads is…',
    options: [
      '1/2, since flips are independent',
      'less than 1/2, because tails is overdue',
      'greater than 1/2, because heads is on a streak',
      'impossible to determine',
    ],
    answer: 0,
    explanation:
      'The gambler’s fallacy assumes past independent events influence future ones. A fair coin has no memory, so the probability remains 1/2 every flip.',
  },
  {
    id: 'mathX-17', subject: 'mathematics', criterion: 'D', topic: 'Sampling',
    levels: ['standard', 'extended'],
    prompt: 'A survey about sports facilities is conducted only at a gym. The main problem is that the sample is…',
    options: [
      'biased, since gym users are more likely to favour sports spending',
      'too large to analyse',
      'too expensive to collect',
      'perfectly representative',
    ],
    answer: 0,
    explanation:
      'The sampling location systematically over-represents one view. Increasing the sample size at the same location would not fix the bias, which is a common misconception.',
  },
  {
    id: 'mathX-18', subject: 'mathematics', criterion: 'D', topic: 'Compound measures',
    levels: ['extended'],
    prompt: 'A journey of 120 km is driven at 80 km/h and the return at 60 km/h. The average speed for the whole trip is…',
    options: [
      'about 68.6 km/h',
      '70 km/h',
      '74 km/h',
      '65 km/h',
    ],
    answer: 0,
    explanation:
      'Average speed is total distance over total time, not the mean of the two speeds. Time out = 1.5 h, back = 2 h, so 240 / 3.5 = 68.6 km/h. Averaging to 70 is the standard trap.',
  },

  /* ==================== ENGLISH ==================== */
  {
    id: 'engX-1', subject: 'english', criterion: 'A', topic: 'Effect of language',
    prompt: 'A writer describes a crowd as "a single organism, breathing as one". The main effect is to…',
    options: [
      'present the crowd as having lost individual identity, becoming a single entity',
      'suggest the crowd is unhealthy',
      'indicate the crowd is very large',
      'imply the crowd is peaceful',
    ],
    answer: 0,
    explanation:
      'The metaphor collapses many people into one living thing, erasing individuality. Analysis requires explaining what the comparison implies, not just naming it as a metaphor.',
  },
  {
    id: 'engX-2', subject: 'english', criterion: 'A', topic: 'Verb choice',
    prompt: 'A character "shuffled" into the room rather than "walked". The verb primarily conveys…',
    options: [
      'reluctance, weariness or diminished status',
      'the speed of the movement only',
      'the size of the room',
      'the time of day',
    ],
    answer: 0,
    explanation:
      'Precise verb choice carries characterisation. "Shuffled" implies dragging feet and low energy, positioning the reader to read the character as defeated or hesitant.',
  },
  {
    id: 'engX-3', subject: 'english', criterion: 'A', topic: 'Structure',
    prompt: 'A short story opens with its ending and then moves backwards. This structure most likely…',
    options: [
      'shifts attention from what happens to why it happened',
      'confuses the reader unintentionally',
      'shows the writer could not plan',
      'has no particular effect',
    ],
    answer: 0,
    explanation:
      'Revealing the outcome first removes suspense about events and redirects interest towards causes and motivation. Commenting on why a structural choice was made is what lifts structural analysis.',
  },
  {
    id: 'engX-4', subject: 'english', criterion: 'A', topic: 'Narrative voice',
    prompt: 'A first-person narrator repeatedly insists "I am not the kind of person who lies". The reader is most likely positioned to…',
    options: [
      'doubt the narrator, since the insistence itself is suspicious',
      'trust the narrator completely',
      'ignore the statement',
      'assume the narrator is the author',
    ],
    answer: 0,
    explanation:
      'Repeated denial signals an unreliable narrator, inviting the reader to read against the narration. Recognising this gap is a higher-order analytical skill.',
  },
  {
    id: 'engX-5', subject: 'english', criterion: 'A', topic: 'Visual texts',
    prompt: 'In an advertisement the product is lit brightly while the background is dark and blurred. This composition…',
    options: [
      'directs attention to the product and isolates it as the focal point',
      'suggests the product is used at night',
      'shows the photographer lacked equipment',
      'indicates the product is inexpensive',
    ],
    answer: 0,
    explanation:
      'Lighting and depth of field are deliberate compositional choices that control where the viewer looks. Visual analysis is assessed alongside written text in MYP English.',
  },
  {
    id: 'engX-6', subject: 'english', criterion: 'A', topic: 'Tone',
    prompt: 'A newspaper column calls a policy "a masterclass in how to waste public money". The tone is…',
    options: [
      'sarcastic, using praise vocabulary to convey criticism',
      'sincerely admiring',
      'neutral and factual',
      'nostalgic',
    ],
    answer: 0,
    explanation:
      '"Masterclass" carries positive connotations, deliberately clashing with "waste public money". Recognising the gap between literal wording and intended meaning identifies sarcasm.',
  },
  {
    id: 'engX-7', subject: 'english', criterion: 'A', topic: 'Context',
    prompt: 'Analysing a 1930s text about unemployment, referring to the Great Depression is useful because it…',
    options: [
      'explains the concerns shaping the writer’s choices and the original audience’s response',
      'shows off historical knowledge',
      'replaces the need for textual evidence',
      'proves the writer was correct',
    ],
    answer: 0,
    explanation:
      'Context is credited when it illuminates meaning. Context bolted on without connecting to the text itself gains nothing, which is a frequent weakness.',
  },
  {
    id: 'engX-8', subject: 'english', criterion: 'A', topic: 'Poetry',
    prompt: 'A poem in regular, tightly rhymed quatrains describes a speaker trapped in routine. The form most likely…',
    options: [
      'mirrors the constraint being described, reinforcing the theme',
      'contradicts the content pointlessly',
      'shows the poet preferred traditional forms',
      'has no relationship to meaning',
    ],
    answer: 0,
    explanation:
      'Form can enact meaning. Rigid, predictable structure reinforcing a theme of confinement is exactly the kind of link examiners reward, provided it is explained rather than asserted.',
  },
  {
    id: 'engX-9', subject: 'english', criterion: 'B', topic: 'Essay structure',
    prompt: 'Which opening sentence works best as a thesis statement?',
    options: [
      'Both writers present isolation as self-imposed, though Text A treats it as tragic and Text B as liberating',
      'This essay will compare two texts about isolation',
      'Isolation is an interesting theme in literature',
      'I am going to write about Text A and Text B',
    ],
    answer: 0,
    explanation:
      'A thesis takes an arguable position that the essay then proves. Announcing intentions or stating that a theme is interesting commits to no argument.',
  },
  {
    id: 'engX-10', subject: 'english', criterion: 'B', topic: 'Paragraphing',
    prompt: 'A paragraph contains three quotations and one sentence of commentary. The most likely weakness is that…',
    options: [
      'evidence outweighs analysis, so the effects are not explained',
      'there are too few quotations',
      'the paragraph is too short',
      'quotations should never be used',
    ],
    answer: 0,
    explanation:
      'Evidence alone does not analyse. Strong paragraphs use fewer, well-chosen quotations with sustained explanation of their effect.',
  },
  {
    id: 'engX-11', subject: 'english', criterion: 'B', topic: 'Cohesion',
    prompt: 'Which sentence best links a new paragraph to the previous argument?',
    options: [
      'This sense of confinement intensifies when the setting shifts to the city',
      'Another thing is the city',
      'Next, the city.',
      'Moving on to my next point about the city',
    ],
    answer: 0,
    explanation:
      'Effective cohesion carries an idea forward rather than announcing a change of topic. Signposting phrases like "another thing" add no analytical content.',
  },
  {
    id: 'engX-12', subject: 'english', criterion: 'B', topic: 'Comparison',
    prompt: 'In a comparative essay, which paragraph opening is strongest?',
    options: [
      'Whereas Text A uses long flowing sentences to suggest freedom, Text B fragments its syntax to convey panic',
      'In Text A the writer uses long sentences',
      'Now I will discuss Text B',
      'Text A and Text B are both interesting',
    ],
    answer: 0,
    explanation:
      'Genuine comparison holds both texts in view within a single point and names the methods and effects being compared.',
  },
  {
    id: 'engX-13', subject: 'english', criterion: 'B', topic: 'Conventions',
    prompt: 'When writing a formal article, which structural feature is most appropriate?',
    options: [
      'A clear headline, a hook opening and paragraphs that develop one idea each',
      'Bullet points throughout',
      'A single unbroken block of text',
      'A numbered list of facts only',
    ],
    answer: 0,
    explanation:
      'Criterion B assesses whether structure follows the conventions of the required text type. Article conventions include headline, engaging opening and developed paragraphs.',
  },
  {
    id: 'engX-14', subject: 'english', criterion: 'D', topic: 'Register',
    prompt: 'Which sentence best suits a formal speech to a school board?',
    options: [
      'I would urge the board to consider the long-term consequences of this decision',
      'You guys really need to think about this properly',
      'This decision is a total disaster, obviously',
      'Anyway, that is basically my point',
    ],
    answer: 0,
    explanation:
      'Formal register uses measured, respectful phrasing appropriate to the audience. Colloquialisms and dismissive assertions undermine credibility with that audience.',
  },
  {
    id: 'engX-15', subject: 'english', criterion: 'D', topic: 'Syntax',
    prompt: 'Which sentence uses a semicolon correctly?',
    options: [
      'The storm had passed; the streets were silent.',
      'The storm had passed; and the streets were silent.',
      'Although the storm had passed; the streets were silent.',
      'The storm; had passed the streets were silent.',
    ],
    answer: 0,
    explanation:
      'A semicolon joins two independent clauses that could each stand alone. It is not used before a conjunction, nor after a subordinate clause.',
  },
  {
    id: 'engX-16', subject: 'english', criterion: 'D', topic: 'Accuracy',
    prompt: 'Which sentence contains a comma splice?',
    options: [
      'The rain stopped, we went outside.',
      'The rain stopped, so we went outside.',
      'When the rain stopped, we went outside.',
      'The rain stopped. We went outside.',
    ],
    answer: 0,
    explanation:
      'A comma splice joins two independent clauses with only a comma. It is fixed with a full stop, a semicolon, or a coordinating conjunction.',
  },
  {
    id: 'engX-17', subject: 'english', criterion: 'D', topic: 'Precision',
    prompt: 'Which sentence shows the most precise academic expression?',
    options: [
      'The imagery of decay foreshadows the family’s collapse',
      'There is a lot of imagery about things rotting which shows bad stuff coming',
      'The writer puts in decay imagery',
      'Decay imagery is used a lot in the text',
    ],
    answer: 0,
    explanation:
      'Precision means naming the technique, its subject and its effect economically. Vague phrasing and filler verbs weaken Criterion D.',
  },
  {
    id: 'engX-18', subject: 'english', criterion: 'D', topic: 'Sentence variety',
    prompt: 'A writer follows three long complex sentences with "Then nothing." The effect of that short sentence is to…',
    options: [
      'create emphasis and a sense of abrupt stillness through contrast',
      'show the writer ran out of ideas',
      'correct a grammatical error',
      'signal the end of the text',
    ],
    answer: 0,
    explanation:
      'Sentence length is a deliberate stylistic tool. Contrast with surrounding rhythm is what produces the emphasis, which is why the effect must be explained in relation to what precedes it.',
  },
  {
    id: 'engX-19', subject: 'english', criterion: 'D', topic: 'Voice',
    prompt: 'Which sentence uses the passive voice appropriately?',
    options: [
      'The samples were collected over a six-month period',
      'The ball was chased by the dog',
      'A decision was made by me',
      'The book was liked by her',
    ],
    answer: 0,
    explanation:
      'The passive is appropriate when the agent is unknown or unimportant, as in scientific reporting. Elsewhere the active voice is usually clearer and more direct.',
  },
  {
    id: 'engX-20', subject: 'english', criterion: 'D', topic: 'Audience',
    prompt: 'Writing a blog post for students about exam stress, the most effective choice is to…',
    options: [
      'use direct address and accessible language while keeping a clear structure',
      'use dense academic terminology throughout',
      'write entirely in slang',
      'avoid addressing the reader at all',
    ],
    answer: 0,
    explanation:
      'Criterion D rewards matching register to audience and purpose. Accessibility here is a deliberate choice, not a lowering of standards, and structure must still be controlled.',
  },

  /* ==================== HISTORY ==================== */
  {
    id: 'hisX-1', subject: 'history', criterion: 'A', topic: 'Causation',
    prompt: 'Which best explains why the alliance system turned a regional dispute into a European war in 1914?',
    options: [
      'Treaty obligations meant an attack on one power drew in its allies automatically',
      'All European countries hated each other equally',
      'Alliances were signed only after the war began',
      'The alliances were secret and therefore irrelevant',
    ],
    answer: 0,
    explanation:
      'Chains of obligation converted a bilateral Austro-Serbian conflict into a continental war. Explaining the mechanism, not just naming the alliance system, is what Criterion A rewards.',
  },
  {
    id: 'hisX-2', subject: 'history', criterion: 'A', topic: 'Causation',
    prompt: 'Historians distinguish the assassination of Franz Ferdinand from militarism because the assassination was…',
    options: [
      'a trigger, whereas militarism was a long-term underlying cause',
      'a long-term cause, whereas militarism was a trigger',
      'a consequence rather than a cause',
      'irrelevant to the outbreak of war',
    ],
    answer: 0,
    explanation:
      'Triggers are immediate sparks; underlying causes create the conditions in which a spark can ignite conflict. Confusing the two is one of the most common errors in causation essays.',
  },
  {
    id: 'hisX-3', subject: 'history', criterion: 'A', topic: 'Versailles',
    prompt: 'The "war guilt clause" of the Treaty of Versailles mattered politically because it…',
    options: [
      'provided the legal basis for reparations and was deeply resented in Germany',
      'physically divided Germany in two',
      'created the Soviet Union',
      'ended the League of Nations',
    ],
    answer: 0,
    explanation:
      'Article 231 assigned responsibility for the war, justifying reparations. Its symbolic humiliation was exploited politically in the 1920s and 1930s.',
  },
  {
    id: 'hisX-4', subject: 'history', criterion: 'A', topic: 'Rise of dictatorship',
    prompt: 'Which best explains how Hitler consolidated power after becoming Chancellor in 1933?',
    options: [
      'He used the Reichstag Fire Decree and Enabling Act to dismantle legal opposition',
      'He seized power in a military coup',
      'He won an outright majority in a free election held in 1934',
      'He was appointed by a foreign government',
    ],
    answer: 0,
    explanation:
      'Hitler came to power legally and then used emergency and enabling legislation to remove constitutional constraints. The gradual, legal nature of the process is historically significant.',
  },
  {
    id: 'hisX-5', subject: 'history', criterion: 'A', topic: 'Depression',
    prompt: 'Why did the Great Depression strengthen extremist parties in Germany?',
    options: [
      'Mass unemployment discredited existing governments and made radical solutions appealing',
      'Extremists controlled the banks',
      'The Depression only affected Germany',
      'Democratic parties were banned in 1929',
    ],
    answer: 0,
    explanation:
      'Economic collapse undermined confidence in the Weimar system. Establishing this causal link between economic crisis and political radicalisation is a standard Criterion A demand.',
  },
  {
    id: 'hisX-6', subject: 'history', criterion: 'A', topic: 'Appeasement',
    prompt: 'Which best explains why appeasement seemed reasonable to many in Britain in 1938?',
    options: [
      'Memories of the First World War, rearmament gaps and fear of communism made avoiding war attractive',
      'Britain supported Nazi ideology',
      'Britain had no army at all',
      'Nobody knew Hitler had expansionist aims',
    ],
    answer: 0,
    explanation:
      'Judging past decisions requires reconstructing what was known and feared at the time. Dismissing appeasement as simple cowardice ignores its contemporary logic.',
  },
  {
    id: 'hisX-7', subject: 'history', criterion: 'A', topic: 'Cold War',
    prompt: 'The Marshall Plan served US strategic interests because economic recovery in Western Europe would…',
    options: [
      'reduce the appeal of communism and create markets for US goods',
      'allow the US to annex European territory',
      'weaken Western European governments',
      'guarantee Soviet cooperation',
    ],
    answer: 0,
    explanation:
      'Containment operated economically as well as militarily. Recognising that aid served both humanitarian and strategic purposes is a more sophisticated reading than either alone.',
  },
  {
    id: 'hisX-8', subject: 'history', criterion: 'A', topic: 'Cold War',
    prompt: 'Why is the Cold War described as "cold" despite enormous casualties worldwide?',
    options: [
      'The superpowers never fought each other directly, conflict occurring through proxy wars',
      'No fighting occurred anywhere',
      'It took place mainly in cold climates',
      'It involved only economic competition',
    ],
    answer: 0,
    explanation:
      'Direct superpower conflict was deterred by nuclear weapons, but proxy wars in Korea, Vietnam and elsewhere caused millions of deaths. The term describes the superpower relationship, not global peace.',
  },
  {
    id: 'hisX-9', subject: 'history', criterion: 'A', topic: 'Industrialisation',
    prompt: 'Why did industrial cities in the early nineteenth century experience high death rates?',
    options: [
      'Rapid unplanned growth outpaced sanitation, causing overcrowding and waterborne disease',
      'Industrial work was always immediately fatal',
      'Cities had no food supply at all',
      'Medicine had not yet been invented',
    ],
    answer: 0,
    explanation:
      'Population growth outstripped housing and sewerage, so cholera and typhus spread through contaminated water. This links economic change to social consequence.',
  },
  {
    id: 'hisX-10', subject: 'history', criterion: 'A', topic: 'Abolition',
    prompt: 'Historians debate abolition because it resulted from a combination of…',
    options: [
      'moral campaigning, resistance by enslaved people, and shifting economic interests',
      'a single act of parliamentary generosity',
      'foreign military intervention',
      'a spontaneous change of public opinion overnight',
    ],
    answer: 0,
    explanation:
      'Multi-causal explanations are stronger than single-cause ones. In particular, the agency of enslaved people, including the Haitian Revolution and sustained resistance, is central to current scholarship.',
  },
  {
    id: 'hisX-11', subject: 'history', criterion: 'A', topic: 'Change and continuity',
    prompt: 'A historian argues that despite gaining the vote, women’s daily working lives changed slowly. This is an argument about…',
    options: [
      'continuity persisting alongside significant political change',
      'causation only',
      'the unreliability of sources',
      'chronology',
    ],
    answer: 0,
    explanation:
      'Change and continuity operate simultaneously and at different rates for different groups. Recognising this complexity distinguishes strong historical writing.',
  },
  {
    id: 'hisX-12', subject: 'history', criterion: 'A', topic: 'Decolonisation',
    prompt: 'Which factor best explains the acceleration of decolonisation after 1945?',
    options: [
      'European powers were economically weakened while independence movements had strengthened',
      'Colonies were no longer profitable in any respect',
      'The United Nations forcibly removed all colonial governments',
      'Colonial populations had only just begun to object',
    ],
    answer: 0,
    explanation:
      'Decolonisation resulted from the interaction of imperial weakness and organised nationalist pressure, often intensified by colonial subjects’ wartime service.',
  },
  {
    id: 'hisX-13', subject: 'history', criterion: 'A', topic: 'Significance',
    prompt: 'Which criterion best establishes that an event was historically significant?',
    options: [
      'It affected many people at the time and had lasting consequences',
      'It is frequently mentioned in films',
      'It happened a very long time ago',
      'It involved a famous individual',
    ],
    answer: 0,
    explanation:
      'Significance is judged by scale of impact, depth of effect and durability of consequences, not by fame or familiarity.',
  },
  {
    id: 'hisX-14', subject: 'history', criterion: 'A', topic: 'Civil rights',
    prompt: 'Why was the Montgomery Bus Boycott effective as a protest tactic?',
    options: [
      'Sustained economic pressure made segregation costly while keeping the moral high ground',
      'It involved armed resistance',
      'It lasted only a single day',
      'It was supported by the state government',
    ],
    answer: 0,
    explanation:
      'The boycott combined economic leverage with non-violent discipline, which attracted sympathetic media coverage and made the movement harder to discredit.',
  },
  {
    id: 'hisX-15', subject: 'history', criterion: 'D', topic: 'Source evaluation',
    prompt: 'A government-issued recruitment poster from 1915 is most valuable to a historian as evidence of…',
    options: [
      'official attitudes and the techniques used to persuade the public',
      'the actual conditions experienced in the trenches',
      'the precise number of soldiers recruited',
      'the private opinions of ordinary civilians',
    ],
    answer: 0,
    explanation:
      'A source is valuable for what it can reliably show. Propaganda reveals intent and method, but says little about lived reality or private belief.',
  },
  {
    id: 'hisX-16', subject: 'history', criterion: 'D', topic: 'Source evaluation',
    prompt: 'A memoir written forty years after the events described has which most significant limitation?',
    options: [
      'Memory may have faded or been reshaped by later knowledge and hindsight',
      'It is written in the first person',
      'It was published as a book',
      'It describes events the author witnessed',
    ],
    answer: 0,
    explanation:
      'Temporal distance affects reliability through memory decay and retrospective reinterpretation. Being first-hand is a strength, not a limitation.',
  },
  {
    id: 'hisX-17', subject: 'history', criterion: 'D', topic: 'Utility',
    prompt: 'Two sources disagree about an event. The best historical response is to…',
    options: [
      'examine the origin and purpose of each to explain why they differ',
      'accept whichever is longer',
      'discard both as unreliable',
      'assume the earlier one is always correct',
    ],
    answer: 0,
    explanation:
      'Disagreement is evidence in itself. Explaining divergence through provenance and purpose demonstrates genuine critical thinking rather than avoidance.',
  },
  {
    id: 'hisX-18', subject: 'history', criterion: 'D', topic: 'Interpretations',
    prompt: 'Why might two historians writing in 1950 and 2020 reach different conclusions about the same event?',
    options: [
      'They had access to different archives and wrote within different social contexts',
      'One of them must be deliberately lying',
      'History changes over time',
      'Older historians are always less accurate',
    ],
    answer: 0,
    explanation:
      'Archives open, methodologies evolve and present concerns shape the questions asked. Explaining interpretation this way is exactly what Criterion D assesses.',
  },
  {
    id: 'hisX-19', subject: 'history', criterion: 'D', topic: 'Bias',
    prompt: 'Which statement about bias is most accurate?',
    options: [
      'Bias reduces reliability but can increase a source’s value as evidence of attitudes',
      'Biased sources should always be discarded',
      'Only written sources can be biased',
      'A biased source contains no true information',
    ],
    answer: 0,
    explanation:
      'Treating bias as automatic disqualification is a persistent error. Historians read biased sources for what the bias itself reveals.',
  },
  {
    id: 'hisX-20', subject: 'history', criterion: 'D', topic: 'Perspectives',
    prompt: 'A study of empire that uses only administrators’ records risks…',
    options: [
      'privileging the coloniser’s perspective and marginalising colonised voices',
      'being too long',
      'containing too many statistics',
      'covering too short a period',
    ],
    answer: 0,
    explanation:
      'Whose records survive shapes whose story gets told. Recognising archival silences and seeking alternative evidence is central to strong Criterion D work.',
  },
  {
    id: 'hisX-21', subject: 'history', criterion: 'D', topic: 'Corroboration',
    prompt: 'A claim appears in one source produced by a party with an interest in the outcome. A historian should…',
    options: [
      'seek corroboration from independent sources before accepting it',
      'accept it if it is detailed',
      'accept it if it is written formally',
      'reject all interested testimony',
    ],
    answer: 0,
    explanation:
      'Cross-referencing is the standard test. An interested party may still tell the truth, but the claim requires independent support before it can be relied on.',
  },
  {
    id: 'hisX-22', subject: 'history', criterion: 'D', topic: 'Evidence',
    prompt: 'Which conclusion is best supported by evidence that bread prices tripled in the year before a revolt?',
    options: [
      'Economic hardship plausibly contributed to unrest, though other factors need examination',
      'Bread prices alone caused the revolt',
      'The revolt had no economic dimension',
      'Price data is irrelevant to political history',
    ],
    answer: 0,
    explanation:
      'Evidence supports a contributory claim, not a sole cause. Overstating what a single dataset proves is a common weakness in Criterion D responses.',
  },
  {
    id: 'hisX-23', subject: 'history', criterion: 'D', topic: 'Historiography',
    prompt: 'A textbook states an interpretation as settled fact. A critical reader should recognise that…',
    options: [
      'textbooks summarise contested scholarship and may obscure ongoing debate',
      'textbooks are always wrong',
      'textbooks are primary sources',
      'textbooks require no evaluation',
    ],
    answer: 0,
    explanation:
      'Secondary syntheses simplify. Recognising that a confident summary may conceal genuine historiographical dispute is part of critical thinking.',
  },
  {
    id: 'hisX-24', subject: 'history', criterion: 'D', topic: 'Terminology',
    prompt: 'Describing a historical group using the terminology of their opponents risks…',
    options: [
      'importing a hostile perspective into supposedly neutral analysis',
      'making the writing too formal',
      'improving objectivity',
      'shortening the essay',
    ],
    answer: 0,
    explanation:
      'Language carries perspective. Historians choose terminology carefully and often explain their choice, because labels encode judgements.',
  },
  {
    id: 'hisX-25', subject: 'history', criterion: 'D', topic: 'Counterfactual',
    prompt: 'What is the main limitation of asking "what if the assassination had not occurred?"',
    options: [
      'It cannot be tested with evidence, though it can clarify how important a factor was',
      'It is forbidden in history',
      'It always produces a definite answer',
      'It proves the event was inevitable',
    ],
    answer: 0,
    explanation:
      'Counterfactuals are speculative but useful for weighing causal significance. Presenting them as established conclusions is where students go wrong.',
  },
  {
    id: 'hisX-26', subject: 'history', criterion: 'D', topic: 'Statistics',
    prompt: 'Official casualty figures released by a government during a war should be treated as…',
    options: [
      'potentially managed for morale, requiring comparison with post-war records',
      'entirely accurate because they are official',
      'entirely fabricated',
      'irrelevant to historians',
    ],
    answer: 0,
    explanation:
      'Wartime figures serve political as well as record-keeping purposes. Comparing with later archival data is how historians test them.',
  },
  {
    id: 'hisX-27', subject: 'history', criterion: 'D', topic: 'Photographs',
    prompt: 'A photograph is sometimes considered stronger evidence than a written account, but its main limitation is that it…',
    options: [
      'shows only a framed moment chosen by the photographer, excluding context',
      'cannot show real people',
      'is always staged',
      'contains no information',
    ],
    answer: 0,
    explanation:
      'Framing, timing and selection are editorial choices. What lies outside the frame, and why the image was taken, matter as much as the visible content.',
  },
  {
    id: 'hisX-28', subject: 'history', criterion: 'D', topic: 'Argument',
    prompt: 'Which essay conclusion demonstrates the strongest critical thinking?',
    options: [
      'Economic factors were most significant, though they operated through political structures that made conflict likely',
      'There were many causes of the conflict',
      'Everyone has their own opinion about the causes',
      'The causes are listed above',
    ],
    answer: 0,
    explanation:
      'A strong conclusion prioritises between factors and explains how they interacted, rather than listing them or retreating into relativism.',
  },

  /* ==================== GEOGRAPHY ==================== */
  {
    id: 'geoX-1', subject: 'geography', criterion: 'A', topic: 'Tectonics',
    prompt: 'Why do destructive plate margins produce more explosive eruptions than constructive margins?',
    options: [
      'Subducted material creates viscous, gas-rich magma that traps pressure',
      'The plates move faster at destructive margins',
      'There is more water at constructive margins',
      'Constructive margins have no magma',
    ],
    answer: 0,
    explanation:
      'Silica-rich, viscous magma at subduction zones traps gases until pressure is released violently. Basaltic magma at constructive margins is runny, so gas escapes gently.',
  },
  {
    id: 'geoX-2', subject: 'geography', criterion: 'A', topic: 'Hazard risk',
    prompt: 'Two earthquakes of equal magnitude cause very different death tolls. The best explanation is differences in…',
    options: [
      'vulnerability and capacity to cope, including building standards and emergency planning',
      'the depth of the Earth’s core',
      'the time of year',
      'the number of plates involved',
    ],
    answer: 0,
    explanation:
      'Hazard risk is the interaction of the physical event with human vulnerability. This is why identical magnitudes produce very different outcomes in higher and lower income countries.',
  },
  {
    id: 'geoX-3', subject: 'geography', criterion: 'A', topic: 'Rivers',
    prompt: 'Why does deposition occur on the inner bend of a meander?',
    options: [
      'Water flows more slowly there, reducing the energy available to carry sediment',
      'The river is deepest there',
      'Erosion is strongest there',
      'The channel is narrowest there',
    ],
    answer: 0,
    explanation:
      'Flow is fastest on the outer bend, causing erosion, and slowest on the inner bend, where reduced energy causes deposition and forms a slip-off slope.',
  },
  {
    id: 'geoX-4', subject: 'geography', criterion: 'A', topic: 'Hydrographs',
    prompt: 'Urbanisation typically produces a flashy hydrograph because impermeable surfaces…',
    options: [
      'increase surface runoff and shorten lag time',
      'increase infiltration into the soil',
      'reduce total rainfall',
      'lengthen lag time',
    ],
    answer: 0,
    explanation:
      'Concrete and tarmac prevent infiltration, so water reaches the channel quickly via drains. Peak discharge rises and lag time falls, increasing flood risk.',
  },
  {
    id: 'geoX-5', subject: 'geography', criterion: 'A', topic: 'Coasts',
    prompt: 'Why do groynes protecting one stretch of coast often increase erosion further along it?',
    options: [
      'They trap sediment moving by longshore drift, starving downdrift beaches',
      'They increase wave height offshore',
      'They cause sea levels to rise locally',
      'They change the direction of the tide',
    ],
    answer: 0,
    explanation:
      'Interrupting sediment transport protects one area at another’s expense. Recognising these knock-on effects is central to evaluating coastal management.',
  },
  {
    id: 'geoX-6', subject: 'geography', criterion: 'A', topic: 'Weather',
    prompt: 'Tropical storms weaken rapidly after making landfall because…',
    options: [
      'the supply of warm, moist ocean air that powers them is cut off',
      'land is colder than the sea in all seasons',
      'the Coriolis effect stops over land',
      'buildings block the wind',
    ],
    answer: 0,
    explanation:
      'Latent heat released by condensing ocean moisture drives the storm. Over land this energy source is removed and friction increases, so the system decays.',
  },
  {
    id: 'geoX-7', subject: 'geography', criterion: 'A', topic: 'Global circulation',
    prompt: 'Why are the world’s major hot deserts found around 30 degrees north and south?',
    options: [
      'Air descends there, warming and drying, producing high pressure and low rainfall',
      'These latitudes receive no sunlight',
      'Air rises there, causing heavy rainfall',
      'They are furthest from any ocean',
    ],
    answer: 0,
    explanation:
      'Air that rose at the equator descends around 30 degrees. Descending air warms and its capacity to hold moisture rises, so condensation and rainfall are suppressed.',
  },
  {
    id: 'geoX-8', subject: 'geography', criterion: 'A', topic: 'Ecosystems',
    prompt: 'Rainforest soils are often nutrient-poor despite dense vegetation because…',
    options: [
      'nutrients are held in the biomass and cycled rapidly, with heavy rain leaching the soil',
      'plants do not need nutrients there',
      'the soil is permanently frozen',
      'there are no decomposers',
    ],
    answer: 0,
    explanation:
      'Rapid decomposition returns nutrients that are immediately taken up by vegetation. This is why cleared rainforest land loses fertility within a few years.',
  },
  {
    id: 'geoX-9', subject: 'geography', criterion: 'A', topic: 'Urbanisation',
    prompt: 'Why do informal settlements typically expand fastest at the edges of rapidly growing cities?',
    options: [
      'Land there is unclaimed or cheaper, and in-migration outpaces formal housing supply',
      'Governments build them deliberately',
      'City centres have no population',
      'Rural areas are becoming wealthier',
    ],
    answer: 0,
    explanation:
      'When in-migration exceeds the rate of formal housing construction, settlement occurs on marginal land, often peripheral or hazard-prone.',
  },
  {
    id: 'geoX-10', subject: 'geography', criterion: 'A', topic: 'Population',
    prompt: 'In Stage 2 of the Demographic Transition Model, population grows rapidly because…',
    options: [
      'death rates fall through better sanitation and healthcare while birth rates remain high',
      'birth rates rise sharply',
      'migration increases dramatically',
      'both rates fall together',
    ],
    answer: 0,
    explanation:
      'The lag between falling mortality and falling fertility produces high natural increase. Birth rates fall later as child mortality declines and social change follows.',
  },
  {
    id: 'geoX-11', subject: 'geography', criterion: 'A', topic: 'Development',
    prompt: 'Why can a country have high GNI per capita but relatively low life expectancy?',
    options: [
      'Wealth may be unevenly distributed or not invested in healthcare',
      'GNI is always measured incorrectly',
      'Life expectancy is unrelated to any economic factor',
      'High income always reduces life expectancy',
    ],
    answer: 0,
    explanation:
      'Averages conceal distribution. This is precisely why composite measures such as the HDI are preferred to single economic indicators.',
  },
  {
    id: 'geoX-12', subject: 'geography', criterion: 'A', topic: 'Climate change',
    prompt: 'Melting sea ice contributes to further warming mainly through…',
    options: [
      'the albedo effect, as dark ocean absorbs more radiation than reflective ice',
      'the release of oxygen from the ice',
      'increased volcanic activity',
      'reduced ocean salinity alone',
    ],
    answer: 0,
    explanation:
      'This is a positive feedback loop: less reflective surface means more absorbed energy, causing further melting. Feedback loops are a key higher-level concept.',
  },
  {
    id: 'geoX-13', subject: 'geography', criterion: 'A', topic: 'Resources',
    prompt: 'Why is water scarcity a growing issue even in regions with high total rainfall?',
    options: [
      'Rainfall may be seasonal or unevenly distributed relative to where demand occurs',
      'Rain does not contribute to water supply',
      'High rainfall always means abundant clean water',
      'Water cannot be stored anywhere',
    ],
    answer: 0,
    explanation:
      'Water security depends on reliability, accessibility and quality, not annual totals. Seasonal concentration and infrastructure gaps create scarcity despite high rainfall.',
  },
  {
    id: 'geoX-14', subject: 'geography', criterion: 'A', topic: 'Glaciation',
    prompt: 'A U-shaped valley indicates former glaciation because glaciers…',
    options: [
      'erode laterally as well as vertically, widening and deepening the valley floor',
      'only erode downwards like rivers',
      'deposit material evenly across valleys',
      'melt without moving',
    ],
    answer: 0,
    explanation:
      'Rivers cut narrow V-shaped valleys through vertical erosion. The mass and width of a glacier erode the sides as well, producing the characteristic U-shape.',
  },
  {
    id: 'geoX-15', subject: 'geography', criterion: 'D', topic: 'Data interpretation',
    prompt: 'A graph shows CO2 emissions falling in a country while its imported goods rise sharply. A critical reading is that…',
    options: [
      'emissions may have been offshored rather than genuinely reduced',
      'the country has certainly solved its emissions problem',
      'imports have no emissions implications',
      'the data must be fabricated',
    ],
    answer: 0,
    explanation:
      'Territorial emissions accounting excludes emissions embedded in imports. Consumption-based accounting often tells a very different story.',
  },
  {
    id: 'geoX-16', subject: 'geography', criterion: 'D', topic: 'Sources',
    prompt: 'A tourist board publishes data showing a resort is unaffected by coastal erosion. A geographer should…',
    options: [
      'note the commercial interest and compare with independent survey data',
      'accept it as official information',
      'reject all data from organisations',
      'assume erosion is not occurring anywhere',
    ],
    answer: 0,
    explanation:
      'The publisher has a financial interest in the conclusion. That is a limitation to weigh through triangulation, not automatic grounds for dismissal.',
  },
  {
    id: 'geoX-17', subject: 'geography', criterion: 'D', topic: 'Sustainability',
    prompt: 'Which best evaluates a scheme to build sea defences for a coastal town?',
    options: [
      'It protects property in the short term but is costly and may shift erosion along the coast',
      'It is a good idea because it is modern',
      'It will permanently solve all coastal problems',
      'It is bad because it is expensive',
    ],
    answer: 0,
    explanation:
      'Evaluation weighs benefits against costs and side effects across time. One-line verdicts in either direction score poorly.',
  },
  {
    id: 'geoX-18', subject: 'geography', criterion: 'D', topic: 'Stakeholders',
    prompt: 'Assessing a proposed dam, which set of stakeholders gives the most complete picture?',
    options: [
      'Displaced communities, downstream farmers, energy consumers, government and conservationists',
      'The construction company only',
      'The national government only',
      'Tourists only',
    ],
    answer: 0,
    explanation:
      'Costs and benefits fall unevenly. Considering only proponents produces a partial analysis, which limits the level achievable in Criterion D.',
  },
  {
    id: 'geoX-19', subject: 'geography', criterion: 'D', topic: 'Development strategies',
    prompt: 'Which is a genuine limitation of large-scale top-down aid projects?',
    options: [
      'They may not match local needs and can create dependency or debt',
      'They are always too small to matter',
      'They never involve any funding',
      'They are illegal in most countries',
    ],
    answer: 0,
    explanation:
      'Top-down projects can deliver scale but may overlook local priorities. Bottom-up schemes address needs more directly but are harder to scale, which is the trade-off to evaluate.',
  },
  {
    id: 'geoX-20', subject: 'geography', criterion: 'D', topic: 'Fieldwork',
    prompt: 'Surveying opinions about a new development only on a weekday morning risks…',
    options: [
      'systematically excluding people who work full time, biasing the sample',
      'collecting too much data',
      'making the survey too accurate',
      'no problem at all',
    ],
    answer: 0,
    explanation:
      'Timing is part of sampling strategy. A sample skewed towards those available at particular hours cannot be corrected by simply asking more people at the same time.',
  },
  {
    id: 'geoX-21', subject: 'geography', criterion: 'D', topic: 'Data presentation',
    prompt: 'Which presentation method best shows the relationship between rainfall and crop yield?',
    options: [
      'A scatter graph with a line of best fit',
      'A pie chart',
      'A choropleth map',
      'A pictogram',
    ],
    answer: 0,
    explanation:
      'Scatter graphs display the relationship between two continuous variables. Choropleth maps show spatial distribution and pie charts show proportions of a whole.',
  },
  {
    id: 'geoX-22', subject: 'geography', criterion: 'D', topic: 'Climate justice',
    prompt: 'Which argument best supports the claim that climate change is an issue of fairness?',
    options: [
      'The countries least responsible for emissions often face the greatest impacts with fewest resources to adapt',
      'Climate change affects everyone equally',
      'Only wealthy countries experience extreme weather',
      'Emissions are impossible to measure',
    ],
    answer: 0,
    explanation:
      'The mismatch between historical responsibility and vulnerability is the core of climate justice arguments, and connects directly to the fairness and development global context.',
  },
  {
    id: 'geoX-23', subject: 'geography', criterion: 'D', topic: 'Mitigation and adaptation',
    prompt: 'Building flood defences is best classified as…',
    options: [
      'adaptation, since it reduces the impact rather than the cause',
      'mitigation, since it reduces emissions',
      'both equally',
      'neither',
    ],
    answer: 0,
    explanation:
      'Mitigation tackles the cause by cutting emissions; adaptation manages consequences. Confusing the two is a frequent error in climate response questions.',
  },
  {
    id: 'geoX-24', subject: 'geography', criterion: 'D', topic: 'Urban sustainability',
    prompt: 'Which best evaluates congestion charging in a major city?',
    options: [
      'It reduces traffic and emissions but may burden lower income drivers without good public transport alternatives',
      'It is always effective everywhere',
      'It only benefits wealthy residents',
      'It has no measurable effects',
    ],
    answer: 0,
    explanation:
      'Strong evaluation identifies both effectiveness and equity implications, and recognises that outcomes depend on complementary provision such as public transport.',
  },
  {
    id: 'geoX-25', subject: 'geography', criterion: 'D', topic: 'Interpreting maps',
    prompt: 'A choropleth map showing high disease rates by region may mislead because…',
    options: [
      'large regions appear visually dominant and internal variation is hidden',
      'colours cannot represent data',
      'maps are always inaccurate',
      'regions are all the same size',
    ],
    answer: 0,
    explanation:
      'Choropleth maps average across administrative units, concealing variation within them, and larger areas draw disproportionate visual attention.',
  },
  {
    id: 'geoX-26', subject: 'geography', criterion: 'D', topic: 'Correlation',
    prompt: 'Data shows a strong correlation between ice cream sales and drowning incidents. The correct interpretation is that…',
    options: [
      'a third variable, warm weather, likely drives both',
      'ice cream causes drowning',
      'drowning causes ice cream sales',
      'the correlation proves causation',
    ],
    answer: 0,
    explanation:
      'Correlation does not establish causation. Identifying a plausible confounding variable is the mark of critical data interpretation.',
  },
  {
    id: 'geoX-27', subject: 'geography', criterion: 'D', topic: 'Evaluating models',
    prompt: 'What is the main limitation of applying the Demographic Transition Model to every country?',
    options: [
      'It is based on European industrial experience and may not fit different histories',
      'It contains no data',
      'It applies only to cities',
      'It has never been tested',
    ],
    answer: 0,
    explanation:
      'Models simplify. The DTM omits migration and assumes a development pathway that many countries have not followed, so it must be applied critically.',
  },
  {
    id: 'geoX-28', subject: 'geography', criterion: 'D', topic: 'Argument',
    prompt: 'Which conclusion demonstrates the strongest geographical reasoning?',
    options: [
      'Soft engineering is more sustainable long term, though hard defences remain necessary where high-value assets are at immediate risk',
      'Hard engineering is always best',
      'Soft engineering is always best',
      'Both approaches are equally good in every situation',
    ],
    answer: 0,
    explanation:
      'Strong conclusions make a judgement while acknowledging the conditions under which the alternative applies, rather than asserting a blanket rule.',
  },
]
