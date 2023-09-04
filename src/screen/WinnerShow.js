import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ImageBackground, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import Icon3 from 'react-native-vector-icons/Entypo';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

export default function WinnerShow({navigation}) {


    return (
        <ImageBackground source={ImagePath.homeBackground} style={styles.mainContent}>
            <View style={styles.headerMainContent}>
                <View style={styles.headerContent}>
                    <TouchableOpacity style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
                        <Icon3 name="chevron-thin-left" size={17} color="white" />
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <Text style={styles.projectName}>LEARNO</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:25 }}>
                    <ImageBackground style={{ width: 130, height: 130, justifyContent: 'center', alignItems: 'center' }} source={require('../assets/image/groupWinnerImg.png')}>
                        <Text style={{ fontSize: 12, color: '#172866', fontWeight: '700', lineHeight: 14 }}>Your Score</Text>
                        <Text style={{ fontSize: 16, color: '#172866', fontWeight: 'bold', lineHeight: 20 }}>150 pts</Text>
                    </ImageBackground>
                </View>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
                <View style={{ width: '100%', height: 400, backgroundColor: '#E8E8E836', elevation: 10, marginTop: 15, borderRadius: 15 }}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ width: '50%', flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View>
                                <View style={{ width: 15, height: 15, backgroundColor: 'white', borderRadius: 20 }}></View>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, color: 'white', fontWeight: '700', lineHeight: 16 }}>20</Text>
                                <Text style={{ fontSize: 15, color: 'white', fontWeight: '400', lineHeight: 16 }}>Total Questions</Text>
                            </View>

                        </View>
                        <View style={{ width: '50%', flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View>
                                <View style={{ width: 15, height: 15, backgroundColor: 'white', borderRadius: 20 }}></View>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, color: 'white', fontWeight: '700', lineHeight: 16 }}>100%</Text>
                                <Text style={{ fontSize: 15, color: 'white', fontWeight: '400', lineHeight: 16 }}>Completion</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <View style={{ width: '50%', flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View>
                                <View style={{ width: 15, height: 15, backgroundColor: '#1F8435', borderRadius: 20 }}></View>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, color: '#1F8435', fontWeight: '700', lineHeight: 16 }}>15</Text>
                                <Text style={{ fontSize: 15, color: 'white', fontWeight: '400', lineHeight: 16 }}>Correct</Text>
                            </View>
                        </View>
                        <View style={{ width: '50%', flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View>
                                <View style={{ width: 15, height: 15, backgroundColor: '#FF2626', borderRadius: 20 }}></View>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, color: '#FF2626', fontWeight: '700', lineHeight: 16 }}>05</Text>
                                <Text style={{ fontSize: 15, color: 'white', fontWeight: '400', lineHeight: 16 }}>Wrong</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
                        <View style={styles.btnContent}>
                            <TouchableOpacity onPress={()=>navigation.navigate('SingleMode')} style={{ width: 50, height: 50, borderRadius: 30, backgroundColor: '#655252',
                            justifyContent:'center',alignItems:'center' }}>
                                <Icon1 name="replay" size={20} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.btnText}>Play Again</Text>
                        </View>
                        <View style={styles.btnContent}>
                            <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 30, backgroundColor: '#BB3D5B',
                            justifyContent:'center',alignItems:'center' }}>
                                <Icon2 name="eye" size={23} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.btnText}>Review Answer</Text>
                        </View>
                        <View style={styles.btnContent}>
                            <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 30, backgroundColor: '#777FA5',
                            justifyContent:'center',alignItems:'center' }}>
                                <Icon2 name="share" size={25} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.btnText}>Share Score</Text>
                        </View>

                    </View>
                </View>

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
    },
    btnContent: {
        justifyContent: 'center', alignItems: 'center', width: '33.33%'
    },
    btnText:{
        fontSize:13,color:'white',fontWeight:'500',lineHeight:14,marginTop:15
    },
    CountdownCircleTimer: {
        justifyContent: 'center', alignItems: 'center',
        bottom: 50
    },
    questionCountText: {
        fontSize: 15, color: '#172866',
        textAlign: 'center', fontWeight: '700', marginTop: 10
    },
    lorem: {
        fontSize: 15, color: '#000000',
        // textAlign:'center',
        fontWeight: '600'
    },
    whiteModal: {
        width: '100%', height: 170,
        backgroundColor: 'white',
        elevation: 10, shadowColor: 'black',
        bottom: 80, borderRadius: 15
    },
    headerMainContent: {
        backgroundColor: '#E8E8E836', width: '100%',
        height: 250, borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15, paddingHorizontal: 15,
        elevation:0, shadowColor: 'black'
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    projectName: {
        color: 'white', fontSize: 30, fontWeight: 'bold', bottom: 6,
        marginRight: 20
    },
    userName: {
        color: 'white', fontSize: 14, fontWeight: 'bold'
    },





    countdownText: {
        fontSize: 36,
        color: '#172866',
    },

})