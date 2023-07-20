import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../Component/Header'
import { ScaledSheet, scale } from 'react-native-size-matters'
import ImagePath from '../assets/ImagePath'
import Button from '../Component/ButtonComponent'


export default function MultipleSkills({navigation}) {
    const [select, setSelect] = useState(false)
    const selectBtn = (id) => {
        setSelect(id)
    }
    const Data = [
        { id: '1',skill:"Science",img:ImagePath.ScienceLAB }, { id: '2',skill:'GK',img:ImagePath.GK },
         { id: '3',skill:'Entertainment',img:ImagePath.entertainment }, { id: '4',skill:'Business' ,img:ImagePath.business},
          { id: '5',skill:'IT',img:ImagePath.IT }, { id: '6',skill:'Sport',img:ImagePath.Sports },
    ]

    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => selectBtn(item.id)} style={{
                    backgroundColor: select === item.id ? '#27374D' : 'rgba(14, 6, 10, 0.25)',
                    width: 150, height: 120, borderRadius: 15, margin: 10, marginVertical: 10,
                    justifyContent: 'center', padding: 10,
                    alignItems: 'center', borderWidth: select === item.id ? 1 : 0,
                    borderColor: select === item.id ? 'skyblue' : '',
                    elevation: select === item.id ? 10 : 0,shadowColor:'skyblue'
                }}>
                    <Image style={styles.skillImg} source={item.img} />
                    <Text style={styles.skillText}>{item.skill}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.mainContent}>
            <Header rightText='Skip' leftBtn={ImagePath.leftArrow} tintColor='white' />
            <Text style={styles.headingText}>LEARN</Text>
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
                <Button onPress={()=>navigation.navigate('BottomTab')} title='NEXT' />
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: '#27374D'
    },
    headingText: {
        color: 'skyblue',
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 30,
        textAlign: 'center',
        marginTop: scale(30)
    },
    btnContent: {
        paddingHorizontal: 15,
        marginTop: 50
    },
    FlatListContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    userName: {
        color: '#FFFF',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 15
    },
    userNameContent: {
        paddingHorizontal: 15,
        marginTop: 30
    },
    SkillsText: {
        color: '#FFFF',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 17,
        marginTop: 6
    },
    skillImg: {
        resizeMode: 'contain',
        width: 100, height: 100,
        // marginBottom:30,
    },
    skillText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#FFF',
        fontWeight: '700',
        lineHeight: 14,
        bottom: 5
    },
})