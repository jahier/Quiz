import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import ImagePath from '../assets/ImagePath'

export default function SelectVerify({navigation}) {
  return (
    <View style={styles.mainContent}>
      <ImageBackground style={styles.bacImage} source={ImagePath.bacImage}>
        <Text style={styles.headingText}>LEARNO</Text>
        <Text style={styles.LoginText}>Login into account</Text>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Sign_up')} style={styles.btn}>
            <Text style={styles.btnText}>Don’t have an account? Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.btn}>
            <Text style={styles.btnText}>Have an account? Log in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1
  },
  bacImage: {
    flex: 1,
    justifyContent: 'center',
    // alignItems:'center'
  },
  headingText: {
    fontSize: 60, lineHeight: 61,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',

    marginTop: 40
  },
  LoginText: {
    fontSize: 18, lineHeight: 19,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center'
  },
  btn: {
    width: '100%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 16, 19, 0.25)',
    marginTop: 10
  },
  btnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    lineHeight: 17
  },
})