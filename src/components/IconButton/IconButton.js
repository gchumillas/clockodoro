import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { GAP } from '~/src/constants'

const IconButton = ({ icon, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        opacity: pressed ? 0.7 : 1
      })}
      onPress={onPress}
    >
      {icon}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 1.5 * GAP
  }
})

export default IconButton