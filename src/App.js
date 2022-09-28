import React from 'react'
import { NativeRouter, Routes, Route } from 'react-router-native'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'
import {
  ShareTechMono_400Regular as shareTechMono400Regular
} from '@expo-google-fonts/share-tech-mono'
import Loading from '~/src/components/Loading'
import HomePage from '~/src/pages/HomePage'
import SettingsPage from '~/src/pages/SettingsPage'
import '~/src/intl'
import store from '~/src/store'

const App = () => {
  const [fontsLoaded] = useFonts({ shareTechMono400Regular })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </NativeRouter>
    </Provider>
  )
}

export default App