import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import ApplicationStack from './src/navigation/ApplicationStack'
import { Provider } from 'react-redux'
import store from './src/store'
import FlashMessage from 'react-native-flash-message'

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <ApplicationStack />
        <FlashMessage style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}
          position="bottom" />
      </View>
    </Provider>
  )
}
export default App

const styles = StyleSheet.create({})