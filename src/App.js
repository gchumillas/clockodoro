import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { useKeepAwake } from 'expo-keep-awake'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import {
  ShareTechMono_400Regular as shareTechMono400Regular
} from '@expo-google-fonts/share-tech-mono'
import Text from './components/Text'

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
  useKeepAwake()
  const [fontsLoaded] = useFonts({ shareTechMono400Regular })
  const [time, setTime] = React.useState('')

  React.useEffect(() => {
    const i = setInterval(() => {
      const now = new Date()
      const hh = `${now.getHours()}`.padStart(2, '0')
      const mm = `${now.getMinutes()}`.padStart(2, '0')
      setTime(`${hh}:${mm}`)
    }, 333)

    return () => clearInterval(i)
  }, [])

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View style={styles.root}>
      <Text fontSize={60}>
        {time}
      </Text>
      <StatusBar hidden />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
