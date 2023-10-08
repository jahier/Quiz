import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Header from '../Component/Header'
import ImagePath from '../assets/ImagePath'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import Input from '../Component/Input'
import Button from '../Component/ButtonComponent'
import FastImage from 'react-native-fast-image';

export default function NewPassword({ navigation }) {
    const [show, setShow] = useState(false)
    return (
        <SafeAreaView style={styles.mainContent}>
            <ImageBackground style={{ flex: 1 }} source={ImagePath.bacImage}>
                <View style={{ marginTop: 0 }}>
                    <Header leftBtn={ImagePath.leftArrow} tintColor='white' onPress={() => navigation.goBack()} />
                </View>
                <Text style={styles.headingText}>LEARNO</Text>
                <Text style={styles.LoginText}>New Password</Text>
                <Text style={styles.Lorem}>Enter your new password here.</Text>


                {show ?
                    <View style={styles.gifContent}>
                        <FastImage
                            style={{ height: 100, width: 100, borderRadius: 100, bottom: 0,alignSelf:'center' }}
                            source={ImagePath.rightGif}
                        />
                        <Text style={styles.Lorem}>You have successfully create new password.</Text>
                        <View style={{marginTop:30}}>
                        <Button
                            onPress={() => navigation.navigate('Login')}
                            title="Go to Login Page" />
                        </View>
                       
                    </View>
                    : <View style={styles.whiteContent}>
                        <View style={{ paddingHorizontal: 15, marginTop: 35 }}>
                            <Input placeholder="Password" label="Password" />
                        </View>
                        <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                            <Input placeholder="Confirm Password" label="Confirm Password" />
                        </View>

                        <View style={styles.BTNContent}>
                            <Button
                                onPress={() => setShow(true)}
                                title="Reset Password" />
                        </View>
                    </View>}


            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1, backgroundColor: '#27374D'
    },

    headingText: {
        fontSize: 60, lineHeight: 61,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 110
    },
    LoginText: {
        fontSize: 18, lineHeight: 19,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center'
    },
    Lorem: {
        fontSize: 11, lineHeight: 12,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center', marginTop: 5
    },
    whiteContent: {
        backgroundColor: 'rgba(160,156,191,0.55)',
        height: 250,
        marginTop: heightPercentageToDP(5),
        borderRadius: 20, width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5, borderColor: 'white',
        // elevation: 10, shadowColor: 'white'
    },
    gifContent: {
        backgroundColor: 'rgba(160,156,191,0.55)',
        height: 250,
        marginTop: heightPercentageToDP(5),
        borderRadius: 20, width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5, borderColor: 'white',
        justifyContent: 'center',paddingHorizontal:15
    },
    BTNContent: {
        paddingHorizontal: 15, marginTop: 20
    },
})