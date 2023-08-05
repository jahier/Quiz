import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';


export default function DataShow(props) {
    const dataShow = useState(props.route.params.userData)
    console.log('props=====', JSON.stringify(dataShow));
    const selectRender = ({ item }) => {
        return (
            <TouchableOpacity style={{ flex: 1, }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, color: 'black', fontWeight: '600' }}>{item.first_name}</Text>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>{item.last_name}</Text>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>{item.email}</Text>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>{item.id}</Text>
                </View>
                <Image style={{ width: '100%', height: 200, borderRadius: 15 }} source={{ uri: item.avatar }} />
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity onPress={() => props.navigation.goBack('')}>
                    <Icon name="arrow-left" size={25} color="black" />
                </TouchableOpacity>

            </View>

            <View style={{ paddingHorizontal: 15 }}>
                <FlatList
                    //   numColumns={1}
                    data={dataShow}
                    renderItem={selectRender}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})