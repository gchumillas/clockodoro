import React from 'react'
import { useNavigate } from 'react-router-native'
import {
  useTimeColor,
  useTimeFont,
  useTimeFormat,
  useShowSeconds
} from '~/src/store/hooks'
import { APP_FONTS } from '~/src/constants'
import FormLayout from '~/src/layouts/FormLayout'
import TimeSelector, { TimeButton } from '~/src/components/TimeSelector'

const FontsPage = () => {
  const navigate = useNavigate()
  const { timeFont, setTimeFont } = useTimeFont()
  const { timeColor } = useTimeColor()
  const { timeFormat } = useTimeFormat()
  const { showSeconds } = useShowSeconds()

  const doSave = () => {
    navigate('/')
  }

  return (
    <FormLayout onSave={doSave}>
      <TimeSelector value={timeFont} onChange={setTimeFont}>
        {APP_FONTS.map((font) => (
          <TimeButton
            key={font}
            value={font}
            color={timeColor}
            font={font}
            format={timeFormat}
            showSeconds={showSeconds}
          />
        ))}
      </TimeSelector>
    </FormLayout>
  )
}

export default FontsPage