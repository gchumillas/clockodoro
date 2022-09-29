import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { COLORS, GAP } from '~/src/constants'
import RadioOff from '~/assets/images/radio-off.svg'
import RadioOn from '~/assets/images/radio-on.svg'
import Text from '~/src/components/Text'
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
        ? <RadioOn width={28} height={32} fill={COLORS.base} />
        : <RadioOff width={28} height={32} fill={COLORS.base} />}
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