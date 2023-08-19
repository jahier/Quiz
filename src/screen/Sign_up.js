import { StyleSheet, View, SafeAreaView, Image, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Header from '../Component/Header'
import ImagePath from '../assets/ImagePath'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Input from '../Component/Input'
import Button from '../Component/ButtonComponent'
import SocialButton from '../Component/SocialButton'

const Sign_up = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContent}>
            <ImageBackground style={{ flex: 1 }} source={ImagePath.bacImage}>
                <View style={{ marginTop: 0 }}>
                    <Header leftBtn={ImagePath.leftArrow} tintColor='white' onPress={()=>    navigation.goBack()} />
                </View>
                <Text style={styles.headingText}>LEARNO</Text>
                <Text style={styles.LoginText}>Create an account</Text>
                <Text style={styles.Lorem}>Please complete your profile</Text>

                <View style={styles.whiteContent}>
                    <View style={{ marginTop: 10 }}>
                    </View>
                    <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
                        <Input placeholder="Full Name" label="Full Name" />
                    </View>
                    <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                        <Input placeholder="Mobile Number" label="Mobile Number" />
                    </View>
                    <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                        <Input placeholder="Email Address" label="Email Address" />
                    </View>
                    <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                        <Input placeholder="Password" label="Password" />
                    </View>
                    <View style={{ paddingHorizontal: 15, marginTop: 10 }}>
                        <Input placeholder="Confirm Password" label="Confirm Password" />
                    </View>

                    <View style={styles.BTNContent}>
                        <Button onPress={() => navigation.navigate('SelectSkill')} title="Sign Up"  />
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        <SocialButton title="Login up with Google" socialLogo={ImagePath.googleLogo} />
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                        <SocialButton title="Login up with Apple" socialLogo={ImagePath.appleLogo} />
                    </View>
                    
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Sign_up

const styles = StyleSheet.create({
    mainContent: {
        flex: 1, backgroundColor: '#27374D'
    },
    headingText: {
        fontSize: 60, lineHeight: 61,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',

        marginTop: 10
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
        height: 580,
        marginTop: heightPercentageToDP(3),
        borderRadius: 20, width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5, borderColor: '#FFFCFC',
    },
    loginTopImage: {
        resizeMode: 'contain', height: 180
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
        paddingHorizontal: 15, marginTop: 20
    },
    orSign: {
        color: '#27374D', fontSize: 12, lineHeight: 14, fontWeight: '500', textAlign: 'center', marginTop: 10
    },
    DonHaveAccount: {
        color: 'white', fontSize: 12, lineHeight: 12, fontWeight: '500',
    },
    createAccount: {
        color: 'white', fontSize: 13, lineHeight: 14, fontWeight: 'bold',
    },
    SocialBTNContent: {
        width: 40, justifyContent: 'center', alignItems: 'center'
    },
    socialLogo: {
        width: 25, height: 25, resizeMode: 'contain', marginRight: 10, alignSelf: 'flex-end'
    },
})