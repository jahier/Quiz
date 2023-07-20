import { StyleSheet, View, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Component/Header'
import ImagePath from '../assets/ImagePath'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Input from '../Component/Input'
import Button from '../Component/ButtonComponent'
import SocialButton from '../Component/SocialButton'

const Sign_up = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainContent}>
            <View style={{ marginTop: 25 }}>
                <Header rightText='Skip' leftBtn={ImagePath.leftArrow} tintColor='white' />
            </View>
            <View style={styles.whiteContent}>
                <View style={{ justifyContent: 'center', alignContent: 'center', position: 'absolute', top: heightPercentageToDP(-20), left: 35 }}>
                    <Image style={styles.loginTopImage} source={ImagePath.loginFormImage} />
                </View>
                <View style={{ marginTop: 40 }}>
                    <Text style={styles.SignInText}>Create Account !</Text>
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
                    <Input placeholder="First name" label="First name" />
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
                    <Input placeholder="Last name" label="Last name" />
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
                    <Input placeholder="Email" label="Email" />
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
                    <Input placeholder="Password" label="Password" />
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
                    <Input placeholder="Repeat-Password" label="Repeat-Password" />
                </View>

                <View style={styles.BTNContent}>
                    <Button onPress={() => navigation.navigate('BottomTab')} title="Sign Up" />
                </View>
                <Text style={styles.orSign}>----- or sign with -----</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity style={styles.SocialBTNContent}>
                        <Image style={styles.socialLogo} source={ImagePath.googleLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.SocialBTNContent}>
                        <Image style={styles.socialLogo} source={ImagePath.facebookLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.SocialBTNContent}>
                        <Image style={styles.socialLogo} source={ImagePath.twitterLogo} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <Text style={styles.DonHaveAccount}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.createAccount}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Sign_up

const styles = StyleSheet.create({
    mainContent: {
        flex: 1, backgroundColor: '#27374D'
    },
    whiteContent: {
        backgroundColor: 'white',
        height: 600,
        marginTop: heightPercentageToDP(15),
        borderRadius: 20, width: '90%',
        alignSelf: 'center'
    },
    loginTopImage: {
        resizeMode: 'contain', height: 200
    },
    SignInText: {
        fontSize: 24, fontWeight: '600',
        lineHeight: 29, color: '#27374D',
        textAlign: 'center'
    },
    forgetText: {
        color: '#27374D', fontSize: 12, lineHeight: 14, fontWeight: '500', textAlign: 'right'
    },
    BTNContent: {
        paddingHorizontal: widthPercentageToDP(20), marginTop: 20
    },
    orSign: {
        color: '#27374D', fontSize: 12, lineHeight: 14, fontWeight: '500', textAlign: 'center', marginTop: 10
    },
    DonHaveAccount: {
        color: '#27374D', fontSize: 12, lineHeight: 12, fontWeight: '500',
    },
    createAccount: {
        color: '#432571', fontSize: 12, lineHeight: 12, fontWeight: '500',
    },
    SocialBTNContent: {
        width: 40, justifyContent: 'center', alignItems: 'center'
    },
    socialLogo: {
        width: 25, height: 25, resizeMode: 'contain', marginRight: 10, alignSelf: 'flex-end'
    },
})