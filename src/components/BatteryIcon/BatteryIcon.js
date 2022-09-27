import React from 'react'
import { View } from 'react-native'
import { colors } from '~/src/constants'
import Battery0 from '~/assets/images/battery-0.svg'
import Battery25 from '~/assets/images/battery-25.svg'
import Battery50 from '~/assets/images/battery-50.svg'
import Battery75 from '~/assets/images/battery-75.svg'
import Battery100 from '~/assets/images/battery-100.svg'

const BatteryIcon = ({ value }) => {
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

  const color = value < 20 ? colors.alert : colors.base

  return (
    <View>
      {level == 'empty' && (
        <Battery0 width={36} height={32} fill={color} />
      )}
      {level == 'low' && (
        <Battery25 width={36} height={32} fill={color} />
      )}
      {level == 'medium' && (
        <Battery50 width={36} height={32} fill={color} />
      )}
      {level == 'high' && (
        <Battery75 width={36} height={32} fill={color} />
      )}
      {level == 'full' && (
        <Battery100 width={36} height={32} fill={color} />
      )}
    </View>
  )
}

export default BatteryIcon