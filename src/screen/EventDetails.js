import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImagePath from '../assets/ImagePath'
import LinearGradient from 'react-native-linear-gradient'
import Icon3 from 'react-native-vector-icons/Entypo';
import { Image } from 'react-native-animatable';
import LottieView from 'lottie-react-native';

export default function EventDetails({ navigation }) {

    return (
        <ImageBackground style={styles.bacImg} source={ImagePath.homeBackground}>
            <LinearGradient colors={[
                // 'rgba(138, 136, 144, 1)', 'rgba(109, 108, 114, 0.8)','rgba(109, 108, 114, 0.5)'
                '#E8E8E836', '#E8E8E836'
            ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.headerMainContent}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack('')} style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
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
                    <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>LEARNO MEGA EVENT </Text>
                </View>
            </LinearGradient>
            <View style={{ paddingHorizontal: 15, marginTop: 40 }}>
                <ImageBackground style={styles.EventDetailsMainContent} source={require('../assets/image/blueImg.png')} resizeMode='contain'>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, marginTop: 20 }}>
                        <View style={styles.textContent}>
                            <Text style={styles.EventDetailsText}>DATE</Text>
                        </View>

                        <View style={styles.centerContent}>
                            <Text style={styles.projectName}>-</Text>
                        </View>

                        <View style={styles.prizeAndTimeContent}>
                            <Text style={styles.EventDetailsPrize}>12/09/2023</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, marginTop: 10 }}>
                        <View style={styles.textContent}>
                            <Text style={styles.EventDetailsText}>TIME</Text>
                        </View>

                        <View style={styles.centerContent}>
                            <Text style={styles.projectName}>-</Text>
                        </View>

                        <View style={styles.prizeAndTimeContent}>
                            <Text style={styles.EventDetailsPrize}>18:00 - 20:00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, marginTop: 10 }}>
                        <View style={styles.textContent}>
                            <Text style={styles.EventDetailsText}>EVENT FEE</Text>
                        </View>

                        <View style={styles.centerContent}>
                            <Text style={styles.projectName}>-</Text>
                        </View>

                        <View style={styles.prizeAndTimeContentCoin}>
                            <Text style={styles.EventDetailsPrize}>100</Text>
                            <LottieView style={{ width: 20, height: 25 }} source={require('../assets/image/coinWithdraaw.json')} autoPlay loop />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, marginTop: 10 }}>
                        <View style={styles.textContent}>
                            <Text style={styles.EventDetailsText}>WINNING PRIZE</Text>
                        </View>

                        <View style={styles.centerContent}>
                            <Text style={styles.projectName}>-</Text>
                        </View>

                        <View style={styles.prizeAndTimeContentCoin}>
                            <Text style={styles.EventDetailsPrize}>1000</Text>
                            <LottieView style={{ width: 20, height: 25 }} source={require('../assets/image/coinWithdraaw.json')} autoPlay loop />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, marginTop: 10 }}>
                        <View style={styles.textContent}>
                            <Text style={styles.EventDetailsText}>TOTAL SEAT</Text>
                        </View>

                        <View style={styles.centerContent}>
                            <Text style={styles.projectName}>-</Text>
                        </View>

                        <View style={styles.prizeAndTimeContent}>
                            <Text style={styles.EventDetailsPrize}>500</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, marginTop: 10 }}>
                        <View style={styles.textContent}>
                            <Text style={styles.EventDetailsText}>TOTAL QUESTIONS</Text>
                        </View>

                        <View style={styles.centerContent}>
                            <Text style={styles.projectName}>-</Text>
                        </View>

                        <View style={styles.prizeAndTimeContent}>
                            <Text style={styles.EventDetailsPrize}>50</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, marginTop: 10 }}>
                        <View style={styles.textContent}>
                            <Text style={styles.EventDetailsText}>CATEGORY NAME</Text>
                        </View>

                        <View style={styles.centerContent}>
                            <Text style={styles.projectName}>-</Text>
                        </View>

                        <View style={styles.prizeAndTimeContent}>
                            <Text style={styles.EventDetailsPrize}>IT</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, marginTop: 40 }}>
                        <View style={{ paddingHorizontal: 15 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('EventRegistration')} style={styles.btn}>
                                <Text style={styles.btnText}>Enroll</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingHorizontal: 15 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('EventQuiz')} style={styles.btn}>
                                <Text style={styles.btnText}>Play</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </ImageBackground>
            </View>


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bacImg: {
        flex: 1
    },
    headerMainContent: {
        width: '100%', paddingBottom: 15,
        borderBottomLeftRadius: 20,
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
    EventDetailsMainContent: {
        height: 400, borderRadius: 20, overflow: 'hidden', width: '100%'
    },
    textContent: {
        width: '40%',
    },
    centerContent: {
        width: '10%',justifyContent:'center',alignItems:'center'
    },
    prizeAndTimeContent: {
        width: '40%', alignItems: 'flex-end'
    },
    EventDetailsText: {
        color: 'white', fontSize: 12, fontWeight: '600',
    },
    EventDetailsPrize: {
        color: 'white', fontSize: 12, fontWeight: '600',
    },
    prizeAndTimeContentCoin: {
        width: '40%', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end'
    },
    btn: {
        width: 120, paddingVertical: 8, backgroundColor: 'black',
        // borderWidth: 0.5, borderColor: '#666666',
        shadowColor: 'white', elevation: 5, borderRadius: 10,
        justifyContent: 'center', alignItems: 'center',
    },
    btnText: {
        color: 'white', fontSize: 14, fontWeight: '600'
    }

})