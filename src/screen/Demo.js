import { FlatList, StyleSheet, Text, TouchableOpacity, View, RefreshControl, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, fetchApiData } from '../slices/userSlice';
import { Image } from 'react-native-animatable';
import Input from '../Component/Input';

export default function Demo(props) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.user.data)
  const [refreshing, setRefreshing] = React.useState(false);
  const [search, setSearch] = useState()
  console.log('=====>>>---SEARCh=====', search);

  useEffect(() => {
    dispatch(fetchApiData())
  }, [dispatch])
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  // const SEARCHDATA = data.filter((item) => item.first_name === search || item.email === search)
  const filteredData = data.filter(item => item.first_name.toLowerCase().includes(search));
  console.log('=====>>>---SEARCHDATA=====', filteredData);

  const handleItemPress = (userId) => {
    const selectedUser = data.find((data) => data.id === userId);
    props.navigation.navigate("DataShow", { userData: selectedUser });
  };
  const selectRender = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleItemPress(item.id)} style={{ flex: 1, marginVertical: 15, borderBottomWidth: 1, borderColor: 'black', paddingVertical: 5 }}>
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
    <View style={{ flex: 1, backgroundColor: '#FFFF' }}>
      <View>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, alignItems: 'center', marginTop: 50 }}>
        <Text style={{ fontSize: 16, color: 'skyblue', fontWeight: '600' }}>User Details</Text>
        <TouchableOpacity onPress={() => addUser()} style={{ width: 200, borderRadius: 15, justifyContent: 'center', alignItems: 'center', padding: 5, backgroundColor: 'blue' }}>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '900' }}>Add User</Text>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 15 }}>
        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray', marginTop: 0, }}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '900' }}>Add User</Text>
          <Icon name="delete" color="red" size={20} />
        </View>
        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray', marginTop: 0, }}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '900' }}>Add User</Text>
          <Icon name="delete" color="red" size={20} />
        </View>
        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray', marginTop: 0, }}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '900' }}>Add User</Text>
          <Icon name="delete" color="red" size={20} />
        </View>

      </View>
      <View style={{ height: 1, width: '100%', backgroundColor: 'white', marginTop: 0 }}></View> */}
      </View>

      <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
        <Text style={{ fontSize: 12, color: filteredData.length === 0 ? 'maroon' : 'black', fontWeight: '700', lineHeight: 13 }}>Search</Text>
        <TextInput
          style={{
            width: '100%', borderWidth: 1,
            borderColor: '#27374D', height: 40,
            paddingHorizontal: 15,
            color: filteredData.length === 0 ? 'maroon' : 'black',
            marginTop: 3, justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            fontSize: 14, fontWeight: '700',
            elevation: 15, shadowColor: 'darkblue',
          }}
          placeholder='Search'
          placeholderTextColor="gray"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      {filteredData.length === 0 ?
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <Text style={styles.notFound}>User Not Found</Text>
        </View>
        :
        <View style={{ paddingHorizontal: 15, flex: 1, marginTop: 10 }}>
          <FlatList
            //   numColumns={1}
            data={filteredData}
            renderItem={selectRender}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['blue', 'pink', 'blue']}
                progressBackgroundColor="white"
              />
            }
          />
        </View>}



<View>
{/* import React, { useEffect, useState } from 'react';
import { Card } from 'react-native-paper';
import { Text, View, Image, Alert, ToastAndroid, TouchableHighlight, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Header, Footer, Content, Container } from 'native-base';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Share from 'react-native-share';
import files from '../../Components/FileBase64';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import { AdMobInterstitial } from 'react-native-admob';
import { useSelector } from 'react-redux';

const DrawerContents = ({ ...props }) => {

    // Fetching Ads Info From Central Store (Redux)
    const AdsInfo = useSelector((state) => state.setAdsData);

    //Fetching Student Subjects From Central Store (Redux)
    const studentSubjects = useSelector((state) => state.setStudentSubjects.isSubjectsReady);

    const navigation = useNavigation();
    const [Name, SetName] = useState();
    const [Branch, SetBranch] = useState();
    const [Course, SetCourse] = useState();
    const isFocused = useIsFocused();
    const [showAdmobInterstitialAds, setShowAdmobInterstitialAds] = useState(AdsInfo.AdmobInterstitialEnable);

    useEffect(() => {
        const fetchData = async () => {
            const StudentName = await AsyncStorage.getItem("Full_Name");
            const StudentCourse = await AsyncStorage.getItem("Course");
            const StudentBranch = await AsyncStorage.getItem("Branch");
            SetName(JSON.parse(StudentName))
            SetCourse(JSON.parse(StudentCourse))
            SetBranch(JSON.parse(StudentBranch))
        }
        fetchData()
        Orientation.lockToPortrait();
    }, [isFocused, studentSubjects]);

    useEffect(() => {
        setShowAdmobInterstitialAds(AdsInfo.AdmobInterstitialEnable);
    }, [AdsInfo.AdmobInterstitialEnable])

    const SignOut = () => {
        Alert.alert(
            'Sign Out',
            'Are You Sure You Want To Sign Out ?',
            [
                { text: 'No', onPress: () => ToastAndroid.show('Continue...', ToastAndroid.SHORT) },
                {
                    text: 'Yes', onPress: () => {
                        AsyncStorage.setItem("Login", JSON.stringify(false));
                        navigation.navigate('Login');
                    }
                }
            ]
        )
    }

    const customShare = () => {
        const ShareOptions = {
            message: "Hi! I Invite You to Join Enrollge, India's Biggest Online Learning Platform, Where You Can Watch Free Video Lectures, Free All types of Courses and Get all Your Doubts Solved Instantly! Check it out here:- https://play.google.com/store/apps/details?id=com.enrollge.enrollyourcollege",
            urls: [files.appLogo]
        }
        try {
            Share.open(ShareOptions);
        } catch (error) {
            // console.warn('Error =>', error);
            ToastAndroid.show('Some Error Occurred, Please Try Again', ToastAndroid.SHORT)
        }
    }


    return (
        <Container>
            <Header style={{ backgroundColor: '#202b58', marginTop: RFPercentage(10) }} androidStatusBarColor="transparent">
                <TouchableHighlight underlayColor='transparent' style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end' }} onPress={() => {
                    if (showAdmobInterstitialAds) {
                        // Display an interstitial
                        AdMobInterstitial.setAdUnitID(AdsInfo.ProfileInterstitialAdUnit);
                        AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
                    }
                    props.navigation.navigate('Profile')
                }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end' }}>
                        <View style={{ flex: 1.4, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Card style={{ height: RFPercentage(10), width: RFPercentage(10), borderRadius: RFPercentage(10) }}>
                                <Image style={{ height: "100%", width: "100%", borderRadius: 50 }} source={{ uri: files.AppBanner }} />
                            </Card>
                        </View>
                        <View style={{ flex: 2.3, justifyContent: 'center', paddingStart: 20, alignItems: 'flex-start', paddingBottom: 16 }}>
                            <Text numberOfLines={2} ellipsizeMode='tail' style={{ color: 'white' }}>{Name}</Text>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: 'white' }}>{Course} - {Branch}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingBottom: 16 }}>
                            <FontAwesome onPress={() => props.navigation.navigate('Profile')} style={{ marginStart: 10 }} color="white" name={'arrow-circle-right'} size={35} />
                        </View>
                    </View>
                </TouchableHighlight>
            </Header>



            <Content style={{ backgroundColor: '#202b58' }} contentContainerStyle={{ marginTop: 30 }} >
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginHorizontal: 15 }} />
                <DrawerContentScrollView  {...props}>
                    <DrawerItem labelStyle={{ color: 'white' }} label="Home" onPress={() => {
                        if (showAdmobInterstitialAds) {
                            // Display an interstitial
                            AdMobInterstitial.setAdUnitID(AdsInfo.HomeInterstitialAdUnit);
                            AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
                        }
                        props.navigation.navigate('Home')
                    }} icon={({ color, size }) => <AntDesign name='home' style={{ fontSize: size, color: "white" }} />} />
                    <DrawerItem labelStyle={{ color: 'white' }} label="Profile" onPress={() => {
                        if (showAdmobInterstitialAds) {
                            // Display an interstitial
                            AdMobInterstitial.setAdUnitID(AdsInfo.ProfileInterstitialAdUnit);
                            AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
                        }
                        props.navigation.navigate('Profile')
                    }} icon={({ color, size }) => <AntDesign name={'profile'} style={{ color: 'white', fontSize: size }} />} />
                    <DrawerItem labelStyle={{ color: 'white' }} label="Courses" onPress={() => {
                        if (showAdmobInterstitialAds) {
                            // Display an interstitial
                            AdMobInterstitial.setAdUnitID(AdsInfo.CoursesInterstitialAdUnit);
                            AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
                        }
                        props.navigation.navigate('CoursesTypes')
                    }} icon={({ color, size }) => <AntDesign name={'slack'} style={{ color: 'white', fontSize: size }} />} />
                    <DrawerItem labelStyle={{ color: 'white' }} label="Share the app" onPress={customShare} icon={({ color, size }) => <AntDesign name={'sharealt'} style={{ color: 'white', fontSize: size }} />} />
                    <DrawerItem labelStyle={{ color: 'white' }} label="Contact Us" onPress={() => {
                        if (showAdmobInterstitialAds) {
                            // Display an interstitial
                            AdMobInterstitial.setAdUnitID(AdsInfo.ContactUsInterstitialAdUnit);
                            AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
                        }
                        props.navigation.navigate('Contact Us')
                    }} icon={({ color, size }) => <AntDesign name={'contacts'} style={{ fontSize: size, color: "white" }} />} />
                    <DrawerItem labelStyle={{ color: 'white' }} label="Terms & Conditions" onPress={() => {
                        if (showAdmobInterstitialAds) {
                            // Display an interstitial
                            AdMobInterstitial.setAdUnitID(AdsInfo.TermsAndConditionsInterstitialAdUnit);
                            AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
                        }
                        props.navigation.navigate('Terms & Conditions')
                    }} icon={({ color, size }) => <Ionicons style={{ fontSize: size, color: 'white' }} name="newspaper" />} />
                </DrawerContentScrollView>
            </Content>



            <Footer {...props} style={{ backgroundColor: '#202b58', height: 80, width: "100%" }} >
                <TouchableOpacity onPress={SignOut}>
                    <View style={{ borderTopWidth: 1, borderTopColor: 'white', flexDirection: 'row', paddingVertical: 20, width: '90%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: 'white', fontFamily: 'JosefinSans-SemiBold' }}>Sign Out</Text>
                        <FontAwesome size={30} style={{ color: 'white', paddingTop: 2 }} name={'sign-out'} />
                    </View>
                </TouchableOpacity>
            </Footer>
        </Container>
    );
}


export default React.memo(DrawerContents); */}
</View>
    </View>
  )
}

const styles = StyleSheet.create({
  Input: {
    width: '100%', borderWidth: 1,
    borderColor: '#27374D', height: 40,
    paddingHorizontal: 15, color: 'black',
    marginTop: 3, justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    fontSize: 14, fontWeight: '700',
    elevation: 15, shadowColor: 'darkblue'
  },
  label: { fontSize: 12, color: 'maroon', fontWeight: '700', lineHeight: 13 },
  notFound: { fontSize: 30, color: 'gray', fontWeight: '700', lineHeight: 31 },
})