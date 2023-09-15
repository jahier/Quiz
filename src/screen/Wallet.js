import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ImageBackground, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../assets/ImagePath';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LottieView from 'lottie-react-native';


export default function Wallet(props) {
    const [date, setDate] = useState(new Date());

    const [showDatePicker, setShowDatePicker] = useState(false);

    const [date2, setDate2] = useState(new Date());
    const [showDatePicker2, setShowDatePicker2] = useState(false);


    const [select, setSelect] = useState('1')
    const selectBtn = (id) => {
        setSelect(id)
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };
    const formattedDate = moment(date).format('DD-MM-YYYY');
    const onChange2 = (event, selectedDate2) => {
        const currentDate2 = selectedDate2 || date2;
        setShowDatePicker2(false);
        setDate2(currentDate2);
    };
    const formattedDate2 = moment(date2).format('DD-MM-YYYY');
    const history = [
        { icon: "arrowleft" }, { icon: "arrowright" },
        { icon: "arrowleft" }, { icon: "arrowleft" },
        { icon: "arrowleft" }, { icon: "arrowright" },
    ]
    const Withdraw = [
        {}, {}, {},
    ]

    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.DataShowContent}>
                    <View style={{ width: '25%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ width: 33, height: 33, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign name={item.icon} size={15} color="white" />
                        </View>
                        <View style={{ width: '75%', marginLeft: 10 }}>
                            <Text style={{ fontSize: 12, fontWeight: '500', color: 'white', }}>{formattedDate}</Text>
                        </View>
                    </View>
                    <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>UI/UX </Text>
                    </View>
                    <View style={{ width: '25%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>100</Text>
                        <LottieView style={{ width: 30, height: 40, marginLeft: 10 }} source={require('../assets/image/coinWithdraaw.json')} autoPlay loop />

                    </View>

                </View>
            </View>
        )
    }
    const renderItemWithdraw = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.DataShowContent}>
                    <View style={{ width: '25%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: 'white', marginLeft: 10 }}>{formattedDate}</Text>
                    </View>
                    <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>UI/UX</Text>
                    </View>
                    <View style={{ width: '25%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>100</Text>
                        <LottieView style={{ width: 30, height: 40, marginLeft: 10 }} source={require('../assets/image/coinWithdraaw.json')} autoPlay loop />

                    </View>

                </View>
            </View>
        )
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
                        <TouchableOpacity onPress={()=>props.navigation.goBack('')} style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
                            <Icon3 name="chevron-thin-left" size={17} color="white" />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', marginLeft: 15 }}>
                            <Text style={styles.projectName}>LEARNO</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#666666', width: 30, height: 30, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}>
                            <Icon3 name="bell" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>History</Text>
                    </View>
                </LinearGradient>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 20 }}>
                    <TouchableOpacity onPress={() => selectBtn('1')} style={{ width: '48%', height: 40 }}>
                        <LinearGradient colors={[
                            // 'rgba(138, 136, 144, 1)', 'rgba(109, 108, 114, 0.8)','rgba(109, 108, 114, 0.5)'
                            select === '1' ? '#666666' : '#E8E8E836', '#E8E8E836'
                        ]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={{ width: '100%', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: 'white' }}>Transaction History</Text>

                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectBtn('2')} style={{ width: '48%', height: 40 }}>
                        <LinearGradient colors={[
                            // 'rgba(138, 136, 144, 1)', 'rgba(109, 108, 114, 0.8)','rgba(109, 108, 114, 0.5)'
                            select === '2' ? '#666666' : '#E8E8E836', '#E8E8E836'
                        ]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={{ width: '100%', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: 'white' }}>Withdraw</Text>

                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                {select === '1' &&
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, justifyContent: 'space-between', marginTop: 25 }}>
                            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.selectDateBtn}>
                                <AntDesign name="calendar" size={20} color="white" />
                                <Text style={{ fontSize: 13, fontWeight: '500', color: 'white' }}>{formattedDate}</Text>
                                <AntDesign name="caretdown" size={10} color="white" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: 'white' }}>To</Text>

                            <TouchableOpacity onPress={() => setShowDatePicker2(true)} style={styles.selectDateBtn}>
                                <AntDesign name="calendar" size={20} color="white" />
                                <Text style={{ fontSize: 13, fontWeight: '500', color: 'white' }}>{formattedDate2}</Text>
                                <AntDesign name="caretdown" size={10} color="white" />
                            </TouchableOpacity>
                        </View>

                        {showDatePicker && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                // dateFormat='DD/MM/YYYY' 
                                is24Hour={false}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                        {showDatePicker2 && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date2}
                                mode="date"
                                // dateFormat='DD/MM/YYYY' 
                                is24Hour={false}
                                display="default"
                                onChange={onChange2}
                            />
                        )}

                        <View style={styles.headingContentDataShow}>
                            <View style={{ width: '25%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ width: 33, height: 33, borderRadius: 25, backgroundColor: '#E8E8E836', justifyContent: 'center', alignItems: 'center' }}>
                                    <AntDesign name="arrowleft" size={13} color="white" />
                                    <AntDesign name="arrowright" size={13} color="white" />
                                </View>
                                <View style={{ width: '75%', marginLeft: 10 }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: 'white' }}>Date</Text>
                                </View>
                            </View>
                            <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: 'white' }}>Quiz</Text>
                            </View>
                            <View style={{ width: '25%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: 'white' }}>Amount</Text>
                            </View>
                        </View>


                        <View style={{ flex: 1, marginTop: 10 }}>
                            <FlatList
                                data={history}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    </View>
                }

                {
                    select === '2' && (
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <View style={styles.headingContentDataShow}>
                                <View style={{ width: '25%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, justifyContent: 'flex-start', }}>

                                    <Text style={{ fontSize: 14, fontWeight: '500', color: 'white', lineHeight: 30 }}>Date</Text>
                                </View>
                                <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                                    <Text style={{ fontSize: 14, fontWeight: '500', color: 'white', lineHeight: 30 }}>Quiz</Text>
                                </View>
                                <View style={{ width: '25%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>

                                    <Text style={{ fontSize: 14, fontWeight: '500', color: 'white', lineHeight: 30 }}>Amount</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={Withdraw}
                                    renderItem={renderItemWithdraw}
                                    keyExtractor={(item) => item.id}
                                />
                            </View>
                        </View>
                    )
                }
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: 'white'
    },
    selectDateBtn: {
        backgroundColor: '#E8E8E836',
        width: 140, height: 30,
        marginRight: 0, justifyContent: 'space-between',
        alignItems: 'center', borderRadius: 5,
        flexDirection: 'row', paddingHorizontal: 10
    },
    headingContentDataShow: {
        backgroundColor: '#E8E8E836', width: '100%',
        paddingVertical: 5, paddingHorizontal: 15, justifyContent: 'space-between',
        alignItems: 'center', marginTop: 15, flexDirection: 'row'
    },
    DataShowContent: {
        width: '100%',
        paddingVertical: 0, paddingHorizontal: 15, justifyContent: 'space-between',
        alignItems: 'center', marginTop: 0, flexDirection: 'row'
    },
    headerMainContent: {
        width: '100%',
        height: 120, borderBottomLeftRadius: 20,
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

})