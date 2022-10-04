import React from 'react'
import { View } from 'react-native'
import { COLORS } from '~/src/constants'
import Battery0Icon from '~/assets/icons/battery-0-icon.svg'
import Battery25Icon from '~/assets/icons/battery-25-icon.svg'
import Battery50Icon from '~/assets/icons/battery-50-icon.svg'
import Battery75Icon from '~/assets/icons/battery-75-icon.svg'
import Battery100Icon from '~/assets/icons/battery-100-icon.svg'

/**
 * @param {object} params
 * @param {number} params.value A number between 0 and 100
 * @param {string} params.color
 */
const BatteryIcon = ({ value, color }) => {
  const level = React.useMemo(() => {
    if (value < 12.5) {
      return 'empty'
    } else if (value < 37.5) {
      return 'low'
    } else if (value < 62.5) {
      return 'medium'
    } else if (value < 87.5) {
      return 'high'
    }

    return 'full'
  }, [value])

  const buttonColor = value > 20 ? color : COLORS.alert

  return (
    <View>
      {level == 'empty' && (
        <Battery0Icon width={36} height={32} fill={buttonColor} />
      )}
      {level == 'low' && (
        <Battery25Icon width={36} height={32} fill={buttonColor} />
      )}
      {level == 'medium' && (
        <Battery50Icon width={36} height={32} fill={buttonColor} />
      )}
      {level == 'high' && (
        <Battery75Icon width={36} height={32} fill={buttonColor} />
      )}
      {level == 'full' && (
        <Battery100Icon width={36} height={32} fill={buttonColor} />
      )}
    </View>
  )
}

export default BatteryIcon