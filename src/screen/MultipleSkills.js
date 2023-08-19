import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Header from '../Component/Header'
import { ScaledSheet, scale } from 'react-native-size-matters'
import ImagePath from '../assets/ImagePath'
import Button from '../Component/ButtonComponent'
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP } from 'react-native-responsive-screen'


export default function MultipleSkills({ navigation }) {
    const [select, setSelect] = useState(false)
    const selectBtn = (id) => {
        setSelect(id)
    }
    const Data = [
        { id: '1', skill: "Science", img: ImagePath.ScienceLAB }, { id: '2', skill: 'GK', img: ImagePath.GK },
        { id: '3', skill: 'Entertainment', img: ImagePath.entertainment }, { id: '4', skill: 'Business', img: ImagePath.business },
        { id: '5', skill: 'IT', img: ImagePath.IT }, { id: '6', skill: 'Sport', img: ImagePath.Sports },
    ]

    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => selectBtn(item.id)} style={{flex:1,elevation:10}}>
                <View style={{
                     backgroundColor: select === item.id ? 'rgba(160,156,191,0.30)' : 'rgba(160,156,181,0.30)',
                    width: 150, height: 120, margin: 10, marginVertical: 10,
                    justifyContent: 'center', padding: 0,
                    alignItems: 'center',
                    borderWidth: select === item.id ? 0.5 : 0,
                    borderColor: select === item.id ? 'white' : 'lightgray',
                    elevation: 1.5, shadowColor: 'rgba(188, 4, 161, 0.2)',
                    borderTopLeftRadius:15,borderTopRightRadius:15,borderBottomRightRadius:15
                }}>
                <Text style={styles.skillText}>{item.skill}</Text>

                </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../assets/image/bacImage2.png')}>
            <View style={styles.mainContent}>
                <Header rightText='Skip' leftBtn={ImagePath.leftArrow} tintColor='white' />
                <Text style={styles.headingText}>LEARNO</Text>
                <View style={styles.userNameContent}>
                    <Text style={styles.userName}>Hii{'ZAHEER'}</Text>
                    <Text style={styles.SkillsText}>Choose Your Skills</Text>
                </View>
                <View style={styles.FlatListContent}>
                    <FlatList
                        numColumns={2}
                        data={Data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={styles.btnContent}>
                    <Button onPress={() => navigation.navigate('BottomTab')} title='NEXT' />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = ScaledSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: 'rgba(12, 240, 242, 0)',
        // elevation:10
    },
    headingText: {
        color: 'rgba(100,126,191,100.25)',
        fontSize: 54,
        fontWeight: 'bold',
        lineHeight: 55,
        textAlign: 'center',
        marginTop: scale(30)
    },
    btnContent: {
        paddingHorizontal: 15,
        marginTop: heightPercentageToDP(4)
    },
    FlatListContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    userName: {
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 15
    },
    userNameContent: {
        paddingHorizontal: 15,
        marginTop: 30
    },
    SkillsText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 17,
        marginTop: 6
    },
    skillImg: {
        resizeMode: 'contain',
        width: 100, height: 100,
    },
    skillText: {
        textAlign: 'center',
        fontSize: 17,
        color: 'black',
        fontWeight: '700',
        lineHeight: 18,
        bottom: 0
    },
})