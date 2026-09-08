// Science question blocks for the mock generator.
//
// Each block is one stimulus plus its parts, belonging to a single criterion
// and worth a fixed mark total. Block mark values are chosen so combinations
// sum exactly to 25 per criterion (13+12, 13+7+5, 12+8+5, 10+8+7), giving many
// distinct valid papers.
//
// Markscheme fields follow real MYP style:
//   markscheme  numbered method points (.1, .2, .3)
//   accept      alternative wording or values that earn the mark
//   reject      answers explicitly not credited
//   altMethod   an alternative valid route to the answer
//   strands     strand rubric for large Criterion B investigations

export const SCIENCE_BLOCKS = [
  /* ==================== PHYSICS - CRITERION A ==================== */
  {
    id: 'physA-turbine', subject: 'physics', criterion: 'A', marks: 13,
    stimulus:
      'Wind turbines convert the kinetic energy of moving air into electrical energy. A single turbine transfers 5 400 000 J of energy in 60 seconds. The wind reaching the blades carries 120 kW of power.',
    parts: [
      {
        id: 'a', marks: 1, command: 'State', type: 'select',
        prompt: 'the main energy transfer taking place in a wind turbine.',
        options: [
          'Kinetic energy to electrical energy',
          'Thermal energy to kinetic energy',
          'Chemical energy to light energy',
          'Electrical energy to nuclear energy',
        ],
        answer: 0,
        explanation:
          'Moving air carries kinetic energy, which turns the blades and drives a generator, transferring it to electrical energy with some wasted as heat and sound.',
      },
      {
        id: 'b', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the power output of the turbine. State the unit.',
        markscheme: [
          '.1 Correct equation: power = energy transferred / time',
          '.2 Substitution: P = 5 400 000 / 60',
          '.3 P = 90 000 W with unit',
        ],
        accept: ['90 kW', '9.0 x 10^4 W'],
        reject: ['90 000 without a unit'],
        answerNote: '90 000 W (90 kW)',
      },
      {
        id: 'c', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the efficiency of the turbine.',
        markscheme: [
          '.1 efficiency = useful output / total input',
          '.2 90 / 120 = 0.75',
          '.3 = 75%',
        ],
        accept: ['0.75 as a decimal'],
        answerNote: '75%',
      },
      {
        id: 'd', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why no turbine can ever be 100% efficient.',
        markscheme: [
          '.1 Some energy is always dissipated to the surroundings',
          '.2 Named wasteful transfer, e.g. heat from friction in the gearbox, or sound',
          '.3 This energy is spread out and cannot be usefully recovered',
        ],
        accept: ['WTTE for dissipation'],
      },
      {
        id: 'e', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the turbine produces no output on a completely still day.',
        markscheme: [
          '.1 No wind means the air has no kinetic energy to transfer',
          '.2 The blades do not turn, so the generator is not driven',
          '.3 Output depends entirely on the energy supplied by the moving air',
        ],
      },
    ],
  },
  {
    id: 'physA-tracer', subject: 'physics', criterion: 'A', marks: 12,
    stimulus:
      'Radioactive isotopes are used in hospitals as medical tracers. Technetium-99m has a half-life of 6 hours and emits gamma radiation. A patient is given a sample with an initial activity of 800 MBq.',
    parts: [
      {
        id: 'a', marks: 2, command: 'State', type: 'short',
        prompt: 'the number of protons and neutrons in an atom of technetium-99 (proton number 43).',
        markscheme: ['.1 43 protons', '.2 99 - 43 = 56 neutrons'],
      },
      {
        id: 'b', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'the activity remaining after 18 hours.',
        markscheme: [
          '.1 18 hours = 3 half-lives',
          '.2 800 to 400 to 200 to 100',
          '.3 = 100 MBq',
        ],
        answerNote: '100 MBq',
      },
      {
        id: 'c', marks: 1, command: 'Select', type: 'select',
        prompt: 'the material that stops alpha radiation.',
        options: ['A sheet of paper', '3 mm of aluminium', '5 cm of lead', 'Nothing stops it'],
        answer: 0,
        explanation:
          'Alpha particles are highly ionising but weakly penetrating: paper or a few centimetres of air stops them. Beta needs aluminium; gamma needs thick lead.',
      },
      {
        id: 'd', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why a gamma emitter with a short half-life is chosen as a medical tracer.',
        markscheme: [
          '.1 Gamma is penetrating so it passes out of the body and can be detected externally',
          '.2 A short half-life means activity falls quickly',
          '.3 This limits the total radiation dose to the patient',
        ],
      },
      {
        id: 'e', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'the missing values in this alpha decay: 226/88 Ra to ?/? Rn + alpha.',
        markscheme: [
          '.1 Alpha decay loses 4 from mass number and 2 from proton number',
          '.2 Mass number 226 - 4 = 222',
          '.3 Proton number 88 - 2 = 86',
        ],
        answerNote: '222/86 Rn',
      },
    ],
  },
  {
    id: 'physA-motion', subject: 'physics', criterion: 'A', marks: 10,
    stimulus:
      'A cyclist accelerates uniformly from rest to 12 m/s in 6 seconds, then travels at constant speed for 20 seconds before braking to a stop.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the acceleration during the first 6 seconds.',
        markscheme: [
          '.1 acceleration = change in velocity / time',
          '.2 (12 - 0) / 6',
          '.3 = 2 m/s2 with unit',
        ],
        answerNote: '2 m/s2',
      },
      {
        id: 'b', marks: 2, command: 'State', type: 'select',
        prompt: 'what the area under a velocity-time graph represents.',
        options: ['Acceleration', 'Distance travelled', 'Force', 'Momentum'],
        answer: 1,
        explanation:
          'Gradient of a velocity-time graph gives acceleration; the area beneath it gives distance travelled. Confusing the two is a very common error.',
      },
      {
        id: 'c', marks: 2, command: 'Calculate', type: 'calculate',
        prompt: 'the distance travelled during the 20 seconds at constant speed.',
        markscheme: ['.1 distance = speed x time = 12 x 20', '.2 = 240 m'],
        answerNote: '240 m',
      },
      {
        id: 'd', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the resultant force on the cyclist is zero while travelling at constant speed.',
        markscheme: [
          '.1 Constant velocity means zero acceleration',
          '.2 By Newton’s first law, zero acceleration requires zero resultant force',
          '.3 The driving force balances friction and air resistance',
        ],
        reject: ['There are no forces acting'],
      },
    ],
  },
  {
    id: 'physA-circuits', subject: 'physics', criterion: 'A', marks: 8,
    stimulus:
      'A 12 V supply is connected to two identical 24 ohm resistors. The resistors can be arranged in series or in parallel.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the current through a single 24 ohm resistor connected alone across the supply.',
        markscheme: ['.1 V = IR rearranged to I = V/R', '.2 I = 12 / 24', '.3 = 0.5 A with unit'],
        answerNote: '0.5 A',
      },
      {
        id: 'b', marks: 2, command: 'State', type: 'select',
        prompt: 'what happens to the current in a series circuit.',
        options: [
          'It is the same at every point',
          'It is largest nearest the battery',
          'It splits between components',
          'It is zero',
        ],
        answer: 0,
        explanation:
          'A series circuit is a single loop, so the same current flows through every component. Current splitting happens in parallel branches.',
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why two lamps in parallel are brighter than the same two lamps in series.',
        markscheme: [
          '.1 In parallel each lamp has the full supply voltage across it',
          '.2 In series the supply voltage is shared between them',
          '.3 Greater voltage means greater power dissipated, so greater brightness',
        ],
      },
    ],
  },
  {
    id: 'physA-waves', subject: 'physics', criterion: 'A', marks: 7,
    stimulus:
      'A sound wave of frequency 320 Hz travels through air at 330 m/s. Light travels at 3 x 10^8 m/s.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the wavelength of the sound wave.',
        markscheme: [
          '.1 wave speed = frequency x wavelength',
          '.2 wavelength = 330 / 320',
          '.3 = 1.03 m',
        ],
        accept: ['1.0 m', '1.031 m'],
        answerNote: '1.03 m',
      },
      {
        id: 'b', marks: 2, command: 'Select', type: 'select',
        prompt: 'the correct description of a sound wave.',
        options: [
          'Longitudinal, vibrating along the direction of travel',
          'Transverse, vibrating at 90 degrees to travel',
          'Electromagnetic, able to travel through a vacuum',
          'A wave that transfers matter but not energy',
        ],
        answer: 0,
        explanation:
          'Sound is longitudinal: particles vibrate parallel to the direction of energy transfer, producing compressions and rarefactions. It cannot travel through a vacuum.',
      },
      {
        id: 'c', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why lightning is seen before thunder is heard.',
        markscheme: [
          '.1 Light travels far faster than sound',
          '.2 So the light arrives almost instantly while the sound lags behind',
        ],
      },
    ],
  },
  {
    id: 'physA-forces', subject: 'physics', criterion: 'A', marks: 5,
    stimulus: 'A 6 kg object is pushed along a bench and accelerates at 3 m/s2. On Earth g = 9.8 N/kg.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the resultant force acting on the object.',
        markscheme: ['.1 F = ma', '.2 F = 6 x 3', '.3 = 18 N with unit'],
        answerNote: '18 N',
      },
      {
        id: 'b', marks: 2, command: 'Explain', type: 'short',
        prompt: 'why the object weighs less on the Moon but has the same mass.',
        markscheme: [
          '.1 Mass is the quantity of matter and does not depend on location',
          '.2 Weight = mass x gravitational field strength, and g is smaller on the Moon',
        ],
      },
    ],
  },

  /* ==================== PHYSICS - CRITERION B ==================== */
  {
    id: 'physB-foam', subject: 'physics', criterion: 'B', marks: 13,
    stimulus:
      'A student investigates how the thickness of foam padding affects the maximum force experienced by a toy car during a collision. The car runs down a ramp into a wall lined with foam, and a force sensor records the maximum force of impact.',
    parts: [
      {
        id: 'a', marks: 2, command: 'State', type: 'short',
        prompt: 'a suitable research question for this investigation.',
        markscheme: [
          '.1 Names both the independent and dependent variable',
          '.2 Phrased as a testable question',
        ],
        accept: ['How does foam thickness affect the maximum force during a collision?'],
      },
      {
        id: 'b', marks: 4, command: 'Select', type: 'varTable',
        prompt: 'the description that best describes each variable.',
        rows: [
          { label: 'Thickness of the foam padding', correct: 'independent' },
          { label: 'Maximum force recorded by the sensor', correct: 'dependent' },
          { label: 'Mass of the toy car', correct: 'control' },
          { label: 'Height the car is released from', correct: 'control' },
        ],
        explanation:
          'Foam thickness is deliberately changed and the resulting force measured. Car mass and release height must stay constant or they would also change the impact force.',
      },
      {
        id: 'c', marks: 2, command: 'Select', type: 'select',
        prompt: 'the equipment needed to measure the independent variable.',
        options: ['Ruler', 'Stopwatch', 'Protractor', 'Force sensor'],
        answer: 0,
        explanation:
          'The independent variable is foam thickness, a length, so a ruler is required. The force sensor measures the dependent variable.',
      },
      {
        id: 'd', marks: 5, command: 'Design', type: 'extended',
        prompt:
          'an investigation to find out how the release height of the car affects the maximum force of impact. You must include:\n- the independent, dependent and two control variables\n- the equipment you will need\n- the steps you will take to collect data\n- how you will collect sufficient, reliable data.',
        wordGuide: 220,
        markscheme: [
          '.1 IV = release height; DV = maximum force of impact',
          '.2 Two valid control variables, e.g. same car, same foam thickness',
          '.3 Appropriate equipment listed (ramp, metre rule, force sensor, car)',
          '.4 Logical ordered steps another student could follow',
          '.5 Sufficient data: at least five heights, three repeats each, mean calculated',
        ],
      },
    ],
  },
  {
    id: 'physB-pendulum', subject: 'physics', criterion: 'B', marks: 12,
    stimulus:
      'A student investigates how the length of a pendulum affects the time for one complete swing (its period).',
    parts: [
      {
        id: 'a', marks: 2, command: 'State', type: 'short',
        prompt: 'a hypothesis for this investigation, including scientific reasoning.',
        markscheme: [
          '.1 A directional prediction, e.g. a longer pendulum will have a longer period',
          '.2 Supported by reasoning about the restoring force or distance travelled per swing',
        ],
        reject: ['Length will change the period, with no reason given'],
      },
      {
        id: 'b', marks: 4, command: 'Select', type: 'varTable',
        prompt: 'the description that best describes each variable.',
        rows: [
          { label: 'Length of the string', correct: 'independent' },
          { label: 'Time for one complete swing', correct: 'dependent' },
          { label: 'Mass of the bob', correct: 'control' },
          { label: 'Angle of release', correct: 'control' },
        ],
        explanation:
          'Length is deliberately changed and period measured. Bob mass and release angle must be constant so any change in period is attributable to length alone.',
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why timing 20 oscillations and dividing by 20 is better than timing one.',
        markscheme: [
          '.1 Human reaction time is a fixed uncertainty per timing',
          '.2 Spreading it across many oscillations reduces its proportional effect',
          '.3 This reduces random error in the calculated period',
        ],
      },
      {
        id: 'd', marks: 3, command: 'Explain', type: 'short',
        prompt: 'how the student should collect sufficient and reliable data.',
        markscheme: [
          '.1 At least five different lengths across a sensible range',
          '.2 Each length repeated at least three times',
          '.3 A mean calculated, with anomalies identified and excluded',
        ],
      },
    ],
  },
  {
    id: 'physB-resistance', subject: 'physics', criterion: 'B', marks: 10,
    stimulus:
      'A student investigates how the length of a nichrome wire affects its resistance, using an ammeter and voltmeter.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Select', type: 'varTable',
        prompt: 'the description that best describes each variable.',
        rows: [
          { label: 'Length of the nichrome wire', correct: 'independent' },
          { label: 'Resistance calculated from V and I', correct: 'dependent' },
          { label: 'Cross-sectional area of the wire', correct: 'control' },
          { label: 'Material the wire is made from', correct: 'control' },
        ],
        explanation:
          'Length is changed deliberately and resistance measured. Thickness and material both independently affect resistance, so both must be held constant.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the current should be kept low and switched on only briefly.',
        markscheme: [
          '.1 A current heats the wire',
          '.2 The resistance of a metal rises with temperature',
          '.3 So heating would introduce an uncontrolled variable and reduce validity',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why a hypothesis should include scientific reasoning, not just a prediction.',
        markscheme: [
          '.1 Criterion B credits reasoning as well as the prediction itself',
          '.2 Reasoning shows the prediction follows from scientific understanding',
          '.3 Example: a longer wire means more collisions between electrons and ions',
        ],
      },
    ],
  },
  {
    id: 'physB-spring', subject: 'physics', criterion: 'B', marks: 8,
    stimulus:
      'A student plans to investigate how the force applied to a spring affects its extension.',
    parts: [
      {
        id: 'a', marks: 2, command: 'State', type: 'short',
        prompt: 'a suitable research question for this investigation.',
        markscheme: [
          '.1 Names both variables',
          '.2 Phrased as a testable question rather than a statement',
        ],
      },
      {
        id: 'b', marks: 2, command: 'Select', type: 'select',
        prompt: 'the best way to measure the extension accurately.',
        options: [
          'A ruler with a fixed pointer read at eye level',
          'Estimating the extension by eye',
          'A ruler held by hand near the spring',
          'Measuring once and multiplying up',
        ],
        answer: 0,
        explanation:
          'A fixed reference pointer read at eye level removes parallax error, which is the main systematic error in this measurement.',
      },
      {
        id: 'c', marks: 4, command: 'Explain', type: 'short',
        prompt:
          'how the student should ensure the data collected is both sufficient and reliable.',
        markscheme: [
          '.1 At least five different forces across a sensible range',
          '.2 Repeat each measurement at least three times',
          '.3 Calculate a mean for each force',
          '.4 Identify and exclude anomalies rather than including them',
        ],
      },
    ],
  },
  {
    id: 'physB-insulation', subject: 'physics', criterion: 'B', marks: 7,
    stimulus:
      'A student investigates which material is the best thermal insulator by wrapping identical beakers of hot water and recording the temperature drop over 10 minutes.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Select', type: 'varTable',
        prompt: 'the description that best describes each variable.',
        rows: [
          { label: 'Type of insulating material', correct: 'independent' },
          { label: 'Temperature drop over 10 minutes', correct: 'dependent' },
          { label: 'Starting volume of water', correct: 'control' },
          { label: 'Starting temperature of the water', correct: 'control' },
        ],
        explanation:
          'The material is the categoric independent variable. Volume and starting temperature both affect the rate of cooling, so both must be controlled.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the thickness of each insulating material must be the same.',
        markscheme: [
          '.1 Thicker insulation reduces heat transfer regardless of material',
          '.2 Different thicknesses would confound the comparison',
          '.3 So any difference could not be attributed to the material alone',
        ],
      },
    ],
  },
  {
    id: 'physB-safety', subject: 'physics', criterion: 'B', marks: 5,
    stimulus:
      'A class is planning practical work involving a ramp, trolleys and masses on a bench near the edge.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Outline', type: 'short',
        prompt: 'one hazard in this practical and the control measure you would use.',
        markscheme: [
          '.1 A genuine hazard identified, e.g. masses falling onto feet',
          '.2 The risk explained',
          '.3 A specific control measure, e.g. a padded box beneath the masses',
        ],
        reject: ['Be careful, with no specific measure'],
      },
      {
        id: 'b', marks: 2, command: 'Select', type: 'select',
        prompt: 'what a properly written control measure must include.',
        options: [
          'The specific action taken to reduce the identified risk',
          'A general instruction to take care',
          'The cost of the equipment',
          'The name of the teacher',
        ],
        answer: 0,
        explanation:
          'A control measure names the hazard, the risk and the specific action taken. Vague instructions to be careful score nothing in Criterion B.',
      },
    ],
  },

  /* ==================== PHYSICS - CRITERION C ==================== */
  {
    id: 'physC-spring-data', subject: 'physics', criterion: 'C', marks: 13,
    stimulus:
      'A student launches a toy car up an inclined track using a compressed spring and measures the maximum height reached. For one spring compression the results were 0.098 m, 0.101 m, 0.099 m and 0.135 m.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the mean maximum height, explaining how you treated any anomalous result.',
        markscheme: [
          '.1 0.135 m identified as an anomaly and excluded',
          '.2 (0.098 + 0.101 + 0.099) / 3',
          '.3 = 0.099 m',
        ],
        reject: ['Including 0.135 m in the mean'],
        answerNote: '0.099 m',
      },
      {
        id: 'b', marks: 3, command: 'Suggest', type: 'short',
        prompt: 'a possible cause of the anomalous result.',
        markscheme: [
          '.1 A plausible specific cause',
          '.2 Linked to the method, e.g. the spring compressed further than intended',
          '.3 Or the height misread from the scale as the car moved quickly',
        ],
      },
      {
        id: 'c', marks: 2, command: 'Select', type: 'select',
        prompt: 'the most appropriate way to display height against spring compression.',
        options: [
          'A line graph with a line of best fit',
          'A pie chart',
          'A bar chart',
          'A single labelled value',
        ],
        answer: 0,
        explanation:
          'Both variables are continuous, so a line graph with a line of best fit shows the relationship. Bar charts are for categoric variables.',
      },
      {
        id: 'd', marks: 5, command: 'Evaluate', type: 'extended',
        prompt:
          'the validity and reliability of this investigation, referring to specific weaknesses in the method.',
        wordGuide: 200,
        markscheme: [
          '.1 Distinguishes validity from reliability',
          '.2 Identifies a specific validity weakness, e.g. friction on the track not controlled',
          '.3 Identifies a measurement weakness, e.g. judging maximum height by eye causes parallax error',
          '.4 Comments on reliability using the actual repeat data',
          '.5 Reaches an overall judgement rather than only listing faults',
        ],
      },
    ],
  },
  {
    id: 'physC-hooke', subject: 'physics', criterion: 'C', marks: 12,
    stimulus:
      'A force-extension graph for a spring is a straight line through the origin up to point P, after which the line curves.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'what point P represents.',
        markscheme: [
          '.1 P is the limit of proportionality',
          '.2 Up to P, extension is directly proportional to force (Hooke’s law)',
          '.3 Beyond P the relationship is no longer linear and the spring may deform permanently',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Describe', type: 'short',
        prompt: 'how you would draw and use a line of best fit for this data.',
        markscheme: [
          '.1 Follow the trend with points balanced either side',
          '.2 Circle and exclude anomalies rather than joining them',
          '.3 Read intermediate values from the line rather than individual points',
        ],
        reject: ['Joining the points dot to dot'],
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt:
          'what it means that the straight section passes through the origin.',
        markscheme: [
          '.1 A straight line through the origin indicates direct proportionality',
          '.2 Zero force produces zero extension',
          '.3 A straight line not through the origin would be linear but not proportional',
        ],
      },
      {
        id: 'd', marks: 3, command: 'Suggest', type: 'short',
        prompt: 'one improvement to this method and explain how it improves the data.',
        markscheme: [
          '.1 A specific methodological change, e.g. use a fixed pointer and set square',
          '.2 Explains the mechanism, e.g. removes parallax when reading the scale',
          '.3 Links to improved data, e.g. reduces random error so repeats agree more closely',
        ],
      },
    ],
  },
  {
    id: 'physC-uncertainty', subject: 'physics', criterion: 'C', marks: 10,
    stimulus:
      'A length is measured five times with a millimetre ruler as 12.1, 12.2, 12.1, 12.3 and 12.1 cm. A second student uses a balance that reads 0.20 g high for every measurement.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'whether the length measurements are precise, accurate, or both.',
        markscheme: [
          '.1 Precise, because the repeats are closely grouped',
          '.2 Accuracy cannot be judged without knowing the true value',
          '.3 Precision and accuracy are separate ideas',
        ],
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the balance error cannot be reduced by repeating measurements.',
        markscheme: [
          '.1 A consistent offset in one direction is a systematic error',
          '.2 Repeats average out random error, not systematic error',
          '.3 It is corrected by zeroing or recalibrating the instrument',
        ],
      },
      {
        id: 'c', marks: 4, command: 'Explain', type: 'short',
        prompt:
          'how the uncertainty in a ruler reading should be recorded, and why it matters.',
        markscheme: [
          '.1 Uncertainty is taken as half the smallest scale division',
          '.2 For a millimetre ruler this is plus or minus 0.5 mm',
          '.3 Recording to the resolution of the instrument communicates the precision achieved',
          '.4 Quoting uncertainty allows a reader to judge how much confidence the result deserves',
        ],
      },
    ],
  },
  {
    id: 'physC-bestfit', subject: 'physics', criterion: 'C', marks: 8,
    stimulus:
      'A graph of maximum height against spring compression shows 0.030 m giving 0.055 m, and 0.040 m giving 0.100 m.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Estimate', type: 'calculate',
        prompt: 'the height reached when the spring is compressed by 0.038 m.',
        markscheme: [
          '.1 Recognises 0.038 m lies between the two known points',
          '.2 Interpolates sensibly, e.g. 0.055 + 0.8 x (0.100 - 0.055)',
          '.3 Answer approximately 0.09 m with working shown',
        ],
        accept: ['0.088 to 0.095 m'],
        answerNote: 'approximately 0.09 m',
      },
      {
        id: 'b', marks: 2, command: 'Select', type: 'select',
        prompt: 'what a curve that gets steeper indicates about the relationship.',
        options: [
          'It is non-linear, so height rises faster than compression',
          'It is directly proportional',
          'There is no relationship',
          'The data must be wrong',
        ],
        answer: 0,
        explanation:
          'A steepening curve means the dependent variable increases faster than linearly, here consistent with height depending on compression squared.',
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why reading from a line of best fit is better than using a single data point.',
        markscheme: [
          '.1 The line averages across all the data',
          '.2 It reduces the influence of random error in any single reading',
          '.3 So an interpolated value is more reliable than one raw measurement',
        ],
      },
    ],
  },
  {
    id: 'physC-conclusion', subject: 'physics', criterion: 'C', marks: 7,
    stimulus:
      'Data collected at constant temperature shows that when the voltage across a resistor doubles, the current through it also doubles.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Describe', type: 'short',
        prompt: 'the conclusion that can be drawn from this data.',
        markscheme: [
          '.1 Current is directly proportional to voltage',
          '.2 Consistent with Ohm’s law, V = IR with constant R',
          '.3 Valid only at constant temperature, as stated',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Evaluate', type: 'extended',
        prompt: 'how much confidence this conclusion deserves and what would strengthen it.',
        wordGuide: 150,
        markscheme: [
          '.1 Two data points alone are weak evidence for proportionality',
          '.2 More values across a wider range would establish the trend',
          '.3 Repeats would allow means and reveal random error',
          '.4 Reaches a judgement rather than only listing improvements',
        ],
      },
    ],
  },
  {
    id: 'physC-errors', subject: 'physics', criterion: 'C', marks: 5,
    stimulus:
      'Two students measure the same quantity. Student A gets values scattered widely around the true value. Student B gets values tightly grouped but all too high.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'which student has the larger random error and which has a systematic error.',
        markscheme: [
          '.1 Student A shows large random error, seen in the wide scatter',
          '.2 Student B shows a systematic error, seen in the consistent offset',
          '.3 Student B is precise but not accurate',
        ],
      },
      {
        id: 'b', marks: 2, command: 'Select', type: 'select',
        prompt: 'which error can be reduced by repeating measurements and taking a mean.',
        options: ['Random error only', 'Systematic error only', 'Both equally', 'Neither'],
        answer: 0,
        explanation:
          'Repeats average out random scatter. A systematic offset persists no matter how many repeats are taken, so it must be corrected at the instrument.',
      },
    ],
  },

  /* ==================== PHYSICS - CRITERION D ==================== */
  {
    id: 'physD-energy', subject: 'physics', criterion: 'D', marks: 13,
    stimulus:
      'A coastal town must choose between building an offshore wind farm, extending its gas-fired power station, or importing electricity from a neighbouring region.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Outline', type: 'short',
        prompt: 'one advantage and one limitation of siting a wind farm offshore.',
        markscheme: [
          '.1 Advantage: stronger and more consistent winds give higher output',
          '.2 Or reduced visual and noise impact on residents',
          '.3 Limitation: higher construction and maintenance cost, or difficult access in poor weather',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Explain', type: 'short',
        prompt: 'why replacing gas generation with wind reduces the contribution to climate change.',
        markscheme: [
          '.1 Burning gas releases carbon dioxide',
          '.2 CO2 is a greenhouse gas that absorbs and re-emits infrared radiation',
          '.3 This enhances the greenhouse effect and raises global temperatures',
          '.4 Wind generation releases no CO2 during operation',
        ],
      },
      {
        id: 'c', marks: 6, command: 'Evaluate', type: 'extended',
        prompt:
          'the three options available to the town, considering environmental, economic and social factors. Reach a justified recommendation.',
        wordGuide: 300,
        markscheme: [
          '.1 Environmental factors addressed for more than one option',
          '.2 Economic factors addressed (build cost, running cost, local jobs)',
          '.3 Social factors addressed (visual impact, employment, energy security)',
          '.4 Uses specific reasoning rather than assertion',
          '.5 Weighs options against each other rather than listing separately',
          '.6 Reaches a clear recommendation justified by the points made',
        ],
      },
    ],
  },
  {
    id: 'physD-nuclear', subject: 'physics', criterion: 'D', marks: 12,
    stimulus:
      'Nuclear power stations generate low-carbon electricity but produce radioactive waste that remains hazardous for thousands of years.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Outline', type: 'short',
        prompt: 'one benefit and one risk of generating electricity from nuclear fission.',
        markscheme: [
          '.1 Benefit: very low CO2 emissions during generation',
          '.2 Or high and reliable output independent of weather',
          '.3 Risk: long-lived radioactive waste, or the consequences of an accident',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Discuss', type: 'extended',
        prompt: 'the ethical implications of storing long-lived radioactive waste.',
        wordGuide: 180,
        markscheme: [
          '.1 Waste remains hazardous for thousands of years',
          '.2 Future generations inherit a risk they did not consent to',
          '.3 Counter-argument: nuclear power reduces climate harm for those same generations',
          '.4 Reaches a reasoned position rather than only describing the problem',
        ],
      },
      {
        id: 'c', marks: 5, command: 'Evaluate', type: 'extended',
        prompt:
          'whether nuclear power should form part of a country’s plan to reduce carbon emissions.',
        wordGuide: 250,
        markscheme: [
          '.1 Presents the low-carbon case with supporting reasoning',
          '.2 Presents the waste, cost or accident-risk case against',
          '.3 Compares with at least one alternative, e.g. renewables plus storage',
          '.4 Recognises the trade-off between reliability and risk',
          '.5 Reaches a justified overall judgement',
        ],
      },
    ],
  },
  {
    id: 'physD-xray', subject: 'physics', criterion: 'D', marks: 10,
    stimulus:
      'X-rays are used to produce medical images. Radiographers stand behind a lead screen while the patient does not.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why X-rays can be harmful to living tissue.',
        markscheme: [
          '.1 X-rays are ionising radiation',
          '.2 They can remove electrons from atoms in cells',
          '.3 This can damage DNA and increase the long-term risk of cancer',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Explain', type: 'short',
        prompt: 'why the radiographer is shielded but the patient is not.',
        markscheme: [
          '.1 Risk depends on cumulative dose',
          '.2 The patient receives a single justified exposure',
          '.3 The radiographer would accumulate dose from many patients each day',
          '.4 The diagnostic benefit justifies the patient’s single small risk',
        ],
      },
      {
        id: 'c', marks: 3, command: 'Discuss', type: 'short',
        prompt: 'how the benefits of medical imaging are weighed against its risks.',
        markscheme: [
          '.1 Imaging allows diagnosis without invasive surgery',
          '.2 Dose is minimised through shielding and limited exposure time',
          '.3 A scan is only justified when the diagnostic benefit outweighs the small risk',
        ],
      },
    ],
  },
  {
    id: 'physD-climate', subject: 'physics', criterion: 'D', marks: 8,
    stimulus:
      'A student writes that "the greenhouse effect is damaging the planet and should be stopped".',
    parts: [
      {
        id: 'a', marks: 4, command: 'Explain', type: 'short',
        prompt: 'why this statement is scientifically inaccurate.',
        markscheme: [
          '.1 The natural greenhouse effect keeps Earth warm enough for life',
          '.2 Without it the planet would be far colder',
          '.3 The problem is the enhanced greenhouse effect from additional emissions',
          '.4 So the aim is to reduce extra emissions, not remove the effect itself',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Outline', type: 'short',
        prompt: 'two actions that would genuinely reduce the enhanced greenhouse effect.',
        markscheme: [
          '.1 A valid action, e.g. replacing fossil fuel generation with renewables',
          '.2 Explained in terms of reduced CO2 emissions',
          '.3 A second valid action, e.g. improving insulation to cut energy demand',
          '.4 Explained in terms of its effect on emissions',
        ],
      },
    ],
  },
  {
    id: 'physD-sources', subject: 'physics', criterion: 'D', marks: 7,
    stimulus:
      'A report claiming a particular fuel has very low emissions was funded by the company that produces that fuel.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the funding source matters when judging this claim.',
        markscheme: [
          '.1 The funder has a financial interest in the conclusion',
          '.2 This is a potential conflict of interest and a limitation',
          '.3 It is not automatic grounds for dismissal, but requires caution',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Discuss', type: 'extended',
        prompt: 'how a scientist should evaluate whether to rely on this report.',
        wordGuide: 150,
        markscheme: [
          '.1 Compare the findings against independent peer-reviewed studies',
          '.2 Check whether the methodology is transparent and reproducible',
          '.3 Consider whether data has been selectively presented',
          '.4 Reaches a reasoned position on how much weight to give it',
        ],
      },
    ],
  },
  {
    id: 'physD-ethics', subject: 'physics', criterion: 'D', marks: 5,
    stimulus:
      'A proposed power station would raise the temperature of a nearby river by several degrees through its cooling water.',
    parts: [
      {
        id: 'a', marks: 2, command: 'Select', type: 'select',
        prompt: 'which objection to the power station is scientific rather than ethical.',
        options: [
          'Warmer water holds less dissolved oxygen, harming fish',
          'Local residents were not properly consulted',
          'Shareholders benefit more than the community',
          'Future generations did not agree to it',
        ],
        answer: 0,
        explanation:
          'Scientific objections rest on measurable physical consequences. The others concern fairness, consent and distribution of benefit, which are ethical dimensions.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why both scientific and ethical considerations matter in this decision.',
        markscheme: [
          '.1 Science establishes what the consequences will be',
          '.2 Ethics addresses who bears the costs and whether that is fair',
          '.3 A sound decision requires both, since evidence alone does not settle values',
        ],
      },
    ],
  },
]
