import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImagePath from '../assets/ImagePath'
import LinearGradient from 'react-native-linear-gradient'
import Icon3 from 'react-native-vector-icons/Entypo';
import { Image } from 'react-native-animatable';
import LottieView from 'lottie-react-native';

export default function Event({navigation}) {
    const Data = [
        {}, {}, {}, {}, {}, {}, {}, {},
    ]
    const renderItem = ({ item }) => {
        return (
            <View style={{marginTop:10,justifyContent:'center',alignItems:'center',flex:1}}>
                <TouchableOpacity onPress={()=>navigation.navigate('EventDetails')} style={styles.EventBtn}>
                    <View style={styles.eventDetailsContent}>
                        {/* <Text style={styles.eventDay}>SAT</Text> */}
                        <Text style={styles.eventDate}>22</Text>
                        <Text style={styles.eventMonth}>NOVEMBER</Text>
                        <View style={styles.timeContent}>
                            {/* <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon3 name="back-in-time" size={17} color="#001345" />
                            </View> */}
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%' }}>
                                <Text style={styles.eventTime}>{'18:00'}-{'20:00'}</Text>
                            </View> */}
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
                        <View style={{ paddingHorizontal: 8, justifyContent: 'center', alignItems: 'center', marginTop:10 }}>
                            <Text style={styles.eventName}>LEARNO MEGA EVENT </Text>

                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <ImageBackground style={styles.bacImg} source={ImagePath.homeBackground}>
           
                <View style={styles.headerContent}>
                    <TouchableOpacity style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
                        <Icon3 name="chevron-thin-left" size={17} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:0 }}>
                    <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>Events</Text>
                </View>
           
            <View style={{ flex: 1, marginTop: 20 }}>
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
    bacImg: {
        flex: 1
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
    EventBtn: {
        flexDirection: 'row', paddingHorizontal: 15, marginVertical:0
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
        fontSize: 14, fontWeight: '700', color: '#001345', textAlign: 'center'
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
        alignSelf: 'center', paddingHorizontal: 15,
        marginTop:2
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
        fontSize: 17, fontWeight: '600', color: 'white',
    }

})