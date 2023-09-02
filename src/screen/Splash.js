import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React,{useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import { BaseRouter } from '@react-navigation/native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
               navigation.navigate('Swiper')
            }, 2600)
  }, [])
  
  //  useEffect(() => {
  //       setTimeout(() => {
  //           navigation.navigate('Swiper')
  //       }, 2600)
  //   }, [])
  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} source={require('../assets/image/splash_screen.png')}>
        <Text style={styles.learnTEXT}>LEARNO</Text>
        <FastImage
        style={{height:40,width:40,borderRadius:25,marginTop:10}}
        source={require('../assets/image/videoIcon.gif')}
      />
      </ImageBackground>
    </SafeAreaView>
  )
}
export default Splash;

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: 'pink'
  },
  learnTEXT: {
    fontSize: 20, color: 'white', fontWeight: 'bold'
  },
})