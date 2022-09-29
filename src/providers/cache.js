import * as ss from 'expo-secure-store'
import { AM_PM, H24, defaultConfig } from '~/src/constants'

/**
 * @returns {{
 *  timeFormat: string,
 *  showSeconds: boolean,
 *  showDate: boolean,
 *  showBattery: boolean
 * }}
 */
export const getConfig = async () => {
  const value = await ss.getItemAsync('config')
  let config = JSON.parse(value)
  if (config === null || typeof config != 'object') {
    config = {}
  }

  if (
    typeof config.timeFormat != 'string' ||
    ![H24, AM_PM].includes(config.timeFormat)
  ) {
    config.timeFormat = defaultConfig.timeFormat
  }

  if (typeof config.showSeconds != 'boolean') {
    config.showSeconds = defaultConfig.showSeconds
  }

  if (typeof config.showDate != 'boolean') {
    config.showDate = defaultConfig.showDate
  }

  if (typeof config.showBattery != 'boolean') {
    config.showBattery = defaultConfig.showBattery
  }

  return config
}

/**
 * @param {object} config
 * @param {string} config.timeFormat
 * @param {boolean} config.showSeconds
 * @param {boolean} config.showDate
 * @param {boolean} config.showBattery
 */
export const saveConfig = (config) => {
  return ss.setItemAsync('config', JSON.stringify(config))
}