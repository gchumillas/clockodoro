/**
 * Colors
 */

// Color palette inspired in TailwindCSS colors:
// https://tailwindcss.com/docs/customizing-colors
export const PALETTE = {
  black: '#000000',
  white: '#ffffff',
  slate300: '#cbd5e1',
  red300: '#fca5a5',
  red500: '#ef4444',
  green300: '#86efac',
  sky300: '#7dd3fc'
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
export const APP_FONTS = [
  'shareTechMono400Regular',
  'frederickaTheGreat400Regular',
  'specialElite400Regular',
  'nanumBrushScript400Regular'
]

export const APP_COLORS = [
  PALETTE.slate300,
  PALETTE.sky300,
  PALETTE.green300,
  PALETTE.red300
]

// System font
export const FONT_SIZE = 18
export const FONT_COLOR = PALETTE.slate300

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
  timeColor: PALETTE.slate300,
  showSeconds: false,
  showDate: true,
  showBattery: true
}