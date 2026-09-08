// Assembles a fresh mock paper each time from a pool of question blocks.
//
// A "block" is a self-contained unit: one real-world stimulus plus its parts,
// all belonging to a single criterion and worth a fixed number of marks. A
// paper is built by choosing a combination of blocks per criterion whose marks
// sum exactly to that criterion's target (25 for sciences), so every generated
// paper still matches the real MYP specification.
//
// Blocks the student has seen in their last few attempts are avoided where a
// valid combination exists without them, so back-to-back papers feel different.

import { MOCK_BLOCKS } from './mockBlocks'

// Marks required per criterion, by subject.
export const PAPER_TARGETS = {
  biology: { total: 100, minutes: 120, perCriterion: { A: 25, B: 25, C: 25, D: 25 } },
  chemistry: { total: 100, minutes: 120, perCriterion: { A: 25, B: 25, C: 25, D: 25 } },
  physics: { total: 100, minutes: 120, perCriterion: { A: 25, B: 25, C: 25, D: 25 } },
  mathematics: { total: 100, minutes: 120, perCriterion: { A: 34, B: 33, D: 33 } },
}

// Deterministic pseudo-random generator so a given seed reproduces a paper.
function makeRng(seed) {
  let s = seed >>> 0 || 1
  return function next() {
    s ^= s << 13
    s ^= s >>> 17
    s ^= s << 5
    s >>>= 0
    return s / 4294967296
  }
}

function shuffle(list, rng) {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Find a set of blocks whose marks sum exactly to `target`.
// Uses backtracking over a shuffled pool so different seeds give different
// valid combinations rather than always the first one found.
function findCombination(pool, target, rng, maxBlocks = 4) {
  const shuffled = shuffle(pool, rng)
  let result = null

  function search(startIndex, remaining, chosen) {
    if (result) return
    if (remaining === 0) {
      result = [...chosen]
      return
    }
    if (chosen.length >= maxBlocks) return
    for (let i = startIndex; i < shuffled.length; i++) {
      const block = shuffled[i]
      if (block.marks > remaining) continue
      chosen.push(block)
      search(i + 1, remaining - block.marks, chosen)
      chosen.pop()
      if (result) return
    }
  }

  search(0, target, [])
  return result
}

// Blocks available for a subject/criterion, respecting the maths level.
function poolFor(subject, criterion, mathsLevel) {
  return MOCK_BLOCKS.filter((b) => {
    if (b.subject !== subject) return false
    if (b.criterion !== criterion) return false
    if (b.levels && !b.levels.includes(mathsLevel ?? 'standard')) return false
    return true
  })
}

/**
 * Build a paper for a subject.
 * @param subject      subject id
 * @param mathsLevel   'standard' | 'extended' (ignored for non-maths)
 * @param recentIds    block ids seen in recent attempts, avoided if possible
 * @param seed         optional seed; omit for a genuinely new paper each call
 */
export function generatePaper({
  subject,
  mathsLevel = 'standard',
  recentIds = [],
  seed = null,
} = {}) {
  const spec = PAPER_TARGETS[subject]
  if (!spec) return null

  const rng = makeRng(seed ?? Math.floor(Math.random() * 2 ** 31))
  const recent = new Set(recentIds)
  const chosen = []

  for (const [criterion, target] of Object.entries(spec.perCriterion)) {
    const all = poolFor(subject, criterion, mathsLevel)
    if (!all.length) return null

    // Prefer blocks the student has not seen recently. Only fall back to the
    // full pool if the fresh blocks alone cannot hit the exact mark target.
    const fresh = all.filter((b) => !recent.has(b.id))
    const combo =
      findCombination(fresh, target, rng) ?? findCombination(all, target, rng)

    if (!combo) return null // pool cannot satisfy the spec
    chosen.push(...combo)
  }

  // Order questions by criterion so the paper reads A, B, C, D like a real one.
  const order = Object.keys(spec.perCriterion)
  chosen.sort((a, b) => order.indexOf(a.criterion) - order.indexOf(b.criterion))

  return {
    id: `${subject}-generated-${Date.now()}`,
    subject,
    level: subject === 'mathematics' ? mathsLevel : null,
    generated: true,
    blockIds: chosen.map((b) => b.id),
    timeMinutes: spec.minutes,
    questions: chosen.map((block, i) => ({
      id: `q${i + 1}`,
      stimulus: block.stimulus,
      // Part ids must be unique across the whole paper because they key the
      // student's answers. Blocks store them as 'a', 'b', so prefix the
      // question number to give real paper labels like 1a, 2b.
      parts: block.parts.map((p) => ({
        ...p,
        id: `${i + 1}${p.id}`,
        criterion: block.criterion,
      })),
    })),
  }
}

// How many distinct papers the pool can currently produce, used in development
// to confirm there is genuine variety rather than one repeated combination.
export function countCombinations(subject, mathsLevel = 'standard') {
  const spec = PAPER_TARGETS[subject]
  if (!spec) return 0
  let product = 1
  for (const [criterion, target] of Object.entries(spec.perCriterion)) {
    const pool = poolFor(subject, criterion, mathsLevel)
    let count = 0
    const search = (start, remaining, depth) => {
      if (remaining === 0) { count++; return }
      if (depth >= 4) return
      for (let i = start; i < pool.length; i++) {
        if (pool[i].marks > remaining) continue
        search(i + 1, remaining - pool[i].marks, depth + 1)
      }
    }
    search(0, target, 0)
    product *= count
  }
  return product
}
