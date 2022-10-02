import React from 'react'
import { StyleSheet, SafeAreaView, View, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { useKeepAwake } from 'expo-keep-awake'
import { StatusBar } from 'expo-status-bar'
import {
  PALETTE, SUPPORTED_LANGUAGES, FALLBACK_LANGUAGE, AM_PM, GAP, COLORS
} from '~/src/constants'
import {
  useTimeFormat, useShowSeconds, useShowDate, useShowBattery
} from '~/src/store/hooks'
import { useBatteryLevel } from '~/src/libs/battery'
import dayjs from '~/src/libs/dayjs'
import Text from '~/src/components/Text'
import BatteryIcon from '~/src/components/BatteryIcon'
// TODO: rename images.svg by images-icon.svg
import Settings from '~/assets/images/settings.svg'

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

  const dateFormat = React.useMemo(() => {
    if (timeFormat == AM_PM) {
      return showSeconds ? 'h:mm:ss a' : 'h:mm a'
    }

    return showSeconds ? 'HH:mm:ss' : 'HH:mm'
  }, [timeFormat, showSeconds])

  React.useEffect(() => {
    const lang = i18n.resolvedLanguage
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      dayjs.locale(lang)
    } else {
      dayjs.locale(FALLBACK_LANGUAGE)
    }
  }, [i18n.resolvedLanguage])

  React.useEffect(() => {
    const updateTime = () => {
      const now = dayjs()
      setTime(now.format(dateFormat))
      setDate(now.format('ll'))
    }
    const i = setInterval(() => updateTime(), 333)
    updateTime()
    return () => clearInterval(i)
  }, [dateFormat])

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.box} />
      <View style={styles.box}>
        <Text fontSize={75}>
          {time}
        </Text>
        {showDate && (
        <Text style={styles.date}>
          {date}
        </Text>)}
        {showBattery && <BatteryIcon value={100 * level} />}
      </View>
      <View style={styles.box}>
        <Pressable
          style={({ pressed }) => ({
            ...styles.button,
            opacity: pressed ? 0.7 : 1
          })}
          onPress={() => navigate('/settings')}
        >
          <Settings width={36} height={32} fill={COLORS.base} />
        </Pressable>
      </View>
      <StatusBar hidden />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: PALETTE.black,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4 * GAP
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  date: {
    marginBottom: 1.5 * GAP
  },
  button: {
    padding: 1.5 * GAP
  }
})

export default HomePage