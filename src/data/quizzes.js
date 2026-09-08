// Subject-specific practice questions for the MYP.
// Each question: subject id, topic, prompt, options[], answer (index into
// options), and an explanation shown after answering. Options are shuffled at
// runtime, so the answer index here is just the position in this list.

import { SUBJECT_GROUPS } from './subjectGroups'
import { SCIENCE_QUESTIONS } from './questionsSciences'
import { OTHER_QUESTIONS } from './questionsOther'
import { LANGUAGE_QUESTIONS } from './questionsLanguages'
import { EXPANSION_QUESTIONS } from './questionsExpansion'
import { questionMatchesLevel } from './subjects'

// Specific subjects a student can pick, each mapped to a subject group.
export const QUIZ_SUBJECTS = [
  { id: 'biology', name: 'Biology', group: 'sciences' },
  { id: 'chemistry', name: 'Chemistry', group: 'sciences' },
  { id: 'physics', name: 'Physics', group: 'sciences' },
  { id: 'mathematics', name: 'Mathematics', group: 'math' },
  { id: 'history', name: 'History', group: 'indsoc' },
  { id: 'geography', name: 'Geography', group: 'indsoc' },
  { id: 'english', name: 'English (Lang & Lit)', group: 'langlit' },
  { id: 'french', name: 'French', group: 'langacq' },
  { id: 'spanish', name: 'Spanish', group: 'langacq' },
]

export const subjectName = (id) =>
  QUIZ_SUBJECTS.find((s) => s.id === id)?.name ?? id

export const subjectGroupName = (subjectId) => {
  const g = QUIZ_SUBJECTS.find((s) => s.id === subjectId)?.group
  return SUBJECT_GROUPS.find((sg) => sg.id === g)?.name ?? ''
}


// Every question is criterion-tagged and written to the MYP Year 4-5 standard.
// The earlier untagged sets were retired in favour of questionsExpansion.js
// because they were pitched at roughly grade 5-8: single-fact recall such as
// "what is the SI unit of force" and one-step arithmetic such as "what is 2 cubed".
export const QUESTIONS = [
  ...SCIENCE_QUESTIONS,
  ...OTHER_QUESTIONS,
  ...LANGUAGE_QUESTIONS,
  ...EXPANSION_QUESTIONS,
]

// Filter by subject, optionally by criterion, and always respect the student's
// Mathematics level so Standard students never see Extended-only content.
export function questionsFor({
  subjects = [],
  criterion = null,
  mathsLevel = 'standard',
} = {}) {
  return QUESTIONS.filter((q) => {
    if (!subjects.includes(q.subject)) return false
    if (criterion && q.criterion !== criterion) return false
    return questionMatchesLevel(q, mathsLevel)
  })
}

export function questionsForSubjects(subjectIds, mathsLevel = 'standard') {
  return questionsFor({ subjects: subjectIds, mathsLevel })
}

export function countBySubject(mathsLevel = 'standard') {
  const counts = {}
  for (const q of QUESTIONS) {
    if (!questionMatchesLevel(q, mathsLevel)) continue
    counts[q.subject] = (counts[q.subject] ?? 0) + 1
  }
  return counts
}

// How many questions exist for one subject + criterion pair.
export function countByCriterion(subjectId, mathsLevel = 'standard') {
  const counts = {}
  for (const q of QUESTIONS) {
    if (q.subject !== subjectId) continue
    if (!questionMatchesLevel(q, mathsLevel)) continue
    counts[q.criterion] = (counts[q.criterion] ?? 0) + 1
  }
  return counts
}
