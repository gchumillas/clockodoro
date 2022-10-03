import React from 'react'
import { AM_PM } from '~/src/constants'
import Text from '~/src/components/outputs/Text'

/**
 * @param {object} params
 * @param {dayjs.Dayjs} params.time
 * @param {'am_pm' | '24h'} params.format
 * @param {boolean} params.showSeconds
 * @param {object} [params.style]
 */
const TimeDisplay = ({ time, format, showSeconds, style = {} }) => {
  const [text, setText] = React.useState('')

  const timeFormat = React.useMemo(() => {
    if (format == AM_PM) {
      return showSeconds ? 'h:mm:ss a' : 'h:mm a'
    }

    return showSeconds ? 'HH:mm:ss' : 'HH:mm'
  }, [format, showSeconds])

  React.useEffect(() => {
    setText(time.format(timeFormat))
  }, [time, timeFormat])

  return (
    <Text fontSize={75} style={style}>
      {text}
    </Text>
  )
}

export default TimeDisplay