import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import ApplicationStack from './src/navigation/ApplicationStack'

const  App=()=> {
  return (
    <View style={{flex:1}}>
       {/* <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        /> */}
      <ApplicationStack/>
    </View>
  )
}
export default App

const styles = StyleSheet.create({})