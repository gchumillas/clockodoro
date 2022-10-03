import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { GAP, PALETTE } from '~/src/constants'
import Text from '~/src/components/Text'

/**
 * @param {object} params
 * @param {string} params.label
 * @param {() => void} params.onPress
 * @returns
 */
const MenuItem = ({ label, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>
        {label}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    color: PALETTE.black,
    paddingVertical: 2 * GAP,
    paddingHorizontal: 5 * GAP
  }
})

export default MenuItem