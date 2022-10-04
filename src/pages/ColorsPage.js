import React from 'react'
import { useNavigate } from 'react-router-native'
import { APP_COLORS } from '~/src/constants'
import {
  useTimeColor, useTimeFont, useTimeFormat, useShowSeconds
} from '~/src/store/hooks'
import { saveConfig } from '~/src/providers/cache'
import FormLayout from '~/src/layouts/FormLayout'
import TimeSelector, { TimeButton } from '~/src/components/app/TimeSelector'

const ColorsPage = () => {
  const navigate = useNavigate()
  const { timeColor, setTimeColor } = useTimeColor()
  const { timeFont } = useTimeFont()
  const { timeFormat } = useTimeFormat()
  const { showSeconds } = useShowSeconds()

  const doSave = () => {
    saveConfig({ timeColor })
    navigate('/')
  }

  return (
    <FormLayout onSave={doSave}>
      <TimeSelector value={timeColor} onChange={setTimeColor}>
        {APP_COLORS.map((color) => (
          <TimeButton
            key={color}
            value={color}
            color={color}
            font={timeFont}
            format={timeFormat}
            showSeconds={showSeconds}
          />
        ))}
      </TimeSelector>
    </FormLayout>
  )
}

export default ColorsPage