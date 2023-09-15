import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Animated, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ImagePath from '../assets/ImagePath'
import LinearGradient from 'react-native-linear-gradient'
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import { FlatList } from 'react-native';
import Font from '../assets/Font';

export default function ProfileGame(props) {
  // const [Data, setData] = useState(props.route.params.data)
  // console.log('props.route.params.data===========>>>>', Data);
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     props.navigation.navigate('Quiz')
  //   },2000)
  // })

  const [coinShow, setCoinShow] = useState(true)

  const [btnClick, setBtnClick] = useState(false)
  const animated2 = useRef(new Animated.Value(0)).current;
  const startAnimation2 = () => {
    Animated.timing(animated2, {
      toValue: btnClick ? 0 : 1,
      duration: 1500,
      useNativeDriver: true,

    }).start();
  }
  const Data = [
    { id: '1' }, { id: '2' }
  ]
  useEffect(() => {
    setTimeout(() => {
      setCoinShow(false)
    }, 2000)
  })
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ marginHorizontal: 25 }}>
        <TouchableOpacity style={{ width: 120, height: 120, borderWidth: 0.5, borderColor: 'darkgray', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="plus" size={80} color="darkgray" />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', textAlign: 'center', marginTop: 6 }}>Isha Gupta</Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, }}>
      <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
        <LinearGradient style={{ flex: 1, backgroundColor: 'rgba(138, 136, 144, 0.6)' }}
          colors={[
            'rgba(47, 47, 49, 0.4)', 'rgba(47, 47, 49, 0.9)',
            // 'rgba(133, 132, 139, 0.9)', 'rgba(47, 47, 49, 0.7)','rgba(47, 47, 49, 0.9)'
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >

          <Text style={styles.projectName}>LEARNO</Text>
          <View style={{ width: 170, alignSelf: 'center', marginTop: 40, borderRadius: 15, justifyContent: 'center', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 20, backgroundColor: 'black' }}>
            <Text style={{
              color: 'white', fontSize: 14,
              // fontFamily: Font.Regular,
            }}>dual mode</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '700', textAlign: 'center' }}>Room code: {"0789210"}</Text>
            <TouchableOpacity style={{ width: 30, marginLeft: 10, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderRadius: 6 }}>
              <Icon3 name="share" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
              horizontal
              data={Data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
            <View style={{ width: 32, height: 32, backgroundColor: 'black', bottom: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: 'rgba(190, 189, 194, 0.99)' }}>
              <Text style={{ color: 'white', fontSize: 12, fontWeight: '700', textAlign: 'center' }}>VS</Text>
            </View>
          </View>

          {coinShow ?
            <View>
              <Animated.View style={[{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }, {
                transform: [
                  {
                    translateY: animated2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 0]
                    })
                  },

                  {
                    rotate: animated2.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['50deg', '0deg']
                    })
                  },
                  {
                    translateX: animated2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-100, 0]
                    })
                  },
                  {
                    scale: animated2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1]
                    })
                  },
                ]
              }]}>
                <TouchableOpacity onPress={startAnimation2()} style={{}}>
                  <Image style={{ width: 12, height: 12, resizeMode: 'contain' }} source={require('../assets/image/coin.png')} />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={[{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }, {
                transform: [
                  {
                    translateY: animated2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-60, 0]
                    })
                  },

                  {
                    rotate: animated2.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['-50deg', '0deg']
                    })
                  },
                  {
                    translateX: animated2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0]
                    })
                  },
                  {
                    scale: animated2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1]
                    })
                  },
                ]
              }]}>
                <TouchableOpacity onPress={startAnimation2()} style={{}}>
                  <Image style={{ width: 15, height: 15, resizeMode: 'contain' }} source={require('../assets/image/coin.png')} />
                </TouchableOpacity>
              </Animated.View>
            </View>
            :
            <View style={{ backgroundColor: '#666666', width: 70, height: 30, borderTopRightRadius: 0, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, marginLeft: 10, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
              <Icon3 name="wallet" size={16} color="white" />
              <Text style={{ marginLeft: 5, fontSize: 12, color: 'white', fontWeight: '700' }}>₹ {"5000"}</Text>
            </View>}

          <View style={{ marginTop: 20, paddingHorizontal: 40 }}>
            <View style={{ backgroundColor: 'white', width: '100%', paddingVertical: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'black', fontSize: 12, fontWeight: '500', textAlign: 'center' }}>Waiting for the friend to join</Text>
            </View>
          </View>
        </LinearGradient>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  projectName: {
    color: 'white', fontSize: 30, textAlign: 'center', marginTop: 20,
    fontWeight: 'bold',
  },
})