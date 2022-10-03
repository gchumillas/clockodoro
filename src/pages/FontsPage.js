import React from 'react'
import { useNavigate } from 'react-router-native'
import { useTimeFont } from '~/src/store/hooks'
import { FONTS } from '~/src/constants'
import FormLayout from '~/src/layouts/FormLayout'
import TimeSelector, { TimeButton } from '~/src/components/TimeSelector'

const FontsPage = () => {
  const navigate = useNavigate()
  const [font, setFont] = useTimeFont()

  const doSave = () => {
    navigate('/')
  }

  return (
    <FormLayout onSave={doSave}>
      <TimeSelector value={font} onChange={setFont}>
        {FONTS.map((font) => <TimeButton key={font} value={font} />)}
      </TimeSelector>
    </FormLayout>
  )
}

export default FontsPage