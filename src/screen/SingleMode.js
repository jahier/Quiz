
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import Icon3 from 'react-native-vector-icons/Entypo';
import SubData from '../Component/SubData';

export default function SingleMode({ navigation }) {

    return (
        <SafeAreaView style={styles.mainContent}>
            <SubData onPress={() => navigation.navigate('Quiz')}
                goBack={() => navigation.goBack('')}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: 'white'
    },
    skillIcon: {
        resizeMode: 'contain', width: 20, height: 20,
        tintColor: 'white'
    },
    subCategory: {
        fontSize: 20, fontWeight: 'bold',
        color: 'white', marginTop: 25, lineHeight: 26
    },
    Category: {
        fontSize: 14, fontWeight: 'bold',
        color: 'white', marginLeft: 8, lineHeight: 13
    },
    time: {
        fontSize: 12, fontWeight: '700',
        color: 'white', lineHeight: 13, marginTop: 6
    },
    subDataImg: {
        resizeMode: 'contain', bottom: 30
    },
    selectText: {
        fontSize: 20, color: 'black',
        fontWeight: 'bold', lineHeight: 21
    },
    subText: {
        fontSize: 14, color: 'black',
        fontWeight: '700', lineHeight: 15, marginTop: 5
    },
    headerMainContent: {
        backgroundColor: '#172866', width: '100%',
        height: 140, borderBottomLeftRadius: 20,
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
})