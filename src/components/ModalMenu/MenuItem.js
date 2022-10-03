import React from 'react'
import { Pressable } from 'react-native'
import Text from '~/src/components/Text'

/**
 * @param {object} params
 * @param {string} params.label
 * @param {() => void} params.onPress
 * @returns
 */
const MenuItem = ({ label, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>
        {label}
      </Text>
    </Pressable>
  )
}

export default MenuItem