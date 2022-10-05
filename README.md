<a href="https://apps.apple.com/app/clockodoro/id6443605878"><img src="https://user-images.githubusercontent.com/5312427/194015966-ac0baddf-69ca-4a0b-a194-62364bb5f28f.svg" height="40" alt="Download on the Apple Store" /></a><br>

[foto here]

A beautiful digital clock made in React Native.

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

## Features

- Landscape and portrait mode.
- Multiple fonts.
- Multiple colors.
- Battery indicator.
- English and Spanish languages.
- AM | PM and 24h formats.
- Keep the screen awake.

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
- (***) A "provider" is any function that obtains information from an asynchronous resource, such as the System Cache or an external API.

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
