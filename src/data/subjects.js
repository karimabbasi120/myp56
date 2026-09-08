// The MYP subject groups the app actually assesses. Arts, PHE and Design are
// deliberately excluded - they aren't examined in a way this app can practise.

export const SUBJECT_MODEL = [
  {
    group: 'langlit',
    groupName: 'Language & Literature',
    blurb: 'Your primary language of study.',
    subjects: [{ id: 'english', name: 'English' }],
  },
  {
    group: 'langacq',
    groupName: 'Language Acquisition',
    blurb: 'Your additional modern language. Choose one.',
    // Students study a single acquisition language, so picking one clears
    // the other rather than adding to it.
    exclusive: true,
    subjects: [
      { id: 'french', name: 'French' },
      { id: 'spanish', name: 'Spanish' },
    ],
  },
  {
    group: 'indsoc',
    groupName: 'Individuals & Societies',
    blurb: 'Humanities subjects.',
    subjects: [
      { id: 'history', name: 'History' },
      { id: 'geography', name: 'Geography' },
    ],
  },
  {
    group: 'sciences',
    groupName: 'Sciences',
    blurb: 'Choose any you study.',
    subjects: [
      { id: 'biology', name: 'Biology' },
      { id: 'chemistry', name: 'Chemistry' },
      { id: 'physics', name: 'Physics' },
    ],
  },
  {
    group: 'math',
    groupName: 'Mathematics',
    blurb: 'Pick your level - Extended covers the Standard content plus more.',
    // Mathematics is levelled rather than split into separate subjects.
    levelled: true,
    subjects: [{ id: 'mathematics', name: 'Mathematics' }],
    levels: [
      { id: 'standard', name: 'Standard' },
      { id: 'extended', name: 'Extended' },
    ],
  },
]

export const ALL_SUBJECT_IDS = SUBJECT_MODEL.flatMap((g) =>
  g.subjects.map((s) => s.id),
)

export const subjectDisplayName = (id) => {
  for (const g of SUBJECT_MODEL) {
    const s = g.subjects.find((x) => x.id === id)
    if (s) return s.name
  }
  return id
}

export const groupOf = (id) =>
  SUBJECT_MODEL.find((g) => g.subjects.some((s) => s.id === id))?.group ?? null

export const groupNameOf = (id) =>
  SUBJECT_MODEL.find((g) => g.subjects.some((s) => s.id === id))?.groupName ?? ''

// A question is available to the student if it carries no level restriction, or
// if its levels include the level the student is studying. Standard students
// never see Extended-only content; Extended students see everything.
export function questionMatchesLevel(question, mathsLevel) {
  if (question.subject !== 'mathematics') return true
  if (!question.levels) return true
  return question.levels.includes(mathsLevel ?? 'standard')
}
