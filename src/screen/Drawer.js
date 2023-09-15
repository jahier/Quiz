import React,{useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ImagePath from '../assets/ImagePath'

const Drawer = ({route}) => {
   
    return (
        <View style={{ flex: 1 }}>

            <View>
                <Image
                    style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 60, marginTop: 30,}}
                    source={ImagePath.swiper1} />
                   <View>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>name</Text>
                <Text style={{ fontSize: 18 ,left:20,color:'black'}}>zaheer</Text>
                </View>
                <Text style={{ fontSize: 18 ,left:20,color:'black'}}>khan</Text>

            </View>
        
        </View>
    )
}

export default Drawer

const styles = StyleSheet.create({})