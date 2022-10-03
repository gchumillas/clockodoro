import React from 'react'
import { AM_PM } from '~/src/constants'
import Text from '~/src/components/outputs/Text'

/**
 * @param {object} params
 * @param {dayjs.Dayjs} params.value
 * @param {'am_pm' | '24h'} params.format
 * @param {boolean} params.showSeconds
 * @param {string} [params.font]
 * @param {object} [params.style]
 */
const TimeDisplay = ({
  value,
  format,
  showSeconds = false,
  font = 'shareTechMono400Regular',
  style = {}
}) => {
  const [text, setText] = React.useState('')

  const timeFormat = React.useMemo(() => {
    if (format == AM_PM) {
      return showSeconds ? 'h:mm:ss a' : 'h:mm a'
    }

    return showSeconds ? 'HH:mm:ss' : 'HH:mm'
  }, [format, showSeconds])

  React.useEffect(() => {
    setText(value.format(timeFormat))
  }, [value, timeFormat])

  return (
    <Text fontSize={75} style={{ ...style, fontFamily: font }}>
      {text}
    </Text>
  )
}

export default TimeDisplay