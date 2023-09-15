import { StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground, } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

export default function Notifications(props) {
    const Data = [
        {}, {}, {},    {}, {}, {},    {}, {}, {},    {}, {}, {},
    ]
    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity style={{ paddingHorizontal: 15, marginVertical: 10 }}>
                    <LinearGradient colors={[
                        '#E8E8E836', '#E8E8E836'
                    ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.NotificationsBox}>
                        <Text style={styles.label}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                            <View style={{marginTop:10,alignItems:'flex-end'}}>
                                <Text style={{fontSize: 10, fontWeight: '400',color: '#C1C0C4',}}>2 min ago</Text>
                            </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
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
                        <Text style={{ fontSize: 24, fontWeight: '700', color: 'white', lineHeight: 32 }}>Notifications</Text>
                        <Text style={styles.label}>You have 3 notifications today</Text>

                    </View>
                </LinearGradient>

                <View style={{ flex: 1 }}>
                    <FlatList
                        data={Data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: 'white'
    },
    NotificationsBox: {
        width: '100%', height: 100, borderRadius: 15, padding: 10
    },
    changePasswordBtn: {
        width: '100%', height: 35, backgroundColor: 'black',
        borderWidth: 0.5, borderColor: '#666666',
        shadowColor: 'white', elevation: 5, borderRadius: 20,
        justifyContent: 'center', alignItems: 'center'
        , paddingHorizontal: 15
    },
    CategoryBox: {
        width: 130, height: 130,
        borderRadius: 20,
        borderWidth: 0.5, borderColor: '#666666',
    },
    subText: { fontSize: 12, fontWeight: '400', color: '#FFFFFF', textAlign: 'center' },
    coin: { fontSize: 15, fontWeight: '700', color: '#FFFFFF', marginTop: 7 },
    coinImage: {
        width: 20, height: 20, resizeMode: 'contain', alignSelf: 'center'
    },
    selectText: {
        fontSize: 16, color: 'white',
        fontWeight: '700', lineHeight: 17
    },
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
    userName: {
        color: 'white', fontSize: 14, fontWeight: 'bold'
    },
    editBtn: {
        width: 200, height: 40, justifyContent: 'center',
        alignItems: 'center', backgroundColor: 'black', borderRadius: 20,
        elevation: 5, shadowColor: 'white', borderWidth: 0.5, borderColor: '#666666',
    },
    twoBox: {
        width: 130, height: 130, justifyContent: 'center',
        alignItems: 'center', borderRadius: 20,
        borderWidth: 0.5, borderColor: '#666666',
    },
    label: {
        fontSize: 12, fontWeight: '600',
        color: '#C1C0C4',
    },
    forgetPassword: {
        fontSize: 12, fontWeight: '600',
        color: '#0267FF', marginTop: 20, textAlign: 'center'
    },
    TextInput: {
        borderBottomWidth: 0.5, borderColor: '#C1C0C4', height: 40,
        fontSize: 14, fontWeight: '700',
    },
    passwordBtnText: {
        fontSize: 12, fontWeight: '600', color: '#C1C0C4',
    },

    placeholderStyle: {
        fontSize: 14, fontWeight: '700',
        paddingLeft: 8,
        color: '#E0E0E0'
    },
    selectedTextStyle: {
        fontSize: 14, fontWeight: '700',
        paddingLeft: 5,
        color: 'white'
    },

    inputSearchStyle: {
        height: 40,
        fontSize: 12,
        backgroundColor: 'rgba(160,156,191,0.25)',


    },
})