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
    const [Data, setData] = useState(props.route.params.data) 
    const navigation=()=>{
        props.navigation.navigate('ProfileGame',{data:Data})
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ImageBackground style={{
                flex: 1,
                //  justifyContent: 'center', alignItems: 'center' 
            }} source={ImagePath.homeBackground}>
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
                            <TouchableOpacity onPress={() =>navigation()}
                                style={{
                                    backgroundColor: 'rgba(59, 67, 72, 0.37)',
                                    width: '100%',
                                    height: 40, paddingVertical: 5,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                <Text style={{ fontSize: 14, color: 'white', fontWeight: '700', textAlign: 'center' }}>Create Room</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>navigation()}
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