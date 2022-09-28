import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { useKeepAwake } from 'expo-keep-awake'
import { StatusBar } from 'expo-status-bar'
import { palette, supportedLanguages, fallbackLanguage } from '~/src/constants'
import {
  useTimeFormat, useShowSeconds, useShowDate, useShowBattery
} from '~/src/store/hooks'
import { useBatteryLevel } from '~/src/libs/battery'
import dayjs from '~/src/libs/dayjs'
import Text from '~/src/components/Text'
import BatteryIcon from '~/src/components/BatteryIcon'

const timeFormats = {
  '24h': 'HH:mm',
  'am_pm': 'h:mm a'
}

const HomePage = () => {
  useKeepAwake()
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const level = useBatteryLevel()
  const [time, setTime] = React.useState('')
  const [date, setDate] = React.useState('')
  const [timeFormat] = useTimeFormat()
  const [showSeconds] = useShowSeconds()
  const [showDate] = useShowDate()
  const [showBattery] = useShowBattery()

  React.useEffect(() => {
    const lang = i18n.resolvedLanguage
    if (supportedLanguages.includes(lang)) {
      dayjs.locale(lang)
    } else {
      dayjs.locale(fallbackLanguage)
    }
  }, [i18n.resolvedLanguage])

  React.useEffect(() => {
    const updateTime = () => {
      const now = dayjs()
      const format = timeFormats[timeFormat] + (showSeconds ? ':ss' : '')
      setTime(now.format(format))
      setDate(now.format('ll'))
    }
    const i = setInterval(() => updateTime(), 333)
    updateTime()
    return () => clearInterval(i)
  }, [timeFormat, showSeconds])

  return (
    <Pressable
      style={({ pressed }) => ({ ...styles.root, opacity: pressed ? 0.7 : 1 })}
      onPress={() => navigate('/settings')}
    >
      <Text fontSize={60}>
        {time}
      </Text>
      {showDate && (
        <Text>
          {date}
        </Text>)}
      {showBattery && <BatteryIcon value={100 * level} />}
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