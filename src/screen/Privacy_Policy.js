import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ImageBackground, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LottieView from 'lottie-react-native';

export default function Privacy_Policy() {
    const [show, setShow] = useState(false)
    const toggleItemSelection = (itemId) => {
        // if (show.includes(itemId)) {
        //     setShow(show.filter((id) => id !== itemId));
        // } else {
        //     setShow([...show, itemId]);
        // }
        setShow(itemId)
    };
    const Data = [
        {id:'1'}, {id:'2'}, {id:'3'}, {id:'4'},
    ]
    const renderItem = ({ item }) => {
        return (
            <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
                <View style={styles.mainLoremContent}>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'white' }}>What is Lorem Ipsum?</Text>
                    <TouchableOpacity style={{width:100,alignItems:'flex-end'}} onPress={()=>toggleItemSelection(item.id)}>
                        {show===item.id?
                        <Icon3 name="chevron-thin-up" size={20} color="white" />:
                        <Icon3 name="chevron-thin-down" size={20} color="white" />}
                    </TouchableOpacity>
                    
                </View>
                {show===item.id&&
                <View style={{backgroundColor:'white',paddingHorizontal:15,paddingVertical:5}}>
                <Text style={{ fontSize: 13, fontWeight: '400', color: 'black' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </View>
                }
            </View>
        )
    }
    return (
        <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
            <LinearGradient colors={[
                // 'rgba(138, 136, 144, 1)', 'rgba(109, 108, 114, 0.8)','rgba(109, 108, 114, 0.5)'
                '#E8E8E836', '#E8E8E836'
            ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.headerMainContent}>
                <View style={styles.headerContent}>
                    <TouchableOpacity style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
                        <Icon3 name="chevron-thin-left" size={17} color="white" />
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center', marginLeft: 15 }}>
                        <Text style={styles.projectName}>LEARNO</Text>

                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#666666', width: 30, height: 30, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}>
                        <Icon3 name="bell" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>Privacy Policy</Text>
                </View>
            </LinearGradient>

            <View style={{ flex: 1, marginTop: 0 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headerMainContent: {
        width: '100%',
        height: 120, borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, paddingHorizontal: 15,
        elevation: 10, shadowColor: 'black'
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between',
        marginTop: 10
    },
    projectName: {
        color: 'white', fontSize: 17, fontWeight: 'bold',
    },
    mainLoremContent: {
        paddingVertical: 10, justifyContent: 'space-between',
        flexDirection: 'row', alignItems: 'center',
        width: '100%', paddingHorizontal: 15,
        backgroundColor: '#E8E8E836'
    },
})