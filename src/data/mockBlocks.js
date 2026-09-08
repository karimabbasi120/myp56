// All question blocks available to the mock generator.
import { SCIENCE_BLOCKS } from './mockBlocksSciences'
import { BIO_CHEM_BLOCKS } from './mockBlocksBioChem'
import { MATHS_BLOCKS } from './mockBlocksMaths'

export const MOCK_BLOCKS = [
  ...SCIENCE_BLOCKS,
  ...BIO_CHEM_BLOCKS,
  ...MATHS_BLOCKS,
]

export const VAR_CATEGORIES = [
  { id: 'independent', name: 'Independent variable', short: 'Independent' },
  { id: 'dependent', name: 'Dependent variable', short: 'Dependent' },
  { id: 'control', name: 'Control variable', short: 'Control' },
]
