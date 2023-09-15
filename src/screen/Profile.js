import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';

export default function Profile(props) {

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
                        <TouchableOpacity style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
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
                        <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>Profile</Text>
                    </View>
                </LinearGradient>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: 80, height: 80, borderRadius: 40,justifyContent:'center',alignItems:'center' }}>
                        <LottieView style={{ width: 80, height: 80, borderRadius: 40 }} source={require('../assets/image/userIcon.json')} autoPlay loop />
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: '700', color: 'white', marginTop: 10 }}>Zaheer</Text>
                    <Text style={{ fontSize: 12, fontWeight: '400', color: '#C1C0C4', marginTop: 5 }}>zk123@gmail.com</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Followers')} style={{ marginRight: 30 }}>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: '#FFFFFF', }}>Followers</Text>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#FFFFFF', textAlign: 'center' }}>150</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Following')} style={{ marginLeft: 30 }}>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: '#FFFFFF', }}>Following</Text>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#FFFFFF', textAlign: 'center' }}>150</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Edit_Profile')} style={styles.editBtn}>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: '#FFFFFF', }}>Edit Profile</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <View style={styles.twoBox}>
                        <Image style={styles.coinImage} source={require('../assets/image/coin.png')} />
                        <Text style={styles.coin}>50</Text>
                        <Text style={styles.subText}>Total{'\n'}earnings</Text>
                    </View>
                    <View style={styles.twoBox}>
                        <Image style={styles.coinImage} source={ImagePath.gameModeIcon} />
                        <Text style={styles.coin}>05</Text>
                        <Text style={styles.subText}>Games{'\n'}Played</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => props.navigation.navigate('MultipleSkills')} style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <View style={styles.CategoryBox}>
                        <View style={{ padding: 10, alignItems: 'flex-end' }}>
                            <AntDesign name="edit" size={17} color="white" />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcons name="dashboard-customize" size={30} color="rgba(252, 215, 14, 0.8)x " />
                        </View>
                        <View style={{ marginTop: 8 }}>
                            <Text style={styles.subText}>Category</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: 'white'
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
})