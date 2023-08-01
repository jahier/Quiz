import { Animated, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export default function Demo() {
    const [select,setSelect]=useState()
    const selectBtn=(id)=>{
        setSelect(id)
    }
    const selectData = [
        {marginLeft:widthPercentageToDP(0),marginTop:heightPercentageToDP(5),backgroundColor:'#FF9850',id:'1'},
        {marginLeft:widthPercentageToDP(0),backgroundColor:'#DF35E5',marginTop:0,id:'2'},
        {marginLeft:widthPercentageToDP(0),backgroundColor:'#39D7B8',marginLeft:widthPercentageToDP(0),id:'3'},
        {marginTop:heightPercentageToDP(0),backgroundColor:'#7EE371',marginLeft:widthPercentageToDP(0),id:'4'},
        {marginLeft:widthPercentageToDP(0),backgroundColor:'#2B8DEB',marginTop:0,id:5},
        {marginLeft:widthPercentageToDP(0),backgroundColor:'#7C4DEB',id:'6'},
    ]


    const animated = useRef(new Animated.Value(0)).current;
    const [btnClick, setBtnClick] = useState(false)
    const startAnimation = () => {
        Animated.spring(animated, {
            toValue: btnClick ? 0 : 0,
            useNativeDriver: true,
        }).start();
    }
    useEffect(() => {
        setTimeout(() => {
            startAnimation()
            setBtnClick(!btnClick)
        }, 500)
    })
    const selectRender = ({ item }) => {
        return (
            <Animated.View style={{transform: [
                {
                    translateY: animated.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 30]
                    })
                },
              
                {
                    rotate: animated.interpolate({
                        inputRange: [0, 0],
                        outputRange: ['0deg', '100deg']
                    })
                },
                {
                    translateX: animated.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 0]
                    })
                },
                {
                    scale: animated.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0]
                    })
                },
            ]}}>
                <TouchableOpacity onPress={()=>selectBtn(item.id)} style={{ width:select===item.id?100: 70, height:select===item.id?100: 70, borderRadius: 50, backgroundColor: item.backgroundColor, marginTop: item.marginTop, marginLeft: item.marginLeft }}>

                </TouchableOpacity>
            </Animated.View>
        )
    }
    return (
        <View style={{ flex: 1,backgroundColor:'pink' }}>
            <View style={{ width: '100%',marginTop:40,justifyContent:'center',alignItems:'center' }}>
                <FlatList
                numColumns={3}
                    data={selectData}
                    renderItem={selectRender}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({})