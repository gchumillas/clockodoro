import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import {
  ShareTechMono_400Regular as shareTechMono400Regular
} from '@expo-google-fonts/share-tech-mono'

const Loading = _ => (
  <View
    style={{
      flex: 1,
      alignItems:
        'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    }}
  >
    <ActivityIndicator size="large" color="white" />
    <StatusBar style="light" />
  </View>
)

export default function App () {
  const [fontsLoaded] = useFonts({ shareTechMono400Regular })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} adjustsFontSizeToFit numberOfLines={1}>
        15:45:30
      </Text>
      <StatusBar hidden />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'shareTechMono400Regular',
    // TODO: create a palette of colors
    color: '#cbd5e1',
    // TODO: (all) allow 'responsive' font-sizes
    fontSize: 80
  }
})
