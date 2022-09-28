import React from 'react'
import { context } from './context'

/**
 * @param {object} params
 * @param {string} params.value
 * @param {(value: string) => void} params.onChange
 * @param {React.ReactNode} params.children
 */
const RadioSelector = ({ value, onChange, children }) => {
  const contextValue = React.useMemo(
    () => ({ value, onChange }),
    [value, onChange]
  )

  return (
    <context.Provider value={contextValue}>
      {children}
    </context.Provider>
  )
}

export default RadioSelector