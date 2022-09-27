import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'
import { font } from '~/src/constants'
import { normalize } from '~/src/libs/normalize'

const Text = ({ fontSize = font.size, children }) => {
  return (
    <RNText
      numberOfLines={1}
      adjustsFontSizeToFit
      style={{ ...styles.root, fontSize: normalize(fontSize) }}
    >
      {children}
    </RNText>
  )
}

const styles = StyleSheet.create({
  root: {
    fontFamily: font.family,
    color: font.color
  }
})

export default Text