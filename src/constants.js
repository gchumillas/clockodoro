/**
 * Color palette inspired in TailwindCSS colors:
 * https://tailwindcss.com/docs/customizing-colors
 */
export const PALETTE = {
  black: '#000000',
  slate300: '#cbd5e1',
  red500: '#ef4444'
}

/**
 * Semantic colors
 */
export const COLORS = {
  base: PALETTE.slate300,
  alert: PALETTE.red500
}

/**
 * Font properties
 */
export const FONT = {
  family: 'shareTechMono400Regular',
  size: 18,
  color: PALETTE.slate300
}

/**
 * Minium space between visual elements.
 */
export const GAP = 8

/**
 * Languages
 */
export const supportedLanguages = ['en', 'es']
export const fallbackLanguage = 'en'

/**
 * Date and times
 */
export const AM_PM = 'am_pm'
export const H24 = '24h'

/**
 * Config
 */
export const defaultConfig = {
  timeFormat: H24,
  showSeconds: false,
  showDate: true,
  showBattery: true
}