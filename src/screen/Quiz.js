import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ImageBackground, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import Icon3 from 'react-native-vector-icons/Entypo';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

export default function Quiz(props) {
    const [currentDuration, setCurrentDuration] = useState(true);
    const [modalCurrentDuration, setModalCurrentDuration] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const [click, setClick] = useState(false)
    console.log('===-=-=-=-=', currentDuration);

    const Data = [
        { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' },
    ];
    // console.log('===----',Data);
    const Data2 = [
        { id: '1' }, { id: '2' }, { id: '3' }, { idL: '4' },
    ];
    // console.log('---------',click);
    const btnClick = (id) => {
        setClick(id)
    }
    const openModal = () => {
        setModalVisible(true)
        setCurrentDuration(false)
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    const handleTimerToggle = () => {
        setCurrentDuration(true);
    };
    const handleTimerToggle2 = () => {
        setCurrentDuration(false);
    };

    useEffect(() => {
        handleTimerToggle()
        setTimeout(() => {
            openModal()
        }, 16000)
    }, [])
    useEffect(()=>{
        setTimeout(() => {
            props.navigation.navigate('WinnerShow')
        }, 20000)
    })
    const renderItem2 = ({ item, }) => {
        return (
            <View style={{ marginVertical: 5, paddingHorizontal: 30, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', width: '100%', borderWidth: 0, borderColor: 'darkgray', borderRadius: 15, paddingHorizontal: 10, paddingVertical: 4, backgroundColor: '#E8E8E836' }}>
                    <View style={{ width: 40, height: 40, borderRadius: 40, alignSelf: 'center', }}>
                        <Image style={{ resizeMode: 'contain', width: 40, height: 40, borderRadius: 40 }} source={ImagePath.singleMode} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: '700', color: 'white' }}>Erik Gunsel</Text>
                        <Text style={{ fontSize: 11, fontWeight: '600', color: 'white' }}>Time: 10sec</Text>
                    </View>
                </View>
            </View>
        );
    }
    const renderItem = ({ item, }) => {
        return (
            <View style={{ marginVertical: 5, paddingHorizontal: 30 }}>
                <TouchableOpacity onPress={() => btnClick(item.id) || setCurrentDuration(false)} style={{ width: '100%', height: 50, borderWidth: 1, borderColor: click === item.id ? 'darkgray' : 'darkgray', borderRadius: 10, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{
                        width: 35, height: 35, borderRadius: 20, borderWidth: 0.5,
                        borderColor: 'white', backgroundColor: click === item.id ? 'green' : null, justifyContent: 'center', alignItems: 'center'
                    }}>
                        {click === item.id ?
                            <AntDesign name="check" size={20} color="white" /> : ''}

                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.lorem}>Server</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <ImageBackground source={ImagePath.homeBackground} style={styles.mainContent}>
            <View style={styles.headerMainContent}>
                <View style={styles.headerContent}>
                    <TouchableOpacity style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
                        <Icon3 name="chevron-thin-left" size={17} color="white" />
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <Text style={styles.projectName}>QUIZ</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40, }}>
                <View style={styles.whiteModal}>
                    <View style={styles.CountdownCircleTimer}>
                        <View style={{ backgroundColor: 'white', height: 110, width: 110, borderRadius: 60 }}>
                            <CountdownCircleTimer
                                isPlaying={currentDuration}
                                duration={15}
                                colors={['#172866', '#172866', '#A30000', '#A30000']}
                                colorsTime={[7, 5, 2, 0]}
                                onComplete={() => setCurrentDuration(0)}
                                isLinearGradient={false}
                                size={110}
                                strokeWidth={6}
                                strokeLinecap="round"
                                trailColor="#d0d0d0"
                                children={({ remainingTime }) => (
                                    <Text style={{
                                        fontSize: 36,
                                        color: currentDuration >= 10 ? 'red' : '#172866',

                                    }}>{remainingTime}</Text>
                                )}
                                onTimeElapsed={() => {
                                    setCurrentDuration(15);
                                }}
                                // onUpdate is called on each second
                                onUpdate={(elapsedTime) => {
                                    setCurrentDuration(Math.max(0, 15 - elapsedTime));
                                }}
                            />

                            {/* </CountdownCircleTimer> */}
                        </View>
                        <Text style={styles.questionCountText}>Question 5/20</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, bottom: 40 }}>
                        <Text style={styles.lorem}>Which of the following can read and render HTML web pages</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, bottom: 20 }}>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <Modal
                isVisible={modalVisible}
                animationIn="slideInUp"  // You can customize the animation style
                animationOut="slideOutUp"
                onBackdropPress={closeModal}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'rgba(125, 126, 133, 0.99)', width: '100%', height: 300, borderRadius: 15, elevation: 10 }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 40 }}>
                                <View style={{ backgroundColor: 'white', height: 80, width: 80, borderRadius: 60 }}>
                                    <CountdownCircleTimer
                                        isPlaying={setModalCurrentDuration}
                                        duration={3}
                                        colors={['#172866', '#172866', '#172866', '#172866']}
                                        // colorsTime={[7, 5, 2, 0]}
                                        onComplete={() => setModalCurrentDuration(3)}
                                        isLinearGradient={false}
                                        size={80}
                                        strokeWidth={5}
                                        strokeLinecap="round"
                                        trailColor="#d0d0d0"
                                        children={({ remainingTime }) => (
                                            <Text style={{
                                                fontSize: 36,
                                                color: '#172866',

                                            }}>{remainingTime}</Text>
                                        )}
                                        onTimeElapsed={() => {
                                            setModalCurrentDuration(3);
                                        }}
                                        // onUpdate is called on each second
                                        onUpdate={(elapsedTime) => {
                                            setModalCurrentDuration(Math.max(0, 3 - elapsedTime));
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, bottom: 30 }}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={Data2}
                                    renderItem={renderItem2}
                                    keyExtractor={(item) => item.id}
                                />
                            </View>


                        </View>
                    </View>

                </View>
            </Modal>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: 'white'
    },
    CountdownCircleTimer: {
        justifyContent: 'center', alignItems: 'center',
        bottom: 50
    },
    questionCountText: {
        fontSize: 15, color: 'white',
        textAlign: 'center', fontWeight: '700', marginTop: 10
    },
    lorem: {
        fontSize: 15, color: 'white',
        // textAlign:'center',
        fontWeight: '600'
    },
    whiteModal: {
        width: '100%', height: 170,
        backgroundColor: '#E8E8E836',
        elevation: 0, shadowColor: 'black',
        bottom: 80, borderRadius: 15
    },
    headerMainContent: {
        backgroundColor: '#E8E8E836', width: '100%',
        height: 220, borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15, paddingHorizontal: 15,
        elevation: 0, shadowColor: 'black'
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    projectName: {
        color: 'white', fontSize: 30, fontWeight: 'bold', bottom: 6,
        marginRight: 20
    },
    userName: {
        color: 'white', fontSize: 14, fontWeight: 'bold'
    },





    countdownText: {
        fontSize: 36,
        color: '#172866',
    },

})