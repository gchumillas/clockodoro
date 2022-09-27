import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'
import { textColors } from '~/src/constants'
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
    fontFamily: 'shareTechMono400Regular',
    color: textColors.base
  }
})

export default Text