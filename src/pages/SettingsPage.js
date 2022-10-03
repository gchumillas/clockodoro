import React from 'react'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { AM_PM, H24 } from '~/src/constants'
import {
  useTimeFormat, useShowSeconds, useShowDate, useShowBattery
} from '~/src/store/hooks'
import RadioField, { RadioButton }
  from '~/src/components/inputs/RadioField'
import CheckboxField from '~/src/components/inputs/CheckboxField'
import FormLayout from '~/src/layouts/FormLayout'
import { saveConfig } from '~/src/providers/cache'

const SettingsPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('settings')
  const { timeFormat, setTimeFormat } = useTimeFormat()
  const { showSeconds, setShowSeconds } = useShowSeconds()
  const { showDate, setShowDate } = useShowDate()
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

  return (
    <FormLayout onSave={doSave}>
      <RadioField value={timeFormat} onChange={setTimeFormat}>
        <RadioButton value={H24} label={t`use 24h format`} />
        <RadioButton value={AM_PM} label={t`use am|pm format`} />
      </RadioField>
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
    </FormLayout>
  )
}

export default SettingsPage