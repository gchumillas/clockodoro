<a href="https://apps.apple.com/app/clockodoro/id6443605878"><img src="https://user-images.githubusercontent.com/5312427/194015966-ac0baddf-69ca-4a0b-a194-62364bb5f28f.svg" height="40" alt="Download on the Apple Store" /></a><br>

![concept](https://user-images.githubusercontent.com/5312427/194026629-892dc38b-6a95-4cbd-af89-0d36f35aa88c.jpg)

A beautiful digital clock made in React Native.

## Features

- Landscape and portrait mode.
- Multiple fonts.
- Multiple colors.
- Battery indicator.
- English and Spanish languages.
- AM | PM and 24h formats.
- Keep the screen awake.

## Installation

Download and install the libraries:
```bash
git clone https://github.com/gchumillas/clockodoro
cd clockodoro
yarn
```

And run the app into the iOS or Android simulators:
```bash
yarn iOS     # run the app in the iOS simualtor [OR]
yarn Android # run the app in the Android emulator
```

Once the app is installed into the simulator, you can start the Expo server and reopen the app to refresh it:
```bash
yarn start
```

## Directory Structure

```
android -- Android app
ios     -- iOS app
assets  -- Images, icons, etc.
src     -- Source code files
  components -- Shareable components
    app      -- App specific components (*)
  intl       -- Translations
  layouts    -- Page layouts
  libs       -- Libraries
  pages      -- Pages (**)
  providers  -- Providers (***)
  store      -- Redux store
  App.js     -- Entry point
```

- (*) Some components can be reused in other applications, such as text fields, radio buttons, etc. And others don't. The `src/components/app` folder contains the components that are "app specific".
- (**) A "page" is a special type of component used to present "pages". These components are registered in the routing system (see [App.js](/src/App.js)).
- (***) A "provider" is any function that submits or requests information from an asynchronous resource, such as the System Cache or an external API.

## Relevant libraries

- [@expo-google-fonts](https://github.com/expo/google-fonts): Amazing list of Google Fonts ready to use from your React Native app.
- [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/): Easy to use internationalization library.
- [react-native-svg](https://github.com/react-native-svg/react-native-svg): Add SVG support to your React Native projects.
- [redux](https://redux.js.org/) and [react-redux](https://react-redux.js.org/): Popular library to manage global state variables.
- [react-router-native](https://reactrouter.com/en/v6.3.0/api): Add routing capabilities to your native app.
- [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/): Manage System Cache keys.
- [expo-keep-awake](https://docs.expo.dev/versions/latest/sdk/keep-awake/): Keep your screen always awake.
- [expo-battery](https://docs.expo.dev/versions/latest/sdk/battery/): Obtain information about the battery.

## Useful command lines

```bash
# compile the project to iOS or Android
yarn ios
yarn android
```

```bash
# run ESLint to detect style guide inconsistencies,
# syntax errors, or problematic patterns in the source code
yarn lint 
```

```bash
# run Expo server to start and debug the app
yarn start
```

## Install a new font

1. Go to [Google Fonts](https://fonts.google.com/) and choose a beautiful font.
2. For example, lets install [Averia Libre](https://fonts.google.com/specimen/Averia+Libre?category=Display&preview.text=11:54%20am&preview.text_type=custom):
   ```bash
   yarn add @expo-google-fonts/averia-libre
   ```
3. Edit the [App.js](src/App.js) file and include the font:
   ```diff
     import React from 'react'
     import { NativeRouter, Routes, Route } from 'react-router-native'
     import { Provider } from 'react-redux'
     import { useFonts } from 'expo-font'
   + import {
   +   AveriaLibre_400Regular as averiaLibre400Regular
   + } from '@expo-google-fonts/averia-libre'
     // more import libraries ...

     const AppLoader = () => {
       const [fontsLoaded] = useFonts({
         shareTechMono400Regular,
         frederickaTheGreat400Regular,
         nanumBrushScript400Regular,
         specialElite400Regular,
         play700Bold,
   +     averiaLibre400Regular
       })
       // more code ...
   ```
  4. Edit the [constants.js](src/constants.js) file and add the font:
     ```diff
      // ... code ...
       export const APP_FONTS = [
         'shareTechMono400Regular',
         'play700Bold',
         'frederickaTheGreat400Regular',
         'specialElite400Regular',
         'nanumBrushScript400Regular',
     +   'averiaLibre400Regular'
       ]
     ```
  5. Compile and run the app into iOS or Andrid simulators:
     ```bash
     yarn ios     # compile and run into iOS [OR]
     yarn android # compile and run into Android
     ```

And that's all! Your beautiful font is now available from the app.
