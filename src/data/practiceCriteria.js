// Which MYP criteria are meaningfully testable in short-answer practice, per
// subject. Criteria that are process- or performance-based (e.g. Maths C
// Communicating, Language Acquisition Speaking) can't be quizzed with recall
// questions - those live in the Mock section or not at all.

export const PRACTICE_CRITERIA = {
  biology: [
    { id: 'A', name: 'Knowing & understanding', blurb: 'Recall and apply scientific knowledge.' },
    { id: 'B', name: 'Inquiring & designing', blurb: 'Variables, hypotheses and method design.' },
    { id: 'C', name: 'Processing & evaluating', blurb: 'Data, graphs, conclusions and evaluation.' },
    { id: 'D', name: 'Reflecting on impacts', blurb: 'Science in society and the environment.' },
  ],
  chemistry: [
    { id: 'A', name: 'Knowing & understanding', blurb: 'Recall and apply scientific knowledge.' },
    { id: 'B', name: 'Inquiring & designing', blurb: 'Variables, hypotheses and method design.' },
    { id: 'C', name: 'Processing & evaluating', blurb: 'Data, graphs, conclusions and evaluation.' },
    { id: 'D', name: 'Reflecting on impacts', blurb: 'Science in society and the environment.' },
  ],
  physics: [
    { id: 'A', name: 'Knowing & understanding', blurb: 'Recall and apply scientific knowledge.' },
    { id: 'B', name: 'Inquiring & designing', blurb: 'Variables, hypotheses and method design.' },
    { id: 'C', name: 'Processing & evaluating', blurb: 'Data, graphs, conclusions and evaluation.' },
    { id: 'D', name: 'Reflecting on impacts', blurb: 'Science in society and the environment.' },
  ],
  mathematics: [
    { id: 'A', name: 'Knowing & understanding', blurb: 'Apply the right maths to solve problems.' },
    { id: 'B', name: 'Investigating patterns', blurb: 'Find rules, generalise and justify.' },
    // No criterion C - Communicating is about presentation of working, which
    // can't be assessed by short-answer questions.
    { id: 'D', name: 'Applying in real life', blurb: 'Model real situations and judge the answer.' },
  ],
  english: [
    { id: 'A', name: 'Analysing', blurb: 'Techniques, effect, purpose and audience.' },
    { id: 'B', name: 'Organizing', blurb: 'Structure, cohesion and conventions.' },
    // C (Producing text) is creative writing - mock/extended tasks only.
    { id: 'D', name: 'Using language', blurb: 'Register, syntax, accuracy and precision.' },
  ],
  history: [
    { id: 'A', name: 'Knowing & understanding', blurb: 'Terminology, events and causation.' },
    { id: 'D', name: 'Thinking critically', blurb: 'Sources, perspectives and interpretations.' },
  ],
  geography: [
    { id: 'A', name: 'Knowing & understanding', blurb: 'Terminology, processes and examples.' },
    { id: 'D', name: 'Thinking critically', blurb: 'Data, sources and evaluating arguments.' },
  ],
  // Language acquisition practice is vocabulary testing only - listening and
  // speaking can't be assessed here, so questions aren't split by criterion.
  french: [{ id: 'V', name: 'Vocabulary', blurb: 'Core words, phrases and meaning in context.' }],
  spanish: [{ id: 'V', name: 'Vocabulary', blurb: 'Core words, phrases and meaning in context.' }],
}

export const criteriaFor = (subjectId) => PRACTICE_CRITERIA[subjectId] ?? []

export const criterionName = (subjectId, criterionId) =>
  criteriaFor(subjectId).find((c) => c.id === criterionId)?.name ?? criterionId

// Subjects whose practice is vocabulary-only (no criterion tabs shown).
export const isVocabSubject = (subjectId) =>
  subjectId === 'french' || subjectId === 'spanish'
