import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-crop-picker';

export default function Edit_Profile(props) {
    const [selectedImage, setSelectedImage] = useState(null);
    const openImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setSelectedImage(image.path);
        });
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
            <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
                <LinearGradient colors={[
                    // 'rgba(138, 136, 144, 1)', 'rgba(109, 108, 114, 0.8)','rgba(109, 108, 114, 0.5)'
                    '#E8E8E836', '#E8E8E836'
                ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.headerMainContent}>
                    <View style={styles.headerContent}>
                        <TouchableOpacity style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
                            <Icon3 name="chevron-thin-left" size={17} color="white" />
                        </TouchableOpacity>

                        <View style={{ alignItems: 'center', marginLeft: 15 }}>
                            <Text style={styles.projectName}>LEARNO</Text>

                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#666666', width: 30, height: 30, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}>
                            <Icon3 name="bell" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>Edit Profile</Text>
                    </View>
                </LinearGradient>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: 90, height: 90, borderRadius: 40 }}>
                        <ImageBackground style={{ width: 90, height: 90, borderRadius: 50, overflow: 'hidden' }} source={ImagePath.myImage}>
                            {selectedImage && <Image style={{ width: '100%', height: '100%', borderRadius: 50, }} source={{ uri: selectedImage }} />}
                        </ImageBackground>
                    </View>
                    <TouchableOpacity onPress={() => openImagePicker()} style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 15, fontWeight: '700', color: '#0267FF', }}>Edit Picture</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 15, }}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.TextInput} />
                    <Text style={styles.label}>Username</Text>
                    <TextInput style={styles.TextInput} />
                    <Text style={styles.label}>Gender</Text>
                    <Dropdown
                        style={[styles.TextInput, isFocus && { borderColor: 'white', backgroundColor: 'rgba(160,156,191,0.25)' }]}
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

                    <Text style={styles.label}>Password & Security</Text>
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Change_Password')} style={styles.changePasswordBtn}>
                            <Text style={styles.passwordBtnText}>Change Password</Text>
                            <AntDesign name="right" size={18} color="white" />
                        </TouchableOpacity>
                    </View>
                   
                </View>
                <View style={{ flex:1,alignItems:'flex-end',justifyContent:'flex-end',bottom:15,paddingHorizontal:15 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('BottomTab')} style={styles.submitBtn}>
                            <Text style={styles.passwordBtnText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: 'white'
    },
    changePasswordBtn: {
        width: '100%', height: 35, backgroundColor: 'black',
        borderWidth: 0.5, borderColor: '#666666',
        shadowColor: 'white', elevation: 2, borderRadius: 20,
        justifyContent: 'space-between', alignItems: 'center',
        flexDirection: 'row', paddingHorizontal: 15
    },
    submitBtn:{
        width: '100%', height: 35, backgroundColor: 'black',
        borderWidth: 0.5, borderColor: '#666666',
        shadowColor: 'white', elevation: 2, borderRadius: 20,
        justifyContent: 'center', alignItems: 'center',
         paddingHorizontal: 15 
    },
    CategoryBox: {
        width: 130, height: 130,
        borderRadius: 20,
        borderWidth: 0.5, borderColor: '#666666',
    },
    subText: { fontSize: 12, fontWeight: '400', color: '#FFFFFF', textAlign: 'center' },
    coin: { fontSize: 15, fontWeight: '700', color: '#FFFFFF', marginTop: 7 },
    coinImage: {
        width: 20, height: 20, resizeMode: 'contain', alignSelf: 'center'
    },
    selectText: {
        fontSize: 16, color: 'white',
        fontWeight: '700', lineHeight: 17
    },
    headerMainContent: {
        width: '100%',
        height: 120, borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, paddingHorizontal: 15,
        elevation: 10, shadowColor: 'black'
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between',
        marginTop: 10
    },
    projectName: {
        color: 'white', fontSize: 17, fontWeight: 'bold',
    },
    userName: {
        color: 'white', fontSize: 14, fontWeight: 'bold'
    },
    editBtn: {
        width: 200, height: 40, justifyContent: 'center',
        alignItems: 'center', backgroundColor: 'black', borderRadius: 20,
        elevation: 5, shadowColor: 'white', borderWidth: 0.5, borderColor: '#666666',
    },
    twoBox: {
        width: 130, height: 130, justifyContent: 'center',
        alignItems: 'center', borderRadius: 20,
        borderWidth: 0.5, borderColor: '#666666',
    },
    label: { fontSize: 12, fontWeight: '600', color: '#C1C0C4', marginTop: 20 },
    TextInput: {
        borderBottomWidth: 0.5, borderColor: '#C1C0C4', height: 40,
        fontSize: 14, fontWeight: '700',
    },
    passwordBtnText: {
        fontSize: 12, fontWeight: '600', color: '#C1C0C4',
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
        // backgroundColor: 'rgba(160,156,191,0.25)',


    },
})