import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { colors } from '~/src/constants'
import CheckOff from '~/assets/images/check-off.svg'
import CheckOn from '~/assets/images/check-on.svg'
import Text from '~/src/components/Text'

// TODO: (all) add inline doc to all components
/**
 * @param {object} params
 * @param {string} params.label
 * @param {boolean} params.value
 * @param {(value: boolean) => void} params.onChange
 * @param {{ [key: string]: any }} [params.style]
 */
const CheckboxField = ({ label, value, onChange, style = {} }) => {
  return (
    <Pressable
      onPress={() => onChange(value = !value)}
      style={{ ...styles.root, ...style }}
    >
      {value
        ? <CheckOn width={28} height={32} fill={colors.base} />
        : <CheckOff width={28} height={32} fill={colors.base} />}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // TODO: (all) add spacing to constants.js
    padding: 8
  },
  label: {
    marginLeft: 10
  }
})

export default CheckboxField