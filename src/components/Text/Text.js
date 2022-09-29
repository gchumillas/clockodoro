import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'
import { font } from '~/src/constants'
import { normalize } from '~/src/libs/normalize'

/**
 * @param {object} params
 * @param {React.ReactNode} params.children
 * @param {number} [params.fontSize]
 * @param {{ [key: string]: any }} [params.style]
 * @returns
 */
const Text = ({ fontSize = font.size, style = {}, children }) => {
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
    fontFamily: font.family,
    color: font.color
  }
})

export default Text