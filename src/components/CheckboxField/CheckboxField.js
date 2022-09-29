import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { COLORS, GAP } from '~/src/constants'
import CheckOff from '~/assets/images/check-off.svg'
import CheckOn from '~/assets/images/check-on.svg'
import Text from '~/src/components/Text'

/**
 * @param {object} params
 * @param {string} params.label
 * @param {boolean} params.value
 * @param {(value: boolean) => void} params.onChange
 */
const CheckboxField = ({ label, value, onChange }) => {
  return (
    <Pressable
      onPress={() => onChange(value = !value)}
      style={styles.root}
    >
      {value
        ? <CheckOn width={28} height={32} fill={COLORS.base} />
        : <CheckOff width={28} height={32} fill={COLORS.base} />}
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

export default CheckboxField