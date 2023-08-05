import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import ApplicationStack from './src/navigation/ApplicationStack'
import { Provider } from 'react-redux'
import store from './src/store'

const  App=()=> {
  return (

    <Provider store={store}>
    <View style={{flex:1}}>
      <ApplicationStack/>
    </View>
    </Provider>
  )
}
export default App

const styles = StyleSheet.create({})