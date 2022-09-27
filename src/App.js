import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { useKeepAwake } from 'expo-keep-awake'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import {
  ShareTechMono_400Regular as shareTechMono400Regular
} from '@expo-google-fonts/share-tech-mono'
import { useBatteryLevel } from '~/src/libs/battery'
import dayjs from '~/src/libs/dayjs'
import Text from '~/src/components/Text'
import BatteryIcon from '~/src/components/BatteryIcon'

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
  const level = useBatteryLevel()
  const [fontsLoaded] = useFonts({ shareTechMono400Regular })
  const [time, setTime] = React.useState('')
  const [date, setDate] = React.useState('')

  React.useEffect(() => {
    const i = setInterval(() => {
      const now = dayjs()
      setTime(now.format('HH:mm'))
      setDate(now.format('ll'))
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
      <Text>
        {date}
      </Text>
      <BatteryIcon value={100 * level} />
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
