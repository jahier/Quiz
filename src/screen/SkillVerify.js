import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

export default function SkillVerify(props) {
    console.log('-=-=-=-', props.route.params.data);
    const navigate = () => {
        if (props.route.params.data === '1') {
            props.navigation.navigate('SingleMode')
        }
        else if (props.route.params.data === '2') {
            props.navigation.navigate('DuoMode',{data:'1'})
        }
        else if (props.route.params.data === '3') {
            props.navigation.navigate('DuoMode',{data:'2'})
        }
        else if (props.route.params.data === '4') {
            props.navigation.navigate('DuoMode',{data:'3'})
        }
        else {

        }
    }

    const Data = [
        { modeText: 'Science', img: ImagePath.sportsBac, },
        { modeText: 'IT', img: ImagePath.ITBack, onPress: navigate },
    ];
    const renderItem = ({ item, }) => {
        return (
            <TouchableOpacity onPress={item.onPress} style={{ flex: 1, marginVertical: 10, marginHorizontal: 15, borderRadius: 15 }}>
                <ImageBackground style={{
                    width: 150, height: 110, alignItems: 'flex-start',
                    paddingHorizontal: 10, justifyContent: 'flex-end', borderRadius: 15,
                    overflow: 'hidden'
                }} resizeMode={'cover'} source={item.img}>
                    <TouchableOpacity onPress={item.onPress} style={{}}>
                        <Text style={{ fontSize: 14, color: '#FFFF', fontWeight: '700', marginTop: 0, bottom: 5 }}>{item.modeText}</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
    return (
        <SafeAreaView style={styles.mainContent}>
            <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
                <LinearGradient colors={[
                    // 'rgba(138, 136, 144, 1)', 'rgba(109, 108, 114, 0.8)','rgba(109, 108, 114, 0.5)'
                    '#E8E8E836', '#E8E8E836'
                ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.headerMainContent}>
                    <View style={styles.headerContent}>
                        <TouchableOpacity style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
                            <Icon3 name="chevron-thin-left" size={17} color="white" />
                        </TouchableOpacity>

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.projectName}>LEARNO</Text>

                        </View>
                        <TouchableOpacity style={{ backgroundColor: 'white', width: 30, height: 30, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}>
                            <Icon3 name="bell" size={20} color="#172866" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 0, marginTop: 10 }}>
                        <View style={{ width: 60, height: 60, borderRadius: 40, alignSelf: 'center', }}>
                            <Image style={{ resizeMode: 'contain', width: 60, height: 60, borderRadius: 40 }} source={ImagePath.myImage} />
                        </View>
                        <View style={{ justifyContent: 'center', marginLeft: 15 }}>
                            <Text style={styles.userName}>Zaheer</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <View style={{ backgroundColor: 'rgba(237, 232, 235, 0.31)', width: 70, height: 35, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon3 name="bar-graph" size={20} color="orange" />
                                    <Text style={{ marginLeft: 10, fontSize: 14, color: 'white', fontWeight: '700' }}>0</Text>
                                </View>
                                <View style={{ backgroundColor: '#E4E3E3', width: 80, height: 35, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, marginLeft: 10, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon3 name="wallet" size={20} color="#172866" />
                                    <Text style={{ marginLeft: 5, fontSize: 14, color: '#172866', fontWeight: '700' }}>₹ {"5000"}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
                    <Text style={styles.selectText}>Select one </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    <FlatList
                        numColumns={2}
                        data={Data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ paddingHorizontal: 15, justifyContent: 'flex-end', alignItems: 'center', padding: 15 }}>
                    <TouchableOpacity style={{ backgroundColor: '#E8E8E836', height: 50, width: '100%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <AntDesign name="plus" size={20} color="white" />
                        <Text style={{ fontSize: 14, color: 'white', fontWeight: '600', marginLeft: 5 }}>Add Now</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: 'white'
    },
    selectText: {
        fontSize: 16, color: 'white',
        fontWeight: '700', lineHeight: 17
    },
    headerMainContent: {
        width: '100%',
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