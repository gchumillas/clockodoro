import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'
import { FONT } from '~/src/constants'
import { normalize } from '~/src/libs/normalize'

/**
 * @param {object} params
 * @param {React.ReactNode} params.children
 * @param {number} [params.fontSize]
 * @param {{ [key: string]: any }} [params.style]
 * @returns
 */
const Text = ({ fontSize = FONT.size, style = {}, children }) => {
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
    fontFamily: FONT.family,
    color: FONT.color
  }
})

export default Text