import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Header from '../Component/Header'
import { ScaledSheet, scale } from 'react-native-size-matters'
import ImagePath from '../assets/ImagePath'
import Button from '../Component/ButtonComponent'
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP } from 'react-native-responsive-screen'


export default function MultipleSkills({ navigation }) {
    const [select, setSelect] = useState([])
    console.log('======>>>>', select);
    const toggleItemSelection = (itemId) => {
        if (select.includes(itemId)) {
            setSelect(select.filter((id) => id !== itemId));
        } else {
            setSelect([...select, itemId]);
        }
    };

    const Data = [
        { id: '1', skill: "Science", img: ImagePath.swiper1 }, { id: '2', skill: 'GK', img: ImagePath.GK },
        { id: '3', skill: 'Entertainment', img: ImagePath.entertainment }, { id: '4', skill: 'Business', img: ImagePath.business },
        { id: '5', skill: 'IT', img: ImagePath.IT }, { id: '6', skill: 'Sport', img: ImagePath.Sports },
    ]

    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => toggleItemSelection(item.id)} style={{ flex: 1, }}>
                    <View style={{
                        backgroundColor: select.includes(item.id) ? 'rgba(160,156,191,0.35)' : 'rgba(160,156,191,0.35)',
                        width: 150, height: 120, margin: 5, marginVertical: 10,
                        justifyContent: 'center', padding: 0,
                        alignItems: 'center',
                        borderWidth: select.includes(item.id) ? 1.5 : 0.3,
                        borderColor: select.includes(item.id) ? 'white' : 'lightgray',
                        elevation: 0, shadowColor: 'rgba(188, 4, 161, 0.2)',
                        // borderTopLeftRadius: 20, borderBottomRightRadius: 20
                        borderRadius:10
                    }}>
                        {select.includes(item.id) ?
                            <ImageBackground style={{
                                width: 148,
                                height: 118, alignItems: 'center',
                                justifyContent: 'center',
                                // borderTopLeftRadius: 20, borderBottomRightRadius: 20,
                                borderRadius:10,
                                // borderWidth: select.includes(item.id) ? 1.5 : 0.3,
                                // borderColor: select.includes(item.id) ? 'skyblue' : 'white',
                                overflow: 'hidden'
                            }} source={ImagePath.swiper1} >
                                <Text style={styles.skillText}>{item.skill}</Text>

                            </ImageBackground>
                            :
                            <Text style={styles.skillText}>{item.skill}</Text>
                        }

                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <ImageBackground style={{ flex: 1 }} source={ImagePath.bacImage} >
            {/* <View style={{ flex: 1, backgroundColor: 'rgba(19, 18, 19, 0.29)' }}> */}
            <Header leftBtn={ImagePath.leftArrow} tintColor='white' onPress={() => navigation.goBack()} />
            <Text style={styles.headingText}>LEARNO</Text>
            <View style={styles.userNameContent}>
                <Text style={styles.userName}>Hii: {'ZAHEER'}</Text>
                <Text style={styles.SkillsText}>Choose Your Skills</Text>
            </View>
            <View style={{ paddingHorizontal: 15, flex: 1 }}>
                <View style={styles.mainContent}>

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
            </View>
            {/* </View> */}
        </ImageBackground>
    )
}

const styles = ScaledSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: 'rgba(160,156,191,0.35)',
        marginTop: 50,
        borderRadius: 30,
        bottom:30,
        borderWidth: 0.5,borderColor: 'white'
    },
    headingText: {
        fontSize: 45, lineHeight: 46,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 25
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
        color: 'white',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 15
    },
    userNameContent: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    SkillsText: {
        color: 'white',
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
        color: 'white',
        fontWeight: '700',
        lineHeight: 18,
        bottom: 0
    },
})