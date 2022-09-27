import React from 'react'
import * as Battery from 'expo-battery'

/**
 * Gets the battery level of the device as a number between 0 and 1, inclusive.
 * If the device does not support retrieving the battery level, this method
 * returns -1.
 */
export const useBatteryLevel = () => {
  const [level, setLevel] = React.useState(-1)

  React.useEffect(() => {
    const listener = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setLevel(batteryLevel)
    })

    Battery.getBatteryLevelAsync().then(setLevel)
    return () => listener.remove()
  }, [])

  return level
}