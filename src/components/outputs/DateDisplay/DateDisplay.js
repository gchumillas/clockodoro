import React from 'react'
import Text from '~/src/components/outputs/Text'

/**
 * @param {object} params
 * @param {dayjs.Dayjs} params.value
 * @param {string} params.color
 * @param {object} [params.style]
 */
const DateDisplay = ({ value, color, style = {} }) => {
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    setText(value.format('ll'))
  }, [value])

  return (
    <Text style={{ ...style, color }}>
      {text}
    </Text>
  )
}

export default DateDisplay