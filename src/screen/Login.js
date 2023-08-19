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
                    {/* <View style={{ marginTop: 20 }}>
                        <Text style={styles.SignInText}>Sign In !</Text>
                    </View> */}
                    <View style={{ paddingHorizontal: 15, marginTop: 35 }}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')} style={{ paddingHorizontal: 15, marginTop: 10 }}>
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
                    <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
                        <SocialButton title="Login in with Apple" socialLogo={ImagePath.appleLogo} />
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
        fontSize: 60, lineHeight: 61,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',

        marginTop: 40
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
        height: 440,
        marginTop: heightPercentageToDP(5),
        borderRadius: 20, width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5, borderColor: 'white',
        // elevation: 10, shadowColor: 'white'
    },
    loginTopImage: {
        resizeMode: 'contain',
    },
    SignInText: {
        fontSize: 24, fontWeight: '600',
        lineHeight: 29, color: 'black',
        textAlign: 'center'
    },
    forgetText: {
        color: 'white', fontSize: 12, lineHeight: 14, fontWeight: '600', textAlign: 'right'
    },
    BTNContent: {
        paddingHorizontal: 15, marginTop: 20
    },
    orSign: {
        color: 'white', fontSize: 12, lineHeight: 14, fontWeight: '500', textAlign: 'center', marginTop: 15
    },
    DonHaveAccount: {
        color: 'white', fontSize: 12, lineHeight: 12, fontWeight: '500',
    },
    createAccount: {
        color: 'white', fontSize: 14, lineHeight: 15, fontWeight: 'bold',

    },
})