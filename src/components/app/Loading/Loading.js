import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { PALETTE } from '~/src/constants'

const Loading = () => (
  <View style={styles.root}>
    <ActivityIndicator size="large" color="white" />
    <StatusBar style="light" />
  </View>
)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PALETTE.black
  }
})

export default Loading