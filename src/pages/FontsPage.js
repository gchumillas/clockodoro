import React from 'react'
import { useNavigate } from 'react-router-native'
import dayjs from '~/src/libs/dayjs'
import { FONTS } from '~/src/constants'
import FormLayout from '~/src/layouts/FormLayout'
import TimeDisplay from '~/src/components/outputs/TimeDisplay'
import {
  useTimeFormat, useShowSeconds
} from '~/src/store/hooks'

const FontsPage = () => {
  const navigate = useNavigate()
  const [timeFormat] = useTimeFormat()
  const [showSeconds] = useShowSeconds()
  const now = React.useMemo(() => dayjs(), [])

  const doSave = () => {
    navigate('/')
  }

  return (
    <FormLayout onSave={doSave}>
      {FONTS.map((font) => (
        <TimeDisplay
          key={font}
          value={now}
          format={timeFormat}
          showSeconds={showSeconds}
          font={font}
        />
      ))}
    </FormLayout>
  )
}

export default FontsPage