import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { StatusBar } from 'expo-status-bar'
import { PALETTE, GAP } from '~/src/constants'
import Button from '~/src/components/buttons/Button'

/**
 * @param {object} params
 * @param {React.ReactNode} params.children
 * @param {() => void} params.onSave
 */
const FormLayout = ({ children, onSave }) => {
  const { t } = useTranslation('settings')

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.wrapper}>
        <ScrollView style={styles.body}>
          {children}
        </ScrollView>
        <Button label={t`save`} onPress={onSave} />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    padding: 2 * GAP,
    paddingTop: 4 * GAP,
    backgroundColor: PALETTE.black
  },
  body: {
    flexGrow: 1,
    marginVertical: 2 * GAP
  }
})

export default FormLayout