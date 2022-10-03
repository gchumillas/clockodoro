import React from 'react'
import Text from '~/src/components/outputs/Text'

/**
 * @param {object} params
 * @param {dayjs.Dayjs} params.date
 * @param {object} [params.style]
 */
const DateViewer = ({ date, style = {} }) => {
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    setText(date.format('ll'))
  }, [date])

  return (
    <Text style={style}>
      {text}
    </Text>
  )
}

export default DateViewer