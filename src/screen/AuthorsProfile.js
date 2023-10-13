import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ImagePath from '../assets/ImagePath'
import Icon3 from 'react-native-vector-icons/Entypo';
import LottieView from 'lottie-react-native';

export default function AuthorsProfile({ navigation }) {
    const [select, setSelect] = useState(false)
    const selectBtn = () => {
        setSelect(!select)
    }
    const [btnSELECT, setBtnSELECT] = useState('1')
    const handelBtn = (id) => {
        setBtnSELECT(id)
    }
    const Data = [
        {}, {}, {}, {}, {}, {}, {}, {},
    ]
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center', flex: 1, marginVertical: 30 }}>
                <ImageBackground style={{ width: '100%', height: 300 }} source={ImagePath.swiper1} resizeMode='cover'>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 50 }}>
                        <View style={{ width: '20%', paddingLeft: 15 }}>
                            <Image style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 30 }} source={ImagePath.myImage} />
                        </View>
                        <View style={{ width: '80%', paddingHorizontal: 15, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: '#FFFFFF', }}>Achieve Success Coachingeer</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', paddingLeft: 15 }}>
                        <Text style={styles.eventDay}>day:</Text>
                    </View>
                    <View style={{ width: '85%', justifyContent: 'center' }}>
                        <Text style={styles.eventDay}>SAT</Text>
                    </View>
                </View>
                <View style={{ marginTop: 7, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', paddingLeft: 15 }}>
                        <Text style={styles.eventDay}>month:</Text>
                    </View>
                    <View style={{ width: '85%', justifyContent: 'center' }}>
                        <Text style={styles.eventDay}>NOVEMBER</Text>
                    </View>
                </View>
                {/* <TouchableOpacity onPress={() => navigation.navigate('EventDetails')} style={styles.EventBtn}>
                    <View style={styles.eventDetailsContent}>
                        <Text style={styles.eventDay}>SAT</Text>
                        <Text style={styles.eventDate}>22</Text>
                        <Text style={styles.eventMonth}>NOVEMBER</Text>
                        <View style={styles.timeContent}>
                            <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon3 name="back-in-time" size={17} color="#001345" />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%' }}>
                                <Text style={styles.eventTime}>{'18:00'}-{'20:00'}</Text>
                            </View>
                        </View>
                        <View style={styles.timeContent}>
                            <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={styles.WinnerCup} source={ImagePath.trophyIcon} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%' }}>
                                <Text style={styles.eventWinnerPrize}>1000</Text>
                                <LottieView style={{ width: 30, height: 25 }} source={require('../assets/image/coinWithdraaw.json')} autoPlay loop />
                            </View>
                        </View>


                    </View>
                    <View style={styles.eventNamesContent}>
                        <View style={{ padding: 10 }}>
                            <Text style={styles.eventSeats}>500 Seats</Text>
                        </View>
                        <View style={{ paddingHorizontal: 15, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <Text style={styles.eventName}>LEARNO MEGA EVENT </Text>

                        </View>
                    </View>
                </TouchableOpacity> */}
            </View>
        )
    }
    return (
        <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigation.goBack('')} style={{ alignSelf: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                    <Icon3 name="chevron-thin-left" size={18} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.userProfileContent}>
                <Image style={styles.userProfile} source={ImagePath.myImage} />
            </View>
            <Text style={styles.userName}>Achieve Success Coachingeer</Text>

            <View style={styles.followersContent}>
                <View style={styles.followTextContent}>
                    <Text style={styles.followText}>Followers</Text>
                    <Text style={styles.followCount}>150</Text>
                </View>
                <View style={styles.followTextContent}>
                    <Text style={styles.followText}>Follow</Text>
                    <Text style={styles.followCount}>150</Text>
                </View>
            </View>

            <View style={{ paddingHorizontal: 15, marginTop: 30 }}>
                <TouchableOpacity onPress={selectBtn} style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: select ? 'rgba(94, 94, 103, 0.65)' : '#1877F2', paddingVertical: 6, borderRadius: 7 }}>
                    <Text style={styles.btnText}>{select ? 'Following' : 'Follow'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.selectBtnContent}>
                <TouchableOpacity onPress={() => handelBtn('1')} style={{ width: '47%', justifyContent: 'center', alignItems: 'center', paddingVertical: 6, borderRadius: 7, borderWidth: 0.5, borderColor: btnSELECT === '1' ? 'white' : 'rgba(94, 94, 103, 0.65)' }}>
                    <Text style={styles.btnText}>Event</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handelBtn('2')} style={{ width: '47%', justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: btnSELECT === '2' ? 'white' : 'rgba(94, 94, 103, 0.65)', paddingVertical: 6, borderRadius: 7 }}>
                    <Text style={styles.btnText}>About</Text>
                </TouchableOpacity>
            </View>

            {btnSELECT === '1' &&
                <View style={{ flex: 1, marginTop: 10 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={Data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>}
            {btnSELECT === '2' &&
                <View>
                    <View style={{ marginTop: 10, paddingHorizontal: 15 }}>
                        <Text style={{ fontSize: 17, fontWeight: '700', color: 'white' }}>Description:</Text>
                    </View>
                    <View style={{ marginTop: 0, paddingHorizontal: 15 }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </View>
                </View>}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headerContent: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#E8E8E836',
        height: 100,
        borderBottomLeftRadius: 20, borderBottomRightRadius: 20
    },
    userProfileContent: {
        width: 100, height: 100,
        alignSelf: 'center', bottom: 50,
        backgroundColor: 'white', borderRadius: 50,
        justifyContent: 'center', alignItems: 'center',
    },
    userProfile: {
        width: 95, height: 95,
        borderRadius: 50, resizeMode: 'contain'
    },
    followersContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    followTextContent: {
        width: '50%', justifyContent: 'center',
        alignItems: 'center'
    },
    followText: {
        fontSize: 12, fontWeight: '400',
        color: '#FFFFFF',

    },
    followCount: {
        fontSize: 14, fontWeight: '600',
        color: '#FFFFFF', textAlign: 'center'
    },
    btnText: {
        fontSize: 16, fontWeight: '600',
        color: '#FFFFFF'
    },
    userName: {
        fontSize: 20, fontWeight: '700',
        color: '#FFFFFF', textAlign: 'center',
        bottom: 30
    },
    selectBtnContent: {
        marginTop: 15, flexDirection: 'row',
        justifyContent: 'space-between',

        paddingHorizontal: 15, paddingVertical: 4,
        width: '95%', alignSelf: 'center', borderRadius: 10
    },
    EventBtn: {
        flexDirection: 'row', paddingHorizontal: 15, marginVertical: 0
    },
    eventDetailsContent: {
        width: '40%', backgroundColor: 'white',
        borderTopLeftRadius: 15, borderBottomLeftRadius: 15, paddingVertical: 15
    },
    eventNamesContent: {
        width: '60%', backgroundColor: '#E8E8E836',
        borderTopRightRadius: 15, borderBottomRightRadius: 15
    },
    eventDay: {
        fontSize: 14, fontWeight: '700', color: '#FFFFFFFF',
        //  textAlign: 'center'
    },
    eventDate: {
        fontSize: 24, fontWeight: '700', color: '#001345', textAlign: 'center'
    },
    eventMonth: {
        fontSize: 12, fontWeight: '700', color: '#001345', textAlign: 'center'
    },
    timeContent: {
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center', paddingHorizontal: 15
    },
    eventTime: {
        fontSize: 12, fontWeight: '700', color: '#001345', textAlign: 'center'
    },
    WinnerCup: {
        width: 17, height: 17, resizeMode: 'contain'
    },
    eventWinnerPrize: {
        fontSize: 14, fontWeight: '700', color: '#001345', textAlign: 'center',
    },
    eventSeats: {
        fontSize: 12, fontWeight: '400', color: 'white', textAlign: 'right',
    },
    eventName: {
        fontSize: 20, fontWeight: '600', color: 'white',
    }

})