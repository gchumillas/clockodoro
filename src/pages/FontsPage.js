import React from 'react'
import { useNavigate } from 'react-router-native'
import FormLayout from '~/src/layouts/FormLayout'
import Text from '~/src/components/outputs/Text'

const FontsPage = () => {
  const navigate = useNavigate()

  const doSave = () => {
    navigate('/')
  }

  return (
    <FormLayout onSave={doSave}>
      <Text>Settings page</Text>
    </FormLayout>
  )
}

export default FontsPage