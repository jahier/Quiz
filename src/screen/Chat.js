import { ImageBackground, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import ImagePath from '../assets/ImagePath'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';

export default function Chat(props) {
    const data = [
        { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '6' }, { id: '7' },

    ]
    // onPress={() => navigation.navigate('AuthorsProfile')}
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginVertical: 7 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Chating')} style={styles.userDataMainContent}>
                    <View style={styles.userProfileContent}>
                        <Image style={styles.userProfile} source={ImagePath.myImage} />
                    </View>
                    <View style={styles.userNameContent}>
                        <View>
                            <Text style={styles.otherUserName}>Himanshu Saini</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.message}>2 new message</Text>
                                <View style={{ marginLeft: 8 }}>
                                    <Text style={styles.message}>2 min ago</Text>

                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={styles.userFollowContent}>
                        {/* <TouchableOpacity onPress={() => toggleItemSelection(item.id)} style={{ paddingHorizontal: 12, paddingVertical: 5, borderRadius: 7, backgroundColor: select.includes(item.id) ? '#1877F2' : 'rgba(94, 94, 103, 0.65)', }}>
                            <Text style={styles.userName}>{select.includes(item.id) ? 'Follow' : 'Following'}</Text>
                        </TouchableOpacity> */}
                    </View>
                </TouchableOpacity>


            </View>
        )
    }

    return (
        <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginTop: 10, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack('')} style={{ alignSelf: 'flex-start', alignItems: 'center', }}>
                    <Icon3 name="chevron-thin-left" size={18} color="white" />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 40 }}>
                    <Text style={styles.userName}>Himanshu Saini</Text>
                </View>
            </View>
            <View style={styles.inputContent}>
                <TextInput style={styles.input}
                    placeholder='Search'
                />
                <View style={styles.searchIconContent}>
                    <AntDesign name="search1" size={17} color="white" />
                </View>
            </View>

            <View style={{ bottom: 15, marginTop: 30, flex: 1, paddingHorizontal: 15 }}>
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
    inputContent: {
        paddingHorizontal: 15, marginTop: 20
    },
    input: {
        backgroundColor: 'rgba(94, 94, 103, 0.65)',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingLeft: 40,
        paddingVertical: 5,
        alignItems: 'center',
        fontSize: 16,
        color: 'white',
    },
    searchIconContent: {
        position: 'absolute', top: 10,
        left: 30
    },
    topText: {
        fontSize: 17, fontWeight: '700', color: 'white', marginTop: 15, marginLeft: 15
    },
    userName: {
        fontSize: 16, fontWeight: '700',
        color: '#FFFFFF', textAlign: 'center',
    },
    userDataMainContent: {
        flex: 1, paddingHorizontal: 10, paddingVertical: 5,
        flexDirection: 'row',
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
        alignItems: 'center', paddingHorizontal: 15
    },
    otherUserName: {
        color: 'white', fontSize: 13, fontWeight: '700'
    },
    message: {
        color: 'white', fontSize: 11, fontWeight: '400'
    },
})