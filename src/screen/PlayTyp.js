import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from 'react-native-modal';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Input from '../Component/Input';

export default function PlayTyp(props) {
    const [select, setSelect] = useState(false)
    const bottomSheetRef = useRef();
    console.log('=======', select);
    const openBottomSheet = () => {
        bottomSheetRef.current.open();
    };
    const closeBottomSheet = () => {
        bottomSheetRef.current.close();
    };
    const selectBtn = (id) => {
        setSelect(id)
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ImageBackground style={{
                flex: 1,
                //  justifyContent: 'center', alignItems: 'center' 
            }} source={ImagePath.gameTypBac}>
                <View style={{
                    width: '100%', height: heightPercentageToDP(100),
                    backgroundColor: 'rgba(59, 67, 72, 0.47)'
                }}>
                    <Text style={styles.headingText}>LEARNO</Text>
                    <View style={{ paddingHorizontal: 25, marginTop: 100 }}>
                        <View style={{
                            backgroundColor: 'rgba(150, 150, 166, 0.71)',
                            width: '100%',
                            height: 300, alignItems: 'center',
                            paddingHorizontal: 10, justifyContent: 'center', borderRadius: 15,
                        }}>
                            <TouchableOpacity onPress={() => selectBtn('1')}
                                style={{
                                    backgroundColor: 'rgba(59, 67, 72, 0.37)',
                                    width: '100%',
                                    height: 40, paddingVertical: 5,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                <Text style={{ fontSize: 14, color: 'white', fontWeight: '700', textAlign: 'center' }}>Create Room</Text>

                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => selectBtn('2') || openBottomSheet()}
                                style={{
                                    backgroundColor: 'rgba(59, 67, 72, 0.37)',
                                    width: '100%', height: 40, paddingVertical: 5, marginTop: 15,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                <Text style={{ fontSize: 14, color: 'white', fontWeight: '700', textAlign: 'center' }}>Join Room</Text>

                            </TouchableOpacity> */}
                            <TouchableOpacity onPress={() => selectBtn('3')}
                                style={{
                                    backgroundColor: 'rgba(59, 67, 72, 0.37)',
                                    width: '100%', height: 40, paddingVertical: 5,
                                    marginTop: 15,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                <Text style={{ fontSize: 14, color: 'white', fontWeight: '700', textAlign: 'center' }}>Play with random</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                    <RBSheet
                        ref={bottomSheetRef}
                        closeOnDragDown={false}
                        closeOnPressMask={false}
                        animationType="fade"
                        height={170}
                        customStyles={{
                            container: {
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                backgroundColor: 'rgba(150, 150, 166, 0.61)'
                            },

                        }}
                    >
                        {/* {select === '1' ?
                            <View>
                                <TouchableOpacity onPress={() => closeBottomSheet()} style={{ paddingHorizontal: 15, alignItems: 'flex-end', marginTop: 10 }}>
                                    <Icon3 name="circle-with-cross" size={25} color="white" />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                    <View style={{ width: '50%', paddingHorizontal: 15 }}>
                                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '700', }}>Room Code: </Text>
                                    </View>
                                    <View style={{ width: '50%', alignItems: 'center', flexDirection: 'row' }}>
                                        <View style={{ width: 100, height: 35, backgroundColor: 'rgba(150, 150, 166, 0.71)', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                            <Text style={{ fontSize: 17, color: 'white', fontWeight: '700', textAlign: 'center' }}>999999</Text>
                                        </View>
                                        <TouchableOpacity style={{ width: 40, height: 35, marginLeft: 20, backgroundColor: 'rgba(150, 150, 166, 0.71)', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                            <Icon name="content-copy" size={20} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                    <View style={{ width: '80%', alignItems: 'center', paddingHorizontal: 15 }}>
                                        <Text style={{ fontSize: 15, color: 'white', fontWeight: '700', }}>Share this room code with friends and ask them to join</Text>
                                    </View>
                                    <TouchableOpacity style={{ width: 40, height: 35, marginLeft: 10, backgroundColor: 'rgba(150, 150, 166, 0.71)', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                        <Icon name="share" size={23} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            : */}
                            <View>
                                <TouchableOpacity onPress={() => closeBottomSheet()} style={{ paddingHorizontal: 15, alignItems: 'flex-end', marginTop: 10 }}>
                                    <Icon3 name="circle-with-cross" size={25} color="white" />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 15, color: 'white', fontWeight: '700', textAlign: 'center' }}>Enter your Code</Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                                    <TextInput style={{ width: 150, padding: 4, paddingHorizontal: 15, borderRadius: 15, color: 'white', fontSize: 17, backgroundColor: 'rgba(59, 67, 72, 0.37)' }} />
                                </View>
                                <TouchableOpacity style={{width: '95%', padding:4, borderRadius: 5,backgroundColor: 'rgba(59, 67, 72, 0.37)',justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:7}}>
                                <Text style={{ fontSize: 18, color: 'white', fontWeight: '700', }}>Join Room</Text>
                                </TouchableOpacity>
                            </View>
                    </RBSheet>

                </View>
            </ImageBackground >
        </View >
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 46, lineHeight: 61,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',

        marginTop: 40
    },
})