import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'
import { textColors, fontFamily } from '~/src/constants'
import { normalize } from '~/src/libs/normalize'

const Text = ({ fontSize = 18, children }) => {
  return (
    <RNText style={{ ...styles.root, fontSize: normalize(fontSize) }}>
      {children}
    </RNText>
  )
}

const styles = StyleSheet.create({
  root: {
    fontFamily,
    color: textColors.base
  }
})

export default Text