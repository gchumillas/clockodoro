import React from 'react'
import { NativeRouter, Routes, Route } from 'react-router-native'
import { useFonts } from 'expo-font'
import {
  ShareTechMono_400Regular as shareTechMono400Regular
} from '@expo-google-fonts/share-tech-mono'
import Loading from '~/src/components/Loading'
import HomePage from '~/src/pages/HomePage'
import SettingsPage from '~/src/pages/SettingsPage'
import '~/src/intl'

const App = () => {
  const [fontsLoaded] = useFonts({ shareTechMono400Regular })

  if (!fontsLoaded) {
    return <Loading />
  }

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