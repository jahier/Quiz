import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Animated, Image, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ImagePath from '../assets/ImagePath'
import LinearGradient from 'react-native-linear-gradient'
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import { FlatList } from 'react-native';
import Font from '../assets/Font';

export default function ProfileGame(props) {
  const [Dataa, setData] = useState(props.route.params.data)
  console.log('props.route.params.data===========>>>>', Dataa);
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
      duration: 1000,
      useNativeDriver: true,

    }).start();
  }
  const Data = [
    { id: '1' }, { id: '2' }
  ]
  const MultiplyData = [
    { id: '1', width: 100, height: 100, }, { id: '2', width: 100, height: 100 }, { id: '3', width: 100, height: 100 },
  ]
  const Slot = [
    {},{},{},{},{},{},{},
  ]
  // const removeUser=MultiplyData.slice(1)
  // const findUser=MultiplyData.find((item)=>item.id==='1')
  // console.log('=====>>>>>',findUser);
  useEffect(() => {
    setTimeout(() => {
      setCoinShow(false)
    }, 900)
    // setTimeout(() => {
    //   props.navigation.navigate('Quiz')
    // }, 1200)
  })
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ marginHorizontal: 25 }}>
        <TouchableOpacity style={{ width: 120, height: 120, borderWidth: 0.5, borderColor: 'darkgray', borderRadius: 15, justifyContent: 'center', alignItems: 'center', }}>
          <Image style={{ width: 120, height: 120, borderColor: 'darkgray', borderRadius: 15, resizeMode: 'contain' }} source={ImagePath.singleMode} />
          {/* <Icon name="plus" size={80} color="darkgray" /> */}
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', textAlign: 'center', marginTop: 6 }}>Isha Gupta</Text>
      </View>
    )
  }

  const Multiply = ({ item, index }) => {
    return (
      <View style={{ marginHorizontal: 10 }}>
        <TouchableOpacity style={{ width: item.width, height: item.height, borderWidth: 0.5, borderColor: 'darkgray', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: item }}>
          {/* <Image style={{ width: 120, height: 120, borderColor: 'darkgray', borderRadius: 15, resizeMode: 'contain' }} source={ImagePath.singleMode} /> */}
          <Icon name="plus" size={80} color="darkgray" />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', textAlign: 'center', marginTop: 6 }}>Isha Gupta</Text>
      </View>
    )
  }
  const SlotRender = ({ item, index }) => {
    return (
      <View style={{ marginHorizontal: 10,marginVertical:10 }}>
        <TouchableOpacity style={{ width:70, height: 70, borderWidth: 0.5, borderColor: 'darkgray', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: item }}>
          {/* <Image style={{ width: 120, height: 120, borderColor: 'darkgray', borderRadius: 15, resizeMode: 'contain' }} source={ImagePath.singleMode} /> */}
          <Icon name="plus" size={60} color="darkgray" />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', textAlign: 'center', marginTop: 6 }}>Isha Gupta</Text>
      </View>
    )
  }
  return (
    <View  style={{ flex: 1, }}>
      <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
        {/* <LinearGradient style={{ flex: 1, backgroundColor: 'rgba(138, 136, 144, 0.6)' }}
          colors={[
            'rgba(47, 47, 49, 0.4)', 'rgba(47, 47, 49, 0.9)',
            // 'rgba(133, 132, 139, 0.9)', 'rgba(47, 47, 49, 0.7)','rgba(47, 47, 49, 0.9)'
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        > */}

          <Text style={styles.projectName}>LEARNO</Text>
          <View style={{ width: 170, elevation:5,shadowColor:'white',alignSelf: 'center', marginTop: 40, borderRadius: 15, justifyContent: 'center', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 20, backgroundColor: 'black' }}>
            {Dataa==='1'&&
            <View>
            <Text style={{color: 'white', fontSize: 14,fontWeight: '500',}}>DUAL mode</Text>
            </View>}
            {Dataa==='2'&&
            <View>
            <Text style={{color: 'white', fontSize: 14,fontWeight: '500',}}>MULTIPLE mode</Text>
            </View>}
             {Dataa==='3'&&
            <View>
            <Text style={{color: 'white', fontSize: 14,fontWeight: '500',}}>SLOTS</Text>
            </View>}
            
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '700', textAlign: 'center' }}>Room code: {"0789210"}</Text>
            <TouchableOpacity style={{ width: 30, marginLeft: 10, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderRadius: 6 }}>
              <Icon3 name="share" size={20} color="white" />
            </TouchableOpacity>
          </View>
          {Dataa === '1' &&
            <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
              <FlatList
                horizontal
                data={Data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
              />
              {/* <View style={{ width: 32, height: 32, backgroundColor: 'black', bottom: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: 'rgba(190, 189, 194, 0.99)' }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: '700', textAlign: 'center' }}>VS</Text>
              </View> */}
              {coinShow ?
            <View style={{}}>
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
                  <Image style={{ width: 15, height: 15, resizeMode: 'contain' }} source={require('../assets/image/coin.png')} />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={[{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }, {
                transform: [
                  {
                    translateY: animated2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-40, 0]
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
                      outputRange: [120, 0]
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
            <View style={{ paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center', alignSelf: 'center',marginTop:15 }}>
              <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../assets/image/COINADD.png')} />
              <Text style={{ marginLeft: 5, fontSize: 12, color: 'white', fontWeight: '700' }}> {"100"}</Text>
            </View>
          }

          <View style={{ marginTop: 20, paddingHorizontal: 70 }}>
            <View style={{ backgroundColor: 'white', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'black', fontSize: 12, fontWeight: '500', textAlign: 'center' }}>Waiting for the friend to join</Text>
            </View>
          </View>
            </View>}
          {
            Dataa === '2' &&
            <View>
              <View style={{ marginHorizontal: 10 }}>
                <TouchableOpacity style={{ width: 120, height: 120, borderWidth: 0.5, borderColor: 'darkgray', borderRadius: 15, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 30 }}>
                  {/* <Image style={{ width: 120, height: 120, borderColor: 'darkgray', borderRadius: 15, resizeMode: 'contain' }} source={ImagePath.singleMode} /> */}
                  <Icon name="plus" size={80} color="darkgray" />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', textAlign: 'center', marginTop: 6 }}>Isha Gupta</Text>
              </View>
              <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center', }}>
                <FlatList
                  // horizontal
                  numColumns={3}
                  data={MultiplyData}
                  renderItem={Multiply}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                />
                {/* <View style={{ width: 32, height: 32, backgroundColor: 'black', bottom: 170, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: 'rgba(190, 189, 194, 0.99)' }}>
                  <Text style={{ color: 'white', fontSize: 12, fontWeight: '700', textAlign: 'center' }}>VS</Text>
                </View> */}
              </View>
              {coinShow ?
            <View style={{}}>
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
                  <Image style={{ width: 15, height: 15, resizeMode: 'contain' }} source={require('../assets/image/coin.png')} />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={[{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }, {
                transform: [
                  {
                    translateY: animated2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-40, 0]
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
                      outputRange: [120, 0]
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
            <View style={{ paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center', alignSelf: 'center',marginTop:15 }}>
              <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../assets/image/COINADD.png')} />
              <Text style={{ marginLeft: 5, fontSize: 12, color: 'white', fontWeight: '700' }}> {"100"}</Text>
            </View>
          }

          <View style={{ marginTop: 20, paddingHorizontal: 70 }}>
            <View style={{ backgroundColor: 'white', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'black', fontSize: 12, fontWeight: '500', textAlign: 'center' }}>Waiting for the friend to join</Text>
            </View>
          </View>
            </View>
          }
          {
            Dataa === '3' &&
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ marginHorizontal: 10 }}>
                <TouchableOpacity style={{ width: 100, height: 100, borderWidth: 0.5, borderColor: 'darkgray', borderRadius: 15, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 30 }}>
                  {/* <Image style={{ width: 120, height: 120, borderColor: 'darkgray', borderRadius: 15, resizeMode: 'contain' }} source={ImagePath.singleMode} /> */}
                  <Icon name="plus" size={80} color="darkgray" />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', textAlign: 'center', marginTop: 6 }}>Isha Gupta</Text>
              </View>
              <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center', }}>
                <FlatList
                  // horizontal
                  numColumns={4}
                  data={Slot}
                  renderItem={SlotRender}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                />
                {/* <View style={{ width: 32, height: 32, backgroundColor: 'black', bottom: 475, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: 'rgba(190, 189, 194, 0.99)' }}>
                  <Text style={{ color: 'white', fontSize: 12, fontWeight: '700', textAlign: 'center' }}>VS</Text>
                </View> */}
              </View>
              {coinShow ?
            <View style={{}}>
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
                  <Image style={{ width: 15, height: 15, resizeMode: 'contain' }} source={require('../assets/image/coin.png')} />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={[{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }, {
                transform: [
                  {
                    translateY: animated2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-40, 0]
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
                      outputRange: [120, 0]
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
            <View style={{ paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center', alignSelf: 'center',marginTop:15 }}>
              <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../assets/image/COINADD.png')} />
              <Text style={{ marginLeft: 5, fontSize: 12, color: 'white', fontWeight: '700' }}> {"100"}</Text>
            </View>
          }

          <View style={{ marginTop: 20, paddingHorizontal: 70 }}>
            <View style={{ backgroundColor: 'white', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'black', fontSize: 12, fontWeight: '500', textAlign: 'center' }}>Waiting for the friend to join</Text>
            </View>
          </View>
            </ScrollView>
          }

         
        {/* </LinearGradient> */}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  projectName: {
    color: 'white', fontSize: 30, textAlign: 'center', marginTop: 20,
    fontWeight: '700',
    // fontFamily:Font.BebasNeue_Regular
  },
})