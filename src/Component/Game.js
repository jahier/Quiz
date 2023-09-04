
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from 'react-native-modal';

export default function Game(props, { navigation }) {
    const { closeBottomSheet, bottomSheetRef } = props;
    const [select, setSelect] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [walletPay, setWalletPay] = useState('20')
    const [onClickData, setOnClickData] = useState('')
    const [prizeShow, SetPrizeShow] = useState(false)
    const prizeBtn = (id) => {
        SetPrizeShow(id)
    }
    const Data = [
        { colors: ['#E8E8E836', '#E8E8E836'], prize: '10', winningPrize: '16', id: '1' },
        { colors: ['#E8E8E836', '#E8E8E836'], prize: '20', winningPrize: '32', id: '2' },
        { colors: ['#E8E8E836', '#E8E8E836'], prize: '50', winningPrize: '80', id: '3' },
        { colors: ['#E8E8E836', '#E8E8E836'], prize: '100', winningPrize: '160', id: '4' },
        { colors: ['#E8E8E836', '#E8E8E836'], prize: '200', winningPrize: '320', id: '5' },
        { colors: ['#E8E8E836', '#E8E8E836'], prize: '500', winningPrize: '800', id: '7' },
        { colors: ['#E8E8E836', '#E8E8E836'], prize: '1000', winningPrize: '1600', id: '8' },


    ];
    const Data2 = [
        { id: '1', pay: 10 },
        { id: '2', pay: 20 },
        { id: '3', pay: 50 },
        { id: '4', pay: 100 },
        { id: '5', pay: 200 },
        { id: '6', pay: 500 },
        { id: '7', pay: 1000 },

    ];
    const handleItemPress = (userPay) => {
        const selectedUser = Data2.find((data) => data.id === userPay);
        setOnClickData(selectedUser)
    };
    const openModal = () => {
        setModalVisible(true)
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    const selectBtn = (id) => {
        setSelect(id)
        handleItemPress()
    }



    const renderItem = ({ item, }) => {
        return (
            <TouchableOpacity onPress={props.onPress} style={{ marginVertical: 10, marginHorizontal: 15, }}>
                <LinearGradient style={{
                    width: '100%', height: 120, alignItems: 'flex-start',
                    paddingHorizontal: 10, justifyContent: 'flex-end', borderRadius: 15,
                }}
                    colors={item.colors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '65%', height: 120, paddingHorizontal: 5 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                <Text style={styles.subCategory}>Entry Fees: {item.prize}</Text>
                                <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginLeft: 5 }} source={require('../assets/image/coin.png')} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0 }}>
                                <Text style={styles.subCategory}>Winning Prize: {item.winningPrize}</Text>
                                <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginLeft: 5 }} source={require('../assets/image/coin.png')} />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                <Image style={styles.skillIcon} source={require('../assets/image/skillIcon.png')} />
                                <Text style={styles.Category}>IT</Text>
                                <View style={{ marginLeft: 10, alignItems: 'center', flexDirection: 'row', }}>
                                    <Image style={styles.skillIcon} source={require('../assets/image/skillIcon.png')} />
                                    <Text style={styles.Category}>Digital Marketing</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '35%', height: 120 }}>
                            {
                                props.prizeBtn && (
                                    <View>
                                        <TouchableOpacity onPress={() => prizeBtn(item.id)} style={{ borderRadius: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5, marginTop: 20 }}>
                                            <Text style={{ fontSize: 12, color: '#000000', fontWeight: '700' }}>View all Prices</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                            {
                                prizeShow === item.id && (
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 13, marginTop: 4, color: 'white', fontWeight: '700' }}>RANK   PRIZE</Text>
                                        <Text style={{ fontSize: 13, marginTop: 0, color: 'white', fontWeight: '700' }}>1      :     12</Text>
                                    </View>
                                )
                            }
                        </View>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
    return (
        <SafeAreaView style={styles.mainContent}>
            <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
                <View style={styles.headerMainContent}>
                    <View style={styles.headerContent}>
                        <TouchableOpacity style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
                            <Icon3 name="chevron-thin-left" size={17} color="white" />
                        </TouchableOpacity>

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.projectName}>LEARNO</Text>

                        </View>
                        <TouchableOpacity style={{ backgroundColor: 'white', width: 30, height: 30, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}>
                            <Icon3 name="bell" size={20} color="#172866" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 0, marginTop: 10 }}>
                        <View style={{ width: 60, height: 60, borderRadius: 40, alignSelf: 'center', }}>
                            <Image style={{ resizeMode: 'contain', width: 60, height: 60, borderRadius: 40 }} source={ImagePath.myImage} />
                        </View>
                        <View style={{ justifyContent: 'center', marginLeft: 15 }}>
                            <Text style={styles.userName}>Zaheer</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <View style={{ backgroundColor: 'rgba(237, 232, 235, 0.31)', width: 70, height: 35, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon3 name="bar-graph" size={20} color="orange" />
                                    <Text style={{ marginLeft: 10, fontSize: 14, color: 'white', fontWeight: '700' }}>0</Text>
                                </View>
                                <View style={{ backgroundColor: '#E4E3E3', width: 80, height: 35, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, marginLeft: 10, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon3 name="wallet" size={20} color="#172866" />
                                    <Text style={{ marginLeft: 5, fontSize: 14, color: '#172866', fontWeight: '700' }}>₹ {"5000"}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
                        <Text style={styles.selectText}>Let’s Play</Text>
                        <Text style={styles.subText}>Choose a single category</Text>

                    </View>
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
        fontSize: 14, fontWeight: 'bold',
        color: 'white', marginTop: 0, lineHeight: 26
    },
    Category: {
        fontSize: 12, fontWeight: '600',
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
        backgroundColor: '#E8E8E836', width: '100%',
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
    userName: {
        color: 'white', fontSize: 14, fontWeight: 'bold'
    },
})