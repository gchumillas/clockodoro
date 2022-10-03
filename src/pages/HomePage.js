import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { useKeepAwake } from 'expo-keep-awake'
import { StatusBar } from 'expo-status-bar'
import {
  PALETTE, SUPPORTED_LANGUAGES, FALLBACK_LANGUAGE, GAP, COLORS
} from '~/src/constants'
import {
  useTimeFormat, useShowSeconds, useShowDate, useShowBattery, useTimeFont
} from '~/src/store/hooks'
import { useBatteryLevel } from '~/src/libs/battery'
import { useOrientation } from '~/src/libs/orientation'
import dayjs from '~/src/libs/dayjs'
import ModalMenu, { MenuItem } from '~/src/components/ModalMenu'
import IconButton from '~/src/components/buttons/IconButton'
import BatteryIcon from '~/src/components/BatteryIcon'
import TimeDisplay from '~/src/components/outputs/TimeDisplay'
import SettingsIcon from '~/assets/icons/settings-icon.svg'
import DateDisplay from '../components/outputs/DateDisplay'

const HomePage = () => {
  useKeepAwake()
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const orientation = useOrientation()
  const level = useBatteryLevel()
  const [showModalMenu, setShowModalMenu] = React.useState(false)
  const [time, setTime] = React.useState(dayjs())
  const { timeFont } = useTimeFont()
  const { timeFormat } = useTimeFormat()
  const { showSeconds } = useShowSeconds()
  const { showDate } = useShowDate()
  const [showBattery] = useShowBattery()

  React.useEffect(() => {
    const lang = i18n.resolvedLanguage
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      dayjs.locale(lang)
    } else {
      dayjs.locale(FALLBACK_LANGUAGE)
    }
  }, [i18n.resolvedLanguage])

  React.useEffect(() => {
    const updateTime = () => setTime(dayjs())
    const i = setInterval(() => updateTime(), 333)
    updateTime()
    return () => clearInterval(i)
  }, [])

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.box}>
        <TimeDisplay
          value={time}
          format={timeFormat}
          showSeconds={showSeconds}
          font={timeFont}
          style={styles.time}
        />
        {showDate && <DateDisplay value={time} style={styles.date} />}
        {showBattery && <BatteryIcon value={100 * level} />}
      </View>
      {orientation == 'portrait' && (
        <IconButton
          icon={<SettingsIcon width={36} height={32} fill={COLORS.base} />}
          onPress={() => setShowModalMenu(true)}
        />
      )}
      <ModalMenu open={showModalMenu} onClose={() => setShowModalMenu(false)}>
        {/* TODO: use translations */}
        <MenuItem label="Preferences" onPress={() => navigate('/settings')} />
        <MenuItem label="Fonts" onPress={() => navigate('/fonts')} />
        <MenuItem label="Colors" onPress={() => navigate('/colors')} />
      </ModalMenu>
      <StatusBar hidden />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: PALETTE.black
  },
  box: {
    alignItems: 'center',
    paddingHorizontal: 4 * GAP
  },
  time: {
    marginBottom: GAP
  },
  date: {
    marginBottom: 1.5 * GAP
  }
})

export default HomePage