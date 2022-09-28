import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { gap } from '~/src/constants'
import RadioSelector, { RadioButton } from '~/src/components/RadioSelector'
import CheckboxField from '~/src/components/CheckboxField'

const SettingsPage = () => {
  const [timeFormat, setTimeFormat] = React.useState('24h')
  const [showSeconds, setShowSeconds] = React.useState(false)
  const [showDate, setShowDate] = React.useState(true)
  const [showBattery, setShowBattery] = React.useState(true)

  return (
    <SafeAreaView style={styles.root}>
      <RadioSelector value={timeFormat} onChange={setTimeFormat}>
        <RadioButton value="24h" label="Use 24h format" />
        <RadioButton value="am_pm" label="Use AM|PM format" />
      </RadioSelector>
      <CheckboxField
        label="Show seconds"
        value={showSeconds}
        onChange={setShowSeconds}
      />
      <CheckboxField
        label="Show date"
        value={showDate}
        onChange={setShowDate}
      />
      <CheckboxField
        label="Show battery"
        value={showBattery}
        onChange={setShowBattery}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 2 * gap
  }
})

export default SettingsPage