
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Activity(props, { navigation }) {
    const Data = [
        { colors: ['#E8E8E836', '#E8E8E836'] },
        { colors: ['#E8E8E836', '#E8E8E836'] },
        { colors: ['#E8E8E836', '#E8E8E836'] },
        { colors: ['#E8E8E836', '#E8E8E836'] },
        { colors: ['#E8E8E836', '#E8E8E836'] },
    ];
    const renderItem = ({ item, }) => {
        return (
            <TouchableOpacity  style={{ marginVertical: 10, marginHorizontal: 15, }}>
                <LinearGradient style={{
                    width: '100%', height: 120, alignItems: 'flex-start',
                    paddingHorizontal: 10, justifyContent: 'flex-end', borderRadius: 15,
                }}
                    colors={item.colors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '65%', height: 120, paddingHorizontal: 5 }}>
                            <Text style={styles.subCategory}>Digital Marketing</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                <Image style={styles.skillIcon} source={require('../assets/image/skillIcon.png')} />
                                <Text style={styles.Category}>IT</Text>
                                <View style={{ marginLeft: 10, alignItems: 'center' }}>
                                    <Text style={styles.Category}>Question: 20</Text>
                                </View>
                            </View>
                            <Text style={styles.time}>05:00 minutes</Text>
                        </View>
                        <View style={{ width: '35%', height: 120 }}>
                            <Image style={styles.subDataImg} source={ImagePath.subDataImg} />
                        </View>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
    return (
        <SafeAreaView style={styles.mainContent}>
            <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
            <LinearGradient colors={[
                // 'rgba(138, 136, 144, 1)', 'rgba(109, 108, 114, 0.8)','rgba(109, 108, 114, 0.5)'
                '#E8E8E836', '#E8E8E836'
            ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.headerMainContent}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack('')} style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
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
                    <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>Activity</Text>
                </View>
            </LinearGradient>
                <ScrollView>
                    <View style={{ flex: 1, justifyContent: 'center', marginTop: 15 }}>
                        <FlatList
                            data={Data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                 
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: 'white'
    },
    skillIcon: {
        resizeMode: 'contain', width: 20, height: 20,
        tintColor: 'white'
    },
    subCategory: {
        fontSize: 20, fontWeight: 'bold',
        color: 'white', marginTop: 25, lineHeight: 26
    },
    Category: {
        fontSize: 14, fontWeight: 'bold',
        color: 'white', marginLeft: 8, lineHeight: 13
    },
    time: {
        fontSize: 12, fontWeight: '700',
        color: 'white', lineHeight: 13, marginTop: 6
    },
    subDataImg: {
        resizeMode: 'contain', bottom: -10
    },
    selectText: {
        fontSize: 20, color: 'white',
        fontWeight: 'bold', lineHeight: 21
    },
    subText: {
        fontSize: 14, color: 'white',
        fontWeight: '700', lineHeight: 15, marginTop: 5
    },
    headerMainContent: {
         width: '100%',
        height: 140, borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, paddingHorizontal: 15,
        elevation: 0, shadowColor: 'black'
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between',
        marginTop: 10
    },
    projectName: {
        color: 'white', fontSize: 17, fontWeight: 'bold',
    },
    // userName: {
    //     color: 'white', fontSize: 14, fontWeight: 'bold'
    // },
})