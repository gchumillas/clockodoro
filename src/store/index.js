import { createStore } from 'redux'

const initState = {
  timeFormat: '24h',
  showSeconds: false,
  showDate: true,
  showBattery: true
}

const reducer = (state = initState, action) => {
  if (action.type == 'SET_TIME_FORMAT') {
    return {
      ...state,
      timeFormat: action.payload
    }
  } else if (action.type == 'SET_SHOW_SECONDS') {
    return {
      ...state,
      showSeconds: action.payload
    }
  } else if (action.type == 'SET_SHOW_DATE') {
    return {
      ...state,
      showDate: action.payload
    }
  } else if (action.type == 'SET_SHOW_BATTERY') {
    return {
      ...state,
      showBattery: action.payload
    }
  }

  return state
}

export default createStore(reducer, initState)