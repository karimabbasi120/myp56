// Mock exams need a large screen: real MYP eAssessments are on-screen papers
// with long typed responses. They run on iPad, Mac ("Designed for iPad" runs
// the same binary), Chromebooks and desktop browsers, but not on iPhone.
//
// Two separate questions matter here, and conflating them produces a bad
// message on Mac:
//   - is the DEVICE big enough at all?      (screen size, cannot be changed)
//   - is the WINDOW currently big enough?   (resizable on Mac and iPad split view)
// A Mac user with a narrow window should be told to widen it, not told to
// "open this on a Mac" when they are already on one.
//
// "Big enough" is not a single width/height threshold. A tablet is roughly
// square, so its SHORTEST side stays large in either orientation - that is
// what separates an iPad Mini (744pt shortest side) from a phone (under
// 450pt shortest side even in landscape). A laptop or Chromebook is the
// opposite shape: always landscape, often quite short (a common budget
// Chromebook panel is 1024x600), but with plenty of width for reading and
// typing and, crucially, a physical keyboard. Using only the shortest side
// would wrongly exclude that Chromebook. So a screen qualifies either way:
// squarish and big (tablet path), or simply wide (laptop path).
const TABLET_MIN = 744 // smallest iPad shortest-side, in points
const LAPTOP_WIDTH_MIN = 1024 // smallest common Chromebook/laptop width

function qualifies(width, height) {
  if (!width || !height) return false
  if (Math.min(width, height) >= TABLET_MIN) return true
  return width >= LAPTOP_WIDTH_MIN
}

// Is the physical display big enough to ever run a mock?
export function isLargeDevice() {
  if (typeof window === 'undefined') return false
  const s = window.screen
  if (!s?.width || !s?.height) return isLargeWindow()
  return qualifies(s.width, s.height)
}

// Is the window big enough right now?
export function isLargeWindow() {
  if (typeof window === 'undefined') return false
  return qualifies(window.innerWidth, window.innerHeight)
}

// Mocks are usable only when both are true.
export function isLargeScreen() {
  return isLargeDevice() && isLargeWindow()
}

// Why mocks are unavailable, so the UI can explain it accurately.
//   'ok'            usable
//   'window'        big enough device, window too small (resize it)
//   'device'        genuinely too small, e.g. iPhone
export function mockAvailability() {
  if (isLargeWindow()) return 'ok'
  return isLargeDevice() ? 'window' : 'device'
}

// Subscribe to size changes so the UI can react to rotation and resizing.
export function onScreenClassChange(callback) {
  if (typeof window === 'undefined') return () => {}
  const handler = () => callback(mockAvailability())
  window.addEventListener('resize', handler)
  window.addEventListener('orientationchange', handler)
  return () => {
    window.removeEventListener('resize', handler)
    window.removeEventListener('orientationchange', handler)
  }
}
