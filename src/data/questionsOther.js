// Criterion-tagged practice questions for Mathematics, English, Individuals &
// Societies and Language Acquisition, at MYP Year 4–5 level.
//
// Mathematics questions carry `levels`: which course(s) they belong to.
// Standard students only see 'standard' questions; Extended students see both.

export const OTHER_QUESTIONS = [
  /* ============ MATHEMATICS - A: Knowing & understanding ============ */
  {
    id: 'mathA-1', subject: 'mathematics', criterion: 'A', topic: 'Percentages',
    levels: ['standard', 'extended'],
    prompt: 'A jacket costs $80 and is reduced by 15%. What is the sale price?',
    options: ['$65.00', '$68.00', '$72.00', '$12.00'],
    answer: 1,
    explanation:
      'Multiply by the decrease multiplier: 80 × 0.85 = $68. A common error is stopping at the discount ($12) instead of the price.',
  },
  {
    id: 'mathA-2', subject: 'mathematics', criterion: 'A', topic: 'Standard form',
    levels: ['standard', 'extended'],
    prompt: 'Express 0.00042 in standard form.',
    options: ['4.2 × 10⁻⁴', '4.2 × 10⁴', '42 × 10⁻⁵', '0.42 × 10⁻³'],
    answer: 0,
    explanation:
      'Move the decimal point 4 places right to get 4.2, so the index is −4. Standard form needs 1 ≤ a < 10, ruling out the other options.',
  },
  {
    id: 'mathA-3', subject: 'mathematics', criterion: 'A', topic: 'Algebra',
    levels: ['standard', 'extended'],
    prompt: 'Make x the subject of y = 3x + 7.',
    options: ['x = (y − 7)/3', 'x = y/3 − 7', 'x = 3y − 7', 'x = (y + 7)/3'],
    answer: 0,
    explanation:
      'Subtract 7 from both sides: y − 7 = 3x. Then divide both sides by 3: x = (y − 7)/3.',
  },
  {
    id: 'mathA-4', subject: 'mathematics', criterion: 'A', topic: 'Circles',
    levels: ['standard', 'extended'],
    prompt: 'A circle has radius 7 cm. Its area to 1 d.p. is…',
    options: ['22.0 cm²', '43.9 cm²', '153.9 cm²', '49.0 cm²'],
    answer: 2,
    explanation:
      'Area = πr² = π × 7² = π × 49 = 153.938… ≈ 153.9 cm². (43.9 cm is the circumference - a classic mix-up.)',
  },
  {
    id: 'mathA-5', subject: 'mathematics', criterion: 'A', topic: 'Quadratics',
    levels: ['extended'],
    prompt: 'Solve x² − 7x + 12 = 0.',
    options: ['x = 3 or x = 4', 'x = −3 or x = −4', 'x = 2 or x = 6', 'x = 1 or x = 12'],
    answer: 0,
    explanation:
      'Two numbers multiplying to 12 and adding to −7 are −3 and −4: (x − 3)(x − 4) = 0, so x = 3 or 4.',
  },
  {
    id: 'mathA-6', subject: 'mathematics', criterion: 'A', topic: 'Trigonometry',
    levels: ['extended'],
    prompt: 'In a right-angled triangle the opposite side is 6 cm and the hypotenuse 10 cm. The angle to 1 d.p. is…',
    options: ['30.0°', '36.9°', '53.1°', '59.0°'],
    answer: 1,
    explanation:
      'sin θ = opp/hyp = 6/10 = 0.6, so θ = sin⁻¹(0.6) = 36.87° ≈ 36.9°. (53.1° is the other non-right angle.)',
  },
  {
    id: 'mathA-7', subject: 'mathematics', criterion: 'A', topic: 'Indices',
    levels: ['extended'],
    prompt: 'Simplify (x³)⁴ ÷ x⁵.',
    options: ['x²', 'x⁷', 'x¹²', 'x⁶⁰'],
    answer: 1,
    explanation:
      'Power of a power multiplies indices: (x³)⁴ = x¹². Dividing subtracts: x¹² ÷ x⁵ = x⁷.',
  },
  {
    id: 'mathA-8', subject: 'mathematics', criterion: 'A', topic: 'Volume',
    levels: ['standard', 'extended'],
    prompt: 'A cylinder has radius 3 cm and height 10 cm. Its volume to the nearest cm³ is…',
    options: ['94 cm³', '188 cm³', '283 cm³', '90 cm³'],
    answer: 2,
    explanation:
      'V = πr²h = π × 9 × 10 = 282.7 ≈ 283 cm³.',
  },

  /* ============ MATHEMATICS - B: Investigating patterns ============ */
  {
    id: 'mathB-1', subject: 'mathematics', criterion: 'B', topic: 'Sequences',
    levels: ['standard', 'extended'],
    prompt: 'A sequence starts 7, 12, 17, 22. What is the nth term?',
    options: ['5n + 2', '5n − 2', 'n + 5', '7n'],
    answer: 0,
    explanation:
      'The common difference is 5, so the rule begins 5n. 5 × 1 = 5 and the first term is 7, so add 2: 5n + 2.',
  },
  {
    id: 'mathB-2', subject: 'mathematics', criterion: 'B', topic: 'Generalisation',
    levels: ['standard', 'extended'],
    prompt: 'In MYP Criterion B, what separates a level 7–8 response from a level 3–4 one?',
    options: [
      'Writing more terms of the sequence',
      'Stating a correct general rule and justifying why it works',
      'Using a calculator',
      'Drawing a neater table',
    ],
    answer: 1,
    explanation:
      'Top-level Criterion B work moves beyond spotting a pattern: it states a general rule (usually algebraically), verifies it and justifies *why* it holds.',
  },
  {
    id: 'mathB-3', subject: 'mathematics', criterion: 'B', topic: 'Patterns',
    levels: ['standard', 'extended'],
    prompt: 'A pattern of squares uses 4, 7, 10, 13 matchsticks. How many for the 20th term?',
    options: ['61', '64', '58', '70'],
    answer: 0,
    explanation:
      'Difference is 3, so nth term = 3n + 1. For n = 20: 3 × 20 + 1 = 61.',
  },
  {
    id: 'mathB-4', subject: 'mathematics', criterion: 'B', topic: 'Justification',
    levels: ['extended'],
    prompt: 'A student verifies a rule works for n = 1, 2, 3, 4. In Criterion B terms, this is…',
    options: [
      'a complete proof',
      'verification only - a proof must explain why the rule holds for all n',
      'irrelevant to the task',
      'enough for the top level',
    ],
    answer: 1,
    explanation:
      'Testing values verifies but does not prove. A justification must give a general argument explaining why the rule works for every case.',
  },
  {
    id: 'mathB-5', subject: 'mathematics', criterion: 'B', topic: 'Quadratic sequences',
    levels: ['extended'],
    prompt: 'A sequence has second differences that are constant and non-zero. Its nth term is…',
    options: ['linear', 'quadratic', 'exponential', 'undefined'],
    answer: 1,
    explanation:
      'Constant first differences indicate a linear rule; constant second differences indicate a quadratic rule of the form an² + bn + c.',
  },

  /* ============ MATHEMATICS - D: Applying in real life ============ */
  {
    id: 'mathD-1', subject: 'mathematics', criterion: 'D', topic: 'Accuracy',
    levels: ['standard', 'extended'],
    prompt: 'A calculation gives 7.3333 tins of paint needed. In context, the answer should be…',
    options: ['7.33 tins', '7 tins', '8 tins, since tins cannot be bought in fractions', '7.3 tins'],
    answer: 2,
    explanation:
      'Criterion D rewards interpreting the answer in context. Paint is sold in whole tins and 7 would be insufficient, so round up to 8.',
  },
  {
    id: 'mathD-2', subject: 'mathematics', criterion: 'D', topic: 'Modelling',
    levels: ['standard', 'extended'],
    prompt: 'A model predicts a population of −40 people in 2050. The best response is to…',
    options: [
      'accept the answer',
      'state the model is invalid beyond a certain point, as a negative population is impossible',
      'change the data',
      'ignore the negative sign',
    ],
    answer: 1,
    explanation:
      'Evaluating whether a result makes sense in the real context - and identifying the model’s limitations - is exactly what Criterion D assesses.',
  },
  {
    id: 'mathD-3', subject: 'mathematics', criterion: 'D', topic: 'Compound measures',
    levels: ['standard', 'extended'],
    prompt: 'A car travels 90 km in 1 hour 30 minutes. Its average speed is…',
    options: ['45 km/h', '60 km/h', '90 km/h', '135 km/h'],
    answer: 1,
    explanation:
      'Convert time to hours: 1 h 30 min = 1.5 h. Speed = 90 ÷ 1.5 = 60 km/h. Failing to convert the time is the usual error.',
  },
  {
    id: 'mathD-4', subject: 'mathematics', criterion: 'D', topic: 'Finance',
    levels: ['standard', 'extended'],
    prompt: '$500 is invested at 4% compound interest per year. Its value after 3 years is…',
    options: ['$560.00', '$562.43', '$620.00', '$540.00'],
    answer: 1,
    explanation:
      '500 × 1.04³ = 500 × 1.124864 = $562.43. Simple interest would give $560 - compound interest earns interest on interest.',
  },
  {
    id: 'mathD-5', subject: 'mathematics', criterion: 'D', topic: 'Scale',
    levels: ['extended'],
    prompt: 'On a 1 : 25 000 map, two towns are 8 cm apart. The real distance is…',
    options: ['2 km', '20 km', '200 m', '25 km'],
    answer: 0,
    explanation:
      '8 cm × 25 000 = 200 000 cm = 2000 m = 2 km. Always convert units at the end.',
  },

  /* ============ ENGLISH - A: Analysing ============ */
  {
    id: 'engA-1', subject: 'english', criterion: 'A', topic: 'Effect of language',
    prompt: 'A writer describes a factory as “a grey lung, wheezing smoke into the sky.” The primary effect of this metaphor is to…',
    options: [
      'state the factory’s location',
      'present the factory as diseased and organic, implying industry is damaging living things',
      'suggest the factory is modern and efficient',
      'describe the weather',
    ],
    answer: 1,
    explanation:
      'Analysing means explaining *how* the choice creates meaning. “Lung” and “wheezing” personify the factory as a sick organism, implying industrial harm - not merely that there is smoke.',
  },
  {
    id: 'engA-2', subject: 'english', criterion: 'A', topic: 'Structure',
    prompt: 'A short story is narrated entirely in the present tense. The most likely effect is to…',
    options: [
      'create immediacy, placing the reader inside the unfolding action',
      'confuse the reader',
      'indicate the events are historical',
      'show the narrator is unreliable',
    ],
    answer: 0,
    explanation:
      'Present tense narration collapses the distance between event and telling, generating immediacy and tension. Linking a structural choice to reader effect is core Criterion A.',
  },
  {
    id: 'engA-3', subject: 'english', criterion: 'A', topic: 'Purpose & audience',
    prompt: 'An article uses statistics, expert quotations and emotive personal anecdotes. This combination most suggests the purpose is to…',
    options: [
      'purely inform with neutral facts',
      'persuade, by pairing logical credibility with emotional engagement',
      'entertain only',
      'instruct the reader in a process',
    ],
    answer: 1,
    explanation:
      'Statistics and experts build logos/ethos; anecdotes build pathos. The deliberate combination signals a persuasive purpose rather than neutral reporting.',
  },
  {
    id: 'engA-4', subject: 'english', criterion: 'A', topic: 'Visual texts',
    prompt: 'In a photograph, the subject is shot from a low angle. Conventionally this positions the subject as…',
    options: ['vulnerable', 'powerful or dominant', 'distant', 'ordinary'],
    answer: 1,
    explanation:
      'Low-angle shots look up at the subject, connoting power and dominance; high angles look down, connoting vulnerability. Visual analysis is examined in MYP English.',
  },
  {
    id: 'engA-5', subject: 'english', criterion: 'A', topic: 'Characterisation',
    prompt: 'A character speaks only in short, clipped sentences while others speak in long flowing ones. This contrast most likely conveys…',
    options: [
      'the character is uneducated',
      'guardedness, tension or emotional restraint in that character',
      'nothing meaningful',
      'the writer ran out of ideas',
    ],
    answer: 1,
    explanation:
      'Syntax is characterisation. Clipped sentences suggest restraint, control or tension - analysing sentence structure, not just word choice, marks stronger responses.',
  },
  {
    id: 'engA-6', subject: 'english', criterion: 'A', topic: 'Context',
    prompt: 'Reading a text “in its context” means considering…',
    options: [
      'only the plot',
      'the social, historical and cultural circumstances shaping its production and reception',
      'the length of the book',
      'the font used',
    ],
    answer: 1,
    explanation:
      'Criterion A includes analysing how context shapes meaning - the circumstances of both the writer and the reader.',
  },
  {
    id: 'engA-7', subject: 'english', criterion: 'A', topic: 'Tone',
    prompt: 'A review says a film is “an ambitious triumph of style over anything resembling a plot.” The tone is best described as…',
    options: ['sincere praise', 'ironic and critical', 'neutral', 'nostalgic'],
    answer: 1,
    explanation:
      'The construction praises then undercuts. Recognising irony - meaning at odds with the literal words - is a key analytical skill.',
  },

  /* ============ ENGLISH - B: Organizing ============ */
  {
    id: 'engB-1', subject: 'english', criterion: 'B', topic: 'Structure',
    prompt: 'In a comparative essay, the strongest structure is to…',
    options: [
      'write all about text 1, then all about text 2',
      'organise by point of comparison, addressing both texts within each paragraph',
      'summarise both plots first',
      'alternate randomly',
    ],
    answer: 1,
    explanation:
      'Criterion B rewards structure that serves the argument. Point-by-point organisation keeps both texts in view and makes genuine comparison possible.',
  },
  {
    id: 'engB-2', subject: 'english', criterion: 'B', topic: 'Cohesion',
    prompt: 'Which transition best signals a contrasting idea?',
    options: ['Furthermore', 'Similarly', 'Conversely', 'In addition'],
    answer: 2,
    explanation:
      '“Conversely” marks contrast; the others signal addition or similarity. Precise connectives are part of the cohesion assessed in Criterion B.',
  },
  {
    id: 'engB-3', subject: 'english', criterion: 'B', topic: 'Paragraphing',
    prompt: 'A topic sentence should…',
    options: [
      'contain a quotation',
      'state the paragraph’s analytical point and connect to the essay argument',
      'be the longest sentence',
      'introduce a new text',
    ],
    answer: 1,
    explanation:
      'A topic sentence announces the analytical claim and links it to the thesis, giving the paragraph direction - evidence and explanation then follow.',
  },
  {
    id: 'engB-4', subject: 'english', criterion: 'B', topic: 'Referencing',
    prompt: 'When quoting, the convention that best supports an analytical argument is to…',
    options: [
      'use long block quotations frequently',
      'embed short quotations within your own sentences',
      'avoid quoting entirely',
      'quote only the first line of a text',
    ],
    answer: 1,
    explanation:
      'Embedded short quotations keep your argument driving the paragraph and let you zoom in on individual word choices. Long quotations dilute analysis.',
  },

  /* ============ ENGLISH - D: Using language ============ */
  {
    id: 'engD-1', subject: 'english', criterion: 'D', topic: 'Register',
    prompt: 'Which sentence maintains an appropriate academic register?',
    options: [
      'The writer totally nails the mood here.',
      'The writer establishes an oppressive mood through cumulative imagery of confinement.',
      'This bit is super sad and stuff.',
      'You can really feel it, you know?',
    ],
    answer: 1,
    explanation:
      'Academic register is precise, formal and impersonal. Criterion D assesses whether vocabulary and style suit the task, audience and purpose.',
  },
  {
    id: 'engD-2', subject: 'english', criterion: 'D', topic: 'Precision',
    prompt: 'Which verb most precisely describes what a writer does when they hint at something without stating it?',
    options: ['says', 'implies', 'shouts', 'writes'],
    answer: 1,
    explanation:
      'Precise analytical verbs (implies, suggests, evokes, undercuts, juxtaposes) sharpen your writing. Vague verbs like “says” flatten analysis.',
  },
  {
    id: 'engD-3', subject: 'english', criterion: 'D', topic: 'Syntax',
    prompt: 'Which sentence is grammatically correct?',
    options: [
      'The poem, which uses enjambment creates a sense of momentum.',
      'The poem, which uses enjambment, creates a sense of momentum.',
      'The poem which, uses enjambment, creates a sense of momentum.',
      'The poem which uses enjambment, creates a sense of momentum',
    ],
    answer: 1,
    explanation:
      'A non-defining relative clause must be enclosed by a pair of commas. Accuracy of syntax and punctuation is directly assessed in Criterion D.',
  },
  {
    id: 'engD-4', subject: 'english', criterion: 'D', topic: 'Accuracy',
    prompt: 'Which sentence uses the apostrophe correctly?',
    options: [
      'The writers’ choices shape the readers response.',
      'The writer’s choices shape the reader’s response.',
      'The writers choice’s shape the readers’ response.',
      'The writer’s choices shape the readers response’s.',
    ],
    answer: 1,
    explanation:
      'Singular possessive takes ’s: the writer’s choices, the reader’s response. Misplaced apostrophes are among the most common Criterion D errors.',
  },
  {
    id: 'engD-5', subject: 'english', criterion: 'D', topic: 'Register',
    prompt: 'A blog post aimed at fellow students should generally…',
    options: [
      'use dense academic jargon throughout',
      'use an accessible, direct register while remaining purposeful and well-structured',
      'be written entirely in slang',
      'avoid addressing the reader at all',
    ],
    answer: 1,
    explanation:
      'Criterion D rewards matching register to audience and purpose - a student blog needs accessibility without abandoning control or structure.',
  },

  /* ============ HISTORY - A ============ */
  {
    id: 'hisA-1', subject: 'history', criterion: 'A', topic: 'Causation',
    prompt: 'Which best describes a “long-term cause”?',
    options: [
      'The single event that immediately sparked a conflict',
      'An underlying condition developing over years that made conflict more likely',
      'A consequence that followed the event',
      'An eyewitness account',
    ],
    answer: 1,
    explanation:
      'Long-term causes are underlying conditions (e.g. militarism, alliance systems). The trigger is the immediate spark. Distinguishing them is core Criterion A.',
  },
  {
    id: 'hisA-2', subject: 'history', criterion: 'A', topic: 'Terminology',
    prompt: '“Totalitarianism” is best defined as a system in which…',
    options: [
      'power is shared between parties',
      'the state seeks total control over public and private life, permitting no opposition',
      'citizens elect representatives freely',
      'the monarch has ceremonial power only',
    ],
    answer: 1,
    explanation:
      'Totalitarian regimes seek control over every sphere - politics, economy, culture, private belief - enforced through propaganda and terror.',
  },
  {
    id: 'hisA-3', subject: 'history', criterion: 'A', topic: 'Cold War',
    prompt: 'The policy of “containment” refers to the US aim of…',
    options: [
      'invading the Soviet Union',
      'preventing the further spread of communism beyond where it already existed',
      'withdrawing from world affairs',
      'uniting with the USSR',
    ],
    answer: 1,
    explanation:
      'Containment (Truman Doctrine) sought to stop communism spreading further, shaping US involvement in Korea, Vietnam and Europe.',
  },
  {
    id: 'hisA-4', subject: 'history', criterion: 'A', topic: 'Change & continuity',
    prompt: 'A historian argues that despite political revolution, daily rural life changed little for decades. This is an argument about…',
    options: ['causation', 'continuity amid change', 'significance', 'bias'],
    answer: 1,
    explanation:
      'Change and continuity is a second-order concept: recognising that dramatic events do not transform every aspect of life at the same pace.',
  },

  /* ============ HISTORY - D ============ */
  {
    id: 'hisD-1', subject: 'history', criterion: 'D', topic: 'Source evaluation',
    prompt: 'A government propaganda poster from 1916 is being evaluated. Its *value* to a historian is that it…',
    options: [
      'gives an objective account of the war',
      'reveals what the government wanted the public to believe and how it tried to persuade them',
      'is useless because it is biased',
      'proves the war was popular',
    ],
    answer: 1,
    explanation:
      'Bias is not the same as uselessness. A propaganda source is strong evidence of official attitudes and persuasive techniques, even though it is unreliable as fact.',
  },
  {
    id: 'hisD-2', subject: 'history', criterion: 'D', topic: 'Source evaluation',
    prompt: 'In OPCVL, a *limitation* arising from a source’s origin might be that…',
    options: [
      'it is written in English',
      'the author was not present at the events and wrote decades later from memory',
      'it is a long document',
      'it has a title',
    ],
    answer: 1,
    explanation:
      'Limitations flow from origin and purpose - distance from events, restricted access, or an agenda. Surface features like length are not limitations.',
  },
  {
    id: 'hisD-3', subject: 'history', criterion: 'D', topic: 'Interpretations',
    prompt: 'Two historians reach opposite conclusions about the same event most often because they…',
    options: [
      'have different amounts of intelligence',
      'select and weigh different evidence, and write from different perspectives or periods',
      'one is simply lying',
      'used different fonts',
    ],
    answer: 1,
    explanation:
      'Interpretation differs through evidence selection, methodology, and the historian’s own context - a central Criterion D idea.',
  },
  {
    id: 'hisD-4', subject: 'history', criterion: 'D', topic: 'Perspectives',
    prompt: 'Considering “perspectives” on decolonisation means examining the views of…',
    options: [
      'only the colonising government',
      'colonised populations, colonial administrators, settlers and later historians',
      'only modern textbooks',
      'only one political party',
    ],
    answer: 1,
    explanation:
      'Strong Criterion D work weighs multiple, competing perspectives - especially those historically marginalised - rather than a single official narrative.',
  },

  /* ============ GEOGRAPHY - A ============ */
  {
    id: 'geoA-1', subject: 'geography', criterion: 'A', topic: 'Tectonics',
    prompt: 'Fold mountains form primarily at which plate boundary?',
    options: [
      'Constructive, where plates diverge',
      'Destructive/collision, where continental plates converge',
      'Conservative, where plates slide past',
      'In the middle of a plate',
    ],
    answer: 1,
    explanation:
      'Where two continental plates collide neither subducts easily, so sediment and crust buckle upward into fold mountains (e.g. the Himalayas).',
  },
  {
    id: 'geoA-2', subject: 'geography', criterion: 'A', topic: 'Development',
    prompt: 'The “demographic transition model” stage with high birth rates but rapidly falling death rates shows…',
    options: [
      'population decline',
      'rapid population growth',
      'a stable population',
      'zero migration',
    ],
    answer: 1,
    explanation:
      'In Stage 2, improved sanitation and healthcare cut death rates while birth rates stay high, producing rapid natural increase.',
  },
  {
    id: 'geoA-3', subject: 'geography', criterion: 'A', topic: 'Rivers',
    prompt: 'An ox-bow lake forms when…',
    options: [
      'a river floods its entire floodplain',
      'erosion narrows a meander neck until the river cuts through, and deposition seals off the old bend',
      'a delta builds at the mouth',
      'a waterfall retreats upstream',
    ],
    answer: 1,
    explanation:
      'Lateral erosion on outer bends narrows the meander neck; during high flow the river breaches it, then deposition seals the abandoned loop.',
  },
  {
    id: 'geoA-4', subject: 'geography', criterion: 'A', topic: 'Urbanisation',
    prompt: 'Rapid rural-to-urban migration in lower-income countries most commonly results in…',
    options: [
      'immediate improvements in all services',
      'growth of informal settlements where housing and services cannot keep pace',
      'falling city populations',
      'the end of agriculture',
    ],
    answer: 1,
    explanation:
      'When in-migration outstrips housing, infrastructure and job creation, informal settlements expand - a standard MYP case-study concept.',
  },

  /* ============ GEOGRAPHY - D ============ */
  {
    id: 'geoD-1', subject: 'geography', criterion: 'D', topic: 'Data interpretation',
    prompt: 'A graph shows GDP rising while life expectancy stays flat. The best conclusion is that…',
    options: [
      'GDP always improves wellbeing',
      'economic growth alone does not guarantee improved health outcomes - distribution matters',
      'the data must be wrong',
      'life expectancy causes GDP',
    ],
    answer: 1,
    explanation:
      'Criterion D rewards interpreting data critically: growth that is unequally distributed or not invested in healthcare need not raise life expectancy.',
  },
  {
    id: 'geoD-2', subject: 'geography', criterion: 'D', topic: 'Evaluating sources',
    prompt: 'A report on a mine’s environmental impact is funded by the mining company. A geographer should…',
    options: [
      'reject it outright',
      'use it, but weigh its findings against independent sources and note the potential for bias',
      'accept all conclusions',
      'ignore who funded it',
    ],
    answer: 1,
    explanation:
      'Funding creates a possible conflict of interest - a limitation, not automatic disqualification. Triangulating with independent sources is the strong response.',
  },
  {
    id: 'geoD-3', subject: 'geography', criterion: 'D', topic: 'Sustainability',
    prompt: 'Which best evaluates a “sustainable” urban transport scheme?',
    options: [
      'It is new and modern',
      'It reduces emissions and is affordable and accessible long-term, though it requires high initial investment',
      'It looks attractive',
      'It is popular with tourists',
    ],
    answer: 1,
    explanation:
      'Genuine evaluation weighs environmental, social and economic dimensions - including drawbacks such as upfront cost - rather than listing benefits.',
  },
  {
    id: 'geoD-4', subject: 'geography', criterion: 'D', topic: 'Perspectives',
    prompt: 'When assessing a proposed dam, considering multiple stakeholder perspectives means including…',
    options: [
      'only the national government',
      'displaced local communities, downstream farmers, energy consumers and environmental groups',
      'only engineers',
      'only tourists',
    ],
    answer: 1,
    explanation:
      'Stakeholder analysis recognises that costs and benefits fall unevenly - displaced communities may lose while distant consumers gain.',
  },
]
