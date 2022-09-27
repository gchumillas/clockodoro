import React from 'react'
import { NativeRouter, Routes, Route } from 'react-router-native'
import HomePage from '~/src/pages/HomePage'
import SettingsPage from '~/src/pages/SettingsPage'

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </NativeRouter>
  )
}

export default App