import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Text from '~/src/components/Text'
import { colors, gap } from '~/src/constants'

/**
 * @param {object} params
 * @param {string} params.label
 * @param {() => void} params.onPress
 */
const Button = ({ label, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({ ...styles.root, opacity: pressed ? 0.7 : 1 })}
    >
      <Text>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingVertical: 2 * gap,
    paddingHorizontal: 4 * gap,
    borderWidth: 1.5,
    borderColor: colors.base,
    borderRadius: 12
  }
})

export default Button