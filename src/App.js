import React from 'react'
import { NativeRouter, Routes, Route } from 'react-router-native'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'
import {
  ShareTechMono_400Regular as shareTechMono400Regular
} from '@expo-google-fonts/share-tech-mono'
import {
  FrederickatheGreat_400Regular as frederickaTheGreat400Regular
} from '@expo-google-fonts/fredericka-the-great'
import {
  NanumBrushScript_400Regular as nanumBrushScript400Regular
} from '@expo-google-fonts/nanum-brush-script'
import {
  SpecialElite_400Regular as specialElite400Regular
} from '@expo-google-fonts/special-elite'
import { getConfig } from './providers/cache'
import {
  useTimeFormat, useShowSeconds, useShowDate, useShowBattery
} from './store/hooks'
import Loading from './components/Loading'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'
import FontsPage from './pages/FontsPage'
import ColorsPage from './pages/ColorsPage'
import './intl'
import store from './store'

const AppLoader = () => {
  const [fontsLoaded] = useFonts({
    shareTechMono400Regular,
    frederickaTheGreat400Regular,
    nanumBrushScript400Regular,
    specialElite400Regular
  })
  const [configLoading, setConfigLoading] = React.useState(false)
  const { setTimeFormat } = useTimeFormat()
  const { setShowSeconds } = useShowSeconds()
  const { setShowDate } = useShowDate()
  const { setShowBattery } = useShowBattery()

  React.useEffect(() => {
    setConfigLoading(true)
    getConfig()
      .then((config) => {
        setTimeFormat(config.timeFormat)
        setShowSeconds(config.showSeconds)
        setShowDate(config.showDate)
        setShowBattery(config.showBattery)
      })
      .finally(() => {
        setConfigLoading(false)
      })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!fontsLoaded || configLoading) {
    return <Loading />
  }

  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/fonts" element={<FontsPage />} />
        <Route path="/colors" element={<ColorsPage />} />
      </Routes>
    </NativeRouter>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <AppLoader />
    </Provider>
  )
}

export default App