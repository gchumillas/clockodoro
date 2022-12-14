import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'
import { FONT_SIZE, FONT_COLOR } from '~/src/constants'
import { normalize } from '~/src/libs/normalize'

/**
 * @param {object} params
 * @param {React.ReactNode} params.children
 * @param {number} [params.fontSize]
 * @param {object} [params.style]
 * @returns
 */
const Text = ({ fontSize = FONT_SIZE, style = {}, children }) => {
  return (
    <RNText
      numberOfLines={1}
      adjustsFontSizeToFit
      style={{ ...styles.root, ...style, fontSize: normalize(fontSize) }}
    >
      {children}
    </RNText>
  )
}

const styles = StyleSheet.create({
  root: {
    color: FONT_COLOR
  }
})

export default Text