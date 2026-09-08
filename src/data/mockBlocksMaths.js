// Mathematics question blocks for the mock generator.
// Targets are A = 34, B = 33, D = 33 (no Criterion C, which assesses
// communication of working rather than short-answer content).
//
// `levels` controls which course a block belongs to. Blocks without a `levels`
// field are available to both Standard and Extended.

export const MATHS_BLOCKS = [
  /* ==================== MATHEMATICS - CRITERION A ==================== */
  {
    id: 'mathA-stats', subject: 'mathematics', criterion: 'A', marks: 13,
    stimulus:
      'A phone shop records the number of phones sold each day over one week: 12, 15, 9, 15, 20, 18, 15.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the mean number of phones sold per day, to 1 decimal place.',
        markscheme: [
          '.1 Total = 12 + 15 + 9 + 15 + 20 + 18 + 15 = 104',
          '.2 Mean = 104 / 7',
          '.3 = 14.9 phones',
        ],
        accept: ['14.857 rounded to 14.9'],
        answerNote: '14.9 phones per day',
      },
      {
        id: 'b', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'the median and the range of the data.',
        markscheme: [
          '.1 Ordered: 9, 12, 15, 15, 15, 18, 20',
          '.2 Median is the 4th value = 15',
          '.3 Range = 20 - 9 = 11',
        ],
        answerNote: 'Median 15, range 11',
      },
      {
        id: 'c', marks: 4, command: 'Calculate', type: 'calculate',
        prompt: 'the percentage increase in sales from the lowest day to the highest day.',
        markscheme: [
          '.1 Change = 20 - 9 = 11',
          '.2 Percentage change = change / original x 100',
          '.3 = 11 / 9 x 100',
          '.4 = 122% (accept 122.2%)',
        ],
        reject: ['Using 20 as the denominator'],
        answerNote: 'approximately 122%',
      },
      {
        id: 'd', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the mean can be misleading if one day had unusually high sales.',
        markscheme: [
          '.1 The mean uses every value, so an outlier pulls it up',
          '.2 The median is resistant to outliers',
          '.3 So the median may better represent a typical day',
        ],
      },
    ],
  },
  {
    id: 'mathA-percentages', subject: 'mathematics', criterion: 'A', marks: 12,
    stimulus:
      'A jacket originally costing $80 is reduced by 15%. Separately, a car worth $18 000 depreciates by 15% each year.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the sale price of the jacket.',
        markscheme: [
          '.1 Decrease multiplier = 1 - 0.15 = 0.85',
          '.2 80 x 0.85',
          '.3 = $68',
        ],
        reject: ['$12, which is the discount not the price'],
        answerNote: '$68',
      },
      {
        id: 'b', marks: 4, command: 'Calculate', type: 'calculate',
        prompt: 'the value of the car after 3 years, to the nearest dollar.',
        markscheme: [
          '.1 Recognises repeated multiplication rather than a single 45% reduction',
          '.2 18000 x 0.85 cubed',
          '.3 = 18000 x 0.614125',
          '.4 = $11 054',
        ],
        reject: ['$9900 from subtracting 45% in one step'],
        answerNote: 'approximately $11 054',
      },
      {
        id: 'c', marks: 5, command: 'Determine', type: 'calculate',
        prompt: 'the original price of an item that costs $84 after a 20% increase.',
        markscheme: [
          '.1 Recognises this as a reverse percentage',
          '.2 Increase multiplier = 1.2',
          '.3 Original = 84 / 1.2',
          '.4 = $70',
          '.5 Checks: 70 x 1.2 = 84',
        ],
        reject: ['$67.20 from subtracting 20% of 84'],
        answerNote: '$70',
      },
    ],
  },
  {
    id: 'mathA-geometry', subject: 'mathematics', criterion: 'A', marks: 10,
    stimulus:
      'A rectangular garden measures 12 m by 8 m. A circular pond of radius 2 m is built inside it.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the area and the perimeter of the garden.',
        markscheme: ['.1 Area = 12 x 8 = 96 m2', '.2 Perimeter = 2(12 + 8)', '.3 = 40 m'],
        answerNote: 'Area 96 m2, perimeter 40 m',
      },
      {
        id: 'b', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the area of the pond, to 1 decimal place.',
        markscheme: ['.1 Area of a circle = pi r squared', '.2 = pi x 2 x 2', '.3 = 12.6 m2'],
        reject: ['Using 2 pi r, which gives the circumference'],
        answerNote: '12.6 m2',
      },
      {
        id: 'c', marks: 4, command: 'Determine', type: 'calculate',
        prompt: 'the interior angle sum of a regular pentagon and the size of each interior angle.',
        markscheme: [
          '.1 Interior angle sum = (n - 2) x 180',
          '.2 = (5 - 2) x 180 = 540 degrees',
          '.3 Regular means all angles equal, so divide by 5',
          '.4 = 108 degrees each',
        ],
        answerNote: '540 degrees total, 108 degrees each',
      },
    ],
  },
  {
    id: 'mathA-algebra', subject: 'mathematics', criterion: 'A', marks: 9,
    stimulus: 'Consider the equation y = 3x + 7 and the expression (x + 3)(x - 2).',
    parts: [
      {
        id: 'a', marks: 3, command: 'Rearrange', type: 'calculate',
        prompt: 'the equation y = 3x + 7 to make x the subject.',
        markscheme: [
          '.1 Subtract 7 from both sides: y - 7 = 3x',
          '.2 Divide both sides by 3',
          '.3 x = (y - 7) / 3',
        ],
        answerNote: 'x = (y - 7) / 3',
      },
      {
        id: 'b', marks: 3, command: 'Expand', type: 'calculate',
        prompt: 'and simplify (x + 3)(x - 2).',
        markscheme: [
          '.1 Expands all four products: x squared - 2x + 3x - 6',
          '.2 Collects like terms',
          '.3 = x squared + x - 6',
        ],
        answerNote: 'x squared + x - 6',
      },
      {
        id: 'c', marks: 3, command: 'Solve', type: 'calculate',
        prompt: 'the equation 4(x - 3) = 2x + 6.',
        markscheme: [
          '.1 Expand: 4x - 12 = 2x + 6',
          '.2 Collect terms: 2x = 18',
          '.3 x = 9',
        ],
        answerNote: 'x = 9',
      },
    ],
  },
  {
    id: 'mathA-number', subject: 'mathematics', criterion: 'A', marks: 8,
    stimulus:
      'Standard form is written as a x 10^n where 1 <= a < 10. Index laws govern how powers combine.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Express', type: 'calculate',
        prompt: '0.00042 and 45 000 in standard form.',
        markscheme: [
          '.1 Recognises 1 <= a < 10 is required',
          '.2 0.00042 = 4.2 x 10^-4',
          '.3 45 000 = 4.5 x 10^4',
        ],
        reject: ['42 x 10^-5', '0.42 x 10^-3'],
        answerNote: '4.2 x 10^-4 and 4.5 x 10^4',
      },
      {
        id: 'b', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'the highest common factor and lowest common multiple of 12 and 18.',
        markscheme: [
          '.1 Prime factors: 12 = 2 x 2 x 3, 18 = 2 x 3 x 3',
          '.2 HCF = 2 x 3 = 6',
          '.3 LCM = 2 x 2 x 3 x 3 = 36',
        ],
        answerNote: 'HCF 6, LCM 36',
      },
      {
        id: 'c', marks: 2, command: 'Calculate', type: 'calculate',
        prompt: 'the upper and lower bounds of a length measured as 24 cm to the nearest centimetre.',
        markscheme: [
          '.1 Bounds are plus or minus half a unit',
          '.2 Lower 23.5 cm, upper 24.5 cm',
        ],
        answerNote: '23.5 cm to 24.5 cm',
      },
    ],
  },
  {
    id: 'mathA-quadratics', subject: 'mathematics', criterion: 'A', marks: 7,
    levels: ['extended'],
    stimulus: 'Quadratic equations can be solved by factorising or using the formula.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Solve', type: 'calculate',
        prompt: 'x squared - 7x + 12 = 0 by factorising.',
        markscheme: [
          '.1 Seeks two numbers multiplying to 12 and summing to -7',
          '.2 These are -3 and -4',
          '.3 (x - 3)(x - 4) = 0',
          '.4 x = 3 or x = 4',
        ],
        answerNote: 'x = 3 or x = 4',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'what the discriminant tells you about the number of solutions.',
        markscheme: [
          '.1 Discriminant is b squared - 4ac',
          '.2 Positive gives two distinct roots, zero gives one repeated root',
          '.3 Negative gives no real roots',
        ],
      },
    ],
  },
  {
    id: 'mathA-probability', subject: 'mathematics', criterion: 'A', marks: 5,
    stimulus:
      'A bag contains 5 red counters and 3 blue counters. Two counters are taken out at random without replacement.',
    parts: [
      {
        id: 'a', marks: 5, command: 'Calculate', type: 'calculate',
        prompt: 'the probability that both counters are red.',
        markscheme: [
          '.1 First counter red: 5/8',
          '.2 Recognises the total decreases without replacement',
          '.3 Second counter red given the first was: 4/7',
          '.4 Multiplies along the branches: 5/8 x 4/7',
          '.5 = 20/56 = 5/14',
        ],
        accept: ['0.357'],
        reject: ['5/8 x 5/8, which assumes replacement'],
        answerNote: '5/14',
      },
    ],
  },
  {
    id: 'mathA-trig', subject: 'mathematics', criterion: 'A', marks: 12,
    levels: ['extended'],
    stimulus:
      'A right-angled triangle has a hypotenuse of 13 cm and one shorter side of 5 cm.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the length of the third side.',
        markscheme: [
          '.1 Uses a squared + b squared = c squared',
          '.2 b squared = 169 - 25 = 144',
          '.3 b = 12 cm',
        ],
        answerNote: '12 cm',
      },
      {
        id: 'b', marks: 4, command: 'Determine', type: 'calculate',
        prompt: 'the angle between the 5 cm side and the hypotenuse, to 1 decimal place.',
        markscheme: [
          '.1 Identifies 5 cm as adjacent and 13 cm as hypotenuse',
          '.2 cos of the angle = 5 / 13',
          '.3 Angle = inverse cos (5/13)',
          '.4 = 67.4 degrees',
        ],
        answerNote: '67.4 degrees',
      },
      {
        id: 'c', marks: 5, command: 'Solve', type: 'calculate',
        prompt: 'the simultaneous equations 2x + y = 11 and x - y = 1.',
        markscheme: [
          '.1 Recognises adding eliminates y',
          '.2 3x = 12',
          '.3 x = 4',
          '.4 Substitutes back into either equation',
          '.5 y = 3',
        ],
        answerNote: 'x = 4, y = 3',
      },
    ],
  },

  /* ==================== MATHEMATICS - CRITERION B ==================== */
  {
    id: 'mathB-matchsticks', subject: 'mathematics', criterion: 'B', marks: 13,
    stimulus: 'A sequence of patterns uses 4, 7, 10, 13 matchsticks.',
    parts: [
      {
        id: 'a', marks: 2, command: 'State', type: 'select',
        prompt: 'the number of matchsticks in the 5th pattern.',
        options: ['16', '15', '17', '18'],
        answer: 0,
        explanation: 'The common difference is 3, so the 5th term is 13 + 3 = 16.',
      },
      {
        id: 'b', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'an expression for the nth term of the sequence.',
        markscheme: [
          '.1 Common difference is 3, so the rule begins 3n',
          '.2 3 x 1 = 3 but the first term is 4',
          '.3 nth term = 3n + 1',
        ],
        answerNote: '3n + 1',
      },
      {
        id: 'c', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the number of matchsticks in the 50th pattern.',
        markscheme: ['.1 Substitutes n = 50', '.2 3 x 50 + 1', '.3 = 151'],
        answerNote: '151',
      },
      {
        id: 'd', marks: 5, command: 'Justify', type: 'extended',
        prompt:
          'whether 100 is a term in this sequence. Justify your answer using your general rule.',
        wordGuide: 150,
        markscheme: [
          '.1 Sets up the equation 3n + 1 = 100',
          '.2 3n = 99',
          '.3 n = 33',
          '.4 Concludes 100 is the 33rd term since n is a positive whole number',
          '.5 Justification argues from the rule, not trial and error alone',
        ],
      },
    ],
  },
  {
    id: 'mathB-rhombus', subject: 'mathematics', criterion: 'B', marks: 12,
    stimulus:
      'A growing pattern of rhombuses has vertical lengths V of 4, 16, 36, 64 at stages n = 1, 2, 3, 4.',
    parts: [
      {
        id: 'a', marks: 2, command: 'Write down', type: 'short',
        prompt: 'the values of V for stages 5 and 6.',
        markscheme: ['.1 Stage 5 = 100', '.2 Stage 6 = 144'],
        accept: ['Values given in a table or in the response box'],
      },
      {
        id: 'b', marks: 3, command: 'Describe', type: 'short',
        prompt: 'two patterns in the values of V, using correct terminology.',
        markscheme: [
          '.1 A correct pattern, e.g. the second difference is constant',
          '.2 A second distinct pattern, e.g. the values are multiples of 4',
          '.3 Or: the values are 4 times the square numbers',
        ],
        reject: ['Increasing, or increasing by a constant, alone'],
      },
      {
        id: 'c', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'a general rule for V in terms of n.',
        markscheme: [
          '.1 Recognises constant second difference indicates a quadratic rule',
          '.2 Identifies the pattern as 4 times n squared',
          '.3 V = 4n squared, with correct notation',
        ],
        accept: ['V = 4n^2', 'V = (2n) squared'],
        answerNote: 'V = 4n squared',
      },
      {
        id: 'd', marks: 4, command: 'Verify', type: 'extended',
        prompt: 'your general rule for V, showing that it holds for values beyond those given.',
        wordGuide: 150,
        markscheme: [
          '.1 Substitutes a value of n >= 5 into the general rule',
          '.2 Calculates the resulting value of V correctly',
          '.3 Compares it with the predicted value from continuing the pattern',
          '.4 Recognises the two agree, so the rule is verified',
        ],
      },
    ],
  },
  {
    id: 'mathB-diagonals', subject: 'mathematics', criterion: 'B', marks: 10,
    levels: ['extended'],
    stimulus:
      'A student investigates the number of diagonals in polygons. A quadrilateral has 2, a pentagon has 5, a hexagon has 9.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'the number of diagonals in a heptagon, showing your reasoning.',
        markscheme: [
          '.1 Identifies the first differences 3, 4, ...',
          '.2 Next difference is 5',
          '.3 9 + 5 = 14 diagonals',
        ],
        answerNote: '14 diagonals',
      },
      {
        id: 'b', marks: 7, command: 'Justify', type: 'extended',
        prompt:
          'the general rule n(n - 3)/2 for the number of diagonals in an n-sided polygon. Your justification must explain why the rule works, not simply test values.',
        wordGuide: 300,
        markscheme: [
          '.1 States a polygon has n vertices',
          '.2 Each vertex connects to n - 3 others: not itself',
          '.3 And not its two adjacent vertices, since those form sides',
          '.4 This gives n(n - 3) connections in total',
          '.5 Explains division by 2 because each diagonal is counted twice',
          '.6 Verifies the argument against a known case',
          '.7 Distinguishes a general proof from pattern-spotting',
        ],
      },
    ],
  },
  {
    id: 'mathB-triangular', subject: 'mathematics', criterion: 'B', marks: 9,
    stimulus: 'The triangular numbers begin 1, 3, 6, 10, 15.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'the next two terms and describe the pattern in the differences.',
        markscheme: [
          '.1 First differences are 2, 3, 4, 5 increasing by 1',
          '.2 Next term = 15 + 6 = 21',
          '.3 Following term = 21 + 7 = 28',
        ],
        answerNote: '21 and 28',
      },
      {
        id: 'b', marks: 6, command: 'Justify', type: 'extended',
        prompt:
          'the rule n(n + 1)/2 for the nth triangular number, explaining why it works.',
        wordGuide: 250,
        markscheme: [
          '.1 Verifies the rule for at least two given terms',
          '.2 States the nth triangular number is the sum 1 + 2 + ... + n',
          '.3 Sets out the pairing argument, adding the sum to its reverse',
          '.4 Each pair totals n + 1 and there are n pairs',
          '.5 So twice the sum equals n(n + 1)',
          '.6 Therefore the sum is n(n + 1)/2, explaining the division by 2',
        ],
      },
    ],
  },
  {
    id: 'mathB-squares', subject: 'mathematics', criterion: 'B', marks: 8,
    stimulus: 'A pattern of dots grows 1, 4, 9, 16, 25.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'the first and second differences, and state what they indicate.',
        markscheme: [
          '.1 First differences: 3, 5, 7, 9',
          '.2 Second differences are constant at 2',
          '.3 Constant second differences indicate a quadratic rule',
        ],
        answerNote: 'Differences 3, 5, 7, 9; second difference 2, so quadratic',
      },
      {
        id: 'b', marks: 5, command: 'Justify', type: 'extended',
        prompt: 'the rule for this sequence using a diagram or general argument.',
        wordGuide: 200,
        markscheme: [
          '.1 States the rule: nth term = n squared',
          '.2 Verifies against at least two given terms',
          '.3 Links to square arrays of dots, the nth pattern being an n by n square',
          '.4 Explains why first differences increase by 2: each new square adds a row, a column and one corner',
          '.5 Expresses the added amount generally as 2n + 1',
        ],
      },
    ],
  },
  {
    id: 'mathB-proof', subject: 'mathematics', criterion: 'B', marks: 7,
    stimulus:
      'A student claims that the sum of any two consecutive integers is always odd, and tests it with 3 + 4, 7 + 8 and 11 + 12.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why testing three examples does not prove the claim.',
        markscheme: [
          '.1 Testing examples verifies but does not prove',
          '.2 A proof must hold for every possible case',
          '.3 There are infinitely many pairs, which cannot all be tested',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Justify', type: 'extended',
        prompt: 'the claim algebraically.',
        wordGuide: 120,
        markscheme: [
          '.1 Lets the integers be n and n + 1',
          '.2 Their sum is 2n + 1',
          '.3 2n is even for any integer n',
          '.4 So 2n + 1 is one more than an even number, and therefore always odd',
        ],
      },
    ],
  },
  {
    id: 'mathB-counterexample', subject: 'mathematics', criterion: 'B', marks: 5,
    stimulus:
      'A student finds a rule that fits the first five terms of a sequence but fails at the sixth.',
    parts: [
      {
        id: 'a', marks: 2, command: 'Select', type: 'select',
        prompt: 'the correct response to this situation.',
        options: [
          'Revisit the rule, since a single counterexample disproves it',
          'Ignore the sixth term as an anomaly',
          'Keep the rule because it works most of the time',
          'Test more terms until it works again',
        ],
        answer: 0,
        explanation:
          'One counterexample is sufficient to disprove a general rule. Unlike experimental data, a mathematical rule cannot exclude inconvenient cases.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'the difference between an anomaly in experimental data and a counterexample in mathematics.',
        markscheme: [
          '.1 An experimental anomaly may arise from measurement error and can be excluded',
          '.2 A mathematical counterexample is exact, not a measurement',
          '.3 So it definitively disproves the general rule',
        ],
      },
    ],
  },

  /* ==================== MATHEMATICS - CRITERION D ==================== */
  {
    id: 'mathD-projectile', subject: 'mathematics', criterion: 'D', marks: 13,
    levels: ['extended'],
    stimulus:
      'A ball is thrown and its height h metres after t seconds is modelled by h = -5t squared + 20t.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'the height of the ball after 1 second.',
        markscheme: ['.1 Substitutes t = 1', '.2 h = -5 + 20', '.3 h = 15 m'],
        answerNote: '15 m',
      },
      {
        id: 'b', marks: 4, command: 'Determine', type: 'calculate',
        prompt: 'the time at which the ball returns to the ground.',
        markscheme: [
          '.1 Sets h = 0',
          '.2 -5t squared + 20t = 0',
          '.3 Factorises: -5t(t - 4) = 0',
          '.4 t = 0 or t = 4, so it lands at 4 seconds',
        ],
        answerNote: 't = 4 seconds',
      },
      {
        id: 'c', marks: 6, command: 'Evaluate', type: 'extended',
        prompt: 'the limitations of using this model for a real thrown ball.',
        wordGuide: 250,
        markscheme: [
          '.1 Air resistance is ignored, reducing height and flight time in reality',
          '.2 Assumes release from ground level, which is unrealistic',
          '.3 Assumes constant gravitational acceleration',
          '.4 Ignores wind and spin effects',
          '.5 Comments on the effect each simplification has on predictions',
          '.6 Reaches a judgement on when the model remains useful',
        ],
      },
    ],
  },
  {
    id: 'mathD-journey', subject: 'mathematics', criterion: 'D', marks: 12,
    stimulus:
      'A car travels 90 km in 1 hour 30 minutes. Fuel costs $1.60 per litre and the car uses 1 litre every 12 km.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the average speed of the car in km/h.',
        markscheme: [
          '.1 Converts 1 h 30 min to 1.5 hours',
          '.2 Speed = 90 / 1.5',
          '.3 = 60 km/h',
        ],
        reject: ['Using 1.3 hours'],
        answerNote: '60 km/h',
      },
      {
        id: 'b', marks: 4, command: 'Determine', type: 'calculate',
        prompt: 'the cost of fuel for the journey.',
        markscheme: [
          '.1 Fuel used = 90 / 12',
          '.2 = 7.5 litres',
          '.3 Cost = 7.5 x 1.60',
          '.4 = $12.00',
        ],
        answerNote: '$12.00',
      },
      {
        id: 'c', marks: 5, command: 'Evaluate', type: 'extended',
        prompt: 'the limitations of using a constant average speed to model a real journey.',
        wordGuide: 200,
        markscheme: [
          '.1 Real speed varies constantly rather than staying at 60 km/h',
          '.2 Stops, traffic and speed limits cause variation',
          '.3 The model gives total journey time but not position at any moment',
          '.4 Fuel consumption also varies with speed and driving style',
          '.5 Concludes when the model remains useful despite these simplifications',
        ],
      },
    ],
  },
  {
    id: 'mathD-bacteria', subject: 'mathematics', criterion: 'D', marks: 10,
    levels: ['extended'],
    stimulus:
      'A biologist models a bacterial population with P = 200 x 2^t, where t is measured in hours.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the population after 5 hours.',
        markscheme: ['.1 Substitutes t = 5', '.2 P = 200 x 32', '.3 = 6400 bacteria'],
        answerNote: '6400 bacteria',
      },
      {
        id: 'b', marks: 7, command: 'Evaluate', type: 'extended',
        prompt:
          'the limitations of this exponential model for predicting the population over several days.',
        wordGuide: 300,
        markscheme: [
          '.1 Exponential growth continues without limit in the model',
          '.2 Real populations are constrained by finite nutrients and space',
          '.3 Waste products accumulate and limit growth',
          '.4 Real growth follows an S-shaped curve levelling at a carrying capacity',
          '.5 Comments on the range of t over which the model is reasonable',
          '.6 Recognises the model is useful for early growth despite this',
          '.7 Reaches a justified judgement rather than only listing faults',
        ],
      },
    ],
  },
  {
    id: 'mathD-phoneplan', subject: 'mathematics', criterion: 'D', marks: 9,
    stimulus:
      'A phone plan charges a fixed monthly fee plus a rate per gigabyte. Using 4 GB costs $38 and using 10 GB costs $62.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Determine', type: 'calculate',
        prompt: 'the cost per gigabyte and the fixed monthly fee.',
        markscheme: [
          '.1 Difference in cost = 62 - 38 = 24 for 6 extra GB',
          '.2 Cost per GB = 24 / 6 = $4',
          '.3 Substitutes back: 38 = fee + 4 x 4',
          '.4 Fixed fee = $22',
        ],
        answerNote: '$4 per GB, $22 fixed fee',
      },
      {
        id: 'b', marks: 5, command: 'Evaluate', type: 'extended',
        prompt:
          'whether this linear model is likely to hold for very large data usage, and what a customer should consider.',
        wordGuide: 200,
        markscheme: [
          '.1 Real plans often cap charges or throttle speed beyond a limit',
          '.2 So the linear model likely breaks down at high usage',
          '.3 Suggests comparing against an unlimited plan at the crossover point',
          '.4 Usage varies month to month, so an average is needed',
          '.5 Reaches a practical, justified recommendation',
        ],
      },
    ],
  },
  {
    id: 'mathD-accuracy', subject: 'mathematics', criterion: 'D', marks: 8,
    stimulus:
      'A calculation for the number of 45-seat buses needed to transport 130 students gives 2.888.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'the number of buses required, justifying your rounding.',
        markscheme: [
          '.1 130 / 45 = 2.888...',
          '.2 Recognises a fraction of a bus cannot be hired',
          '.3 Rounds up to 3 buses',
        ],
        reject: ['2 buses', '2.9 buses'],
        answerNote: '3 buses',
      },
      {
        id: 'b', marks: 5, command: 'Evaluate', type: 'extended',
        prompt:
          'why rounding decisions depend on context, using this and one other example.',
        wordGuide: 200,
        markscheme: [
          '.1 Here rounding down would leave students without transport',
          '.2 So the answer must round up regardless of the decimal',
          '.3 Gives a contrasting example, e.g. money rounded to 2 decimal places',
          '.4 Or a case where rounding down is correct, e.g. how many items can be afforded',
          '.5 Concludes that context, not the decimal alone, determines the rounding',
        ],
      },
    ],
  },
  {
    id: 'mathD-statistics', subject: 'mathematics', criterion: 'D', marks: 7,
    stimulus:
      'Mean income in a town is $54 000 but the median is $31 000. A survey about sports facilities was conducted only at a gym.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Explain', type: 'short',
        prompt: 'what the difference between the mean and median suggests about the income data.',
        markscheme: [
          '.1 A mean well above the median indicates positive skew',
          '.2 A small number of very high incomes pull the mean up',
          '.3 The median better represents a typical income',
        ],
      },
      {
        id: 'b', marks: 4, command: 'Evaluate', type: 'extended',
        prompt: 'the reliability of the sports facilities survey.',
        wordGuide: 150,
        markscheme: [
          '.1 The sampling location over-represents people who already exercise',
          '.2 This introduces systematic bias towards favouring sports spending',
          '.3 Increasing the sample size at the same location would not fix it',
          '.4 Suggests a better method, e.g. random sampling across the town',
        ],
      },
    ],
  },
  {
    id: 'mathD-probability-context', subject: 'mathematics', criterion: 'D', marks: 5,
    stimulus:
      'A fair coin has landed heads five times in a row. A gambler argues that tails is now "due".',
    parts: [
      {
        id: 'a', marks: 2, command: 'State', type: 'select',
        prompt: 'the probability that the next flip is heads.',
        options: ['1/2, since flips are independent', 'Less than 1/2', 'Greater than 1/2', 'Impossible to determine'],
        answer: 0,
        explanation:
          'The gambler’s fallacy assumes past independent events influence future ones. A fair coin has no memory, so the probability remains 1/2 every flip.',
      },
      {
        id: 'b', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why the gambler’s reasoning is mathematically incorrect.',
        markscheme: [
          '.1 Each flip is an independent event',
          '.2 The coin has no memory of previous outcomes',
          '.3 Long-run frequency evens out through more trials, not by compensation',
        ],
      },
    ],
  },

  /* The blocks below keep the Standard pool large enough to generate varied
     papers. Without them Criterion D had only one valid combination, so every
     Standard paper would have contained an identical D section. */
  {
    id: 'mathD-shopping', subject: 'mathematics', criterion: 'D', marks: 13,
    stimulus:
      'A shop sells rice in two sizes: a 2 kg bag for $3.60 and a 5 kg bag for $8.25. A household uses about 1 kg per week.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Determine', type: 'calculate',
        prompt: 'which bag is better value, showing your working.',
        markscheme: [
          '.1 Cost per kg for the 2 kg bag: 3.60 / 2',
          '.2 = $1.80 per kg',
          '.3 Cost per kg for the 5 kg bag: 8.25 / 5 = $1.65 per kg',
          '.4 Concludes the 5 kg bag is better value',
        ],
        answerNote: 'The 5 kg bag, at $1.65 per kg',
      },
      {
        id: 'b', marks: 4, command: 'Calculate', type: 'calculate',
        prompt: 'how much the household saves per year by buying the larger bag, assuming 52 kg used.',
        markscheme: [
          '.1 Saving per kg = 1.80 - 1.65 = $0.15',
          '.2 Annual usage = 52 kg',
          '.3 Saving = 52 x 0.15',
          '.4 = $7.80',
        ],
        answerNote: '$7.80 per year',
      },
      {
        id: 'c', marks: 5, command: 'Evaluate', type: 'extended',
        prompt: 'whether buying the better value bag is always the right decision.',
        wordGuide: 200,
        markscheme: [
          '.1 Cost per kg alone does not decide the best purchase',
          '.2 Storage space and carrying a heavy bag are practical constraints',
          '.3 Rice may spoil before a small household uses 5 kg',
          '.4 The larger bag costs more upfront, which matters on a tight budget',
          '.5 Reaches a justified conclusion engaging with the word "always"',
        ],
      },
    ],
  },
  {
    id: 'mathD-scale', subject: 'mathematics', criterion: 'D', marks: 10,
    stimulus:
      'A map is drawn to a scale of 1 : 25 000. Two towns appear 8 cm apart on the map.',
    parts: [
      {
        id: 'a', marks: 4, command: 'Calculate', type: 'calculate',
        prompt: 'the real distance between the towns in kilometres.',
        markscheme: [
          '.1 Real distance = 8 x 25 000',
          '.2 = 200 000 cm',
          '.3 Converts to metres: 2000 m',
          '.4 = 2 km',
        ],
        reject: ['Leaving the answer in centimetres'],
        answerNote: '2 km',
      },
      {
        id: 'b', marks: 3, command: 'Determine', type: 'calculate',
        prompt: 'how long a 5 km road would appear on the same map.',
        markscheme: [
          '.1 Converts 5 km to 500 000 cm',
          '.2 Divides by the scale factor: 500 000 / 25 000',
          '.3 = 20 cm',
        ],
        answerNote: '20 cm',
      },
      {
        id: 'c', marks: 3, command: 'Explain', type: 'short',
        prompt: 'why a straight-line map distance may underestimate the actual journey.',
        markscheme: [
          '.1 Roads rarely follow a straight line between two points',
          '.2 Terrain and existing routes force detours',
          '.3 So the travelled distance exceeds the direct map measurement',
        ],
      },
    ],
  },
  {
    id: 'mathA-ratio', subject: 'mathematics', criterion: 'A', marks: 7,
    stimulus:
      'A recipe for 4 people uses 300 g of flour and 200 ml of milk, in the ratio 3 : 2.',
    parts: [
      {
        id: 'a', marks: 3, command: 'Calculate', type: 'calculate',
        prompt: 'the quantities of flour and milk needed for 10 people.',
        markscheme: [
          '.1 Scale factor = 10 / 4 = 2.5',
          '.2 Flour = 300 x 2.5 = 750 g',
          '.3 Milk = 200 x 2.5 = 500 ml',
        ],
        answerNote: '750 g flour, 500 ml milk',
      },
      {
        id: 'b', marks: 4, command: 'Determine', type: 'calculate',
        prompt: 'how to share 900 g of a mixture in the ratio 3 : 2, and check your answer.',
        markscheme: [
          '.1 Total parts = 3 + 2 = 5',
          '.2 One part = 900 / 5 = 180 g',
          '.3 Shares are 3 x 180 = 540 g and 2 x 180 = 360 g',
          '.4 Checks the shares sum to 900 g',
        ],
        answerNote: '540 g and 360 g',
      },
    ],
  },
]
