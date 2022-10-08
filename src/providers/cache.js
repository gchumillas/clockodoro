import * as ss from 'expo-secure-store'
import { fix, parse, pipes } from '@gchumillas/schema-fixer'
import {
  AM_PM, H24, DEFAULT_CONFIG, APP_FONTS, APP_COLORS
} from '~/src/constants'

const { select, boolean } = pipes
const configSchema = {
  timeFormat: select({ options: [H24, AM_PM] }),
  timeFont: select({ options: APP_FONTS }),
  timeColor: select({ options: APP_COLORS }),
  showSeconds: boolean({ require: true }),
  showDate: boolean({ require: true }),
  showBattery: boolean({ require: true })
}

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
  const [config, errors] = parse(JSON.parse(value), configSchema)
  if (errors.length) {
    return DEFAULT_CONFIG
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
  const fixedConfig = fix({ ...cfg, ...config }, configSchema)
  return ss.setItemAsync('config', JSON.stringify(fixedConfig))
}