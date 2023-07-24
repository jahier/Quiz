import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import AppIntroSlider from 'react-native-app-intro-slider';
import ImagePath from '../assets/ImagePath';

export default function Screen2() {
  const slides = [
    {}, {}, {}, {},
  ];
  const sliderRef = useRef();
  const renderItem = ({ item, index }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }}>
          <ImageBackground style={{ width: '100%', height: 180, borderRadius: 15, overflow: 'hidden' }} source={ImagePath.SlideBackImage}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Image style={{ resizeMode: 'contain', marginTop: 20 }} source={ImagePath.WinnerCup} />
              <View style={{ justifyContent: 'center',marginLeft:15 }}>
                <Text style={styles.event}>LEARNO MEGA EVENT </Text>
                <Text style={styles.eventDetails}>Event Date: 15/04/2023</Text>
                <Text style={styles.eventDetails}>500 Seats</Text>
              </View>
            </View>
          </ImageBackground>

        </View>

      </SafeAreaView>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white', }}>
      <View style={styles.headerMainContent}>
        <View style={styles.headerContent}>
          <Icon name="menu-unfold" size={30} color="white" />
          <Text style={styles.projectName}>LEARNO</Text>
          <View style={{ flexDirection: 'row', width: 40, justifyContent: 'space-between' }}>
            <Icon name="menu-unfold" size={30} color="white" />
            <Icon name="menu-unfold" size={30} color="white" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingHorizontal: 0 }}>
          <View style={{ width: 80, height: 80, borderRadius: 45, alignSelf: 'center', borderWidth: 1, borderColor: 'white' }}>
          </View>
          <View style={{ justifyContent: 'center', marginLeft: 15 }}>
            <Text style={styles.userName}>Zaheer</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <View style={{ backgroundColor: 'rgba(237, 232, 235, 0.31)', width: 70, height: 35, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20 }}>
              </View>
              <View style={{ backgroundColor: '#E4E3E3', width: 70, height: 35, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, marginLeft: 10 }}>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* <View style={{justifyContent:'center',alignItems:'center',}}> */}
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
        renderItem={renderItem}
        dotStyle={{ width: 0, height: 0 }}
        activeDotStyle={{ width: 0, height: 0 }}
      // onSlideChange={onLastSlide}
      />
      {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between'
  },
  headerMainContent: {
    backgroundColor: '#614AED', width: '100%',
    height: 160, borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, paddingHorizontal: 15
  },
  projectName: {
    color: 'white', fontSize: 17, fontWeight: 'bold'
  },
  userName: {
    color: 'white', fontSize: 14, fontWeight: 'bold'
  },
  event: {
    color: 'white', fontSize: 14, fontWeight: 'bold'
  },
  eventDetails:{
    color: 'white', fontSize: 12, fontWeight: 'bold'
  },
})