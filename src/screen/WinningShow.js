import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from 'react-native-modal';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function WinningShow(props) {
    const [Data, setData] = useState(props.route.params.data)
    console.log('=-=-=-=-=========>>>>', Data);
    const navigation = () => {
        props.navigation.navigate('PlayTyp', { data: Data })
    }

    const Data2 = [
        { id: '1', rank: '1', winningPrize: '80' }, { id: '2', rank: '2', winningPrize: '40' },
        { id: '3', rank: '3', winningPrize: '30' }, { idL: '4', rank: '4', winningPrize: '0' },
    ];
    const renderItem2 = ({ item, }) => {
        return (
            <View style={{ paddingVertical: 10, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, fontWeight: '700', color: 'white', }}>{item.rank}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontWeight: '700', color: 'white', }}>{item.winningPrize}</Text>
                        <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginLeft: 5 }} source={require('../assets/image/coin.png')} />
                    </View>
                </View>
            </View>
        );
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ImageBackground style={{
                flex: 1,
                //  justifyContent: 'center', alignItems: 'center' 
            }} source={ImagePath.homeBackground}>
                <LinearGradient colors={[
                    // 'rgba(138, 136, 144, 1)', 'rgba(109, 108, 114, 0.8)','rgba(109, 108, 114, 0.5)'
                    '#E8E8E836', '#E8E8E836'
                ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.headerMainContent}>

                    <View style={styles.headerContent}>
                        <TouchableOpacity style={{ width: 30, height: 30, alignSelf: 'flex-start', alignItems: 'center' }}>
                            <Icon name="menu" size={25} color="white" />
                        </TouchableOpacity>

                        <View style={{ alignItems: 'center', width: '20%', marginLeft: 40 }}>
                            <Text style={styles.projectName}>LEARNO</Text>

                        </View>
                        <View style={{ flexDirection: 'row', width: '18%' }}>
                            <TouchableOpacity style={{ backgroundColor: '#666666', width: 30, height: 30, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                                <Icon name="search" size={20} color="white" />

                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#666666', width: 30, height: 30, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}>
                                <Icon3 name="bell" size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 0, marginTop: 10 }}>
                        <View style={{ width: 50, height: 50, borderRadius: 40, alignSelf: 'center', }}>
                            <Image style={{ resizeMode: 'contain', width: 50, height: 50, borderRadius: 40 }} source={ImagePath.myImage} />
                        </View>
                        <View style={{ justifyContent: 'center', marginLeft: 15 }}>
                            <Text style={styles.userName}>Zaheer</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5, width: '100%' }}>

                                <View style={{ backgroundColor: '#666666', width: 80, height: 30, borderTopRightRadius: 0, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, marginLeft: 0, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="wallet-outline" size={16} color="white" />
                                    <Image style={{ width: 13, height: 13, resizeMode: 'contain', marginLeft: 5 }} source={require('../assets/image/coin.png')} />
                                    <Text style={{ marginLeft: 5, fontSize: 12, color: 'white', fontWeight: '700' }}>{"5000"}</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </LinearGradient>
                {/* <View style={{
                    width: '100%', height: heightPercentageToDP(100),
                    backgroundColor: 'rgba(59, 67, 72, 0.47)'
                }}> */}
                <View style={{ paddingHorizontal: 25, marginTop: 100 }}>
                    <View style={{
                        backgroundColor: 'rgba(150, 150, 166, 0.71)',
                        width: '100%',
                        height: 300, paddingVertical: 15,
                        paddingHorizontal: 0, borderRadius: 15,
                    }}>
                        <Text style={{ fontSize: 14, fontWeight: '700', color: 'white', marginLeft: 15 }}>Winnings</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 0.5, borderTopColor: 'gray', borderBottomWidth: 0.5, borderBottomColor: 'gray', height: 30, marginTop: 15, alignItems: 'center', paddingHorizontal: 15 }}>
                            <Text style={{ fontSize: 12, fontWeight: '500', color: 'white', }}>Rank</Text>
                            <Text style={{ fontSize: 12, fontWeight: '500', color: 'white', }}>Winnings</Text>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={Data2}
                            renderItem={renderItem2}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation()}>
                    <LinearGradient style={{ width: 80, backgroundColor: 'rgba(138, 136, 144, 0.6)', marginTop: 40, borderRadius: 20, paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                        colors={[
                            'rgba(220, 218, 212, 0.3)', 'rgba(220, 218, 212, 0.3)',
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    >

                        <Text style={{ color: 'white', fontSize: 14, fontWeight: '700', textAlign: 'center' }}>Next</Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* </View> */}


            </ImageBackground >
        </View >
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 46, lineHeight: 61,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between',
        marginTop: 10
    },
    profileName: {
        color: 'rgba(8, 8, 8, 1)', fontSize: 14, fontWeight: 'bold', marginLeft: 10
    },
    selectText: { color: '#242220', fontSize: 13, fontWeight: '500', },
    dashboardText: {
        color: '#242220', fontSize: 13, fontWeight: '500', marginLeft: 0

    },
    // historyUser:{},
    profileContent: {
        flexDirection: 'row', marginTop: 10, alignItems: 'center'
    },
    headerMainContent: {
        width: '100%',
        height: 140, borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, paddingHorizontal: 15,
        elevation: 10,
        // backgroundColor:'rgba(34, 32, 63, 0.5)',

    },
})