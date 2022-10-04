import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { GAP, PALETTE } from '~/src/constants'
import Text from '~/src/components/displays/Text'

/**
 * @param {object} params
 * @param {string} params.label
 * @param {() => void} params.onPress
 */
const MenuItem = ({ label, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({ opacity: pressed ? 0.3 : 1 })}
    >
      <Text style={styles.text}>
        {label}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    color: PALETTE.black,
    paddingVertical: 2.5 * GAP,
    paddingHorizontal: 6 * GAP
  }
})

export default MenuItem