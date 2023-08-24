import { StyleSheet, View, SafeAreaView, Image, Text, TouchableOpacity, ImageBackground, Animated } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Header from '../Component/Header'
import ImagePath from '../assets/ImagePath'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Input from '../Component/Input'
import Button from '../Component/ButtonComponent'
import SocialButton from '../Component/SocialButton'
import LinearGradient from 'react-native-linear-gradient';

const Login = ({ navigation }) => {
    const [showImage, setShowImage] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setShowImage(true)
        },)
    })
    const [btnClick, setBtnClick] = useState(false)
    const animated2 = useRef(new Animated.Value(0)).current;
    const startAnimation2 = () => {
        Animated.timing(animated2, {
            toValue: btnClick ? 0 : 1,
            duration: 1200,
            useNativeDriver: true,

        }).start();
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // <------------------------Validation for Login------------------>
    const [errors, setErrors] = useState({})
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            return true
        } else if (!email) {
            handleError('Enter Your email', 'email')
            return false
        }
        else if (email !== emailRegex) {
            handleError('Email invalid please check your email', 'email')
            return false
        }
        else {
            return false
        }
    };

    const validPassword = () => {
        if (!password) {
            handleError('Enter Your password', 'password')
            return false
        }
        else if (password.length < 6) {
            handleError('Password length must be greater than 6 characters', 'password')
        }
        else if (password.length > 12) {
            handleError('Password length must be less than 12 characters', 'password')
        }
    }
    const validate = () => {
        const isValidEmail = validateEmail()
        const isValidPassword = validPassword()
        if (isValidEmail && isValidPassword) {
        }
    }
    const handleError = (errorMessage, input) => {
        setErrors(presets => ({ ...presets, [input]: errorMessage }))
    }
    return (
        <SafeAreaView style={styles.mainContent}>
            <ImageBackground style={{ flex: 1 }} source={ImagePath.bacImage}>
                {/* <View style={{ marginTop: 0 }}>
                    <Header  leftBtn={ImagePath.leftArrow} tintColor='white' />
                </View> */}

                <Text style={styles.headingText}>LEARNO</Text>
                <Text style={styles.LoginText}>Login into account</Text>
                <Text style={styles.Lorem}>Please into your account</Text>


                {/* <ImageBackground style={styles.whiteContent} source={ImagePath.bacImage}> */}
                <View style={styles.whiteContent}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.SignInText}>WELCOME !</Text>
                    </View>
                    <View style={{ paddingHorizontal: 15, marginTop: 45 }}>
                        <Input placeholder="Email" label="Email Address"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            onFocus={() => handleError(null, 'email')}

                        />
                        {errors.email &&
                            (<View style={{}}>
                                <Text style={{ color: 'darkred', fontSize: 10 }}>{errors.email}</Text>
                            </View>
                            )}
                    </View>
                    <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
                        <Input placeholder="Password" label="Password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            onFocus={() => handleError(null, 'password')}
                        />
                        {errors.password && (
                            <View style={{}}>
                                <Text style={{ color: 'darkred', fontSize: 10 }}>{errors.password}</Text>
                            </View>
                        )}
                    </View>

                    <View style={styles.BTNContent}>
                        <Button onPress={() => validate() || setShowImage(true)} title="Login Now" />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')} style={{ paddingHorizontal: 15, marginTop: 15 }}>
                        <Text style={styles.forgetText}>Forgot password?</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                        <Text style={styles.DonHaveAccount}>Don’t have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Sign_up')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.createAccount}> Sign up </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 5 }}>
                        <SocialButton title="Login in with Google" socialLogo={ImagePath.googleLogo} />
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 50,bottom:35 }}>
                        <SocialButton title="Login in with Apple" socialLogo={ImagePath.appleLogo} tintColor="white"/>
                    </View>
                </View>
                {/* </ImageBackground> */}
                {/* </LinearGradient> */}
            </ImageBackground>

        </SafeAreaView>
    )
}
export default Login

const styles = StyleSheet.create({
    mainContent: {
        flex: 1, backgroundColor: '#27374D'
    },
    headingText: {
        fontSize: 46, lineHeight: 61,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',

        marginTop: 40
    },
    LoginText: {
        fontSize: 16, lineHeight: 16,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        marginTop:8
    },
    Lorem: {
        fontSize: 12, lineHeight: 12,
        color: 'white',
        fontWeight: '500',
        textAlign: 'center', marginTop: 8
    },
    whiteContent: {
        backgroundColor: 'rgba(160,156,191,0.25)',
        // height: heightPercentageToDP(100),
        marginTop: heightPercentageToDP(10),
        borderRadius: 30, width: '100%',
        alignSelf: 'center',
        // borderWidth: 0.5, borderColor: 'white',
        // elevation: 10, shadowColor: 'white'
    },
    loginTopImage: {
        resizeMode: 'contain',
    },
    SignInText: {
        fontSize: 30, fontWeight: '700',
        lineHeight: 31, color: 'white',
        textAlign: 'center'
    },
    forgetText: {
        color: 'white', fontSize: 14, lineHeight: 15, fontWeight: '600', textAlign: 'right'
    },
    BTNContent: {
        paddingHorizontal: 15, marginTop: 20
    },
    orSign: {
        color: 'white', fontSize: 12, lineHeight: 14, fontWeight: '500', textAlign: 'center', marginTop: 15
    },
    DonHaveAccount: {
        color: 'white', fontSize: 14, lineHeight: 15, fontWeight: '500',
    },
    createAccount: {
        color: 'white', fontSize: 16, lineHeight: 15, fontWeight: 'bold',

    },
})