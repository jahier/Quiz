import { StyleSheet, View, SafeAreaView, Image, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../Component/Header'
import ImagePath from '../assets/ImagePath'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Input from '../Component/Input'
import Button from '../Component/ButtonComponent'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from "moment";
import { Dropdown } from 'react-native-element-dropdown';
import { scale } from 'react-native-size-matters'
const Sign_up = ({ navigation }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log('Selected date:', date);
        hideDatePicker();
    };


    const dropdownData = [
        { label: 'MALE', value3: '1' },
        { label: 'FEMALE', value3: '2' },

    ]
    const [label, setlabel] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const renderLabel = () => {
        if (label || isFocus) {
            return (
                <View>

                </View>);
        }
        return null;
    };
    return (
        <SafeAreaView style={styles.mainContent}>
            <ImageBackground style={{ flex: 1 }} source={ImagePath.bacImage}>
                <View style={{ marginTop: 0, }}>
                    <Header leftBtn={ImagePath.leftArrow} tintColor='white' onPress={() => navigation.goBack()} />
                </View>
                <ScrollView style={{ flex: 1, paddingHorizontal: 15 }}>
                    <Text style={styles.headingText}>LEAR<Text style={{ color: 'orange' }}>NO</Text></Text>
                    {/* <Image style={{width:'100%',height:100,resizeMode:'contain'}} source={require('../assets/image/logo.png')}/> */}
                    <Text style={styles.LoginText}>Create an account</Text>
                    <Text style={styles.Lorem}>Please complete your profile</Text>
                    <View style={styles.whiteContent}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.SignInText}>Get Started !</Text>
                        </View>
                        <View style={styles.inputContent}>
                            <Input placeholder="Full Name" label="Full Name" />
                        </View>
                        <View style={styles.inputContent}>
                            <Input placeholder="Mobile Number" label="Mobile Number" />
                        </View>
                        <View style={styles.inputContent}>
                            <Input placeholder="Email Address" label="Email Address" />
                        </View>
                        <View style={styles.inputContent}>
                            <Input placeholder="Password" label="Password" />
                        </View>
                        <View style={styles.inputContent}>
                            <Input placeholder="Confirm Password" label="Confirm Password" />
                        </View>
                        <View style={styles.inputContent}>
                            <Input placeholder="Refer Code" label="Refer Code (if any)" />
                        </View>
                        <View style={styles.inputContent}>
                            {/* <View style={{ width: '46%', }}>
                            <TouchableOpacity style={{alignSelf:'flex-end', width: '50%', backgroundColor: "#F7F7F7", height:48, borderRadius: scale(5), alignItems: 'center', justifyContent: 'center' }} title="Show Date Picker"  onPress={showDatePicker} >
                                <Text style={{ textAlign: 'center', color: 'black',}}></Text>
                            </TouchableOpacity>
                            <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date" // You can also use "time" or "datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
                        </View> */}
                            {renderLabel(

                            )}
                            <Text style={{ fontSize: 12, color: '#FFFFFF', fontWeight: '700', lineHeight: 13 }}>Gender</Text>
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'white', backgroundColor: 'rgba(160,156,191,0.25)' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                containerStyle={{ marginTop: -36, width: '100%', alignSelf: 'center', borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: 'rgba(125, 126, 133, 0.99)' }}
                                data={dropdownData}
                                search
                                itemTextStyle={{ color: '#3A3A3A' }}
                                dropdownPosition="bottom"
                                maxHeight={300}
                                labelField="label"
                                valueField="label"
                                placeholder={!isFocus ? 'Gender' : '...'}
                                // searchPlaceholder="Search..."
                                value={label}

                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setlabel(item.label);
                                    setIsFocus(false);
                                }}

                            />
                        </View>

                        <View style={styles.BTNContent}>
                            <Button onPress={() => navigation.navigate('MultipleSkills')} title="Sign Up" />
                        </View>
                        <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
                            <Text style={styles.Lorem}>Login in with </Text>
                        </View>
                        <View style={styles.socialBtnContent}>
                            <TouchableOpacity>
                                <Image style={styles.socialLogo} source={ImagePath.googleLogo} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.appleLogo} source={ImagePath.appleLogo} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>

            </ImageBackground>
        </SafeAreaView>
    )
}
export default Sign_up

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
    },
    socialBtnContent: {
        paddingHorizontal: 20,
        marginTop: 30, bottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '25%', alignSelf: 'center',
        alignItems: 'center'
    },
    inputContent: {
        paddingHorizontal: 15,
        marginTop: 15
    },
    socialLogo: {
        width: 25, height: 25, resizeMode: 'contain',

    },
    appleLogo: {
        width: 25, height: 25,
        resizeMode: 'contain',
        tintColor: 'white'

    },
    headingText: {
        fontSize: 46, lineHeight: 61,
        color: 'skyblue',
        fontWeight: 'bold',
        textAlign: 'center',

        marginTop: 40
    },
    LoginText: {
        fontSize: 16, lineHeight: 16,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 8
    },
    label: {
        fontSize: 12,
        color: '#FFFFFF',
        fontWeight: '700',
        lineHeight: 13
    },

    Lorem: {
        fontSize: 12, lineHeight: 12,
        color: 'white',
        fontWeight: '500',
        textAlign: 'center', marginTop: 8
    },
    whiteContent: {
        backgroundColor: 'rgba(160,156,191,0.25)',
        // height: heightPercentageToDP(80),
        marginTop: heightPercentageToDP(5),
        borderRadius: 30, width: '100%',
        alignSelf: 'center',
        // flex: 1
        marginBottom: heightPercentageToDP(5)
    },
    loginTopImage: {
        resizeMode: 'contain', height: 180
    },
    SignInText: {
        fontSize: 30, fontWeight: '700',
        lineHeight: 31, color: 'white',
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
    dropdown: {
        height: 40,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        paddingHorizontal: 8,
        backgroundColor: 'rgba(160,156,191,0.25)',
        marginTop: 4
    },
    placeholderStyle: {
        fontSize: 14, fontWeight: '700',
        paddingLeft: 8,
        color: '#E0E0E0'
    },
    selectedTextStyle: {
        fontSize: 14, fontWeight: '700',
        paddingLeft: 5,
        color: 'white'
    },

    inputSearchStyle: {
        height: 40,
        fontSize: 12,
        backgroundColor: 'rgba(160,156,191,0.25)',


    },
})