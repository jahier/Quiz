import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../Component/Header'
import ImagePath from '../assets/ImagePath'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import OTPInputView from 'react-native-otp-input'
import Button from '../Component/ButtonComponent'

export default function Otp({ navigation }) {
    const [otp, setOtp] = useState('');

    const handleOTPChange = (code) => {
        setOtp(code);
    };

    return (
        <SafeAreaView style={styles.mainContent}>
            <ImageBackground style={{ flex: 1 }} source={ImagePath.bacImage}>
                <View style={{ marginTop: 0 }}>
                    <Header leftBtn={ImagePath.leftArrow} tintColor='white' onPress={() => navigation.goBack()} />
                </View>
                <Text style={styles.headingText}>LEARNO</Text>
                <Text style={styles.LoginText}>Forget Password</Text>
                <Text style={styles.Lorem}>Enter your 4 digit code to reset your password which{'\n'}we have sent your register mail id.</Text>


                <View style={styles.whiteContent}>
                    <Text style={styles.enterCode}>Enter your code here</Text>
                    <View style={{ paddingHorizontal: 15, marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <OTPInputView
                            style={{ width: '70%', height: 60 }}
                            pinCount={4}
                            code={otp}
                            onCodeChanged={handleOTPChange}
                            autoFocusOnLoad
                        />
                    </View>
                    <Text style={styles.enterCode}>Didn’t receive code? </Text>
                    <TouchableOpacity>
                        <Text style={styles.ResendNow}>Resend Now</Text>
                    </TouchableOpacity>

                    <View style={styles.BTNContent}>
                        <Button title="Submit" onPress={()=>navigation.navigate('NewPassword')} />
                    </View>
                </View>
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
        height: 240,
        marginTop: heightPercentageToDP(5),
        borderRadius: 20, width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5, borderColor: 'white',
        // elevation: 10, shadowColor: 'white'
    },
    BTNContent: {
        paddingHorizontal: 15, marginTop: 20
    },
    enterCode: {
        fontSize: 12, lineHeight: 13,
        color: 'white',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 10
    },
    ResendNow:{
        fontSize: 14, lineHeight: 15,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 10
    },
})