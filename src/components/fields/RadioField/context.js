import React from 'react'

export const context = React.createContext({
  value: '',
  onChange: (_value = '') => {
    // unimplemented
  }
})