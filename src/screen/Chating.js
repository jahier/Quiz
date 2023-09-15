import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import ImagePath from '../assets/ImagePath'

export default function Chating() {
    return (
        <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
            <View style={styles.headerMainContent}>
                <View style={styles.profileContent}>
                    <Image style={styles.profile} source={ImagePath.myImage} />
                </View>
                <View style={styles.userNameContent}>
                    <Text style={styles.otherUserName}>Himanshu Saini</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.message}>Active</Text>
                        <View style={{ marginLeft: 8 }}>
                            <Text style={styles.message}>10 min ago</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{paddingHorizontal:15,justifyContent:'flex-end',flex:1,bottom:15}}>
            <TextInput style={styles.input}
                    placeholder='Message'
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headerMainContent: {
        flexDirection: 'row', alignItems: 'center'
    },
    profileContent: {
        width: '25%', alignItems: 'center',
    },
    profile: {
        width: 60, height: 60,
        borderRadius: 30,
        resizeMode: 'contain'
    },
    userNameContent: {
        width: '75%',
        paddingHorizontal: 0
    },
    otherUserName: {
        color: 'white', fontSize: 13, fontWeight: '700'
    },
    message: {
        color: 'white', fontSize: 11, fontWeight: '400'
    },
    input: {
        backgroundColor: 'rgba(94, 94, 103, 0.65)',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        alignItems: 'center',
        fontSize: 16,
        color: 'white',
    },
})