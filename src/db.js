import Dexie from 'dexie'

export const db = new Dexie('mypCompanion')

db.version(1).stores({
  soiDrafts: '++id, createdAt',
  ppEntries: '++id, criterion, date',
  ppMilestones: '++id, dueDate, done',
  atlEntries: '++id, category, date',
  settings: 'key',
})

// v2 adds quiz attempt history for the Practice Centre.
db.version(2).stores({
  soiDrafts: '++id, createdAt',
  ppEntries: '++id, criterion, date',
  ppMilestones: '++id, dueDate, done',
  atlEntries: '++id, category, date',
  quizAttempts: '++id, date',
  settings: 'key',
})

// v3 adds mock exam attempt history.
db.version(3).stores({
  soiDrafts: '++id, createdAt',
  ppEntries: '++id, criterion, date',
  ppMilestones: '++id, dueDate, done',
  atlEntries: '++id, category, date',
  quizAttempts: '++id, date',
  mockAttempts: '++id, subject, date',
  settings: 'key',
})

export async function getSetting(key, fallback = null) {
  const row = await db.settings.get(key)
  return row ? row.value : fallback
}

export async function setSetting(key, value) {
  await db.settings.put({ key, value })
}
