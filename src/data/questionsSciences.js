// Criterion-tagged science practice questions at MYP Year 4–5 level.
// criterion: A = Knowing & understanding, B = Inquiring & designing,
// C = Processing & evaluating, D = Reflecting on the impacts of science.

export const SCIENCE_QUESTIONS = [
  /* ============ BIOLOGY - A: Knowing & understanding ============ */
  {
    id: 'bioA-1', subject: 'biology', criterion: 'A', topic: 'Cells',
    prompt: 'Which feature of an alveolus most increases the rate of gas exchange?',
    options: [
      'Its thick muscular wall',
      'Its large surface area and one-cell-thick wall',
      'Its store of haemoglobin',
      'Its ability to contract',
    ],
    answer: 1,
    explanation:
      'Rate of diffusion increases with surface area and decreases with distance. Alveoli are numerous (large area) and one cell thick (short diffusion path), with a rich blood supply maintaining the concentration gradient.',
  },
  {
    id: 'bioA-2', subject: 'biology', criterion: 'A', topic: 'Enzymes',
    prompt: 'Above its optimum temperature, enzyme activity falls sharply because…',
    options: [
      'the enzyme is used up by the reaction',
      'the active site changes shape, so the substrate no longer fits',
      'the substrate becomes too cold',
      'the enzyme turns into a carbohydrate',
    ],
    answer: 1,
    explanation:
      'High temperature breaks the bonds holding the enzyme’s tertiary structure, denaturing it. The active site changes shape permanently, so the substrate can no longer bind.',
  },
  {
    id: 'bioA-3', subject: 'biology', criterion: 'A', topic: 'Transport',
    prompt: 'A plant cell placed in a concentrated sugar solution becomes plasmolysed. This is because water…',
    options: [
      'entered the cell by osmosis',
      'left the cell by osmosis, so the membrane pulled away from the wall',
      'was actively transported into the vacuole',
      'evaporated through the cell wall',
    ],
    answer: 1,
    explanation:
      'The external solution has a lower water potential, so water leaves the cell by osmosis. The protoplast shrinks and pulls away from the cell wall - plasmolysis.',
  },
  {
    id: 'bioA-4', subject: 'biology', criterion: 'A', topic: 'Homeostasis',
    prompt: 'Which sequence correctly describes negative feedback control of blood glucose after a meal?',
    options: [
      'Glucose rises → glucagon released → glucose rises further',
      'Glucose rises → insulin released → cells take up glucose → glucose falls',
      'Glucose falls → insulin released → glucose falls further',
      'Glucose rises → insulin released → liver releases more glucose',
    ],
    answer: 1,
    explanation:
      'Negative feedback reverses the change. Rising glucose triggers insulin from the pancreas; cells absorb glucose and the liver stores it as glycogen, returning levels to normal.',
  },
  {
    id: 'bioA-5', subject: 'biology', criterion: 'A', topic: 'Genetics',
    prompt: 'Two heterozygous parents (Bb) have a child. What is the probability the child is homozygous recessive?',
    options: ['0%', '25%', '50%', '75%'],
    answer: 1,
    explanation:
      'The Punnett square gives BB : Bb : Bb : bb. Only bb is homozygous recessive - 1 in 4, or 25%.',
  },
  {
    id: 'bioA-6', subject: 'biology', criterion: 'A', topic: 'Evolution',
    prompt: 'Bacteria become resistant to an antibiotic because…',
    options: [
      'individual bacteria choose to adapt to survive',
      'random mutation produces resistant individuals that survive and reproduce',
      'the antibiotic makes bacteria stronger',
      'all bacteria gradually change together',
    ],
    answer: 1,
    explanation:
      'Resistance arises from random mutation, not intent. The antibiotic acts as a selection pressure: resistant bacteria survive, reproduce and pass on the allele - natural selection.',
  },
  {
    id: 'bioA-7', subject: 'biology', criterion: 'A', topic: 'Ecology',
    prompt: 'Only about 10% of energy is transferred between trophic levels. This mainly explains why…',
    options: [
      'food chains rarely have more than 4–5 levels',
      'producers are always small',
      'decomposers are unnecessary',
      'energy is created at each level',
    ],
    answer: 0,
    explanation:
      'Energy is lost as heat from respiration, in movement and in undigested waste. After a few levels too little energy remains to support another population.',
  },
  {
    id: 'bioA-8', subject: 'biology', criterion: 'A', topic: 'Cell division',
    prompt: 'Which statement correctly distinguishes meiosis from mitosis?',
    options: [
      'Meiosis makes identical diploid cells; mitosis makes gametes',
      'Meiosis halves chromosome number and produces genetic variation',
      'Meiosis occurs in all body cells for growth',
      'Meiosis produces two genetically identical cells',
    ],
    answer: 1,
    explanation:
      'Meiosis produces four haploid, genetically varied gametes (via crossing over and independent assortment). Mitosis produces two genetically identical diploid cells.',
  },

  /* ============ BIOLOGY - B: Inquiring & designing ============ */
  {
    id: 'bioB-1', subject: 'biology', criterion: 'B', topic: 'Variables',
    prompt: 'A student investigates how light intensity affects photosynthesis by counting oxygen bubbles from pondweed. What is the dependent variable?',
    options: [
      'The light intensity',
      'The number of bubbles produced per minute',
      'The temperature of the water',
      'The species of pondweed',
    ],
    answer: 1,
    explanation:
      'The dependent variable is what you measure as a result of the change. Light intensity is the independent variable; temperature and species must be controlled.',
  },
  {
    id: 'bioB-2', subject: 'biology', criterion: 'B', topic: 'Hypothesis',
    prompt: 'Which is the strongest MYP-style hypothesis?',
    options: [
      'Enzymes work better when it is warmer.',
      'I think temperature will change the reaction.',
      'As temperature increases to 37 °C the rate will increase, because particles gain kinetic energy and collide with the active site more often; above this it will fall as the enzyme denatures.',
      'Temperature affects enzymes.',
    ],
    answer: 2,
    explanation:
      'A strong hypothesis is a directional, testable prediction supported by correct scientific reasoning - not just a statement that something will change.',
  },
  {
    id: 'bioB-3', subject: 'biology', criterion: 'B', topic: 'Controlled variables',
    prompt: 'In the pondweed investigation, why must the same piece of pondweed be used throughout?',
    options: [
      'To save money',
      'So surface area and physiology don’t confound the results',
      'Because pondweed is rare',
      'To make the experiment faster',
    ],
    answer: 1,
    explanation:
      'Different specimens vary in size and health, which would affect oxygen output independently of light - a confounding variable that reduces validity.',
  },
  {
    id: 'bioB-4', subject: 'biology', criterion: 'B', topic: 'Method',
    prompt: 'Repeating each measurement three times and taking a mean primarily improves the…',
    options: [
      'accuracy of the equipment',
      'reliability of the data',
      'range of the independent variable',
      'safety of the method',
    ],
    answer: 1,
    explanation:
      'Repeats reduce the effect of random error and let you spot anomalies, improving reliability. Accuracy depends on how close a reading is to the true value.',
  },
  {
    id: 'bioB-5', subject: 'biology', criterion: 'B', topic: 'Method',
    prompt: 'A student tests only two light intensities. The main weakness of this design is that…',
    options: [
      'the results will be too accurate',
      'there are too few data points to identify a reliable trend',
      'the dependent variable is wrong',
      'no control variables are needed',
    ],
    answer: 1,
    explanation:
      'A valid investigation needs a sufficient range and number of values (usually five or more) to establish a trend rather than a coincidence.',
  },

  /* ============ BIOLOGY - C: Processing & evaluating ============ */
  {
    id: 'bioC-1', subject: 'biology', criterion: 'C', topic: 'Data analysis',
    prompt: 'Readings are 24, 26, 25 and 48 bubbles/min. What is the best way to handle the 48?',
    options: [
      'Include it in the mean without comment',
      'Identify it as an anomaly, exclude it from the mean and suggest a cause',
      'Delete all the data and start again',
      'Change it to 25',
    ],
    answer: 1,
    explanation:
      'Anomalies should be identified, excluded from the mean, and explained (e.g. a trapped bubble released at once). Altering data is never acceptable.',
  },
  {
    id: 'bioC-2', subject: 'biology', criterion: 'C', topic: 'Graphs',
    prompt: 'A photosynthesis rate graph rises then flattens at high light intensity. The best conclusion is that…',
    options: [
      'light is no longer needed',
      'another factor such as CO₂ concentration or temperature has become limiting',
      'the plant has died',
      'the results are invalid',
    ],
    answer: 1,
    explanation:
      'The plateau shows light is no longer the limiting factor - something else (CO₂, temperature) now limits the rate. Recognising limiting factors is key to evaluating the data.',
  },
  {
    id: 'bioC-3', subject: 'biology', criterion: 'C', topic: 'Conclusions',
    prompt: 'Which conclusion is best supported by data showing rate rising with temperature up to 40 °C then falling?',
    options: [
      'Enzymes always work faster when hotter',
      'The optimum is about 40 °C; beyond it the rate falls, consistent with denaturation',
      'Temperature has no effect',
      'The enzyme was used up',
    ],
    answer: 1,
    explanation:
      'A strong conclusion describes the trend, quotes supporting data and explains it scientifically - without overstating beyond what was tested.',
  },
  {
    id: 'bioC-4', subject: 'biology', criterion: 'C', topic: 'Evaluation',
    prompt: 'Which is a valid *improvement* rather than just a limitation?',
    options: [
      'The results were not very good',
      'Use a thermostatically controlled water bath to keep temperature constant',
      'The experiment was hard',
      'We ran out of time',
    ],
    answer: 1,
    explanation:
      'An improvement names a specific methodological change that addresses a weakness. Vague comments about difficulty or time score no marks.',
  },
  {
    id: 'bioC-5', subject: 'biology', criterion: 'C', topic: 'Data analysis',
    prompt: 'Which graph type is appropriate for continuous data such as temperature against reaction rate?',
    options: ['Pie chart', 'Bar chart', 'Line graph with a line of best fit', 'Venn diagram'],
    answer: 2,
    explanation:
      'Continuous independent variables use a line graph with a line of best fit. Bar charts are for categoric (discrete) variables.',
  },

  /* ============ BIOLOGY - D: Reflecting on impacts ============ */
  {
    id: 'bioD-1', subject: 'biology', criterion: 'D', topic: 'Science & society',
    prompt: 'Which is an *ethical* implication of genetic screening of embryos?',
    options: [
      'It requires laboratory equipment',
      'It raises questions about who decides which traits are acceptable',
      'It uses electricity',
      'It takes several days',
    ],
    answer: 1,
    explanation:
      'Ethical implications concern rights and moral judgements - here, disability rights and the risk of selecting for non-medical traits. Practical details are not ethical issues.',
  },
  {
    id: 'bioD-2', subject: 'biology', criterion: 'D', topic: 'Environment',
    prompt: 'Deforestation reduces biodiversity mainly because…',
    options: [
      'trees are attractive',
      'habitats and food sources are destroyed, so specialist species decline',
      'it makes soil warmer',
      'it uses machinery',
    ],
    answer: 1,
    explanation:
      'Habitat loss removes niches and food webs collapse; specialists with narrow requirements are lost first, alongside reduced carbon storage.',
  },
  {
    id: 'bioD-3', subject: 'biology', criterion: 'D', topic: 'Health',
    prompt: 'Which is the strongest *social* argument for widespread vaccination?',
    options: [
      'Vaccines are cheap to make',
      'High uptake creates herd immunity, protecting those who cannot be vaccinated',
      'Injections are quick',
      'It reduces paperwork',
    ],
    answer: 1,
    explanation:
      'Herd immunity is a societal benefit: when enough people are immune, transmission falls, protecting the immunocompromised and very young.',
  },
  {
    id: 'bioD-4', subject: 'biology', criterion: 'D', topic: 'Referencing',
    prompt: 'When using a scientific source in your report, you should…',
    options: [
      'copy it word for word without citing',
      'cite it in a consistent referencing style and evaluate its reliability',
      'only use social media posts',
      'avoid mentioning where it came from',
    ],
    answer: 1,
    explanation:
      'Criterion D requires documented sources in a consistent style. Evaluating reliability (peer-reviewed vs opinion) strengthens your reflection.',
  },

  /* ============ CHEMISTRY - A ============ */
  {
    id: 'chemA-1', subject: 'chemistry', criterion: 'A', topic: 'Bonding',
    prompt: 'Sodium chloride has a high melting point because…',
    options: [
      'its molecules are heavy',
      'strong electrostatic forces act throughout a giant ionic lattice',
      'it contains covalent double bonds',
      'it has delocalised electrons',
    ],
    answer: 1,
    explanation:
      'Ionic compounds form giant lattices; large amounts of energy are needed to overcome the strong electrostatic attraction between oppositely charged ions.',
  },
  {
    id: 'chemA-2', subject: 'chemistry', criterion: 'A', topic: 'Periodic table',
    prompt: 'Reactivity increases down Group 1 because…',
    options: [
      'atoms get smaller',
      'the outer electron is further from the nucleus and more easily lost',
      'there are fewer protons',
      'the atoms gain electrons more easily',
    ],
    answer: 1,
    explanation:
      'Down the group, atomic radius and shielding increase, so the outer electron is held less strongly and is lost more readily - increasing reactivity.',
  },
  {
    id: 'chemA-3', subject: 'chemistry', criterion: 'A', topic: 'Rates',
    prompt: 'Using collision theory, increasing concentration speeds a reaction because…',
    options: [
      'particles move faster',
      'there are more particles per unit volume, so collisions are more frequent',
      'activation energy is lowered',
      'the particles become hotter',
    ],
    answer: 1,
    explanation:
      'Higher concentration means more frequent collisions. Temperature increases collision energy *and* frequency; a catalyst lowers activation energy.',
  },
  {
    id: 'chemA-4', subject: 'chemistry', criterion: 'A', topic: 'Redox',
    prompt: 'In the reaction Zn + CuSO₄ → ZnSO₄ + Cu, zinc is…',
    options: [
      'reduced, because it gains electrons',
      'oxidised, because it loses electrons',
      'unchanged',
      'acting as a catalyst',
    ],
    answer: 1,
    explanation:
      'Zn → Zn²⁺ + 2e⁻: zinc loses electrons, so it is oxidised (OIL RIG). Copper ions gain electrons and are reduced.',
  },
  {
    id: 'chemA-5', subject: 'chemistry', criterion: 'A', topic: 'Equations',
    prompt: 'Balance: __CH₄ + __O₂ → __CO₂ + __H₂O. The coefficient of O₂ is…',
    options: ['1', '2', '3', '4'],
    answer: 1,
    explanation:
      'CH₄ + 2O₂ → CO₂ + 2H₂O. Carbon balances at 1, hydrogen needs 2 H₂O (4 H), giving 4 O on the right, so 2 O₂ on the left.',
  },
  {
    id: 'chemA-6', subject: 'chemistry', criterion: 'A', topic: 'Acids',
    prompt: 'A solution of pH 3 is how many times more acidic than one of pH 5?',
    options: ['2 times', '10 times', '100 times', '1000 times'],
    answer: 2,
    explanation:
      'The pH scale is logarithmic: each unit is a ten-fold change in H⁺ concentration. Two units = 10 × 10 = 100 times more acidic.',
  },

  /* ============ CHEMISTRY - B ============ */
  {
    id: 'chemB-1', subject: 'chemistry', criterion: 'B', topic: 'Variables',
    prompt: 'To investigate how surface area affects reaction rate with marble chips, which must be controlled?',
    options: [
      'The size of the marble chips',
      'The concentration and volume of acid, and the temperature',
      'The time measured',
      'The volume of gas produced',
    ],
    answer: 1,
    explanation:
      'Chip size is the independent variable and gas volume the dependent variable. Acid concentration, volume, mass of marble and temperature must be kept constant.',
  },
  {
    id: 'chemB-2', subject: 'chemistry', criterion: 'B', topic: 'Safety',
    prompt: 'A risk assessment for heating dilute hydrochloric acid should include…',
    options: [
      'the price of the chemicals',
      'the hazard, the risk it poses, and the control measure (e.g. goggles)',
      'the colour of the solution',
      'how long the lesson lasts',
    ],
    answer: 1,
    explanation:
      'A proper risk assessment names each hazard, the associated risk, and a specific control measure - not just “be careful”.',
  },
  {
    id: 'chemB-3', subject: 'chemistry', criterion: 'B', topic: 'Method',
    prompt: 'Which apparatus gives the most precise measurement of 25.0 cm³ of solution?',
    options: ['A 250 cm³ beaker', 'A 100 cm³ measuring cylinder', 'A 25 cm³ pipette', 'A test tube'],
    answer: 2,
    explanation:
      'Precision depends on the smallest scale division and tolerance. A pipette designed for that volume is far more precise than a beaker or large cylinder.',
  },
  {
    id: 'chemB-4', subject: 'chemistry', criterion: 'B', topic: 'Hypothesis',
    prompt: 'Which hypothesis best shows scientific reasoning?',
    options: [
      'Smaller chips will react faster.',
      'Smaller chips will react faster because a greater surface area exposes more particles, increasing collision frequency.',
      'Chips will change.',
      'Surface area matters a lot.',
    ],
    answer: 1,
    explanation:
      'Criterion B rewards a prediction *plus* correct scientific explanation. Here that means linking surface area to collision frequency.',
  },

  /* ============ CHEMISTRY - C ============ */
  {
    id: 'chemC-1', subject: 'chemistry', criterion: 'C', topic: 'Data analysis',
    prompt: 'On a graph of gas volume against time, the gradient becomes zero. This shows that…',
    options: [
      'the reaction has stopped because a reactant is used up',
      'the gas has escaped',
      'the temperature has doubled',
      'the reaction is speeding up',
    ],
    answer: 0,
    explanation:
      'A zero gradient means no more gas is produced - the limiting reactant is exhausted. The steepest gradient (at the start) shows the fastest rate.',
  },
  {
    id: 'chemC-2', subject: 'chemistry', criterion: 'C', topic: 'Calculations',
    prompt: 'A student calculates a percentage yield of 112%. This indicates…',
    options: [
      'an excellent reaction',
      'an error - the product was probably impure or still wet',
      'that mass was created',
      'the reaction was endothermic',
    ],
    answer: 1,
    explanation:
      'Yield cannot exceed 100% (conservation of mass). Values above it indicate impurities or residual solvent - an evaluation point.',
  },
  {
    id: 'chemC-3', subject: 'chemistry', criterion: 'C', topic: 'Evaluation',
    prompt: 'Which best evaluates the *validity* of an experiment?',
    options: [
      'The results were repeated three times',
      'Heat loss to the surroundings was not controlled, so the measured energy change is lower than the true value',
      'The graph looked neat',
      'We used a stopwatch',
    ],
    answer: 1,
    explanation:
      'Validity concerns whether the method actually measures what it claims. Identifying an uncontrolled variable and its direction of effect is strong evaluation.',
  },
  {
    id: 'chemC-4', subject: 'chemistry', criterion: 'C', topic: 'Precision',
    prompt: 'A balance reads 2.4 g but the true mass is 5.0 g, and it repeats 2.4 g every time. The readings are…',
    options: [
      'accurate but not precise',
      'precise but not accurate (systematic error)',
      'both accurate and precise',
      'neither precise nor repeatable',
    ],
    answer: 1,
    explanation:
      'Consistent repeats = precise. Consistently wrong = inaccurate, indicating a systematic error such as an unzeroed balance.',
  },

  /* ============ CHEMISTRY - D ============ */
  {
    id: 'chemD-1', subject: 'chemistry', criterion: 'D', topic: 'Environment',
    prompt: 'Which is an *environmental* implication of extracting aluminium by electrolysis?',
    options: [
      'Aluminium is shiny',
      'It requires enormous electrical energy, often generating CO₂ emissions',
      'Aluminium cans are light',
      'It uses a crucible',
    ],
    answer: 1,
    explanation:
      'Electrolysis of aluminium is highly energy-intensive; where electricity comes from fossil fuels this drives significant emissions - a key reason recycling is favoured.',
  },
  {
    id: 'chemD-2', subject: 'chemistry', criterion: 'D', topic: 'Sustainability',
    prompt: 'The strongest argument for recycling metals rather than extracting new ore is that it…',
    options: [
      'looks better',
      'conserves finite ore reserves and uses far less energy',
      'is always free',
      'produces no waste at all',
    ],
    answer: 1,
    explanation:
      'Recycling conserves finite resources and typically uses a fraction of the energy of primary extraction. Claiming zero waste would be an overstatement.',
  },
  {
    id: 'chemD-3', subject: 'chemistry', criterion: 'D', topic: 'Climate',
    prompt: 'Which statement about combustion and climate change is scientifically accurate?',
    options: [
      'Burning hydrocarbons releases CO₂, a greenhouse gas that absorbs infrared radiation',
      'Combustion removes CO₂ from the atmosphere',
      'CO₂ has no effect on temperature',
      'Only cars produce CO₂',
    ],
    answer: 0,
    explanation:
      'Complete combustion of hydrocarbons produces CO₂ and water. CO₂ absorbs and re-emits infrared, enhancing the greenhouse effect.',
  },

  /* ============ PHYSICS - A ============ */
  {
    id: 'physA-1', subject: 'physics', criterion: 'A', topic: 'Forces',
    prompt: 'A 6 kg object accelerates at 3 m/s². What resultant force acts on it?',
    options: ['2 N', '9 N', '18 N', '0.5 N'],
    answer: 2,
    explanation:
      'F = ma = 6 × 3 = 18 N. Always state units and check you have used the resultant (net) force.',
  },
  {
    id: 'physA-2', subject: 'physics', criterion: 'A', topic: 'Energy',
    prompt: 'A 2 kg ball is lifted 5 m (g = 10 N/kg). Its gain in gravitational potential energy is…',
    options: ['10 J', '25 J', '100 J', '1000 J'],
    answer: 2,
    explanation:
      'GPE = mgh = 2 × 10 × 5 = 100 J.',
  },
  {
    id: 'physA-3', subject: 'physics', criterion: 'A', topic: 'Electricity',
    prompt: 'A 12 V supply drives 0.5 A through a resistor. Its resistance is…',
    options: ['6 Ω', '12 Ω', '24 Ω', '0.04 Ω'],
    answer: 2,
    explanation:
      'V = IR, so R = V ÷ I = 12 ÷ 0.5 = 24 Ω.',
  },
  {
    id: 'physA-4', subject: 'physics', criterion: 'A', topic: 'Waves',
    prompt: 'A wave has frequency 50 Hz and wavelength 4 m. Its speed is…',
    options: ['12.5 m/s', '54 m/s', '200 m/s', '0.08 m/s'],
    answer: 2,
    explanation:
      'v = fλ = 50 × 4 = 200 m/s.',
  },
  {
    id: 'physA-5', subject: 'physics', criterion: 'A', topic: 'Motion',
    prompt: 'On a velocity–time graph, the area under the line represents…',
    options: ['acceleration', 'distance travelled', 'force', 'momentum'],
    answer: 1,
    explanation:
      'Gradient of a velocity–time graph gives acceleration; the area beneath it gives displacement/distance travelled.',
  },
  {
    id: 'physA-6', subject: 'physics', criterion: 'A', topic: 'Radioactivity',
    prompt: 'A sample has a half-life of 5 days and an activity of 800 Bq. What is its activity after 15 days?',
    options: ['400 Bq', '200 Bq', '100 Bq', '0 Bq'],
    answer: 2,
    explanation:
      '15 days = 3 half-lives. 800 → 400 → 200 → 100 Bq.',
  },

  /* ============ PHYSICS - B ============ */
  {
    id: 'physB-1', subject: 'physics', criterion: 'B', topic: 'Variables',
    prompt: 'Investigating how the length of a pendulum affects its period, the independent variable is…',
    options: ['the period', 'the length of the string', 'the mass of the bob', 'gravity'],
    answer: 1,
    explanation:
      'You deliberately change length (independent) and measure the period (dependent). Bob mass and release angle must be controlled.',
  },
  {
    id: 'physB-2', subject: 'physics', criterion: 'B', topic: 'Method',
    prompt: 'Timing 20 oscillations and dividing by 20, rather than timing one, mainly reduces…',
    options: [
      'systematic error in the ruler',
      'the effect of human reaction-time (random) error',
      'the mass of the bob',
      'air resistance',
    ],
    answer: 1,
    explanation:
      'Reaction time is a fixed uncertainty per timing. Spreading it across many oscillations reduces its proportional effect on each period.',
  },
  {
    id: 'physB-3', subject: 'physics', criterion: 'B', topic: 'Method',
    prompt: 'Which change would most improve the validity of a circuit investigation into resistance and temperature?',
    options: [
      'Using a brighter bulb',
      'Allowing the component to reach thermal equilibrium before each reading',
      'Recording fewer results',
      'Using a shorter wire each time at random',
    ],
    answer: 1,
    explanation:
      'If the component hasn’t stabilised, the recorded temperature doesn’t match the resistance measured - invalidating the relationship being tested.',
  },

  /* ============ PHYSICS - C ============ */
  {
    id: 'physC-1', subject: 'physics', criterion: 'C', topic: 'Graphs',
    prompt: 'A graph of extension against force for a spring is a straight line through the origin until point P, after which it curves. Point P is…',
    options: [
      'the melting point',
      'the limit of proportionality (Hooke’s law no longer holds)',
      'the origin',
      'an anomaly to ignore',
    ],
    answer: 1,
    explanation:
      'Up to the limit of proportionality, extension ∝ force (Hooke’s law). Beyond it the spring deforms and the relationship is no longer linear.',
  },
  {
    id: 'physC-2', subject: 'physics', criterion: 'C', topic: 'Data analysis',
    prompt: 'A line of best fit should…',
    options: [
      'join every point exactly, dot to dot',
      'follow the trend with points balanced either side, ignoring anomalies',
      'always pass through the origin',
      'be drawn only through the first and last points',
    ],
    answer: 1,
    explanation:
      'A best-fit line shows the overall trend with roughly equal scatter above and below. Anomalies are circled and excluded, not joined.',
  },
  {
    id: 'physC-3', subject: 'physics', criterion: 'C', topic: 'Uncertainty',
    prompt: 'A ruler with 1 mm divisions is used to measure 150 mm. The reading is best recorded as…',
    options: ['150 mm exactly', '150 ± 0.5 mm', '150 ± 50 mm', '1.5 m'],
    answer: 1,
    explanation:
      'Uncertainty is usually taken as half the smallest scale division - here ±0.5 mm. Quoting uncertainty is expected in strong Criterion C work.',
  },
  {
    id: 'physC-4', subject: 'physics', criterion: 'C', topic: 'Conclusions',
    prompt: 'Data shows current doubling when voltage doubles (at constant temperature). The best conclusion is…',
    options: [
      'current and voltage are unrelated',
      'current is directly proportional to voltage, consistent with Ohm’s law',
      'resistance doubles',
      'the wire melted',
    ],
    answer: 1,
    explanation:
      'A doubling-for-doubling relationship through the origin indicates direct proportionality - V = IR with constant R (Ohm’s law).',
  },

  /* ============ PHYSICS - D ============ */
  {
    id: 'physD-1', subject: 'physics', criterion: 'D', topic: 'Energy resources',
    prompt: 'Which is a genuine *limitation* of wind power?',
    options: [
      'It produces CO₂ when generating',
      'Output is intermittent and depends on weather conditions',
      'It uses finite fuel',
      'It cannot be built offshore',
    ],
    answer: 1,
    explanation:
      'Wind generates no CO₂ in operation and the resource is renewable, but intermittency means backup supply or storage is needed - a key evaluation point.',
  },
  {
    id: 'physD-2', subject: 'physics', criterion: 'D', topic: 'Radiation',
    prompt: 'Which is a valid *social/ethical* consideration in using nuclear power?',
    options: [
      'Reactors are large buildings',
      'Long-lived radioactive waste must be stored safely for future generations',
      'Uranium is a metal',
      'Turbines spin quickly',
    ],
    answer: 1,
    explanation:
      'Intergenerational responsibility for waste storage, plus accident risk and proliferation, are the ethical dimensions - distinct from technical description.',
  },
  {
    id: 'physD-3', subject: 'physics', criterion: 'D', topic: 'Technology',
    prompt: 'Medical imaging with X-rays involves a trade-off because X-rays…',
    options: [
      'are visible light',
      'are ionising and can damage cells, so exposure is minimised against diagnostic benefit',
      'cannot pass through skin',
      'are completely harmless',
    ],
    answer: 1,
    explanation:
      'X-rays are ionising radiation with a real risk of cell damage; practice balances diagnostic benefit against minimising dose (shielding, limited exposure).',
  },
]
