import React from 'react'
import { AM_PM } from '~/src/constants'
import { useOrientation } from '~/src/libs/orientation'
import Text from '~/src/components/displays/Text'

/**
 * @param {object} params
 * @param {dayjs.Dayjs} params.value
 * @param {string} params.color
 * @param {'am_pm' | '24h'} params.format
 * @param {boolean} params.showSeconds
 * @param {string} [params.font]
 * @param {object} [params.style]
 */
const TimeDisplay = ({
  value,
  color,
  format,
  showSeconds = false,
  font = 'shareTechMono400Regular',
  style = {}
}) => {
  const [text, setText] = React.useState('')
  const orientation = useOrientation()
  const textWidth = React.useMemo(() => {
    return orientation == 'portrait' ? 70 : 80
  }, [orientation])

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
    <Text fontSize={textWidth} style={{ ...style, color, fontFamily: font }}>
      {text}
    </Text>
  )
}

export default TimeDisplay