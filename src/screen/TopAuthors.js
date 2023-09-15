import { ImageBackground, StyleSheet, TouchableOpacity, View, Text, TextInput, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import ImagePath from '../assets/ImagePath'
import Icon3 from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';


export default function TopAuthors({navigation}) {
    const [search, setSearch] = useState(false);
    const searchBtn = () => {
        setSearch(!search)
    }
    const [select, setSelect] = useState([])
    console.log('======>>>>', select);
    const toggleItemSelection = (itemId) => {
        if (select.includes(itemId)) {
            setSelect(select.filter((id) => id !== itemId));
        } else {
            setSelect([...select, itemId]);
        }
    };

    const data = [
        { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '6' }, { id: '7' },

    ]

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginVertical: 10 }}>
                <TouchableOpacity onPress={()=>navigation.navigate('AuthorsProfile')} style={styles.userDataMainContent}>
                    <View style={styles.userProfileContent}>
                        <Image style={styles.userProfile} source={ImagePath.myImage} />
                    </View>
                    <View style={styles.userNameContent}>
                        <View>
                            <Text style={styles.userName}>Achieve Success Coachingeer</Text>
                        </View>
                    </View>
                    <View style={styles.userFollowContent}>
                        <TouchableOpacity onPress={() => toggleItemSelection(item.id)} style={{paddingHorizontal:12,paddingVertical:5,borderRadius:7,backgroundColor:select.includes(item.id)?'rgba(94, 94, 103, 0.65)':'#1877F2',}}>
                            <Text style={styles.userName}>{select.includes(item.id)?'Following':'Follow'}</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
  
    return (
        <ImageBackground style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 10 }} source={ImagePath.homeBackground}>
            <View style={styles.headerContent}>
                <View style={styles.backBtnContent}>
                    <TouchableOpacity onPress={() => navigation.goBack('')} style={styles.goBackBtn}>
                        <Icon3 name="chevron-thin-left" size={18} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headingText}>Top Authors</Text>
                </View>
                <View style={styles.searchBtnContent}>
                    {search ?
                        <View>
                            <TextInput style={styles.input}
                                placeholder='Search'
                            >

                            </TextInput>
                        </View>
                        :
                        ''}
                    <TouchableOpacity onPress={() => searchBtn()}>
                        <Feather name="search" size={23} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ bottom: 15, marginTop: 15, flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', height: 60
    },
    backBtnContent: {
        width: '50%', flexDirection: 'row', alignItems: 'center'
    },
    searchBtnContent: {
        width: '50%', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end'
    },
    headingText: {
        color: 'white', fontSize: 14,
        fontWeight: '600', marginLeft: 10
    },
    input: {
        color: 'white', width: 160, borderRadius: 15, fontSize: 12,
        borderWidth: 0.5, borderColor: 'white', marginRight: 10,
        paddingHorizontal: 8, paddingVertical: 1,
    },
    userDataMainContent: {
        flex: 1, paddingHorizontal: 10, paddingVertical: 10,
        flexDirection: 'row', borderWidth: 0.5, borderColor: 'white',
        borderRadius: 15,
    },
    userProfileContent: {
        width: '20%'
    },
    userProfile: {
        width: 60, height: 60, borderRadius: 35,
        resizeMode: 'contain'
    },
    userNameContent: {
        width: '55%', flexDirection: 'row',
        alignItems: 'center', paddingHorizontal: 7
    },
    userName: {
        color: 'white', fontSize: 12, fontWeight: '700'
    },
    userFollowContent: {
        width: '25%', alignItems: 'flex-end', justifyContent: 'center'
    },
    goBackBtn:{ alignSelf: 'flex-start', alignItems: 'center' },
})