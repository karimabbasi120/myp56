// MYP assessment criteria per subject group, with plain-language
// descriptions of what separates a 3–4 response from a 7–8 one.

export const CRITERIA = {
  langlit: [
    {
      criterion: 'A',
      name: 'Analysing',
      what: 'How well you take texts apart - content, context, language, structure, technique and style - and explain how they create meaning.',
      level34:
        'You identify some techniques and say what the text is about. Points are mostly description or plot retelling, with occasional quotes that aren’t unpacked.',
      level78:
        'You analyse how specific choices (word, structure, technique) create effects and shape meaning, support every claim with well-chosen evidence, and connect texts to their context and to each other perceptively.',
    },
    {
      criterion: 'B',
      name: 'Organizing',
      what: 'How well you structure ideas - logical flow, paragraphing, referencing and formatting appropriate to the task.',
      level34:
        'There is a basic structure (intro/body/end) but ideas jump around; paragraphs exist but don’t build on each other; citations are patchy.',
      level78:
        'Ideas unfold in a deliberate sequence where each paragraph builds the argument; transitions are seamless; referencing and format conventions are followed consistently.',
    },
    {
      criterion: 'C',
      name: 'Producing text',
      what: 'The quality of the texts you create - insight, imagination, sensitivity, and deliberate stylistic choices for audience and purpose.',
      level34:
        'The piece completes the task but plays it safe: predictable ideas, few deliberate stylistic choices, limited awareness of who it’s written for.',
      level78:
        'The piece shows genuine insight or originality; stylistic choices (register, imagery, structure) are clearly deliberate and consistently serve the intended audience and purpose.',
    },
    {
      criterion: 'D',
      name: 'Using language',
      what: 'Vocabulary, grammar, spelling, register and appropriate terminology - the accuracy and appropriateness of your language.',
      level34:
        'Meaning is generally clear but vocabulary is simple and repetitive; grammar errors occasionally distract; register slips.',
      level78:
        'Wide, precise vocabulary used naturally; grammar and spelling are consistently accurate; register and terminology fit the task exactly.',
    },
  ],
  langacq: [
    {
      criterion: 'A',
      name: 'Listening',
      what: 'Understanding spoken texts - identifying explicit and implicit information, conventions, and connections to context.',
      level34:
        'You catch the main topic and some explicit facts but miss implied meaning and details, especially at natural speed.',
      level78:
        'You understand explicit and implicit meaning, interpret the speaker’s purpose and attitude, and connect what you hear to its context.',
    },
    {
      criterion: 'B',
      name: 'Reading',
      what: 'Understanding written texts - explicit and implicit information, text conventions, and the writer’s choices.',
      level34:
        'You understand the gist and locate obvious information, but inference questions and unfamiliar structures cause trouble.',
      level78:
        'You read between the lines: interpreting purpose, tone and implied meaning, and explaining how text features and conventions shape the message.',
    },
    {
      criterion: 'C',
      name: 'Speaking',
      what: 'Expressing yourself orally - pronunciation, fluency, vocabulary, grammar and responding in interactions.',
      level34:
        'You communicate basic ideas with rehearsed phrases; hesitation and errors sometimes force the listener to work; responses to questions are short.',
      level78:
        'You speak fluently and naturally with wide vocabulary and mostly accurate structures, sustain unscripted interaction, and adapt register to the situation.',
    },
    {
      criterion: 'D',
      name: 'Writing',
      what: 'Expressing yourself in writing - organization, vocabulary, grammar, and following text-type conventions for audience and purpose.',
      level34:
        'Short, simple sentences convey basic meaning; limited connectors; text-type conventions only partly followed.',
      level78:
        'Writing is organized, detailed and mostly accurate, uses varied structures and rich vocabulary, and follows the conventions of the required text type for its audience.',
    },
  ],
  indsoc: [
    {
      criterion: 'A',
      name: 'Knowing and understanding',
      what: 'Your grasp of subject content - using terminology correctly and showing knowledge through descriptions, explanations and examples.',
      level34:
        'You use some terminology and give brief descriptions, but explanations lack depth and examples are generic.',
      level78:
        'You use a wide range of terminology accurately and demonstrate detailed knowledge through developed explanations backed by specific, well-chosen examples.',
    },
    {
      criterion: 'B',
      name: 'Investigating',
      what: 'Formulating a research question, planning the investigation, collecting relevant information, and reflecting on the process.',
      level34:
        'Your question is broad or unfocused; you gather some information but sources are few and the method is loose; reflection is an afterthought.',
      level78:
        'Your question is sharp and justified; you follow a clear action plan, gather varied and relevant sources systematically, and honestly evaluate the process and results.',
    },
    {
      criterion: 'C',
      name: 'Communicating',
      what: 'Presenting information and ideas in a style and structure that fits the audience, purpose and task format, with sources documented.',
      level34:
        'Information is presented but structure wobbles; the style doesn’t always fit the task; sources are listed inconsistently.',
      level78:
        'Structure and style are precisely matched to purpose and audience; ideas flow logically; every source is documented following one consistent convention.',
    },
    {
      criterion: 'D',
      name: 'Thinking critically',
      what: 'Analysing concepts and arguments, evaluating sources for origin and purpose, recognizing perspectives, and drawing supported conclusions.',
      level34:
        'You summarize sources and identify an obvious perspective or two; conclusions are stated but thinly supported.',
      level78:
        'You interrogate sources (origin, purpose, value, limitation), weigh multiple perspectives and their implications, and build conclusions that follow tightly from analysed evidence.',
    },
  ],
  sciences: [
    {
      criterion: 'A',
      name: 'Knowing and understanding',
      what: 'Explaining scientific knowledge, applying it to solve problems in familiar and unfamiliar situations, and judging information critically.',
      level34:
        'You recall facts and apply them to familiar problems, but unfamiliar contexts and “analyse/evaluate” questions expose gaps.',
      level78:
        'You explain concepts accurately, transfer them to unfamiliar situations, and analyse and evaluate information to make scientifically supported judgments.',
    },
    {
      criterion: 'B',
      name: 'Inquiring and designing',
      what: 'Framing a testable question, hypothesizing with scientific reasoning, and designing a valid, safe method with controlled variables.',
      level34:
        'Your question is testable but vague; the hypothesis lacks scientific reasoning; some variables are identified but the method has validity holes.',
      level78:
        'You explain the problem, justify a hypothesis with correct scientific reasoning, control variables explicitly, and design a method that yields sufficient, reliable data.',
    },
    {
      criterion: 'C',
      name: 'Processing and evaluating',
      what: 'Presenting and interpreting data, concluding based on evidence, and evaluating the hypothesis, method and its improvement.',
      level34:
        'You present results in basic tables/graphs and state whether the hypothesis was “right”; evaluation names a flaw or two without fixes.',
      level78:
        'You process data correctly (units, precision, appropriate graphs), interpret it against scientific understanding, judge the hypothesis’ validity from the evidence, and propose concrete, justified improvements and extensions.',
    },
    {
      criterion: 'D',
      name: 'Reflecting on the impacts of science',
      what: 'Explaining how science interacts with a real factor (moral, ethical, social, economic, environmental…) and communicating with correct language and full referencing.',
      level34:
        'You outline an impact of science on the chosen issue, but the discussion stays general and sources are inconsistently cited.',
      level78:
        'You discuss and evaluate the science’s implications for the specific factor with concrete evidence, use scientific language precisely, and document sources completely.',
    },
  ],
  math: [
    {
      criterion: 'A',
      name: 'Knowing and understanding',
      what: 'Selecting and applying the right mathematics to solve problems correctly, in both familiar and unfamiliar situations.',
      level34:
        'You solve familiar problems with practiced methods but stumble when a problem is dressed differently or combines topics.',
      level78:
        'You choose the appropriate mathematics even in challenging unfamiliar situations and generally reach correct solutions.',
    },
    {
      criterion: 'B',
      name: 'Investigating patterns',
      what: 'Spotting patterns, describing them as general rules, and verifying or proving those rules.',
      level34:
        'You spot the pattern and predict the next terms, but struggle to write the general rule or test whether it always holds.',
      level78:
        'You state the general rule correctly (often algebraically), verify it works, and justify or prove why - showing the finding is more than coincidence.',
    },
    {
      criterion: 'C',
      name: 'Communicating',
      what: 'Using mathematical language, notation and representations (graphs, tables, diagrams) correctly, with reasoning that is complete and coherent.',
      level34:
        'Working is readable but skips steps; notation is sometimes misused; representations are basic or mismatched to the data.',
      level78:
        'Every line of reasoning is complete, coherent and concise; notation is correct throughout; you move fluently between representations, choosing the best one for the job.',
    },
    {
      criterion: 'D',
      name: 'Applying mathematics in real-life contexts',
      what: 'Choosing and applying mathematical strategies to real situations, and judging whether the result actually makes sense.',
      level34:
        'You apply a strategy to the real-life problem and get an answer, but don’t check whether the answer is reasonable or discuss its accuracy.',
      level78:
        'You model the situation with justified strategies, reach a correct solution, and explain the degree of accuracy and whether the result makes sense in the real context.',
    },
  ],
  arts: [
    {
      criterion: 'A',
      name: 'Investigating',
      what: 'Researching an artistic movement, genre, style or artist, and using that research to inform your own work.',
      level34:
        'You describe the art form or artist in general terms; the link between your research and your own work is loose.',
      level78:
        'You analyse the art form critically - its context, conventions and techniques - and show precisely how the investigation shaped your own artistic choices.',
    },
    {
      criterion: 'B',
      name: 'Developing',
      what: 'Developing ideas, skills and techniques - practically exploring possibilities and refining your artistic intention.',
      level34:
        'You try an idea or two and settle quickly; skill development is visible but limited; the artistic intention stays vague.',
      level78:
        'You explore and refine multiple ideas purposefully, showing clear technical growth, and arrive at a well-defined artistic intention that guides the work.',
    },
    {
      criterion: 'C',
      name: 'Creating / Performing',
      what: 'The finished work or performance itself - applying skills and techniques to realize your artistic intention.',
      level34:
        'The work is complete and shows adequate skill, but execution is inconsistent and the intention only partly comes through.',
      level78:
        'The work demonstrates accomplished, consistent technique and communicates the artistic intention convincingly to its audience.',
    },
    {
      criterion: 'D',
      name: 'Evaluating',
      what: 'Appraising your own work and process - judging what succeeded, what didn’t, and what you learned as an artist.',
      level34:
        'You say what you liked and disliked about the work with little reasoning or connection to your original intention.',
      level78:
        'You critically evaluate the work against your stated intention, analyse why choices succeeded or failed, and articulate how the process developed you as an artist.',
    },
  ],
  phe: [
    {
      criterion: 'A',
      name: 'Knowing and understanding',
      what: 'Understanding PHE concepts - rules, techniques, tactics, health principles - and applying them to solve problems in context.',
      level34:
        'You recall rules and basic principles and apply them in straightforward situations, using some correct terminology.',
      level78:
        'You explain concepts and principles accurately, apply them to analyse and solve complex or unfamiliar situations, and use PHE terminology consistently.',
    },
    {
      criterion: 'B',
      name: 'Planning for performance',
      what: 'Designing and explaining a plan (training program, routine, strategy) to improve performance or health.',
      level34:
        'Your plan lists activities and a goal, but the reasoning connecting the plan to the goal is thin.',
      level78:
        'Your plan is detailed and realistic, every component is justified by how it serves the goal, and you explain how the plan’s effectiveness will be measured.',
    },
    {
      criterion: 'C',
      name: 'Applying and performing',
      what: 'Executing skills, techniques, strategies and movement concepts effectively in actual performance.',
      level34:
        'You perform core skills adequately in practice conditions, but consistency drops under game or performance pressure.',
      level78:
        'You execute a wide range of skills with precision and consistency, and select and apply the right strategy at the right moment in authentic performance.',
    },
    {
      criterion: 'D',
      name: 'Reflecting and improving performance',
      what: 'Evaluating your own performance honestly - including interpersonal skills - and setting goals that drive improvement.',
      level34:
        'You describe how the performance went and set a general goal (“get better at shooting”).',
      level78:
        'You analyse your performance with specific evidence, evaluate the effectiveness of your development strategies, and set measurable goals with concrete plans to reach them.',
    },
  ],
  design: [
    {
      criterion: 'A',
      name: 'Inquiring and analysing',
      what: 'Explaining the problem, justifying its need, researching existing solutions, and writing a design brief.',
      level34:
        'You state the problem and describe an existing product or two; the design brief lists wants rather than researched requirements.',
      level78:
        'You explain and justify the real need, critically analyse a range of existing solutions against it, and produce a design brief that clearly frames the research findings.',
    },
    {
      criterion: 'B',
      name: 'Developing ideas',
      what: 'Writing a testable design specification, sketching varied ideas, and developing the chosen design in full detail.',
      level34:
        'Your specification is a short checklist; ideas are few and similar; the final drawings leave a maker guessing at details.',
      level78:
        'Your specification has justified, testable requirements; you present genuinely different feasible ideas; the chosen design is detailed enough for a third party to make it.',
    },
    {
      criterion: 'C',
      name: 'Creating the solution',
      what: 'Planning the making process, following it with technical skill, and justifying any changes to the design along the way.',
      level34:
        'You make a working solution but the plan is loose, some steps are improvised, and changes happen without explanation.',
      level78:
        'You follow a logical, timed plan, demonstrate excellent technical skill, and document and justify every change made to the original design.',
    },
    {
      criterion: 'D',
      name: 'Evaluating',
      what: 'Designing tests, evaluating the solution against the specification, suggesting improvements, and assessing its impact on the client.',
      level34:
        'You test informally and conclude it “works well”; improvements are generic; impact on the user is barely mentioned.',
      level78:
        'You design valid tests, evaluate the solution point-by-point against the specification with evidence, propose specific improvements, and analyse the solution’s real impact on the client or audience.',
    },
  ],
}

export const PP_CRITERIA = [
  {
    id: 'A',
    name: 'Investigating',
    color: 'sky',
    description:
      'Defining a clear goal based on personal interest, and researching it - selecting, evaluating and applying information from sources.',
    prompts: [
      'What did you research today, and what did you learn from it?',
      'How reliable was the source you used, and how do you know?',
      'How does what you found change or confirm your goal?',
    ],
  },
  {
    id: 'B',
    name: 'Planning',
    color: 'violet',
    description:
      'Developing criteria for the product, planning and recording the process, and demonstrating self-management skills.',
    prompts: [
      'What does success look like for your product? Be specific.',
      'What is your plan for the next two weeks?',
      'What went off-schedule, and how are you adjusting?',
    ],
  },
  {
    id: 'C',
    name: 'Taking action',
    color: 'amber',
    description:
      'Creating the product in response to the goal, and demonstrating thinking, communication and social skills along the way.',
    prompts: [
      'What did you make or do today? What decisions did you face?',
      'What problem came up while creating, and how did you solve it?',
      'Who did you communicate or collaborate with, and how did it help?',
    ],
  },
  {
    id: 'D',
    name: 'Reflecting',
    color: 'emerald',
    description:
      'Evaluating the product against your criteria, and reflecting on how the project developed you as a learner.',
    prompts: [
      'Measured against your success criteria, how did the product do?',
      'What would you do differently if you started over?',
      'What did this project teach you about how you learn?',
    ],
  },
]
