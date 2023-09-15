import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ImageBackground, FlatList, ScrollView, TextInput, } from 'react-native'
import React, { useState } from 'react'
import ImagePath from '../assets/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import Icon3 from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { BlurView } from '@react-native-community/blur';
import LottieView from 'lottie-react-native';


export default function EventRegistration({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [CongratulationsModal, setCongratulationsModal] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {

        setModalVisible(false);
    };
    const openModal2 = () => {
        setCongratulationsModal(true);
    };
    const closeModal2 = () => {

        setCongratulationsModal(false);
    };
    return (
        <ImageBackground source={ImagePath.homeBackground} style={{ flex: 1, }}>
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
                    <View style={{ flexDirection: 'row', width: '18%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Notifications')} style={{ backgroundColor: '#666666', width: 30, height: 30, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}>
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
                            {/* <View style={{ backgroundColor: '#666666', width: 60, height: 30, borderTopRightRadius: 0, borderBottomRightRadius: 20, borderTopLeftRadius: 20, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderBottomLeftRadius: 20 }}>
                <Icon3 name="bar-graph" size={20} color="orange" />
                <Text style={{ marginLeft: 10, fontSize: 14, color: 'white', fontWeight: '700' }}>0</Text>
              </View> */}
                            <View style={{ backgroundColor: '#666666', width: 80, height: 30, borderTopRightRadius: 0, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, marginLeft: 0, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="wallet-outline" size={16} color="white" />
                                <Image style={{ width: 13, height: 13, resizeMode: 'contain', marginLeft: 5 }} source={require('../assets/image/coin.png')} />
                                <Text style={{ marginLeft: 5, fontSize: 12, color: 'white', fontWeight: '700' }}>{"5000"}</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#666666', width: 70, height: 30, borderTopRightRadius: 0, borderBottomRightRadius: 20, borderTopLeftRadius: 20, marginLeft: 10, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', borderBottomLeftRadius: 20 }}>
                                <Text style={{ marginLeft: 5, fontSize: 12, color: 'white', fontWeight: '700' }}>Join Quiz</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 15, color: '#FFFFFF', lineHeight: 18, fontWeight: '600' }}>LEARNO MEGA EVENT</Text>
                <Text style={{ fontSize: 14, color: '#FFFFFF', lineHeight: 18, fontWeight: '500', marginTop: 10 }}>Registration</Text>
            </View>

            <View style={{ paddingHorizontal: 15, marginTop: 30 }}>
                <LinearGradient style={{
                    // backgroundColor: 'rgba(51, 51, 116, 0.78)',
                    // backgroundColor: 'rgba(34, 32, 63, 0.7)',
                    padding: 0,
                    width: '100%', height: heightPercentageToDP(50),
                    borderRadius: 20
                }}
                    colors={[
                        // '#E3E8FF81', '#E3E8FF64', '#E3E8FF1D', '#FFFFFF66'
                        'rgba(227,232,255, 0.354)', 'rgba(227,232,255, 0.35)', 'rgba(224,229,255,0.18)', 'rgba(255, 255, 255, 0.4)'
                        // 'rgba(191, 188, 189, 0.7)', 'rgba(191, 188, 189, 0.7)',
                    ]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0, y: 0.5 }}
                >
                    {/* <BlurView
                        style={{
                            width: '100%', height: heightPercentageToDP(50), borderRadius: 20
                        }}
                        blurType="light"
                        blurAmount={5}
                        reducedTransparencyFallbackColor="white"
                    > */}
                    <View style={{ paddingHorizontal: 15, }}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.TextInput} />
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.TextInput} />
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput style={styles.TextInput} />
                        <View style={{ marginTop: 50, paddingHorizontal: 80 }}>
                            <TouchableOpacity onPress={() => openModal()} style={styles.changePasswordBtn}>
                                <Text style={styles.passwordBtnText}>Submit</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/* </BlurView> */}
                </LinearGradient>
            </View>
            <Modal
                isVisible={modalVisible}
                animationIn="slideInLeft"  // You can customize the animation style
                animationOut="slideOutLeft"
                onBackdropPress={closeModal}
            // backdropColor='transparent'
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 }}>
                    <LinearGradient style={{
                        // backgroundColor: 'rgba(51, 51, 116, 0.78)',
                        // backgroundColor: 'rgba(34, 32, 63, 0.7)',
                        padding: 20,
                        width: '100%',
                        borderRadius: 20
                    }}
                        colors={[
                            // '#E3E8FF81', '#E3E8FF64', '#E3E8FF1D', '#FFFFFF66'
                            'rgba(227,232,255, 0.454)', 'rgba(227,232,255, 0.45)', 'rgba(224,229,255,0.48)', 'rgba(255, 255, 255, 0.4)'
                            // 'rgba(191, 188, 189, 0.7)', 'rgba(191, 188, 189, 0.7)',
                        ]}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0, y: 0.5 }}
                    >
                        <Text style={{ fontSize: 14, color: '#000000', lineHeight: 18, fontWeight: '700', marginTop: 10 }}>You are going to register for this event with the total fee of</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',marginTop:10 }}>
                            <Text style={{ fontSize: 15, color: '#000000', lineHeight: 18, fontWeight: 'bold', }}>100</Text>
                            <LottieView style={{ width: 25, height: 25, }} source={require('../assets/image/coinWithdraaw.json')} autoPlay loop />
                        </View>
                        <View style={{justifyContent:'flex-end',alignItems:'flex-end',paddingHorizontal:50,marginTop:10}}>
                            <TouchableOpacity onPress={() =>closeModal()||openModal2()} style={styles.changePasswordBtn}>
                                <Text style={styles.passwordBtnText}>OK</Text>
                            </TouchableOpacity>
                        
                        </View>

                    </LinearGradient>
                </View>
            </Modal>
            <Modal
                isVisible={CongratulationsModal}
                animationIn="slideInLeft"  // You can customize the animation style
                animationOut="slideOutLeft"
                onBackdropPress={closeModal2}
            // backdropColor='transparent'
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 }}>
                    <LinearGradient style={{
                        // backgroundColor: 'rgba(51, 51, 116, 0.78)',
                        // backgroundColor: 'rgba(34, 32, 63, 0.7)',
                        padding: 20,
                        width: '100%',
                        borderRadius: 20
                    }}
                        colors={[
                            // '#E3E8FF81', '#E3E8FF64', '#E3E8FF1D', '#FFFFFF66'
                            'rgba(227,232,255, 0.454)', 'rgba(227,232,255, 0.45)', 'rgba(224,229,255,0.48)', 'rgba(255, 255, 255, 0.4)'
                            // 'rgba(191, 188, 189, 0.7)', 'rgba(191, 188, 189, 0.7)',
                        ]}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0, y: 0.5 }}
                    >
                        {/* <Text style={{ fontSize: 14, color: '#000000', lineHeight: 18, fontWeight: '700', marginTop: 10 }}>You are going to register for this event with the total fee of</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',marginTop:10 }}>
                            <Text style={{ fontSize: 15, color: '#000000', lineHeight: 18, fontWeight: 'bold', }}>100</Text>
                            <LottieView style={{ width: 25, height: 25, }} source={require('../assets/image/coinWithdraaw.json')} autoPlay loop />
                        </View>
                        <View style={{justifyContent:'flex-end',alignItems:'flex-end',paddingHorizontal:70,marginTop:10}}>
                            <TouchableOpacity onPress={() =>navigation.navigate('BottomTab')} style={styles.changePasswordBtn}>
                                <Text style={styles.passwordBtnText}>OK</Text>
                            </TouchableOpacity>
                        
                        </View> */}
                        <Text style={styles.Congratulation}>Congratulation</Text>
                        <LottieView style={{ width: '100%', height: 150, }} source={require('../assets/image/Congratulation.json')} autoPlay loop />
                        <View style={{bottom:0,paddingHorizontal:50}}>
                        <TouchableOpacity onPress={() =>closeModal2()||navigation.navigate('BottomTab')} style={styles.changePasswordBtn}>
                                <Text style={styles.passwordBtnText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                      
                    </LinearGradient>
                </View>
            </Modal>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between',
        marginTop: 10
    },
    passwordBtnText: { fontSize: 13, fontWeight: '600', color: 'white', },
    label: { fontSize: 12, fontWeight: '600', color: '#C1C0C4', marginTop: 20 },
    TextInput: {
        borderBottomWidth: 0.5, borderColor: '#C1C0C4', height: 40,
        fontSize: 14, fontWeight: '700',
    },
    profileName: {
        color: 'rgba(8, 8, 8, 1)', fontSize: 14, fontWeight: 'bold', marginLeft: 10
    },
    selectText: { color: '#242220', fontSize: 13, fontWeight: '500', },
    dashboardText: {
        color: '#242220', fontSize: 13, fontWeight: '500', marginLeft: 0

    },
    changePasswordBtn: {
        width: '100%', paddingVertical: 8, backgroundColor: 'black',
        borderWidth: 0.5, borderColor: '#666666',
        shadowColor: 'white', elevation: 5, borderRadius: 10,
        justifyContent: 'center', alignItems: 'center',
        // flexDirection: 'row', paddingHorizontal: 15
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

    projectName: {
        color: 'white', fontSize: 17, fontWeight: 'bold',
    },
    Congratulation:{
        fontSize: 20, fontWeight: '600', color: 'white',textAlign:'center'
    },
  
})