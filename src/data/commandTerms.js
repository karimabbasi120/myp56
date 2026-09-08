// MYP command terms reference data.
// subjectGroups: which groups the term commonly appears in ('all' = every group).
// highLevel / lowLevel describe what strong vs weak responses look like.

export const COMMAND_TERMS = [
  {
    id: 'analyse',
    term: 'Analyse',
    subjectGroups: ['all'],
    definition:
      'Break something down into its parts and explain how those parts relate to each other and to the whole.',
    plainLanguage:
      'Take it apart. Don’t just say what is there - explain how the pieces work together and why they matter.',
    highLevel:
      'Identifies the key parts, explains how each part functions, and draws out relationships between them (cause/effect, contrast, structure → meaning). Uses evidence for every claim.',
    lowLevel:
      'Retells or describes the content without breaking it into parts. Lists features but never explains how they connect or why they matter.',
    starters: [
      'This is made up of three key elements: …',
      'The relationship between X and Y is significant because …',
      'This choice creates the effect of …, which …',
    ],
  },
  {
    id: 'annotate',
    term: 'Annotate',
    subjectGroups: ['langlit', 'arts', 'design', 'sciences'],
    definition:
      'Add brief notes to a diagram, graph or text to identify and briefly explain its features.',
    plainLanguage:
      'Label it and add a short note saying what each labelled thing is doing or why it’s there.',
    highLevel:
      'Notes are precise, use correct terminology, and briefly explain function or effect - not just the name of the feature.',
    lowLevel: 'Labels name the parts but say nothing about what they do.',
    starters: [
      'This section shows …',
      'Used here to …',
      'Note the …, which suggests …',
    ],
  },
  {
    id: 'apply',
    term: 'Apply',
    subjectGroups: ['math', 'sciences', 'indsoc', 'phe', 'design'],
    definition:
      'Use knowledge and understanding in a new situation - use an idea, equation, principle or theory in relation to a given problem.',
    plainLanguage:
      'Take something you learned in one context and actually use it to solve the problem in front of you.',
    highLevel:
      'Selects the right concept or method for the situation, uses it accurately, and adapts it where the new situation differs from the practiced one.',
    lowLevel:
      'States the rule or formula but doesn’t use it, or applies a memorized procedure that doesn’t fit the actual question.',
    starters: [
      'This situation calls for … because …',
      'Applying [concept] here means …',
      'Using this method, the result is …',
    ],
  },
  {
    id: 'calculate',
    term: 'Calculate',
    subjectGroups: ['math', 'sciences'],
    definition:
      'Obtain a numerical answer showing the relevant stages in the working.',
    plainLanguage:
      'Work out the number - and show your steps, because the steps are worth marks.',
    highLevel:
      'Shows each stage of working clearly, uses correct units, and states the final answer to an appropriate degree of accuracy.',
    lowLevel:
      'Writes only a final answer (right or wrong) with no working, or loses track of units and rounding.',
    starters: [
      'First, rearrange to …',
      'Substituting the known values: …',
      'Therefore the answer is … (to … s.f.)',
    ],
  },
  {
    id: 'compare',
    term: 'Compare',
    subjectGroups: ['all'],
    definition:
      'Give an account of the similarities between two (or more) items or situations, referring to both (all) of them throughout.',
    plainLanguage:
      'Talk about how they are alike - and keep both things in view the whole time, not one then the other.',
    highLevel:
      'Every point mentions both items and names a genuine similarity, moving beyond surface features to ideas, methods or effects.',
    lowLevel:
      'Describes item A fully, then item B fully, leaving the reader to spot the similarities. Or lists only superficial likenesses.',
    starters: [
      'Both X and Y …',
      'Similarly, …',
      'A shared feature of the two is …',
    ],
  },
  {
    id: 'compare-contrast',
    term: 'Compare and contrast',
    subjectGroups: ['all'],
    definition:
      'Give an account of similarities and differences between two (or more) items or situations, referring to both (all) of them throughout.',
    plainLanguage:
      'Cover both how they are alike AND how they differ - weaving the two things together in each point.',
    highLevel:
      'Balances similarities and differences, keeps both items present in every paragraph, and comments on which differences matter most.',
    lowLevel:
      'Only similarities or only differences, or two separate descriptions with no direct comparison.',
    starters: [
      'While both …, they differ in …',
      'In contrast to X, Y …',
      'The most significant difference is …, whereas they align on …',
    ],
  },
  {
    id: 'construct',
    term: 'Construct',
    subjectGroups: ['math', 'sciences', 'design', 'indsoc'],
    definition:
      'Display information in a diagrammatic or logical form.',
    plainLanguage:
      'Build the thing - a graph, diagram, table or argument - accurately and with all its required parts.',
    highLevel:
      'Follows conventions exactly: labelled axes, correct scales, units, titles, keys. Every element is precise and complete.',
    lowLevel:
      'Sketchy or incomplete - missing labels, wrong scale, no units - so the reader can’t fully interpret it.',
    starters: [
      'Axes: … (x) against … (y), in … [units]',
      'The key components are …',
    ],
  },
  {
    id: 'create',
    term: 'Create',
    subjectGroups: ['arts', 'design', 'langlit', 'langacq'],
    definition:
      'Evolve from one’s own thought or imagination, as a work or an invention.',
    plainLanguage:
      'Make something original of your own - not a copy or a template fill-in.',
    highLevel:
      'The work shows deliberate, personal choices that serve a clear intention, and those choices can be justified.',
    lowLevel:
      'Closely imitates an example or fills a template with minimal personal decision-making.',
    starters: [
      'My intention is to …',
      'I chose … to communicate …',
    ],
  },
  {
    id: 'define',
    term: 'Define',
    subjectGroups: ['all'],
    definition: 'Give the precise meaning of a word, phrase, concept or physical quantity.',
    plainLanguage:
      'Give the exact meaning - short, precise, and using the correct technical wording.',
    highLevel:
      'Precise, complete and uses correct terminology; includes conditions or units where relevant.',
    lowLevel:
      'Vague everyday paraphrase (“it’s like when…”) or an example instead of a definition.',
    starters: ['X is defined as …', 'Precisely, X means …'],
  },
  {
    id: 'demonstrate',
    term: 'Demonstrate',
    subjectGroups: ['all'],
    definition:
      'Prove or make clear by reasoning or evidence, illustrating with examples or practical application.',
    plainLanguage:
      'Show it, don’t just say it - back the claim with reasoning, evidence or a worked example.',
    highLevel:
      'Every claim is supported by a concrete example, piece of evidence or logical step that makes the point undeniable.',
    lowLevel:
      'Asserts that something is true without showing why, or gives examples that don’t actually match the claim.',
    starters: [
      'This can be seen when …',
      'For example, …, which shows that …',
    ],
  },
  {
    id: 'describe',
    term: 'Describe',
    subjectGroups: ['all'],
    definition: 'Give a detailed account or picture of a situation, event, pattern or process.',
    plainLanguage:
      'Paint the full picture in words - detail matters, but you don’t need to explain why (that’s “explain”).',
    highLevel:
      'Detailed, accurate and well-organized; covers all the significant features, patterns or stages in a logical order.',
    lowLevel:
      'One or two general statements that could apply to almost anything; misses key features.',
    starters: [
      'The main features are …',
      'The process begins with …, then …',
      'Overall, the pattern shows …',
    ],
  },
  {
    id: 'discuss',
    term: 'Discuss',
    subjectGroups: ['all'],
    definition:
      'Offer a considered and balanced review that includes a range of arguments, factors or hypotheses. Opinions or conclusions should be presented clearly and supported by appropriate evidence.',
    plainLanguage:
      'Look at it from more than one side, weigh the arguments, then land on a supported conclusion - balance is the whole point.',
    highLevel:
      'Presents multiple perspectives fairly, supports each with evidence, weighs them against each other and reaches a clear, justified conclusion.',
    lowLevel:
      'Argues only one side, or lists points for and against without ever weighing them or concluding.',
    starters: [
      'On one hand, … However, …',
      'Supporters argue …, whereas critics point out …',
      'On balance, the stronger argument is … because …',
    ],
  },
  {
    id: 'distinguish',
    term: 'Distinguish',
    subjectGroups: ['all'],
    definition: 'Make clear the differences between two or more concepts or items.',
    plainLanguage:
      'Show exactly what separates them - the key differences, stated sharply.',
    highLevel:
      'Pinpoints the defining differences (not just any differences) and states them precisely, often side by side.',
    lowLevel:
      'Describes both items without saying what actually separates them, or names trivial differences.',
    starters: [
      'The key difference is that X …, while Y …',
      'Unlike X, Y …',
    ],
  },
  {
    id: 'evaluate',
    term: 'Evaluate',
    subjectGroups: ['all'],
    definition:
      'Make an appraisal by weighing up the strengths and limitations.',
    plainLanguage:
      'Judge it. Weigh what works against what doesn’t, then give a verdict you can defend - a one-sided review is not an evaluation.',
    highLevel:
      'Weighs specific strengths against specific limitations with evidence, considers significance (“how much does this weakness matter?”), and delivers a clear justified judgement.',
    lowLevel:
      'Describes the thing, lists only good points (or only bad), or gives a verdict (“it was effective”) with no reasoning behind it.',
    starters: [
      'A key strength is …, supported by …',
      'However, this is limited by …',
      'Weighing these, … because …',
    ],
  },
  {
    id: 'explain',
    term: 'Explain',
    subjectGroups: ['all'],
    definition:
      'Give a detailed account including reasons or causes.',
    plainLanguage:
      'Answer the “why” and “how”, not just the “what”. Every statement should come with a reason attached.',
    highLevel:
      'Builds a chain of reasoning - because A, then B, which leads to C - with accurate detail at each link.',
    lowLevel:
      'Describes what happens but never why; reasons are missing, circular or just restate the question.',
    starters: [
      'This happens because …',
      'As a result, …',
      'The underlying cause is …, which leads to …',
    ],
  },
  {
    id: 'identify',
    term: 'Identify',
    subjectGroups: ['all'],
    definition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    plainLanguage:
      'Name it - short and correct. No explanation needed.',
    highLevel: 'Names exactly the right feature(s), precisely and concisely.',
    lowLevel:
      'Vague or generic answer, or writes a paragraph when one line was asked for (wasting exam time).',
    starters: ['The … is …', 'This shows …'],
  },
  {
    id: 'interpret',
    term: 'Interpret',
    subjectGroups: ['all'],
    definition:
      'Use knowledge and understanding to recognize trends and draw conclusions from given information.',
    plainLanguage:
      'Read the data or text and say what it means - the trend, the message, the conclusion it points to.',
    highLevel:
      'Goes beyond restating the information: names trends, anomalies and implications, and connects them to relevant knowledge.',
    lowLevel:
      'Reads numbers or quotes off the source without saying what they mean (“the graph goes up”).',
    starters: [
      'The data suggests …',
      'This trend indicates …',
      'Taken together, this means …',
    ],
  },
  {
    id: 'investigate',
    term: 'Investigate',
    subjectGroups: ['sciences', 'math', 'indsoc', 'design', 'phe'],
    definition:
      'Observe, study, or make a detailed and systematic examination, in order to establish facts and reach new conclusions.',
    plainLanguage:
      'Dig into it systematically - plan what to look at, gather information, and reach a conclusion the evidence supports.',
    highLevel:
      'Follows a clear, systematic method; records findings carefully; conclusions follow directly from the evidence gathered.',
    lowLevel:
      'Unplanned, patchy exploration; jumps to conclusions the evidence doesn’t support.',
    starters: [
      'To examine this, I will …',
      'The evidence gathered shows …',
      'From this, it can be concluded that …',
    ],
  },
  {
    id: 'justify',
    term: 'Justify',
    subjectGroups: ['all'],
    definition: 'Give valid reasons or evidence to support an answer or conclusion.',
    plainLanguage:
      'Defend your choice or claim with solid reasons - imagine someone asking “why?” after everything you write.',
    highLevel:
      'Every claim is backed by specific, valid evidence or logic; anticipates and answers the obvious counter-argument.',
    lowLevel:
      'States the conclusion again in different words, or gives reasons that are opinions rather than evidence.',
    starters: [
      'This is the best option because …',
      'The evidence supporting this is …',
      'Although … could be argued, … outweighs it because …',
    ],
  },
  {
    id: 'outline',
    term: 'Outline',
    subjectGroups: ['all'],
    definition: 'Give a brief account or summary.',
    plainLanguage:
      'Hit the main points quickly - short and structured, no deep detail.',
    highLevel:
      'Covers all the essential points in a few clear, ordered sentences - nothing important missing, nothing padded.',
    lowLevel:
      'Either a single vague sentence that misses key points, or a full essay when brevity was asked for.',
    starters: [
      'In brief, …',
      'The main stages are: first …, then …, finally …',
    ],
  },
  {
    id: 'predict',
    term: 'Predict',
    subjectGroups: ['sciences', 'math', 'indsoc'],
    definition: 'Give an expected result of an upcoming action or event.',
    plainLanguage:
      'Say what you expect to happen - and tie your prediction to a reason or pattern.',
    highLevel:
      'Prediction is specific (direction and rough size of change) and grounded in a scientific principle, pattern or trend.',
    lowLevel:
      'A guess with no reasoning, or so vague it can’t be wrong (“something will change”).',
    starters: [
      'I expect … because …',
      'Based on the trend, … will …',
    ],
  },
  {
    id: 'reflect',
    term: 'Reflect',
    subjectGroups: ['all'],
    definition:
      'Think about deeply; consider.',
    plainLanguage:
      'Look back honestly at what happened, what it means for you, and what you’d do differently - not just “it went well”.',
    highLevel:
      'Names specific successes and failures, explains why they happened, and draws concrete lessons for next time - including growth as a learner.',
    lowLevel:
      'Generic feelings (“I enjoyed it”, “it was hard”) with no analysis of why or what to change.',
    starters: [
      'What worked was … because …',
      'If I did this again, I would …',
      'This changed my understanding of …',
    ],
  },
  {
    id: 'state',
    term: 'State',
    subjectGroups: ['all'],
    definition:
      'Give a specific name, value or other brief answer without explanation or calculation.',
    plainLanguage:
      'Just say the answer. One line. Done.',
    highLevel: 'Exact, correct and concise - with units where relevant.',
    lowLevel: 'Rambling answer, missing units, or explanation where none was asked.',
    starters: ['The answer is …'],
  },
  {
    id: 'suggest',
    term: 'Suggest',
    subjectGroups: ['all'],
    definition: 'Propose a solution, hypothesis or other possible answer.',
    plainLanguage:
      'Offer a sensible possibility - there may be no single right answer, but yours must be plausible and reasoned.',
    highLevel:
      'Proposal is realistic, specific and clearly linked to the situation; briefly explains why it would work.',
    lowLevel:
      'Proposal is generic, impractical, or disconnected from the actual scenario given.',
    starters: [
      'One possible approach is …',
      'This could be addressed by …, since …',
    ],
  },
  {
    id: 'summarize',
    term: 'Summarize',
    subjectGroups: ['all'],
    definition: 'Abstract a general theme or major point(s).',
    plainLanguage:
      'Boil it down to the big idea and main points - in your own words, much shorter than the original.',
    highLevel:
      'Captures the central idea and key supporting points accurately, in own words, with all minor detail stripped away.',
    lowLevel:
      'Copies chunks of the original, includes trivia, or misses the main point entirely.',
    starters: [
      'The central idea is …',
      'In essence, …',
    ],
  },
  {
    id: 'to-what-extent',
    term: 'To what extent',
    subjectGroups: ['langlit', 'indsoc', 'sciences', 'arts'],
    definition:
      'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    plainLanguage:
      'How true is the statement - fully, partly, barely? Your whole answer should build toward a “this much, because…” verdict.',
    highLevel:
      'Takes a clear position on degree (“largely true, but…”), supports it with evidence on both sides, and keeps returning to the question.',
    lowLevel:
      'Agrees or disagrees completely without weighing the other side, or never actually answers “how far?”.',
    starters: [
      'To a large extent, … However, …',
      'This holds true when …, but breaks down when …',
      'Ultimately, the statement is convincing only insofar as …',
    ],
  },
  {
    id: 'use',
    term: 'Use',
    subjectGroups: ['math', 'sciences', 'design', 'langacq'],
    definition: 'Apply knowledge or rules to put theory into practice.',
    plainLanguage:
      'Actually put the given tool, rule or information to work in your answer - examiners check that you used what they gave you.',
    highLevel:
      'Explicitly incorporates the given material or method, correctly and visibly, in reaching the answer.',
    lowLevel:
      'Ignores the given material and answers from memory, or mentions it without actually using it.',
    starters: [
      'Using the given …, …',
      'Applying this rule: …',
    ],
  },
]
