import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import CheckboxField from '~/src/components/CheckboxField'

const SettingsPage = () => {
  const [showSeconds, setShowSeconds] = React.useState(false)
  const [showDate, setShowDate] = React.useState(true)
  const [showBattery, setShowBattery] = React.useState(true)

  return (
    <SafeAreaView style={styles.root}>
      <CheckboxField
        label="Show seconds"
        value={showSeconds} onChange={setShowSeconds}
        style={styles.field}
      />
      <CheckboxField
        label="Show date"
        value={showDate} onChange={setShowDate}
        style={styles.field}
      />
      <CheckboxField
        label="Show battery"
        value={showBattery} onChange={setShowBattery}
        style={styles.field}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16
  },
  field: {
    marginBottom: 8
  }
})

export default SettingsPage