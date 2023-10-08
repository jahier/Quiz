import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Header from '../Component/Header'
import ImagePath from '../assets/ImagePath'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import Input from '../Component/Input'
import Button from '../Component/ButtonComponent'

export default function ForgetPassword({ navigation }) {
    return (
        <SafeAreaView style={styles.mainContent}>
            <ImageBackground style={{ flex: 1 }} source={ImagePath.bacImage}>
                <View style={{ marginTop: 0 }}>
                    <Header leftBtn={ImagePath.leftArrow} tintColor='white' onPress={() => navigation.goBack()} />
                </View>
                <Text style={styles.headingText}>LEARNO</Text>
                <Text style={styles.LoginText}>Forget Password</Text>
                <Text style={styles.Lorem}>Please complete your Email</Text>


                <View style={styles.whiteContent}>
                    <View style={{ paddingHorizontal: 15, marginTop: 35 }}>
                    <Input placeholder="Email Address" label="Email Address"/>
                    </View>

                    <View style={styles.BTNContent}>
                        <Button onPress={() => navigation.navigate('Otp')} title="Forget Password" />
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
        height: 200,
        marginTop: heightPercentageToDP(5),
        borderRadius: 20, width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5, borderColor: 'white',
        // elevation: 10, shadowColor: 'white'
    },
    BTNContent: {
        paddingHorizontal: 15, marginTop: 20
    },
})