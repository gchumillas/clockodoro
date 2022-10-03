import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { COLORS, GAP } from '~/src/constants'
import RadioOffIcon from '~/assets/icons/radio-off-icon.svg'
import RadioOnIcon from '~/assets/icons/radio-on-icon.svg'
import Text from '~/src/components/display/Text'
import { context } from './context'

/**
 * @param {object} params
 * @param {string} params.label
 * @param {string} params.value
 */
const RadioButton = ({ label, value }) => {
  const { value: contextValue, onChange } = React.useContext(context)

  return (
    <Pressable
      onPress={() => onChange(value)}
      style={styles.root}
    >
      {value == contextValue
        ? <RadioOnIcon width={28} height={32} fill={COLORS.base} />
        : <RadioOffIcon width={28} height={32} fill={COLORS.base} />}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: GAP,
    marginBottom: GAP
  },
  label: {
    marginLeft: 1.5 * GAP
  }
})

export default RadioButton