import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { StatusBar } from 'expo-status-bar'
import { gap } from '~/src/constants'
import RadioSelector, { RadioButton } from '~/src/components/RadioSelector'
import CheckboxField from '~/src/components/CheckboxField'
import Button from '~/src/components/Button'

const SettingsPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('settings')
  const [timeFormat, setTimeFormat] = React.useState('24h')
  const [showSeconds, setShowSeconds] = React.useState(false)
  const [showDate, setShowDate] = React.useState(true)
  const [showBattery, setShowBattery] = React.useState(true)

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        <RadioSelector value={timeFormat} onChange={setTimeFormat}>
          <RadioButton value="24h" label={t`use 24h format`} />
          <RadioButton value="am_pm" label={t`use am|pm format`} />
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
      </View>
      <Button label={t`save`} onPress={() => navigate('/')} />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 2 * gap
  },
  body: {
    flexGrow: 1,
    marginTop: 4 * gap
  }
})

export default SettingsPage