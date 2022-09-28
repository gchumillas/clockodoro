/**
 * Color palette inspired in TailwindCSS colors:
 * https://tailwindcss.com/docs/customizing-colors
 */
export const palette = {
  black: '#000000',
  slate300: '#cbd5e1',
  red500: '#ef4444'
}

/**
 * Semantic colors
 */
export const colors = {
  base: palette.slate300,
  alert: palette.red500
}

/**
 * Font properties
 */
export const font = {
  family: 'shareTechMono400Regular',
  size: 18,
  color: palette.slate300
}

/**
 * Minium space between visual elements.
 */
export const gap = 8

/**
 * Languages
 */
export const supportedLanguages = ['en', 'es']
export const fallbackLanguage = 'en'