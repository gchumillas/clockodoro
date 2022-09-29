import * as ss from 'expo-secure-store'

// TODO: move to constants.js
const defaultConfig = {
  timeFormat: '24h',
  showSeconds: false,
  showDate: true,
  showBattery: true
}

export const getConfig = async () => {
  const value = await ss.getItemAsync('config')
  let config = JSON.parse(value)
  if (config === null || typeof config != 'object') {
    config = {}
  }

  if (
    typeof config.timeFormat != 'string' ||
    !['24h', 'am_pm'].includes(config.timeFormat)
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