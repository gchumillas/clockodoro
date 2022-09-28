import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useKeepAwake } from 'expo-keep-awake'
import { StatusBar } from 'expo-status-bar'
import { palette } from '~/src/constants'
import { useBatteryLevel } from '~/src/libs/battery'
import dayjs from '~/src/libs/dayjs'
import Text from '~/src/components/Text'
import BatteryIcon from '~/src/components/BatteryIcon'

const HomePage = () => {
  useKeepAwake()
  const navigate = useNavigate()
  const level = useBatteryLevel()
  const [time, setTime] = React.useState('')
  const [date, setDate] = React.useState('')

  React.useEffect(() => {
    const updateTime = () => {
      const now = dayjs()
      setTime(now.format('HH:mm'))
      setDate(now.format('ll'))
    }
    const i = setInterval(() => updateTime(), 333)
    updateTime()
    return () => clearInterval(i)
  }, [])

  return (
    <Pressable
      style={({ pressed }) => ({ ...styles.root, opacity: pressed ? 0.7 : 1 })}
      onPress={() => navigate('/settings')}
    >
      <Text fontSize={60}>
        {time}
      </Text>
      <Text>
        {date}
      </Text>
      <BatteryIcon value={100 * level} />
      <StatusBar hidden />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: palette.black,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomePage