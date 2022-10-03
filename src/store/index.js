import { createStore } from 'redux'
import { DEFAULT_CONFIG } from '~/src/constants'

const reducer = (state = DEFAULT_CONFIG, action) => {
  if (action.type == 'SET_TIME_FONT') {
    return {
      ...state,
      timeFont: action.payload
    }
  } else if (action.type == 'SET_TIME_FORMAT') {
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

export default createStore(reducer, DEFAULT_CONFIG)