import { Animated, StyleSheet, Text, TouchableOpacity, View, FlatList, ImageBackground } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import ImagePath from '../assets/ImagePath';
import Icon from 'react-native-vector-icons/Feather';

export default function SelectSkill({navigation}) {
    const [showImage, setShowImage] = useState()
    const ShowImageBtn = (id) => {
        setShowImage(id)
    }

    // const navigationBtn=()=>{
    //     navigation.navigate('BottomTab')
    // }
    const animated = useRef(new Animated.Value(1)).current;
    const [btnClick, setBtnClick] = useState(false)
    const startAnimation = () => {
        Animated.timing(animated, {
            toValue: btnClick ? .2 : 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }
    const animated2 = useRef(new Animated.Value(0)).current;
    const startAnimation2 = () => {
        Animated.timing(animated2, {
            toValue: btnClick ? 0 : 1,
            duration: 1500,
            useNativeDriver: true,

        }).start();
    }
    useEffect(() => {
        setTimeout(() => {
            startAnimation()
            // setBtnClick(!btnClick)
        }, 1000)
    })
    const Data = [
        { width: 90, height: 90, marginTop: 0, marginLeft: 0 },
        { width: 70, height: 70, marginTop: 40, marginLeft: 40 },
        { width: 90, height: 90, marginTop: 60, marginLeft: widthPercentageToDP(16) },
        { width: 80, height: 80, marginTop: 20 },
        { width: 100, height: 100, marginTop: 25, marginLeft: 30 },
        { width: 70, height: 70, marginLeft: -10, marginTop: -15 },
        { width: 100, height: 100 },
        { width: 70, height: 70, marginTop: heightPercentageToDP(15) },
        { width: 90, height: 90, marginTop: 25, marginLeft: 30 },
        // 9
        { width: 100, height: 100, marginTop: heightPercentageToDP(8), marginLeft: -20 },
        { width: 70, height: 70 },
        { width: 90, height: 90, marginTop: 30 },
        { width: 100, height: 100 },
        { width: 70, height: 70, marginLeft: widthPercentageToDP(15) },
        { width: 60, height: 60, marginTop: -75, marginLeft: 30 },
        { width: 100, height: 100, marginTop: -25, marginLeft: -30 },
        { width: 70, height: 70 },
        { width: 90, height: 90 },
    ]
    const selectData = [
        { marginLeft: widthPercentageToDP(15), marginTop: heightPercentageToDP(2), backgroundColor: '#FF9850', id: '1', skill: 'Science' },
        { marginLeft: widthPercentageToDP(65), backgroundColor: '#DF35E5', marginTop: 15, id: '2', skill: 'GK' },
        { marginTop: widthPercentageToDP(5), backgroundColor: '#39D7B8', marginLeft: widthPercentageToDP(35), id: '3', skill: 'Entertainment' },
        { marginTop: heightPercentageToDP(2), backgroundColor: '#7EE371', marginLeft: widthPercentageToDP(70), id: '4', skill: 'Business' },
        { marginLeft: widthPercentageToDP(0), backgroundColor: '#2B8DEB', marginTop: -50, id: '5', skill: 'IT' },
        { marginLeft: widthPercentageToDP(30), backgroundColor: '#7C4DEB', marginTop: 55, bottom: 20, id: '6', skill: 'Sport' },
    ]
    const selectRender = ({ item }) => {
        return (
            <Animated.View style={[{ flex: 1 }, {
                transform: [
                    {
                        translateY: animated.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -600]
                        })
                    },

                    {
                        rotate: animated.interpolate({

                            inputRange: [0, 1],
                            outputRange: ['10deg', '10deg']
                        })
                    },
                    {
                        translateX: animated.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -300]
                        })
                    },
                    {
                        scale: animated.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0]
                        })
                    },
                ]
            }]}>
                <TouchableOpacity onPress={() => ShowImageBtn(item.id)} style={{ width: showImage === item.id ? 100 : 90, height: showImage === item.id ? 100 : 90, borderRadius: 50, backgroundColor: item.backgroundColor, marginTop: item.marginTop, marginLeft: item.marginLeft, bottom: item.bottom, elevation: showImage === item.id ? 10 : 0, shadowColor: 'rgba(5, 99, 100, 1)', justifyContent: 'center', alignItems: 'center', padding: 3 }}>
                    {showImage === item.id ? <ImageBackground style={{ width: showImage === item.id ? 100 : 90, height: showImage === item.id ? 100 : 90, borderRadius: 60, resizeMode: 'contain', overflow: 'hidden' }} source={ImagePath.Swiper2} >
                        <View style={{ backgroundColor: 'rgba(45, 47, 188, 0.25)', height: 98, width: 98, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', lineHeight: 19, color: 'white', }}>{item.skill}</Text>

                        </View>
                    </ImageBackground> : <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', lineHeight: 19, color: 'white', }}>{item.skill}</Text>
                    }
                </TouchableOpacity>
            </Animated.View>
        )
    }
    const renderItem = ({ item }) => {
        return (
            <Animated.View style={[{ margin: 10, backgroundColor: 'rgba(235, 229, 232, 0.56)', borderRadius: 50, width: item.width, height: item.height, marginLeft: item.marginLeft, marginTop: item.marginTop }, {
                transform: [
                    {
                        translateY: animated.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 600]
                        })
                    },

                    {
                        rotate: animated.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['10deg', '10deg']
                        })
                    },
                    {
                        translateX: animated.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 300]
                        })
                    },
                    {
                        scale: animated.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0]
                        })
                    },
                ]
            }]}></Animated.View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', lineHeight: 19, color: 'black', marginTop: 20 }}>SELECT SKILLS</Text>
            <FlatList
                numColumns={3}
                data={Data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
            <View style={{ position: 'absolute', width: '100%', top: 115, }}>
                <FlatList
                    //   numColumns={1}
                    data={selectData}
                    renderItem={selectRender}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            {showImage ? <Animated.View style={[{ position: 'absolute', width: '100%', bottom: 10, justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 15 }, {
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
                            outputRange: [-200, 0]
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
                <TouchableOpacity onPress={ startAnimation2() } style={{ backgroundColor: 'blue', width: 100, padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                <TouchableOpacity onPress={()=>navigation.navigate("BottomTab")}>
                <Icon name="corner-down-right" size={25} color="white" />
                </TouchableOpacity>
                </TouchableOpacity>
            </Animated.View> : ''}

            {/* <TouchableOpacity onPress={() => {
                startAnimation()
                setBtnClick(!btnClick)
            }} style={[
                {
                    width: '90%', alignSelf: 'center',
                    marginTop: 30, backgroundColor: 'black',
                    borderRadius: 15, height: 45,
                    justifyContent: 'center', alignItems: 'center'
                }
            ]}

            >
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>PRESS</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({})