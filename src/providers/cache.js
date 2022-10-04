import * as ss from 'expo-secure-store'
import { AM_PM, H24, DEFAULT_CONFIG, APP_FONTS } from '~/src/constants'

/**
 * @returns {Promise<{
 *  timeFormat: string,
 *  showSeconds: boolean,
 *  showDate: boolean,
 *  showBattery: boolean
 * }>}
 */
export const getConfig = async () => {
  const value = await ss.getItemAsync('config')
  let config = JSON.parse(value)
  if (config === null || typeof config != 'object') {
    config = {}
  }

  if (
    typeof config.timeColor != 'string' ||
    !config.timeColor.match(/^#[0-9A-F]{6}$/i)
  ) {
    config.timeColor = DEFAULT_CONFIG.timeColor
  }

  if (
    typeof config.timeFont != 'string' ||
    !APP_FONTS.includes(config.timeFont)
  ) {
    config.timeFont = DEFAULT_CONFIG.timeFont
  }

  if (
    typeof config.timeFormat != 'string' ||
    ![H24, AM_PM].includes(config.timeFormat)
  ) {
    config.timeFormat = DEFAULT_CONFIG.timeFormat
  }

  if (typeof config.showSeconds != 'boolean') {
    config.showSeconds = DEFAULT_CONFIG.showSeconds
  }

  if (typeof config.showDate != 'boolean') {
    config.showDate = DEFAULT_CONFIG.showDate
  }

  if (typeof config.showBattery != 'boolean') {
    config.showBattery = DEFAULT_CONFIG.showBattery
  }

  return config
}

/**
 * @param {object} config
 * @param {string} [config.timeColor]
 * @param {string} [config.timeFont]
 * @param {string} [config.timeFormat]
 * @param {boolean} [config.showSeconds]
 * @param {boolean} [config.showDate]
 * @param {boolean} [config.showBattery]
 */
export const saveConfig = async (config) => {
  const cfg = await getConfig()
  return ss.setItemAsync('config', JSON.stringify({ ...cfg, ...config }))
}