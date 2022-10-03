import { useSelector, useDispatch } from 'react-redux'

export const useTimeFont = _ => {
  const dispatch = useDispatch()
  const timeFont = useSelector(state => state.timeFont)
  const setTimeFont = (payload) => dispatch(
    { type: 'SET_TIME_FONT', payload }
  )

  return { timeFont, setTimeFont }
}

export const useTimeFormat = _ => {
  const dispatch = useDispatch()
  const timeFormat = useSelector(state => state.timeFormat)
  const setTimeFormat = (payload) => dispatch(
    { type: 'SET_TIME_FORMAT', payload }
  )

  return { timeFormat, setTimeFormat }
}

export const useShowSeconds = _ => {
  const dispatch = useDispatch()
  const showSeconds = useSelector(state => state.showSeconds)
  const setShowSeconds = (payload) => dispatch(
    { type: 'SET_SHOW_SECONDS', payload }
  )

  return { showSeconds, setShowSeconds }
}

export const useShowDate = _ => {
  const dispatch = useDispatch()
  const showDate = useSelector(state => state.showDate)
  const setShowDate = (payload) => dispatch(
    { type: 'SET_SHOW_DATE', payload }
  )

  return { showDate, setShowDate }
}

export const useShowBattery = _ => {
  const dispatch = useDispatch()
  const showBattery = useSelector(state => state.showBattery)
  const setShowBattery = (payload) => dispatch(
    { type: 'SET_SHOW_BATTERY', payload }
  )

  return [showBattery, setShowBattery]
}