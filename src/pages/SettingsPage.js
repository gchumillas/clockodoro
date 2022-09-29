import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { StatusBar } from 'expo-status-bar'
import { GAP, AM_PM, H24 } from '~/src/constants'
import {
  useTimeFormat, useShowSeconds, useShowDate, useShowBattery
} from '~/src/store/hooks'
import RadioSelector, { RadioButton } from '~/src/components/RadioSelector'
import CheckboxField from '~/src/components/CheckboxField'
import Button from '~/src/components/Button'
import { saveConfig } from '../providers/cache'

const SettingsPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('settings')
  const [timeFormat, setTimeFormat] = useTimeFormat()
  const [showSeconds, setShowSeconds] = useShowSeconds()
  const [showDate, setShowDate] = useShowDate()
  const [showBattery, setShowBattery] = useShowBattery()

  const doSave = () => {
    saveConfig({
      timeFormat,
      showSeconds,
      showDate,
      showBattery
    })
    navigate('/')
  }

  // TODO: the view should be scrollable
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.body}>
        <RadioSelector value={timeFormat} onChange={setTimeFormat}>
          <RadioButton value={H24} label={t`use 24h format`} />
          <RadioButton value={AM_PM} label={t`use am|pm format`} />
        </RadioSelector>
        <CheckboxField
          label={t`show seconds`}
          value={showSeconds}
          onChange={setShowSeconds}
        />
        <CheckboxField
          label={t`show date`}
          value={showDate}
          onChange={setShowDate}
        />
        <CheckboxField
          label={t`show battery`}
          value={showBattery}
          onChange={setShowBattery}
        />
      </ScrollView>
      <Button label={t`save`} onPress={doSave} />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 2 * GAP,
    marginTop: 4 * GAP
  },
  body: {
    flexGrow: 1,
    marginVertical: 2 * GAP
  }
})

export default SettingsPage