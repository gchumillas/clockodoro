/**
 * Colors
 */

// Color palette inspired in TailwindCSS colors:
// https://tailwindcss.com/docs/customizing-colors
export const PALETTE = {
  black: '#000000',
  white: '#ffffff',
  slate300: '#cbd5e1',
  red500: '#ef4444'
}

// Semantic colors
export const COLORS = {
  base: PALETTE.slate300,
  alert: PALETTE.red500
}

/**
 * Fonts
 */

// Available fonts
export const FONTS = [
  'shareTechMono400Regular',
  'audiowide400Regular',
  'frederickaTheGreat400Regular',
  'rye400Regular'
]

// System font
export const FONT = {
  family: 'shareTechMono400Regular',
  size: 18,
  color: PALETTE.slate300
}

/**
 * Metrics (spaces, borders, etc).
 */
export const GAP = 8
export const BORDER_RADIUS = 10

/**
 * Languages
 */
export const SUPPORTED_LANGUAGES = ['en', 'es']
export const FALLBACK_LANGUAGE = 'en'

/**
 * Date and times
 */
export const AM_PM = 'am_pm'
export const H24 = '24h'

/**
 * Config
 */
export const DEFAULT_CONFIG = {
  timeFont: 'shareTechMono400Regular',
  timeFormat: H24,
  showSeconds: false,
  showDate: true,
  showBattery: true
}