import { StyleSheet, View, SafeAreaView, Image, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../Component/Header'
import ImagePath from '../assets/ImagePath'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Input from '../Component/Input'
import Button from '../Component/ButtonComponent'
import moment from "moment";
import { Dropdown } from 'react-native-element-dropdown';
import Icon3 from 'react-native-vector-icons/Entypo';
import DateTimePicker from 'react-native-modal-datetime-picker'

const Sign_up = (props) => {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(true);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };
    const formattedDate = moment(date).format('DD-MM-YYYY',);



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
                {/* <View style={{ marginTop: 0, }}>
                    <Header leftBtn={ImagePath.leftArrow} tintColor='white' onPress={() => navigation.goBack()} />
                </View> */}
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
                            <View style={{ width: '100%', }}>
                            <Text style={styles.genderText}>DOB: (date of birth)</Text>
                                <TouchableOpacity style={styles.dateContent} title="Show Date Picker" onPress={() => setShowDatePicker(true)} >
                                    <Text style={{ color: 'white', fontSize: 14, fontWeight: '700' }}>{formattedDate}</Text>
                                    <Icon3 name="chevron-small-down" size={22} color="gray" />

                                </TouchableOpacity>
                                {showDatePicker && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date}
                                        mode="date"
                                        // dateFormat='DD/MM/YYYY' 
                                        is24Hour={false}
                                        display="default"
                                        onChange={onChange}
                                    />
                                )}
                            </View>
                            {renderLabel(

                            )}
                            <View style={{marginTop:15}}>
                            <Text style={styles.genderText}>Gender</Text>
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
                                placeholder={!isFocus ? 'Select' : '...'}
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
                        </View>
                        <View style={styles.BTNContent}>
                            <Button onPress={() => props.navigation.navigate('MultipleSkills')} title="Sign Up" />
                        </View>
                        <View style={{ paddingHorizontal: 20, marginTop: 15,flexDirection:'row',justifyContent:'center',alignItems:'center' }}>
                            <Text style={styles.Lorem}>Login in with </Text>
                            <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                            <Text style={styles.SignInText}>Sign in </Text>
                            </TouchableOpacity>
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
        width: '25%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    inputContent: {
        paddingHorizontal: 15,
        marginTop: 15
    },
    socialLogo: {
        width: 25, height: 25,
        resizeMode: 'contain',

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
        textAlign: 'center',
    },
    whiteContent: {
        backgroundColor: 'rgba(160,156,191,0.25)',
        // height: heightPercentageToDP(80),
        marginTop: heightPercentageToDP(5),
        borderRadius: 30, width: '100%',
        alignSelf: 'center',
        // flex: 1
        marginBottom: heightPercentageToDP(5),
        borderWidth: 0.5, borderColor: 'white',
    },
    loginTopImage: {
        resizeMode: 'contain', height: 180
    },
    SignInText: {
        fontSize: 14, fontWeight: '700',
        lineHeight: 14, color: 'white',
        textAlign: 'center'
    },
    forgetText: {
        color: '#27374D', fontSize: 12,
        lineHeight: 14, fontWeight: '500',
        textAlign: 'right'
    },
    BTNContent: {
        paddingHorizontal: 15, marginTop: 20
    },
    orSign: {
        color: '#27374D', fontSize: 12,
        lineHeight: 14, fontWeight: '500',
        textAlign: 'center', marginTop: 10
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
        paddingRight: 15,
        backgroundColor: 'rgba(160,156,191,0.25)',
        marginTop: 4,
        paddingLeft: 5
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
    genderText: {
        fontSize: 12,
        color: '#FFFFFF',
        fontWeight: '700', lineHeight: 13
    },
    dateContent: {
        flexDirection: 'row',
        width: '100%', backgroundColor: "rgba(160,156,191,0.25)",
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderWidth: 1, borderColor: '#E0E0E0',
        marginTop:3
    },
})