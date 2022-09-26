import React from 'react'
import { Text, StyleSheet } from 'react-native'
// TODO: use absolute paths
import { normalize } from '../../libs/normalize'

const AppText = ({ fontSize = 18, children }) => {
  return (
    <Text style={{ ...styles.root, fontSize: normalize(fontSize) }}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  root: {
    fontFamily: 'shareTechMono400Regular',
    // TODO: create a palette of colors
    color: '#cbd5e1'
  }
})

export default AppText