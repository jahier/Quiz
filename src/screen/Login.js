import { StyleSheet, View, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Component/Header'
import ImagePath from '../assets/ImagePath'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Input from '../Component/Input'
import Button from '../Component/ButtonComponent'
import SocialButton from '../Component/SocialButton'

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainContent}>
            <View style={{ marginTop: 25 }}>
                <Header rightText='Skip' leftBtn={ImagePath.leftArrow} tintColor='white' />
            </View>
            <View style={styles.whiteContent}>
                <View style={{ justifyContent: 'center', alignContent: 'center', position: 'absolute', top: heightPercentageToDP(-27), left: 35 }}>
                    <Image style={styles.loginTopImage} source={ImagePath.loginFormImage} />
                </View>
                <View style={{ marginTop: 40 }}>
                    <Text style={styles.SignInText}>Sign In !</Text>
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
                    <Input placeholder="Email" label="Email" />
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
                    <Input placeholder="Password" label="Password" />
                </View>
                <TouchableOpacity style={{ paddingHorizontal: 15, marginTop: 10 }}>
                    <Text style={styles.forgetText}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.BTNContent}>
                    <Button onPress={() => navigation.navigate('BottomTab')} title="Sign In" />
                </View>
                <Text style={styles.orSign}>----- or sign with -----</Text>
                <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
                    <SocialButton title="Continue with Google" socialLogo={ImagePath.googleLogo} />
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
                    <SocialButton title="Continue with Facebook" socialLogo={ImagePath.facebookLogo} />
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
                    <SocialButton title="Continue with Twitter" socialLogo={ImagePath.twitterLogo} />
                </View>

<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:15}}>
<Text style={styles.DonHaveAccount}>Don’t have an account?</Text>
<TouchableOpacity onPress={()=>navigation.navigate('Sign_up')} style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={styles.createAccount}>Create Account</Text>
</TouchableOpacity>
</View>
            </View>
        </SafeAreaView>
    )
}
export default Login

const styles = StyleSheet.create({
    mainContent: {
        flex: 1, backgroundColor: '#27374D'
    },
    whiteContent: {
        backgroundColor: 'white',
        height: 550,
        marginTop: heightPercentageToDP(20),
        borderRadius: 20, width: '90%',
        alignSelf: 'center'
    },
    loginTopImage: {
        resizeMode: 'contain',
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
        color: '#27374D', fontSize: 12, lineHeight: 14, fontWeight: '500', textAlign: 'center', marginTop: 15
    },
    DonHaveAccount:{
        color: '#27374D', fontSize: 12, lineHeight: 12, fontWeight: '500',
    },
    createAccount:{
        color: '#432571', fontSize: 12, lineHeight: 12, fontWeight: '500',
    },
})