// MYP key concepts, related concepts (sample sets per subject group),
// and the six global contexts with their exploration strands.

export const KEY_CONCEPTS = [
  { name: 'Aesthetics', hint: 'Beauty, taste and how we judge what is pleasing' },
  { name: 'Change', hint: 'Moving from one state or form to another' },
  { name: 'Communication', hint: 'Exchanging ideas, messages and information' },
  { name: 'Communities', hint: 'Groups connected by place, purpose or identity' },
  { name: 'Connections', hint: 'Links between people, ideas, places and things' },
  { name: 'Creativity', hint: 'Generating new ideas and original solutions' },
  { name: 'Culture', hint: 'Learned beliefs, values and ways of living' },
  { name: 'Development', hint: 'Growth, progress or evolution over time' },
  { name: 'Form', hint: 'The shape, structure and features of things' },
  { name: 'Global interactions', hint: 'How people and societies affect each other worldwide' },
  { name: 'Identity', hint: 'What makes a person, group or thing itself' },
  { name: 'Logic', hint: 'Reasoning and the principles of valid thinking' },
  { name: 'Perspective', hint: 'Points of view and how position shapes them' },
  { name: 'Relationships', hint: 'How things affect, depend on or connect to each other' },
  { name: 'Systems', hint: 'Sets of interacting parts that work as a whole' },
  { name: 'Time, place and space', hint: 'When and where - and how that shapes everything' },
]

export const RELATED_CONCEPTS = {
  langlit: ['Audience imperatives', 'Character', 'Context', 'Genre', 'Intertextuality', 'Point of view', 'Purpose', 'Self-expression', 'Setting', 'Structure', 'Style', 'Theme'],
  langacq: ['Accent', 'Audience', 'Context', 'Conventions', 'Empathy', 'Function', 'Idiom', 'Meaning', 'Message', 'Patterns', 'Purpose', 'Voice'],
  indsoc: ['Causality', 'Choice', 'Culture', 'Equity', 'Globalization', 'Governance', 'Identity', 'Innovation', 'Perspective', 'Power', 'Resources', 'Sustainability'],
  sciences: ['Balance', 'Consequences', 'Energy', 'Environment', 'Evidence', 'Form', 'Function', 'Interaction', 'Models', 'Movement', 'Patterns', 'Transformation'],
  math: ['Change', 'Equivalence', 'Generalization', 'Justification', 'Measurement', 'Models', 'Patterns', 'Quantity', 'Representation', 'Simplification', 'Space', 'Systems'],
  arts: ['Audience', 'Boundaries', 'Composition', 'Expression', 'Genre', 'Innovation', 'Interpretation', 'Narrative', 'Play', 'Presentation', 'Representation', 'Style'],
  phe: ['Adaptation', 'Balance', 'Choice', 'Energy', 'Environment', 'Function', 'Interaction', 'Movement', 'Perspectives', 'Refinement', 'Space', 'Systems'],
  design: ['Adaptation', 'Collaboration', 'Ergonomics', 'Evaluation', 'Form', 'Function', 'Innovation', 'Invention', 'Markets and trends', 'Perspective', 'Resources', 'Sustainability'],
}

export const GLOBAL_CONTEXTS = [
  {
    name: 'Identities and relationships',
    focus: 'Who am I? Who are we?',
    strands: 'Identity; beliefs and values; personal, physical, mental, social and spiritual health; human relationships including families, friends, communities and cultures.',
    example: 'A health unit exploring how peer pressure shapes personal choices.',
  },
  {
    name: 'Orientation in space and time',
    focus: 'What is the meaning of “where” and “when”?',
    strands: 'Personal histories; homes and journeys; turning points in humankind; discoveries; explorations and migrations; relationships between individuals and civilizations.',
    example: 'A history unit on how migration reshaped a city over a century.',
  },
  {
    name: 'Personal and cultural expression',
    focus: 'What is the nature and purpose of creative expression?',
    strands: 'The ways in which we discover and express ideas, feelings, nature, culture, beliefs and values; our appreciation of the aesthetic.',
    example: 'An arts unit on how street art communicates community identity.',
  },
  {
    name: 'Scientific and technical innovation',
    focus: 'How do we understand the world in which we live?',
    strands: 'The natural world and its laws; the interaction between people and the natural world; how humans use their understanding of scientific principles; the impact of scientific and technological advances on communities and environments.',
    example: 'A science unit on how renewable energy technology changes communities.',
  },
  {
    name: 'Globalization and sustainability',
    focus: 'How is everything connected?',
    strands: 'The interconnectedness of human-made systems and communities; the relationship between local and global processes; the tension between what we consume and what the planet can sustain.',
    example: 'A geography unit on how fast fashion links consumers to distant workers and ecosystems.',
  },
  {
    name: 'Fairness and development',
    focus: 'What are the consequences of our common humanity?',
    strands: 'Rights and responsibilities; the relationship between communities; sharing finite resources with other people and other living things; access to equal opportunities; peace and conflict resolution.',
    example: 'An I&S unit on who gets access to clean water and why.',
  },
]

export const SOI_EXAMPLES = [
  {
    keyConcept: 'Systems',
    relatedConcepts: ['Energy', 'Transformation'],
    globalContext: 'Scientific and technical innovation',
    soi: 'Understanding how energy transforms within systems allows people to design innovations that change how communities live.',
  },
  {
    keyConcept: 'Perspective',
    relatedConcepts: ['Point of view', 'Theme'],
    globalContext: 'Identities and relationships',
    soi: 'Writers use point of view to reveal how identity shapes, and is shaped by, our relationships with others.',
  },
  {
    keyConcept: 'Global interactions',
    relatedConcepts: ['Sustainability', 'Resources'],
    globalContext: 'Globalization and sustainability',
    soi: 'The way societies share and consume resources determines whether global interactions sustain or damage the planet.',
  },
]
