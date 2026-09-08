// Biology and Chemistry question blocks for the mock generator.
// Mark values are chosen so combinations sum exactly to 25 per criterion.

export const BIO_CHEM_BLOCKS = [
  /* ==================== BIOLOGY - CRITERION A ==================== */
  {
    id: 'bioA-reef', subject: 'biology', criterion: 'A', marks: 13,
    stimulus:
      'Coral reefs support around a quarter of all marine species. Rising sea temperatures cause corals to expel the algae living in their tissues, a process known as coral bleaching.',
    parts: [
      {
        id: 'a', marks: 1, command: 'Select', type: 'select',
        prompt: 'the relationship between coral and the algae living inside it.',
        options: [
          'Mutualism, in which both organisms benefit',
          'Predation',
          'Parasitism, in which the algae harm the coral',
          'Competition for the same resources',
        ],
        answer: 0,
        explanation:
          'The algae photosynthesise and supply the coral with sugars, while the coral provides shelter and compounds the algae need. Both benefit, so it is mutualism.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why coral bleaching reduces the biodiversity of a reef.',
        markscheme: [
          '.1 Bleached coral loses its energy supply from the algae and eventually dies',
          '.2 The reef structure provides habitat and food for many species',
          '.3 As it degrades those populations decline, so the number of species falls',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why only about 10% of energy passes between trophic levels.',
        markscheme: [
          '.1 Energy is lost as heat through respiration',
          '.2 Not all of an organism is eaten or digested, so energy is lost in faeces',
          '.3 Less energy is available to the next level, limiting food chain length',
        ],
      },
      {
        id: 'd', marks: 3, command: 'Describe', type: 'short',
        prompt: 'the role of decomposers in the carbon cycle.',
        markscheme: [
          '.1 Decomposers break down dead organisms and waste',
          '.2 They respire, releasing carbon dioxide back to the atmosphere',
          '.3 They return mineral nutrients to the soil for producers to reuse',
        ],
      },
      {
        id: 'e', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why removing a keystone species can affect the whole food web.',
        markscheme: [
          '.1 Organisms in a food web are interdependent',
          '.2 Removing one species changes the populations that depend on it',
          '.3 Effects cascade through several trophic levels, not just the adjacent one',
        ],
      },
    ],
  },
  {
    id: 'bioA-exchange', subject: 'biology', criterion: 'A', marks: 12,
    stimulus:
      'Large organisms cannot rely on diffusion across their body surface and have evolved specialised exchange surfaces such as alveoli and villi.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why surface area to volume ratio limits the size of an organism relying on diffusion.',
        markscheme: [
          '.1 Volume increases faster than surface area as size increases',
          '.2 So the surface cannot supply the interior fast enough',
          '.3 Specialised exchange surfaces are required instead',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'how the structure of an alveolus makes gas exchange efficient.',
        markscheme: [
          '.1 Large surface area from many alveoli',
          '.2 Walls one cell thick give a short diffusion distance',
          '.3 Rich blood supply maintains a steep concentration gradient',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'the difference between ventilation, gas exchange and respiration.',
        markscheme: [
          '.1 Ventilation is the mechanical movement of air into and out of the lungs',
          '.2 Gas exchange is diffusion across the alveolar surface',
          '.3 Respiration is the chemical release of energy inside cells',
        ],
        reject: ['Using respiration and breathing interchangeably'],
      },
      {
        id: 'd', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why active transport requires energy but diffusion does not.',
        markscheme: [
          '.1 Diffusion moves substances down a concentration gradient',
          '.2 Active transport moves them against the gradient',
          '.3 Energy from respiration (ATP) is needed to do this work',
        ],
      },
    ],
  },
  {
    id: 'bioA-enzymes', subject: 'biology', criterion: 'A', marks: 10,
    stimulus:
      'Enzymes are biological catalysts. Their activity is affected by both temperature and pH.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why enzyme activity falls sharply above the optimum temperature.',
        markscheme: [
          '.1 Bonds holding the enzyme’s shape break',
          '.2 The active site changes shape, so the enzyme is denatured',
          '.3 The substrate can no longer bind, so fewer complexes form',
        ],
        reject: ['The enzyme dies', 'The enzyme is used up'],
      },
      {
        id: 'b', marks: 2, command: 'Select', type: 'select',
        prompt: 'what happens to a denatured enzyme when it is cooled back down.',
        options: [
          'It stays denatured, because the change is permanent',
          'It recovers full activity',
          'It becomes a different enzyme',
          'It works faster than before',
        ],
        answer: 0,
        explanation:
          'Denaturation is irreversible: the bonds maintaining the tertiary structure have broken, so the active site cannot reform.',
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why each enzyme works only on a specific substrate.',
        markscheme: [
          '.1 The active site has a shape complementary to the substrate',
          '.2 Only a matching substrate can bind (lock and key)',
          '.3 Other molecules cannot form an enzyme-substrate complex',
        ],
      },
      {
        id: 'd', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why the rate plateaus at high substrate concentration.',
        markscheme: [
          '.1 All active sites become occupied',
          '.2 Enzyme concentration is then the limiting factor',
        ],
      },
    ],
  },
  {
    id: 'bioA-genetics', subject: 'biology', criterion: 'A', marks: 8,
    stimulus:
      'A genetic condition is caused by a recessive allele. Two parents who do not have the condition have a child who does.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'how two unaffected parents can have an affected child.',
        markscheme: [
          '.1 Both parents must be heterozygous carriers',
          '.2 They each carry one recessive allele without expressing it',
          '.3 The child inherited a recessive allele from each parent',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'the probability that their next child is also affected. Show a Punnett square.',
        markscheme: [
          '.1 Both parents Bb, gametes B and b from each',
          '.2 Offspring BB, Bb, Bb, bb',
          '.3 Only bb is affected, so 25% or 1 in 4',
        ],
        accept: ['0.25', '1/4'],
        answerNote: '25%',
      },
      {
        id: 'c', marks: 2, command: 'Explain', type: 'short',
        prompt: 'the difference between genotype and phenotype.',
        markscheme: [
          '.1 Genotype is the combination of alleles present',
          '.2 Phenotype is the characteristic actually expressed',
        ],
      },
    ],
  },
  {
    id: 'bioA-homeostasis', subject: 'biology', criterion: 'A', marks: 7,
    stimulus:
      'After a meal, blood glucose concentration rises. The body returns it to normal through negative feedback.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Describe', type: 'short',
        prompt: 'how blood glucose is lowered after a meal.',
        markscheme: [
          '.1 Rising glucose is detected by the pancreas',
          '.2 The pancreas releases insulin',
          '.3 Cells take up glucose and the liver stores it as glycogen',
        ],
      },
      {
        id: 'b', marks: 2, command: 'Select', type: 'select',
        prompt: 'the definition of negative feedback.',
        options: [
          'A change triggers a response that reverses it',
          'A change triggers a response that increases it',
          'A change has no effect',
          'Two changes cancel each other out by chance',
        ],
        answer: 0,
        explanation:
          'Negative feedback opposes the original change, returning the system towards its set point. This is the basis of all homeostatic control.',
      },
      {
        id: 'c', marks: 2, command: 'Explain', type: 'short',
        prompt: 'the difference between type 1 and type 2 diabetes.',
        markscheme: [
          '.1 Type 1: the pancreas produces little or no insulin',
          '.2 Type 2: cells become less responsive to insulin',
        ],
      },
    ],
  },
  {
    id: 'bioA-evolution', subject: 'biology', criterion: 'A', marks: 5,
    stimulus:
      'A population of bacteria is repeatedly exposed to an antibiotic. Over time the proportion of resistant bacteria increases.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'how antibiotic resistance arises and spreads through the population.',
        markscheme: [
          '.1 Random mutation produces a resistant individual',
          '.2 The antibiotic acts as a selection pressure',
          '.3 Resistant bacteria survive, reproduce and pass on the allele',
        ],
        reject: ['Bacteria choose to adapt', 'Bacteria develop resistance because they need it'],
      },
      {
        id: 'b', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why mitosis and meiosis differ in their role.',
        markscheme: [
          '.1 Mitosis produces genetically identical cells for growth and repair',
          '.2 Meiosis produces genetically varied gametes with half the chromosome number',
        ],
      },
    ],
  },

  /* ==================== BIOLOGY - CRITERION B ==================== */
  {
    id: 'bioB-catalase', subject: 'biology', criterion: 'B', marks: 13,
    stimulus:
      'A student investigates how temperature affects the rate at which the enzyme catalase breaks down hydrogen peroxide, by measuring the height of oxygen foam produced in 30 seconds.',
    parts: [
      {
        id: 'a', marks: 2, command: 'State', type: 'short',
        prompt: 'a hypothesis for this investigation, including scientific reasoning.',
        markscheme: [
          '.1 A directional prediction, e.g. rate rises to an optimum near 40 C then falls',
          '.2 Supported by reasoning: more kinetic energy, then denaturation above the optimum',
        ],
        reject: ['Temperature affects the enzyme, with no reasoning'],
      },
      {
        id: 'b', marks: 4, command: 'Select', type: 'varTable',
        prompt: 'the description that best describes each variable.',
        rows: [
          { label: 'Temperature of the hydrogen peroxide', correct: 'independent' },
          { label: 'Height of foam produced in 30 s', correct: 'dependent' },
          { label: 'Concentration of hydrogen peroxide', correct: 'control' },
          { label: 'Volume of catalase added', correct: 'control' },
        ],
        explanation:
          'Temperature is deliberately changed and foam height measured. Concentration and enzyme volume must be constant or they would independently alter the rate.',
      },
      {
        id: 'c', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why each temperature should be repeated three times.',
        markscheme: [
          '.1 Repeats allow a mean to be calculated, reducing random error',
          '.2 Anomalies become easier to identify, improving reliability',
        ],
      },
      {
        id: 'd', marks: 5, command: 'Design', type: 'extended',
        prompt:
          'an investigation to find out how hydrogen peroxide concentration affects the rate of this reaction. You must include:\n- the independent, dependent and two control variables\n- the equipment you will need\n- the steps you will take to collect data\n- how you will collect sufficient, reliable data.',
        wordGuide: 220,
        markscheme: [
          '.1 IV = hydrogen peroxide concentration; DV = volume of oxygen or foam height in a fixed time',
          '.2 Two valid controls, e.g. temperature and volume of catalase',
          '.3 Appropriate equipment: measuring cylinders, gas syringe, stopwatch, water bath',
          '.4 Clear ordered steps another student could follow',
          '.5 At least five concentrations with three repeats and means calculated',
        ],
      },
    ],
  },
  {
    id: 'bioB-osmosis', subject: 'biology', criterion: 'B', marks: 12,
    stimulus:
      'A student investigates osmosis by placing potato cylinders of equal size in sucrose solutions of different concentration and measuring the change in mass.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Select', type: 'varTable',
        prompt: 'the description that best describes each variable.',
        rows: [
          { label: 'Concentration of the sucrose solution', correct: 'independent' },
          { label: 'Percentage change in mass of the cylinder', correct: 'dependent' },
          { label: 'Surface area of each potato cylinder', correct: 'control' },
          { label: 'Time left in the solution', correct: 'control' },
        ],
        explanation:
          'Concentration is deliberately changed and mass change measured. Surface area affects the rate of water movement, and time affects how much has occurred, so both must be constant.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why percentage change in mass is used rather than actual change in mass.',
        markscheme: [
          '.1 Cylinders may differ slightly in starting mass',
          '.2 Percentage change accounts for that difference',
          '.3 It allows a fair comparison between cylinders',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the cylinders must be blotted dry before reweighing.',
        markscheme: [
          '.1 Surface liquid adds mass that is not due to osmosis',
          '.2 This would produce a systematic error',
          '.3 Every reading would overstate water uptake',
        ],
      },
      {
        id: 'd', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why at least five different concentrations should be used.',
        markscheme: [
          '.1 A trend cannot be established from two or three points',
          '.2 A range allows the point of zero change to be identified',
        ],
      },
    ],
  },
  {
    id: 'bioB-photosynthesis', subject: 'biology', criterion: 'B', marks: 10,
    stimulus:
      'A student investigates how light intensity affects the rate of photosynthesis in pondweed by counting oxygen bubbles.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Select', type: 'varTable',
        prompt: 'the description that best describes each variable.',
        rows: [
          { label: 'Distance of the lamp from the pondweed', correct: 'independent' },
          { label: 'Number of bubbles produced per minute', correct: 'dependent' },
          { label: 'Temperature of the water', correct: 'control' },
          { label: 'The piece of pondweed used', correct: 'control' },
        ],
        explanation:
          'Lamp distance sets light intensity, the variable being changed. Temperature affects enzyme activity and different specimens differ physiologically, so both must be controlled.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the same piece of pondweed must be used throughout.',
        markscheme: [
          '.1 Different specimens vary in size and health',
          '.2 This would affect oxygen output independently of light',
          '.3 It would act as a confounding variable and reduce validity',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why a heat shield or water bath should be placed between the lamp and the beaker.',
        markscheme: [
          '.1 The lamp emits heat as well as light',
          '.2 Moving it closer would raise the water temperature',
          '.3 Temperature would then vary with the independent variable, confounding the results',
        ],
      },
    ],
  },
  {
    id: 'bioB-sampling', subject: 'biology', criterion: 'B', marks: 8,
    stimulus:
      'A student wants to estimate the abundance of dandelions in a school field and investigate whether it changes with distance from a footpath.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why quadrats should be placed at randomly generated coordinates.',
        markscheme: [
          '.1 Random placement avoids bias',
          '.2 Choosing dense patches deliberately would overestimate abundance',
          '.3 The sample would not represent the whole field',
        ],
      },
      {
        id: 'b', marks: 2, command: 'Select', type: 'select',
        prompt: 'the method best suited to studying change with distance from the path.',
        options: [
          'A transect with quadrats at fixed intervals',
          'Random quadrats across the whole field',
          'A single quadrat next to the path',
          'Counting every plant in the field',
        ],
        answer: 0,
        explanation:
          'A transect shows how distribution changes along an environmental gradient. Random sampling estimates overall abundance but not the pattern with distance.',
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'how the student can make the estimate more reliable.',
        markscheme: [
          '.1 Use a larger number of quadrats',
          '.2 Calculate a mean number per quadrat',
          '.3 Scale up using the total area to estimate the population',
        ],
      },
    ],
  },
  {
    id: 'bioB-safety', subject: 'biology', criterion: 'B', marks: 7,
    stimulus:
      'A class is planning practical work using hydrogen peroxide, hot water baths and scalpels to cut plant tissue.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Outline', type: 'short',
        prompt: 'two hazards in this practical and a control measure for each.',
        markscheme: [
          '.1 Hazard 1 named, e.g. hydrogen peroxide is an irritant',
          '.2 Specific control, e.g. wear eye protection and wash spills immediately',
          '.3 Hazard 2 named, e.g. scalpel blades cause cuts',
          '.4 Specific control, e.g. cut on a tile away from the body',
        ],
        reject: ['Be careful with the equipment'],
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'what a complete risk assessment must contain.',
        markscheme: [
          '.1 The hazard itself',
          '.2 The risk it poses and to whom',
          '.3 A specific control measure that reduces that risk',
        ],
      },
    ],
  },
  {
    id: 'bioB-hypothesis', subject: 'biology', criterion: 'B', marks: 5,
    stimulus:
      'Four students each write a hypothesis for an investigation into how temperature affects enzyme activity.',
    parts: [
      {
        id: 'a', marks: 2, command: 'Select', type: 'select',
        prompt: 'the strongest MYP-style hypothesis.',
        options: [
          'As temperature rises to about 40 C the rate will increase because particles gain kinetic energy and collide with the active site more often, then fall as the enzyme denatures',
          'Enzymes work better when it is warmer',
          'Temperature affects enzymes',
          'I think the reaction will change',
        ],
        answer: 0,
        explanation:
          'A strong hypothesis is directional, testable and supported by scientific reasoning, not merely a statement that something will change.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'what makes a hypothesis testable.',
        markscheme: [
          '.1 It predicts a specific relationship between two named variables',
          '.2 The variables can be measured',
          '.3 The prediction could in principle be shown to be wrong',
        ],
      },
    ],
  },

  /* ==================== BIOLOGY - CRITERION C ==================== */
  {
    id: 'bioC-enzyme-data', subject: 'biology', criterion: 'C', marks: 13,
    stimulus:
      'Results at 40 C were 42 mm, 44 mm, 43 mm and 71 mm of foam. At 60 C the foam height fell to 8 mm.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the mean foam height at 40 C, justifying how you handled the data.',
        markscheme: [
          '.1 71 mm identified as an anomaly and excluded',
          '.2 (42 + 44 + 43) / 3',
          '.3 = 43 mm',
        ],
        reject: ['Including 71 mm in the mean'],
        answerNote: '43 mm',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'the shape of the graph between 10 C and 60 C.',
        markscheme: [
          '.1 Rate increases up to about 40 C as particles gain kinetic energy',
          '.2 A peak occurs at the optimum temperature',
          '.3 Above it the rate falls sharply as the enzyme denatures',
        ],
      },
      {
        id: 'c', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why the reaction does not restart when the 60 C sample is cooled to 40 C.',
        markscheme: [
          '.1 Denaturation is permanent',
          '.2 The active site cannot reform, so the substrate still cannot bind',
        ],
      },
      {
        id: 'd', marks: 5, command: 'Evaluate', type: 'extended',
        prompt: 'the method used, identifying weaknesses and explaining their effect on the results.',
        wordGuide: 200,
        markscheme: [
          '.1 Foam height is an indirect and imprecise measure of oxygen volume',
          '.2 Explains the effect: bubbles collapse over time so readings underestimate the rate',
          '.3 A second weakness, e.g. temperature drift during the 30 s window',
          '.4 Distinguishes random from systematic error',
          '.5 Reaches an overall judgement on confidence in the conclusion',
        ],
      },
    ],
  },
  {
    id: 'bioC-osmosis-data', subject: 'biology', criterion: 'C', marks: 12,
    stimulus:
      'A graph of percentage change in mass against sucrose concentration crosses the x-axis at 0.35 mol/dm3.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'what the point where the line crosses the x-axis represents.',
        markscheme: [
          '.1 At this concentration there is no net change in mass',
          '.2 Water entering equals water leaving',
          '.3 The external solution has the same water potential as the cell sap',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why cylinders in the most concentrated solution lost mass.',
        markscheme: [
          '.1 The external solution had a lower water potential than the cell contents',
          '.2 Water moved out of the cells by osmosis',
          '.3 So the tissue lost mass',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Describe', type: 'short',
        prompt: 'how the raw data should be processed before plotting.',
        markscheme: [
          '.1 Tabulate raw masses with consistent units and decimal places',
          '.2 Calculate percentage change for each cylinder',
          '.3 Identify anomalies, then calculate a mean for each concentration',
        ],
      },
      {
        id: 'd', marks: 3, command: 'Suggest', type: 'short',
        prompt: 'one improvement to this method and explain how it improves the data.',
        markscheme: [
          '.1 A specific change, e.g. use a cork borer to ensure identical diameter',
          '.2 Explains the mechanism, e.g. equal surface area for water movement',
          '.3 Links to improved data, e.g. reduces variation between repeats',
        ],
      },
    ],
  },
  {
    id: 'bioC-graphs', subject: 'biology', criterion: 'C', marks: 10,
    stimulus:
      'A rate of photosynthesis graph rises steadily with light intensity and then flattens into a plateau.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'what the plateau indicates.',
        markscheme: [
          '.1 Light is no longer the limiting factor',
          '.2 Another factor such as CO2 concentration or temperature now limits the rate',
          '.3 Increasing light further produces no additional increase',
        ],
      },
      {
        id: 'b', marks: 2, command: 'Select', type: 'select',
        prompt: 'the correct graph type for continuous data such as this.',
        options: [
          'A line graph with a line of best fit',
          'A bar chart',
          'A pie chart',
          'A pictogram',
        ],
        answer: 0,
        explanation:
          'Continuous independent variables use a line graph with a line of best fit. Bar charts are for categoric variables.',
      },
      {
        id: 'c', marks: 5, command: 'Evaluate', type: 'extended',
        prompt:
          'whether counting bubbles is a valid way to measure the rate of photosynthesis.',
        wordGuide: 200,
        markscheme: [
          '.1 Bubbles vary in size, so count is not proportional to gas volume',
          '.2 Some oxygen dissolves rather than forming bubbles',
          '.3 Fast rates make accurate counting difficult',
          '.4 A better method: collect gas in a syringe and measure volume',
          '.5 Reaches a judgement on how much confidence the data deserves',
        ],
      },
    ],
  },
  {
    id: 'bioC-conclusions', subject: 'biology', criterion: 'C', marks: 8,
    stimulus:
      'A student tests an enzyme at only 20 C and 40 C, then concludes "this enzyme works best at 40 C".',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why this conclusion is not supported by the data.',
        markscheme: [
          '.1 Only two values were tested',
          '.2 The optimum could lie anywhere between or beyond them',
          '.3 At least five values including some above the suspected optimum are needed',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Describe', type: 'short',
        prompt: 'what a strong conclusion should contain.',
        markscheme: [
          '.1 A statement of the trend shown by the data',
          '.2 Specific supporting values quoted from the results',
          '.3 A scientific explanation of why the trend occurs',
        ],
      },
      {
        id: 'c', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why a conclusion should not go beyond the range of data collected.',
        markscheme: [
          '.1 The relationship may not continue outside the tested range',
          '.2 Extrapolating beyond the evidence is not justified',
        ],
      },
    ],
  },
  {
    id: 'bioC-anomalies', subject: 'biology', criterion: 'C', marks: 7,
    stimulus:
      'A set of repeat readings is 24, 26, 25 and 48 bubbles per minute.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'how the value of 48 should be treated and why.',
        markscheme: [
          '.1 Identified as an anomaly',
          '.2 Excluded from the mean',
          '.3 A plausible cause suggested, e.g. a trapped bubble released at once',
        ],
        reject: ['Changing the value to fit', 'Including it without comment'],
      },
      {
        id: 'b', marks: 4, command: 'Explain', type: 'short',
        prompt: 'the difference between an anomaly and a systematic error.',
        markscheme: [
          '.1 An anomaly is a single reading far from the others',
          '.2 It usually arises from a one-off mistake and can be excluded',
          '.3 A systematic error shifts every reading in the same direction',
          '.4 It cannot be removed by excluding points or repeating measurements',
        ],
      },
    ],
  },
  {
    id: 'bioC-presentation', subject: 'biology', criterion: 'C', marks: 5,
    stimulus:
      'A student presents results in a table with no units in the headings and inconsistent decimal places.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Describe', type: 'short',
        prompt: 'three improvements to the presentation of this table.',
        markscheme: [
          '.1 Include units in the column headings, not beside every value',
          '.2 Use a consistent number of decimal places matching the instrument',
          '.3 Separate raw data, means and processed values clearly',
        ],
      },
      {
        id: 'b', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why decimal places should match the resolution of the instrument.',
        markscheme: [
          '.1 It communicates the precision actually achieved',
          '.2 Extra decimal places imply more precision than the instrument provides',
        ],
      },
    ],
  },

  /* ==================== BIOLOGY - CRITERION D ==================== */
  {
    id: 'bioD-reef-impact', subject: 'biology', criterion: 'D', marks: 13,
    stimulus:
      'Governments are considering restrictions on fishing and tourism near threatened coral reefs.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Outline', type: 'short',
        prompt: 'one economic and one environmental consequence of reef loss for coastal communities.',
        markscheme: [
          '.1 Economic: loss of fisheries providing food and income, or lost tourism revenue',
          '.2 Environmental: reefs absorb wave energy, so loss increases coastal erosion',
          '.3 Consequence linked specifically to communities rather than stated generally',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Discuss', type: 'extended',
        prompt: 'the responsibilities higher income countries have towards communities affected by reef loss.',
        wordGuide: 180,
        markscheme: [
          '.1 Emissions are largely produced by higher income countries',
          '.2 Impacts fall hardest on communities with least capacity to adapt',
          '.3 Possible responsibilities: emissions reduction, adaptation funding, technology transfer',
          '.4 Acknowledges a counter-argument and still reaches a position',
        ],
      },
      {
        id: 'c', marks: 6, command: 'Evaluate', type: 'extended',
        prompt:
          'the proposal to ban all fishing and tourism around threatened reefs. Consider environmental, economic and social factors and reach a justified conclusion.',
        wordGuide: 300,
        markscheme: [
          '.1 Environmental case for the ban: allows stocks and coral to recover',
          '.2 Economic cost: loss of livelihoods for fishers and tourism operators',
          '.3 Social factors: food security, community identity, likely non-compliance',
          '.4 Considers an alternative, e.g. partial protection zones or quotas',
          '.5 Uses specific reasoning rather than assertion',
          '.6 Reaches a clear conclusion engaging with the word "all"',
        ],
      },
    ],
  },
  {
    id: 'bioD-vaccination', subject: 'biology', criterion: 'D', marks: 12,
    stimulus:
      'A country is deciding whether to fund a universal vaccination programme against a common childhood infection.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Explain', type: 'short',
        prompt: 'how high vaccination uptake protects people who cannot be vaccinated.',
        markscheme: [
          '.1 Vaccination makes most of the population immune',
          '.2 Fewer susceptible hosts means the pathogen spreads less easily',
          '.3 Transmission chains are broken, so outbreaks are smaller',
          '.4 This herd immunity protects the immunocompromised and very young',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Outline', type: 'short',
        prompt: 'why antibiotic resistance is a societal rather than an individual problem.',
        markscheme: [
          '.1 Resistant strains spread between people',
          '.2 One person’s misuse affects everyone’s future treatment options',
          '.3 This is why antibiotic use is regulated at population level',
        ],
      },
      {
        id: 'c', marks: 5, command: 'Evaluate', type: 'extended',
        prompt: 'whether vaccination should be made compulsory. Reach a justified conclusion.',
        wordGuide: 250,
        markscheme: [
          '.1 Public health case: protects the vulnerable through herd immunity',
          '.2 Individual autonomy case against compulsion',
          '.3 Considers practical alternatives, e.g. education or incentives',
          '.4 Recognises the tension between collective benefit and individual choice',
          '.5 Reaches a justified position rather than restating both sides',
        ],
      },
    ],
  },
  {
    id: 'bioD-genetics-ethics', subject: 'biology', criterion: 'D', marks: 10,
    stimulus:
      'Genetic screening of embryos can identify serious inherited conditions before implantation.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Discuss', type: 'extended',
        prompt: 'the ethical implications of genetic screening of embryos.',
        wordGuide: 180,
        markscheme: [
          '.1 Benefit: avoiding serious inherited disease and suffering',
          '.2 Raises the question of who decides which traits are acceptable',
          '.3 Considers disability rights perspectives',
          '.4 Reaches a reasoned position rather than listing concerns',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'the difference between a scientific and an ethical question in this context.',
        markscheme: [
          '.1 Scientific questions concern what is technically possible and its consequences',
          '.2 Ethical questions concern whether it should be done and who decides',
          '.3 Evidence alone cannot settle an ethical question',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why sources of scientific information should be evaluated before use.',
        markscheme: [
          '.1 Peer-reviewed research has been checked by other experts',
          '.2 Funding or affiliation may introduce bias',
          '.3 Referencing allows claims to be traced and verified',
        ],
      },
    ],
  },
  {
    id: 'bioD-deforestation', subject: 'biology', criterion: 'D', marks: 8,
    stimulus:
      'Large areas of tropical rainforest are cleared each year for agriculture and timber.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Explain', type: 'short',
        prompt: 'how deforestation affects both biodiversity and the climate.',
        markscheme: [
          '.1 Habitats and food sources are destroyed, so specialist species decline',
          '.2 Biodiversity falls as populations are lost',
          '.3 Trees absorb CO2, so removing them reduces carbon uptake',
          '.4 Burning or decay releases stored carbon, adding to warming',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Discuss', type: 'extended',
        prompt: 'why simply banning deforestation is difficult in practice.',
        wordGuide: 150,
        markscheme: [
          '.1 Local communities may depend on the land for income and food',
          '.2 National governments may prioritise economic development',
          '.3 Enforcement across large remote areas is difficult',
          '.4 Suggests a more workable alternative, e.g. sustainable certification or payment schemes',
        ],
      },
    ],
  },
  {
    id: 'bioD-lifestyle', subject: 'biology', criterion: 'D', marks: 7,
    stimulus:
      'A study reports a correlation between high sugar consumption and type 2 diabetes.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why this correlation does not by itself prove that sugar causes the condition.',
        markscheme: [
          '.1 Correlation does not establish causation',
          '.2 A third factor such as overall diet or activity level may drive both',
          '.3 A biological mechanism must be demonstrated to establish cause',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Discuss', type: 'extended',
        prompt: 'whether governments should tax sugary drinks to improve public health.',
        wordGuide: 150,
        markscheme: [
          '.1 Case for: reduces consumption and raises revenue for health services',
          '.2 Case against: affects lower income households disproportionately',
          '.3 Considers evidence of effectiveness where such taxes exist',
          '.4 Reaches a justified position',
        ],
      },
    ],
  },
  {
    id: 'bioD-referencing', subject: 'biology', criterion: 'D', marks: 5,
    stimulus:
      'A student writes a report on antibiotic resistance using information from a blog, a news article and a peer-reviewed journal.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'how the reliability of these three sources differs.',
        markscheme: [
          '.1 The journal article has been peer reviewed by other experts',
          '.2 The news article may simplify or sensationalise findings',
          '.3 The blog may be opinion with no verification',
        ],
      },
      {
        id: 'b', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why sources must be documented in a consistent referencing style.',
        markscheme: [
          '.1 It allows the reader to locate and verify each claim',
          '.2 It credits the original author and avoids plagiarism',
        ],
      },
    ],
  },

  /* ==================== CHEMISTRY - CRITERION A ==================== */
  {
    id: 'chemA-lithium', subject: 'chemistry', criterion: 'A', marks: 13,
    stimulus:
      'Many countries are replacing petrol cars with electric vehicles. The batteries rely on lithium, a Group 1 metal.',
    parts: [
      {
        id: 'a', marks: 1, command: 'Select', type: 'select',
        prompt: 'the group of the periodic table that lithium belongs to.',
        options: ['Group 1, the alkali metals', 'Group 7, the halogens', 'Group 0, the noble gases', 'The transition metals'],
        answer: 0,
        explanation: 'Lithium has one outer electron and is the first element in Group 1, the alkali metals.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why reactivity increases down Group 1.',
        markscheme: [
          '.1 Atomic radius increases down the group and there is more shielding',
          '.2 The outer electron is held less strongly by the nucleus',
          '.3 So it is lost more easily, making the metal more reactive',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why sodium chloride has a high melting point.',
        markscheme: [
          '.1 It forms a giant ionic lattice',
          '.2 Strong electrostatic forces act between oppositely charged ions',
          '.3 A large amount of energy is needed to overcome them',
        ],
      },
      {
        id: 'd', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why sodium chloride conducts when molten but not when solid.',
        markscheme: [
          '.1 Conduction requires mobile charged particles',
          '.2 In the solid the ions are fixed in the lattice',
          '.3 Melting frees the ions to move and carry charge',
        ],
        reject: ['Solid sodium chloride contains no ions'],
      },
      {
        id: 'e', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why graphite conducts electricity but diamond does not.',
        markscheme: [
          '.1 In graphite each carbon bonds to three others',
          '.2 This leaves one delocalised electron per atom, free to move',
          '.3 In diamond all four outer electrons are used in bonds',
        ],
      },
    ],
  },
  {
    id: 'chemA-rates', subject: 'chemistry', criterion: 'A', marks: 12,
    stimulus:
      'Marble chips react with dilute hydrochloric acid, producing carbon dioxide gas. The rate can be changed in several ways.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'using collision theory, why increasing concentration increases the rate.',
        markscheme: [
          '.1 Higher concentration means more particles in the same volume',
          '.2 Collisions between reacting particles become more frequent',
          '.3 More successful collisions per second means a faster rate',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why raising temperature has a greater effect on rate than raising concentration.',
        markscheme: [
          '.1 Concentration increases collision frequency only',
          '.2 Temperature increases frequency and the energy of collisions',
          '.3 A greater proportion of collisions exceed the activation energy',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'how a catalyst increases the rate of reaction.',
        markscheme: [
          '.1 It provides an alternative reaction pathway',
          '.2 This pathway has a lower activation energy',
          '.3 The catalyst is chemically unchanged at the end',
        ],
        reject: ['The catalyst is used up'],
      },
      {
        id: 'd', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why powdered marble reacts faster than a single large lump of the same mass.',
        markscheme: [
          '.1 Powder has a much larger total surface area',
          '.2 More particles are exposed to the acid at any moment',
          '.3 Collision frequency at the surface increases, so the rate rises',
        ],
      },
    ],
  },
  {
    id: 'chemA-atoms', subject: 'chemistry', criterion: 'A', marks: 10,
    stimulus:
      'Chlorine exists as two isotopes, chlorine-35 and chlorine-37, with a relative atomic mass of 35.5.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'what isotopes are and why they behave identically in chemical reactions.',
        markscheme: [
          '.1 Isotopes have the same number of protons but different numbers of neutrons',
          '.2 Chemical behaviour depends on the electron arrangement',
          '.3 Isotopes have identical electron arrangements, so react the same way',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the relative atomic mass of chlorine is 35.5 rather than a whole number.',
        markscheme: [
          '.1 It is a weighted mean of the masses of the isotopes',
          '.2 Weighted according to their relative abundance',
          '.3 Chlorine-35 is about three times as abundant as chlorine-37',
        ],
      },
      {
        id: 'c', marks: 2, command: 'Select', type: 'select',
        prompt: 'what elements in the same group of the periodic table share.',
        options: [
          'The same number of outer shell electrons',
          'The same number of neutrons',
          'The same atomic mass',
          'The same number of shells',
        ],
        answer: 0,
        explanation:
          'Groups are columns; elements in a group have the same number of outer electrons, which is why they react in similar ways. Periods share the number of shells.',
      },
      {
        id: 'd', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why Group 0 elements are unreactive.',
        markscheme: [
          '.1 They have a full outer electron shell',
          '.2 So there is no energetic advantage in gaining, losing or sharing electrons',
        ],
      },
    ],
  },
  {
    id: 'chemA-acids', subject: 'chemistry', criterion: 'A', marks: 8,
    stimulus:
      'The pH scale runs from 0 to 14 and is logarithmic. Strong and weak acids differ in how completely they dissociate.',
    parts: [
      {
        id: 'a', marks: 2, command: 'Select', type: 'select',
        prompt: 'how many times more acidic a pH 3 solution is than a pH 5 solution.',
        options: ['100 times', '2 times', '10 times', '1000 times'],
        answer: 0,
        explanation:
          'The pH scale is logarithmic: each unit is a ten-fold change in hydrogen ion concentration, so two units is 10 x 10 = 100 times.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'the difference between a strong acid and a concentrated acid.',
        markscheme: [
          '.1 Strength describes the degree of dissociation into ions',
          '.2 Concentration describes how much acid is dissolved per unit volume',
          '.3 A concentrated weak acid is therefore possible',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Describe', type: 'short',
        prompt: 'the products of the reaction between an acid and a metal carbonate, and the test for the gas.',
        markscheme: [
          '.1 Products are a salt, water and carbon dioxide',
          '.2 Bubble the gas through limewater',
          '.3 Limewater turns cloudy or milky',
        ],
      },
    ],
  },
  {
    id: 'chemA-organic', subject: 'chemistry', criterion: 'A', marks: 7,
    stimulus:
      'Crude oil is a mixture of hydrocarbons separated by fractional distillation. Alkanes are saturated and alkenes are unsaturated.',
    parts: [
      {
        id: 'a', marks: 2, command: 'Select', type: 'select',
        prompt: 'the test that distinguishes an alkene from an alkane.',
        options: [
          'It decolourises bromine water',
          'It relights a glowing splint',
          'It turns limewater cloudy',
          'It gives a squeaky pop',
        ],
        answer: 0,
        explanation:
          'Alkenes contain a C=C double bond and decolourise orange bromine water. Alkanes are saturated and do not.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why fractional distillation separates the hydrocarbons in crude oil.',
        markscheme: [
          '.1 The fractions have different boiling points',
          '.2 Boiling point depends on chain length and intermolecular forces',
          '.3 Shorter chains condense higher up the column where it is cooler',
        ],
      },
      {
        id: 'c', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why cracking is carried out in industry.',
        markscheme: [
          '.1 It breaks long, less useful chains into shorter, more useful ones',
          '.2 It also produces alkenes needed for making polymers',
        ],
      },
    ],
  },
  {
    id: 'chemA-redox', subject: 'chemistry', criterion: 'A', marks: 5,
    stimulus:
      'In the reaction Zn + CuSO4 to ZnSO4 + Cu, zinc displaces copper from solution.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why this is a redox reaction, naming what is oxidised and reduced.',
        markscheme: [
          '.1 Zinc loses electrons, so it is oxidised',
          '.2 Copper ions gain electrons, so they are reduced',
          '.3 Both processes occur together (OIL RIG)',
        ],
      },
      {
        id: 'b', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why zinc is able to displace copper.',
        markscheme: [
          '.1 Zinc is higher in the reactivity series than copper',
          '.2 A more reactive metal displaces a less reactive one from its compound',
        ],
      },
    ],
  },

  /* ==================== CHEMISTRY - CRITERION B ==================== */
  {
    id: 'chemB-magnesium', subject: 'chemistry', criterion: 'B', marks: 13,
    stimulus:
      'A student investigates how the concentration of hydrochloric acid affects the rate of reaction with magnesium ribbon, by timing how long the magnesium takes to disappear.',
    parts: [
      {
        id: 'a', marks: 2, command: 'State', type: 'short',
        prompt: 'a hypothesis for this investigation, with scientific reasoning.',
        markscheme: [
          '.1 Directional prediction, e.g. higher concentration gives a shorter reaction time',
          '.2 Reasoning: more acid particles per unit volume means more frequent collisions',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Select', type: 'varTable',
        prompt: 'the description that best describes each variable.',
        rows: [
          { label: 'Concentration of hydrochloric acid', correct: 'independent' },
          { label: 'Time for the magnesium to disappear', correct: 'dependent' },
          { label: 'Length of magnesium ribbon', correct: 'control' },
          { label: 'Temperature of the acid', correct: 'control' },
        ],
        explanation:
          'Concentration is changed deliberately and reaction time measured. Ribbon length and temperature both independently affect rate, so both must be constant.',
      },
      {
        id: 'c', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why the magnesium ribbon should be cleaned with emery paper first.',
        markscheme: [
          '.1 Magnesium forms an oxide layer on its surface',
          '.2 Cleaning makes the starting surface consistent between trials',
        ],
      },
      {
        id: 'd', marks: 5, command: 'Design', type: 'extended',
        prompt:
          'an investigation to find out how temperature affects the rate of this reaction. You must include:\n- the independent, dependent and two control variables\n- the equipment you will need\n- the steps you will take to collect data\n- how you will collect sufficient, reliable data.',
        wordGuide: 220,
        markscheme: [
          '.1 IV = temperature of the acid; DV = time for the magnesium to disappear',
          '.2 Two valid controls, e.g. acid concentration and volume, ribbon length',
          '.3 Equipment: water bath, thermometer, stopwatch, measuring cylinder',
          '.4 Clear ordered repeatable steps',
          '.5 At least five temperatures, three repeats, means calculated',
        ],
      },
    ],
  },
  {
    id: 'chemB-surface', subject: 'chemistry', criterion: 'B', marks: 12,
    stimulus:
      'A student investigates how the surface area of marble chips affects the rate of reaction with acid, measuring the volume of gas produced.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Select', type: 'varTable',
        prompt: 'the description that best describes each variable.',
        rows: [
          { label: 'Size of the marble chips', correct: 'independent' },
          { label: 'Volume of gas collected in 60 s', correct: 'dependent' },
          { label: 'Total mass of marble used', correct: 'control' },
          { label: 'Concentration of the acid', correct: 'control' },
        ],
        explanation:
          'Chip size sets the surface area. Total mass must be constant or the amount of reactant would also change, confounding the comparison.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the total mass of marble must be kept the same for every trial.',
        markscheme: [
          '.1 Changing both surface area and quantity confounds the investigation',
          '.2 You could not tell which caused a difference in rate',
          '.3 Total gas produced would also change, not just the rate',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why a gas syringe gives more valid data than counting bubbles.',
        markscheme: [
          '.1 A syringe measures gas volume directly and quantitatively',
          '.2 Bubbles vary in size, so counting is not proportional to volume',
          '.3 Readings can be taken at fixed intervals to give a rate curve',
        ],
      },
      {
        id: 'd', marks: 2, command: 'Select', type: 'select',
        prompt: 'the most precise apparatus for measuring 25.0 cm3 of acid.',
        options: ['A 25 cm3 pipette', 'A 250 cm3 beaker', 'A 100 cm3 measuring cylinder', 'A test tube'],
        answer: 0,
        explanation:
          'Precision depends on the smallest scale division and tolerance. A pipette designed for that exact volume is far more precise than a beaker or oversized cylinder.',
      },
    ],
  },
  {
    id: 'chemB-titration', subject: 'chemistry', criterion: 'B', marks: 10,
    stimulus:
      'A student plans a titration to find the concentration of a sodium hydroxide solution using a standard acid.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Describe', type: 'short',
        prompt: 'the correct use of a pipette and burette in a titration.',
        markscheme: [
          '.1 A pipette delivers a fixed accurate volume of one solution',
          '.2 A burette delivers a variable measured volume of the other',
          '.3 The burette is read to two decimal places at the bottom of the meniscus',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why titres must be concordant before a mean is calculated.',
        markscheme: [
          '.1 Concordant titres agree within 0.10 cm3',
          '.2 This shows the readings are reliable and repeatable',
          '.3 Including a discordant value would distort the mean',
        ],
      },
      {
        id: 'c', marks: 4, command: 'Explain', type: 'short',
        prompt: 'how the student should ensure the data collected is reliable.',
        markscheme: [
          '.1 Carry out a rough titration first to find the approximate end point',
          '.2 Repeat until at least two concordant titres are obtained',
          '.3 Calculate the mean from concordant results only',
          '.4 Use the same indicator and judge the colour change consistently',
        ],
      },
    ],
  },
  {
    id: 'chemB-safety', subject: 'chemistry', criterion: 'B', marks: 8,
    stimulus:
      'A practical involves heating dilute hydrochloric acid and collecting hydrogen gas.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Outline', type: 'short',
        prompt: 'two hazards in this practical and a control measure for each.',
        markscheme: [
          '.1 Hazard 1: hydrochloric acid is corrosive or an irritant',
          '.2 Control: wear eye protection and wash spills immediately',
          '.3 Hazard 2: hydrogen gas is flammable',
          '.4 Control: no naked flames near the apparatus',
        ],
        reject: ['Be careful with the acid'],
      },
      {
        id: 'b', marks: 2, command: 'Select', type: 'select',
        prompt: 'what a properly written control measure must include.',
        options: [
          'The specific action taken to reduce the identified risk',
          'A general instruction to take care',
          'The cost of the chemicals',
          'The name of the supervising teacher',
        ],
        answer: 0,
        explanation:
          'A control measure names the hazard, the risk and the specific action taken. Vague advice scores nothing in Criterion B.',
      },
      {
        id: 'c', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why a risk assessment is completed before rather than during a practical.',
        markscheme: [
          '.1 Controls must be in place before exposure to the hazard',
          '.2 Planning prevents harm rather than responding after it occurs',
        ],
      },
    ],
  },
  {
    id: 'chemB-apparatus', subject: 'chemistry', criterion: 'B', marks: 7,
    stimulus:
      'A student records a burette reading as "23 cm3" and a mass as "2 g" on a balance reading to two decimal places.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Explain', type: 'short',
        prompt: 'why both recordings are inappropriate and how they should be written.',
        markscheme: [
          '.1 A burette reads to two decimal places, so 23.00 cm3',
          '.2 The balance reads to two decimal places, so 2.00 g',
          '.3 Recording to the resolution communicates the precision achieved',
          '.4 Dropping decimal places discards genuine information',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'the difference between resolution and accuracy of an instrument.',
        markscheme: [
          '.1 Resolution is the smallest change the instrument can display',
          '.2 Accuracy is how close its readings are to the true value',
          '.3 A high resolution instrument can still be inaccurate if uncalibrated',
        ],
      },
    ],
  },
  {
    id: 'chemB-variables', subject: 'chemistry', criterion: 'B', marks: 5,
    stimulus:
      'A student changes both the temperature and the concentration of acid between trials.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why this makes the investigation invalid.',
        markscheme: [
          '.1 Two variables have been changed at once',
          '.2 Any change in rate cannot be attributed to either one',
          '.3 Only one independent variable may change at a time',
        ],
      },
      {
        id: 'b', marks: 2, command: 'Select', type: 'select',
        prompt: 'the definition of a control variable.',
        options: [
          'A variable kept constant so it does not affect the results',
          'The variable being deliberately changed',
          'The variable being measured',
          'A variable that cannot be measured',
        ],
        answer: 0,
        explanation:
          'Control variables are held constant so that any change in the dependent variable can be attributed to the independent variable alone.',
      },
    ],
  },

  /* ==================== CHEMISTRY - CRITERION C ==================== */
  {
    id: 'chemC-rate-data', subject: 'chemistry', criterion: 'C', marks: 13,
    stimulus:
      'At one concentration a student recorded reaction times of 42 s, 44 s, 43 s and 71 s. They later plotted 1/time against concentration.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the mean reaction time, justifying how you handled the data.',
        markscheme: [
          '.1 71 s identified as an anomaly and excluded',
          '.2 (42 + 44 + 43) / 3',
          '.3 = 43 s',
        ],
        answerNote: '43 s',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why plotting 1/time rather than time gives a more useful graph.',
        markscheme: [
          '.1 1/time is proportional to the rate of reaction',
          '.2 So the graph shows rate directly rather than inversely',
          '.3 This gives a straight line with concentration, easier to interpret',
        ],
      },
      {
        id: 'c', marks: 2, command: 'Explain', type: 'short',
        prompt: 'what a gradient of zero on a gas volume against time graph indicates.',
        markscheme: [
          '.1 No more gas is being produced, so the reaction has finished',
          '.2 The limiting reactant has been completely used up',
        ],
      },
      {
        id: 'd', marks: 5, command: 'Evaluate', type: 'extended',
        prompt: 'the validity of this investigation, referring to specific features of the method.',
        wordGuide: 200,
        markscheme: [
          '.1 Defines validity as whether the method measures what it claims',
          '.2 Identifies an uncontrolled variable, e.g. the reaction is exothermic so temperature rises',
          '.3 Explains the direction of that effect on results',
          '.4 Identifies a judgement-based measurement problem, e.g. deciding when the ribbon has disappeared',
          '.5 Reaches an overall judgement on confidence',
        ],
      },
    ],
  },
  {
    id: 'chemC-yield', subject: 'chemistry', criterion: 'C', marks: 12,
    stimulus:
      'A student calculates a percentage yield of 112% for a precipitation reaction, and a second student obtains 64%.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why a yield of 112% must indicate an error.',
        markscheme: [
          '.1 Yield cannot exceed 100% because mass is conserved',
          '.2 The product was probably impure or still wet',
          '.3 So the measured mass was greater than the true mass of product',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Suggest', type: 'short',
        prompt: 'three reasons why the second student obtained only 64%.',
        markscheme: [
          '.1 Product lost during filtering or transfer',
          '.2 The reaction may be reversible or incomplete',
          '.3 Side reactions may produce other products',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'the difference between precision and accuracy, using a balance that always reads 0.20 g high.',
        markscheme: [
          '.1 Precise, because repeat readings are consistent',
          '.2 Not accurate, because readings are consistently away from the true value',
          '.3 This indicates a systematic error such as an unzeroed balance',
        ],
      },
      {
        id: 'd', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the mean titre from readings of 24.10, 25.60 and 24.15 cm3.',
        markscheme: [
          '.1 Identifies 25.60 as not concordant with the others',
          '.2 Uses only the concordant titres 24.10 and 24.15',
          '.3 Mean = 24.13 cm3',
        ],
        reject: ['Averaging all three values'],
        answerNote: '24.13 cm3',
      },
    ],
  },
  {
    id: 'chemC-graphs', subject: 'chemistry', criterion: 'C', marks: 10,
    stimulus:
      'Two curves of gas volume against time are plotted for the same reaction at different acid concentrations. Both level off at the same final volume.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the curves reach the same final volume despite different gradients.',
        markscheme: [
          '.1 Concentration affects how quickly the reaction proceeds',
          '.2 The limiting reactant determines the total product formed',
          '.3 The same amount of limiting reactant gives the same final volume',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Describe', type: 'short',
        prompt: 'how to find the initial rate of reaction from such a curve.',
        markscheme: [
          '.1 Draw a tangent to the curve at time zero',
          '.2 Calculate the gradient of that tangent',
          '.3 The gradient gives the rate in volume per unit time',
        ],
      },
      {
        id: 'c', marks: 4, command: 'Explain', type: 'short',
        prompt: 'why the gradient decreases as the reaction proceeds.',
        markscheme: [
          '.1 Reactants are being used up as the reaction proceeds',
          '.2 Concentration of the reactants therefore falls',
          '.3 Collisions become less frequent',
          '.4 So the rate, and therefore the gradient, decreases',
        ],
      },
    ],
  },
  {
    id: 'chemC-errors', subject: 'chemistry', criterion: 'C', marks: 8,
    stimulus:
      'A student obtains results that are consistently 8% below the accepted value for the same experiment.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why this indicates a systematic rather than random error.',
        markscheme: [
          '.1 The deviation is consistently in one direction',
          '.2 Random errors would scatter above and below the true value',
          '.3 A systematic error affects every reading in the same way',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Suggest', type: 'short',
        prompt: 'two possible sources of this systematic error and how to correct them.',
        markscheme: [
          '.1 An uncalibrated or unzeroed balance, corrected by zeroing before use',
          '.2 Heat loss to the surroundings, reduced with insulation or a lid',
          '.3 Each suggestion paired with a specific corrective action',
        ],
      },
      {
        id: 'c', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why repeating the experiment more times would not fix this problem.',
        markscheme: [
          '.1 Repeats reduce the effect of random error only',
          '.2 A systematic offset persists no matter how many repeats are taken',
        ],
      },
    ],
  },
  {
    id: 'chemC-conclusions', subject: 'chemistry', criterion: 'C', marks: 7,
    stimulus:
      'Data shows rate increasing steadily as concentration increases across the range tested.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Describe', type: 'short',
        prompt: 'a conclusion properly supported by this data.',
        markscheme: [
          '.1 States the trend: rate increases as concentration increases',
          '.2 Quotes supporting values from the data',
          '.3 Links to collision theory as the explanation',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Evaluate', type: 'extended',
        prompt: 'why claiming "rate will keep increasing without limit" would be unjustified.',
        wordGuide: 150,
        markscheme: [
          '.1 It extrapolates beyond the range of data collected',
          '.2 The relationship may not hold at very high concentrations',
          '.3 Other factors could become limiting',
          '.4 Conclusions must remain within what the evidence supports',
        ],
      },
    ],
  },
  {
    id: 'chemC-processing', subject: 'chemistry', criterion: 'C', marks: 5,
    stimulus:
      'A student records raw masses to varying numbers of decimal places and omits units from the table headings.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Describe', type: 'short',
        prompt: 'three improvements to the presentation of this data.',
        markscheme: [
          '.1 Put units in the column headings, not beside each value',
          '.2 Use a consistent number of decimal places matching the balance',
          '.3 Separate raw data from calculated means clearly',
        ],
      },
      {
        id: 'b', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why processed values should not be quoted to more significant figures than the raw data.',
        markscheme: [
          '.1 Processing cannot create precision that was not measured',
          '.2 Extra figures imply greater accuracy than the data supports',
        ],
      },
    ],
  },

  /* ==================== CHEMISTRY - CRITERION D ==================== */
  {
    id: 'chemD-ev', subject: 'chemistry', criterion: 'D', marks: 13,
    stimulus:
      'Lithium extraction uses large volumes of water in regions that are often already dry, and electric vehicle batteries must eventually be recycled or disposed of.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Outline', type: 'short',
        prompt: 'one environmental impact of extracting aluminium by electrolysis.',
        markscheme: [
          '.1 Electrolysis requires enormous quantities of electrical energy',
          '.2 Where that electricity comes from fossil fuels, large CO2 emissions result',
          '.3 Linked consequence, e.g. contributing to the enhanced greenhouse effect',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Discuss', type: 'extended',
        prompt: 'the impact of lithium extraction on communities living near brine pools.',
        wordGuide: 180,
        markscheme: [
          '.1 Identifies heavy water use in already water-scarce regions',
          '.2 Explains consequences for local agriculture and drinking water',
          '.3 Considers economic benefits such as employment and investment',
          '.4 Notes costs and benefits are unevenly distributed, and reaches a position',
        ],
      },
      {
        id: 'c', marks: 6, command: 'Evaluate', type: 'extended',
        prompt:
          'the claim that switching to electric vehicles is always better for the environment. Reach a justified conclusion.',
        wordGuide: 300,
        markscheme: [
          '.1 Supporting: no exhaust emissions in use, improving urban air quality',
          '.2 Supporting: lower lifetime CO2 where electricity is renewable',
          '.3 Against: lithium extraction is water intensive and damages ecosystems',
          '.4 Against: emissions displaced rather than removed if electricity is fossil-fuelled',
          '.5 Against: battery manufacture and disposal carry their own cost',
          '.6 Engages with the word "always" and reaches a justified conclusion',
        ],
      },
    ],
  },
  {
    id: 'chemD-recycling', subject: 'chemistry', criterion: 'D', marks: 12,
    stimulus:
      'Recycling metals uses a fraction of the energy required to extract them from ore, but collection and sorting have their own costs.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Explain', type: 'short',
        prompt: 'why recycling metals is preferable to extracting new ore.',
        markscheme: [
          '.1 Conserves finite ore reserves for future use',
          '.2 Uses a fraction of the energy of primary extraction',
          '.3 Lower energy use means lower emissions',
          '.4 Reduces landfill, mining waste and habitat damage',
        ],
        reject: ['Recycling requires no energy at all'],
      },
      {
        id: 'b', marks: 3, command: 'Outline', type: 'short',
        prompt: 'two practical difficulties with recycling metals on a large scale.',
        markscheme: [
          '.1 Collection and transport have their own energy and cost',
          '.2 Mixed or contaminated scrap must be sorted before use',
          '.3 Some products are designed in ways that make separation difficult',
        ],
      },
      {
        id: 'c', marks: 5, command: 'Evaluate', type: 'extended',
        prompt: 'whether manufacturers should be legally required to design products for recycling.',
        wordGuide: 250,
        markscheme: [
          '.1 Case for: reduces waste and makes recycling economically viable',
          '.2 Case against: raises production costs, potentially passed to consumers',
          '.3 Considers who bears responsibility: manufacturer, consumer or government',
          '.4 Uses specific reasoning rather than assertion',
          '.5 Reaches a justified conclusion',
        ],
      },
    ],
  },
  {
    id: 'chemD-atmosphere', subject: 'chemistry', criterion: 'D', marks: 10,
    stimulus:
      'Complete combustion of hydrocarbons produces carbon dioxide and water. Incomplete combustion produces carbon monoxide and soot.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Explain', type: 'short',
        prompt: 'why incomplete combustion is more dangerous than complete combustion.',
        markscheme: [
          '.1 Incomplete combustion produces carbon monoxide',
          '.2 Carbon monoxide binds irreversibly to haemoglobin',
          '.3 This reduces the blood’s ability to transport oxygen',
          '.4 Soot particles also harm the lungs and blacken surfaces',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'the difference between the natural and the enhanced greenhouse effect.',
        markscheme: [
          '.1 The natural greenhouse effect keeps Earth warm enough for life',
          '.2 The enhanced effect results from additional CO2 and methane from human activity',
          '.3 It is the enhancement, not the effect itself, that causes climate change',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Discuss', type: 'short',
        prompt: 'why reducing emissions requires international rather than national action.',
        markscheme: [
          '.1 The atmosphere is shared, so emissions anywhere affect everywhere',
          '.2 One country acting alone has limited effect on global concentration',
          '.3 Without agreement, countries have an incentive not to bear the cost',
        ],
      },
    ],
  },
  {
    id: 'chemD-sources', subject: 'chemistry', criterion: 'D', marks: 8,
    stimulus:
      'A report on battery recycling rates was funded by a battery manufacturer and published without peer review.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Discuss', type: 'extended',
        prompt: 'how a chemist should evaluate the reliability of this report.',
        wordGuide: 150,
        markscheme: [
          '.1 Identifies the funding source as a potential conflict of interest',
          '.2 Explains this is a limitation rather than automatic grounds for rejection',
          '.3 Suggests triangulating against independent peer-reviewed sources',
          '.4 Comments on checking whether methodology and data are transparent',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Explain', type: 'short',
        prompt: 'why peer review strengthens confidence in a scientific claim.',
        markscheme: [
          '.1 Other experts examine the methods and conclusions',
          '.2 Errors and overstated claims are more likely to be caught',
          '.3 It reduces the influence of the authors’ own bias',
          '.4 It does not guarantee correctness, but raises the standard of evidence',
        ],
      },
    ],
  },
  {
    id: 'chemD-green', subject: 'chemistry', criterion: 'D', marks: 7,
    stimulus:
      'Green chemistry aims to reduce the environmental impact of chemical processes, for example by using catalysts or less hazardous solvents.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'how using a catalyst can reduce the environmental impact of an industrial process.',
        markscheme: [
          '.1 A catalyst lowers the activation energy',
          '.2 The reaction can run at a lower temperature',
          '.3 Less energy is required, so emissions are reduced',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Discuss', type: 'extended',
        prompt: 'why industry may be slow to adopt greener processes even when they exist.',
        wordGuide: 150,
        markscheme: [
          '.1 Existing plant and equipment represent a large sunk investment',
          '.2 New processes may cost more in the short term',
          '.3 Without regulation there may be little commercial incentive',
          '.4 Reaches a position on how change might be encouraged',
        ],
      },
    ],
  },
  {
    id: 'chemD-ethics', subject: 'chemistry', criterion: 'D', marks: 5,
    stimulus:
      'A chemical plant proposes to discharge treated wastewater into a river used by a downstream community.',
    parts: [
      {
        id: 'a', marks: 2, command: 'Select', type: 'select',
        prompt: 'which objection is scientific rather than ethical.',
        options: [
          'Measurements show the discharge would raise river temperature and reduce dissolved oxygen',
          'The downstream community was not consulted',
          'The company benefits while the community bears the risk',
          'Future generations did not agree to it',
        ],
        answer: 0,
        explanation:
          'Scientific objections rest on measurable physical consequences. The others concern consent, fairness and distribution of benefit, which are ethical dimensions.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why both types of consideration matter in reaching a decision.',
        markscheme: [
          '.1 Science establishes what the consequences will be',
          '.2 Ethics addresses who bears the costs and whether that is fair',
          '.3 Evidence alone cannot settle a question of values',
        ],
      },
    ],
  },
]
