export const SUBJECT_GROUPS = [
  { id: 'langlit', name: 'Language & Literature' },
  { id: 'langacq', name: 'Language Acquisition' },
  { id: 'indsoc', name: 'Individuals & Societies' },
  { id: 'sciences', name: 'Sciences' },
  { id: 'math', name: 'Mathematics' },
  { id: 'arts', name: 'Arts' },
  { id: 'phe', name: 'Physical & Health Education' },
  { id: 'design', name: 'Design' },
]

export const groupName = (id) =>
  SUBJECT_GROUPS.find((g) => g.id === id)?.name ?? id
