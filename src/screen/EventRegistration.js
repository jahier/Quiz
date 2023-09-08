import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ImageBackground, FlatList, ScrollView, TextInput } from 'react-native'
import React from 'react'
import ImagePath from '../assets/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import Icon3 from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { BlurView } from '@react-native-community/blur';


export default function EventRegistration() {
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
                    borderRadius: 0
                }}
                    colors={[
                        // '#E3E8FF81', '#E3E8FF64', '#E3E8FF1D', '#FFFFFF66'
                        'rgba(227,232,255, 0.354)', 'rgba(227,232,255, 0.35)', 'rgba(224,229,255,0.18)', 'rgba(255, 255, 255, 0.4)'
                        // 'rgba(191, 188, 189, 0.7)', 'rgba(191, 188, 189, 0.7)',
                    ]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0, y: 0.5 }}
                >
                    <BlurView
                        style={{
                            flex: 1, borderRadius: 20
                        }}
                        blurType="light"
                        blurAmount={5}
                        reducedTransparencyFallbackColor="white"
                    >
                        <View style={{ paddingHorizontal: 15, }}>
                            <Text style={styles.label}>Name</Text>
                            <TextInput style={styles.TextInput} />
                            <Text style={styles.label}>Username</Text>
                            <TextInput style={styles.TextInput} />
                            <Text style={styles.label}>Gender</Text>
                            <TextInput style={styles.TextInput} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Change_Password')} style={styles.changePasswordBtn}>
                            <Text style={styles.passwordBtnText}>Password & Security</Text>
                            <AntDesign name="right" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    </BlurView>
                </LinearGradient>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between',
        marginTop: 10
    },
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
        width: '100%', height: 35, backgroundColor: 'black',
        borderWidth: 0.5, borderColor: '#666666',
        shadowColor: 'white', elevation: 5, borderRadius: 20,
        justifyContent: 'space-between', alignItems: 'center',
        flexDirection: 'row', paddingHorizontal: 15
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
})