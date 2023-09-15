
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


export default function SubData(props, { navigation }) {
    const { closeBottomSheet, bottomSheetRef } = props;
    const [select, setSelect] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [walletPay, setWalletPay] = useState('20')
    const [onClickData, setOnClickData] = useState('')
    const Data = [
        { colors: ['#E8E8E836', '#E8E8E836'] },
        { colors: ['#E8E8E836', '#E8E8E836'] },
        { colors: ['#E8E8E836', '#E8E8E836'] },
        { colors: ['#E8E8E836', '#E8E8E836'] },
        { colors: ['#E8E8E836', '#E8E8E836'] },
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


    const renderItem2 = ({ item, }) => {
        return (
            <View style={{ paddingHorizontal: 3 }}>
                <TouchableOpacity onPress={() => selectBtn(item.id) || openModal() || handleItemPress(item.id)} style={{ backgroundColor: select === item.id ? '#172866' : '#E4E3E6', width: 70, height: 35, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ marginLeft: -2, fontSize: 14, color: select === item.id ? 'white' : '#172866', fontWeight: '700' }}>{item.pay}</Text>
                    <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginLeft: 2 }} source={require('../assets/image/coin.png')} />
                </TouchableOpacity>
            </View>
        );
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
                <View style={styles.headerMainContent}>
                    <View style={styles.headerContent}>
                        <TouchableOpacity onPress={props.goBack} style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
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
                            <View style={{ flexDirection: 'row', marginTop: 5, width: '100%' }}>

                                <View style={{ backgroundColor: '#666666', width: 80, height: 30, borderTopRightRadius: 0, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, marginLeft: 0, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="wallet-outline" size={16} color="white" />
                                    <Image style={{ width: 13, height: 13, resizeMode: 'contain', marginLeft: 5 }} source={require('../assets/image/coin.png')} />
                                    <Text style={{ marginLeft: 5, fontSize: 12, color: 'white', fontWeight: '700' }}>{"5000"}</Text>
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
                    <RBSheet
                        ref={bottomSheetRef}
                        closeOnDragDown={true}
                        closeOnPressMask={true}
                        animationType="slide"
                        height={200}
                        customStyles={{
                            container: {
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                            },

                        }}
                    >
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View>
                                    <TouchableOpacity style={{ backgroundColor: '#172866', width: 100, height: 35, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, marginLeft: 10, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon3 name="wallet" size={20} color="white" />
                                        <Image style={{ width: 16, height: 16, resizeMode: 'contain', marginLeft: 8 }} source={require('../assets/image/coin.png')} />
                                        <Text style={{ marginLeft: 5, fontSize: 14, color: 'white', fontWeight: '700' }}>{walletPay}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => closeBottomSheet()} style={{ paddingHorizontal: 15, alignItems: 'center' }}>
                                        <Text style={{ marginLeft: 0, fontSize: 14, color: '#172866', fontWeight: '700' }}>Close</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={{
                                fontSize: 14, fontWeight: '500', marginTop: 10,
                                color: '#172866', lineHeight: 18, textAlign: 'center'
                            }}>Select amount to pay</Text>
                            <View style={{ paddingHorizontal: 0, marginTop: 20 }}>
                                <FlatList
                                    horizontal
                                    data={Data2}
                                    renderItem={renderItem2}
                                    keyExtractor={(item) => item.id}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>
                    </RBSheet>

                    <Modal
                        isVisible={modalVisible}
                        animationIn="slideInUp"  // You can customize the animation style
                        animationOut="slideOutUp"
                        onBackdropPress={closeModal}
                    >

                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 0 }}>
                            <View style={{ backgroundColor: 'white', height: 180, width: '100%', borderRadius: 15 }}>
                                {walletPay >= onClickData.pay ?
                                    <View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 20 }}>
                                            <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginLeft: 2 }} source={require('../assets/image/coin.png')} />
                                            <Text style={{ marginLeft: 2, fontSize: 23, color: '#172866', fontWeight: '700' }}>{onClickData.pay}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 20 }}>
                                            <Text style={{ fontSize: 14, color: '#172866', fontWeight: '500', textAlign: 'center' }}>The selected amount is going{'\n'}to debit from your wallet ?</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 20, paddingHorizontal: 20 }}>
                                            <TouchableOpacity onPress={props.navigation} style={{ width: 100, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: '#172866' }}>
                                                <Text style={{ fontSize: 14, color: 'white', fontWeight: '700' }}>OK</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => closeModal()} style={{ width: 100, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: '#172866' }}>
                                                <Text style={{ fontSize: 14, color: 'white', fontWeight: '700' }}>Cancel</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    :
                                    <View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                                            <Icon name="error-outline" size={35} color="darkred" />
                                        </View>
                                        <Text style={{ fontSize: 15, color: '#000000', fontWeight: '500', textAlign: 'center' }}>Insufficient balance</Text>
                                        <Text style={{ fontSize: 13, color: '#172866', fontWeight: '500', textAlign: 'center' }}>Please add amount to your wallet!</Text>
                                        <TouchableOpacity onPress={() => closeModal()} style={{ width: 100, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: '#172866', alignSelf: 'center', marginTop: 20 }}>
                                            <Text style={{ fontSize: 14, color: 'white', fontWeight: '700' }}>OK</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>
                        </View>
                    </Modal>
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