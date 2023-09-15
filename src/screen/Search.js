import { ImageBackground, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import ImagePath from '../assets/ImagePath'
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

export default function Search(props) {
    const TopAuthors = [
        { img: ImagePath.myImage }, { img: ImagePath.swiper1 },
        { img: ImagePath.Swiper3 }, { img: ImagePath.Swiper2 },
        { img: ImagePath.myImage }, { img: ImagePath.Swiper3 },
    ]
    const Winner = [
        { img: ImagePath.myImage }, { img: ImagePath.swiper1 },
        { img: ImagePath.Swiper3 }, { img: ImagePath.Swiper2 },
        { img: ImagePath.myImage }, { img: ImagePath.Swiper3 },
    ]
    const TopAuthorsItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('AuthorsProfile')} style={{ flex: 1, marginVertical: 10, marginHorizontal: 6 }}>
                <LinearGradient style={{
                    width: 110, height: 130, borderRadius: 10, justifyContent: 'center', alignItems: 'center',
                    elevation: 0, shadowColor: 'black'
                }}
                    colors={['#E8E8E836', '#E8E8E836']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0 }}
                >
                    <View style={{ width: 80, height: 80, borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderColor: '#C1C2C4F0', elevation: 20 }}>
                        <Image style={{ resizeMode: 'contain', height: 78, width: 78, borderRadius: 50 }} source={item.img} />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', }}>
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: '600', top: 3 }}>Achieve Success Coachingeer</Text>
                        {/* <Text style={{ color: 'white', fontSize: 12, fontWeight: '600', bottom: 0 }}>5000</Text> */}
                    </View>


                </LinearGradient>
            </TouchableOpacity>
        )
    }
    const WinnerItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('OtherProfile')} style={{ flex: 1, marginVertical: 10, marginHorizontal: 6 }}>
                <LinearGradient style={{
                    width: 110, height: 130, borderRadius: 10, justifyContent: 'center', alignItems: 'center',
                    elevation: 0, shadowColor: 'black'
                }}
                    colors={['#E8E8E836', '#E8E8E836']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0 }}
                >
                    <View style={{ width: 80, height: 80, borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderColor: '#C1C2C4F0', elevation: 20 }}>
                        <Image style={{ resizeMode: 'contain', height: 78, width: 78, borderRadius: 50 }} source={item.img} />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', }}>
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', top: 3 }}>Zaheer</Text>
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: '600', bottom: 0 }}>5000</Text>
                    </View>


                </LinearGradient>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
                <View style={styles.inputContent}>
                    <TextInput style={styles.input}
                        placeholder='Search'
                    />
                    <View style={styles.searchIconContent}>
                        <AntDesign name="search1" size={17} color="white" />
                    </View>
                </View>
                <Text style={styles.topText}>Top Authors</Text>
                <View style={{}}>
                    <FlatList
                        numColumns={3}
                        data={TopAuthors}
                        renderItem={TopAuthorsItem}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <Text style={styles.topText}>Top User</Text>

                <View style={{}}>
                    <FlatList
                        numColumns={3}
                        data={Winner}
                        renderItem={WinnerItem}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ImageBackground>
        </ScrollView>
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
})