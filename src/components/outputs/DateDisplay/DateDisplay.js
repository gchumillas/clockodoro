import React from 'react'
import Text from '~/src/components/outputs/Text'

/**
 * @param {object} params
 * @param {dayjs.Dayjs} params.value
 * @param {object} [params.style]
 */
const DateDisplay = ({ value, style = {} }) => {
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    setText(value.format('ll'))
  }, [value])

  return (
    <Text style={style}>
      {text}
    </Text>
  )
}

export default DateDisplay