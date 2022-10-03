import React from 'react'
import { useNavigate } from 'react-router-native'
import FormLayout from '~/src/layouts/FormLayout'
import Text from '~/src/components/outputs/Text'

const ColorsPage = () => {
  const navigate = useNavigate()

  const doSave = () => {
    navigate('/')
  }

  return (
    <FormLayout onSave={doSave}>
      <Text>colors page</Text>
    </FormLayout>
  )
}

export default ColorsPage