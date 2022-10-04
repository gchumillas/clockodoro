import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import dayjs from '~/src/libs/dayjs'
import { BORDER_RADIUS, GAP } from '~/src/constants'
import TimeDisplay from '~/src/components/outputs/TimeDisplay'
import { context } from './context'

/**
 * @param {object} params
 * @param {string} params.value
 * @param {string} params.color
 * @param {'am_pm' | '24h'} params.format
 * @param {number} params.showSeconds
 */
const TimeButton = ({ value, color, font, format, showSeconds }) => {
  const { value: contextValue, onChange } = React.useContext(context)
  const now = React.useMemo(() => dayjs(), [])

  return (
    <Pressable
      onPress={() => onChange(value)}
      style={({ pressed }) => ({
        ...styles.root,
        opacity: value == contextValue
          ? (pressed ? 0.9 : 1)
          : (pressed ? 0.4 : 0.3)
      })}
    >
      <TimeDisplay
        value={now}
        color={color}
        font={font}
        format={format}
        showSeconds={showSeconds}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    height: 120,
    padding: GAP,
    marginBottom: GAP,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: BORDER_RADIUS
  }
})

export default TimeButton