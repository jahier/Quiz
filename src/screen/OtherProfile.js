import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ImagePath from '../assets/ImagePath'
import Icon3 from 'react-native-vector-icons/Entypo';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function OtherProfile(props,{ navigation }) {
    const [select, setSelect] = useState(false)
    const selectBtn = () => {
        setSelect(!select)
    }

    const Data = [
        { colors: ['#E8E8E836', '#E8E8E836'] },
        { colors: ['#E8E8E836', '#E8E8E836'] },
        { colors: ['#E8E8E836', '#E8E8E836'] },
        { colors: ['#E8E8E836', '#E8E8E836'] },
        { colors: ['#E8E8E836', '#E8E8E836'] },
    ];
    const renderItem = ({ item, }) => {
        return (
            <TouchableOpacity style={{ marginVertical: 10, marginHorizontal: 15, }}>
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
        <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
                <TouchableOpacity onPress={() => navigation.goBack('')} style={{ alignSelf: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                    <Icon3 name="chevron-thin-left" size={18} color="white" />
                </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View style={styles.userProfileContent}>
                    <Image style={styles.userProfile} source={ImagePath.myImage} />
                </View>
                <View>
                    <Text style={styles.userName}>Himanshu Saini</Text>

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
                </View>
            </View>

            <View style={{ paddingHorizontal: 15, marginTop: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={selectBtn} style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: select ? 'rgba(94, 94, 103, 0.65)' : '#1877F2', paddingVertical: 6, borderRadius: 7 }}>
                    <Text style={styles.btnText}>{select ? 'Following' : 'Follow'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '48%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(94, 94, 103, 0.65)', paddingVertical: 6, borderRadius: 7 }}>
                    <Text style={styles.btnText}>Message</Text>
                </TouchableOpacity>
            </View>
           {
            select&&
            <View style={{ flex: 1, justifyContent: 'center', marginTop: 15 }}>
                        <FlatList

                            data={Data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
           }
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
        width: '30%',
        justifyContent: 'center', alignItems: 'center',
    },
    userProfile: {
        width: 70, height: 70,
        borderRadius: 50, resizeMode: 'contain'
    },
    followersContent: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal:0,
        marginTop: 10
    },
    followTextContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%'
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
        fontSize: 18, fontWeight: '700',
        color: '#FFFFFF',
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
})