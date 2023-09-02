import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ImageBackground, FlatList, ScrollView,TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import AppIntroSlider from 'react-native-app-intro-slider';
import ImagePath from '../assets/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import Icon3 from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from 'react-native-modal';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function Screen2(props) {
  const [drawer, setDrawer] = useState()
  const [dashboard, setDashboard] = useState()
  const [color, setColor] = useState(false)
  const bottomSheetRef = useRef();
  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };
  const closeBottomSheet = () => {
    bottomSheetRef.current.close();
  };
  const drawerBtn = () => {
    setDrawer(!drawer)
  }
  const dashboardBTn = () => {
    setDashboard(!dashboard)
  }
  const colorBtn = (id) => {
    setColor(id)
  }

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const sliderRef = useRef();
  const slides = [
    {}, {}, {}, {},
  ];

  const clickData = () => {
    props.navigation.navigate('SkillVerify', { data: '1' })
  }
  const clickData2 = () => {
    props.navigation.navigate('SkillVerify', { data: '2' })
  }
  const Data = [
    { modeText: 'Practice Mode\n\Play Single', img: ImagePath.singleMode, onPress: clickData },
    { modeText: 'Dual\n\Play with friends', img: ImagePath.dualMode, onPress: clickData2 },
    { modeText: 'Slots\n\Play in groups', img: ImagePath.multipleMode, onPress: clickData2 },
  ];

  const Winner = [
    { img: ImagePath.myImage }, { img: ImagePath.swiper1 },
    { img: ImagePath.Swiper3 }, { img: ImagePath.Swiper2 },
    { img: ImagePath.myImage }, { img: ImagePath.Swiper3 },
  ]
  const TrendingQuiz = [
    { name: 'Cricket' }, { name: 'Hockey' }, { name: 'Football' }, { name: 'Basketball' }, { name: 'Tennis' },
  ]

  const WinnerItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{ flex: 1, marginVertical: 10, marginHorizontal: 6 }}>
        <LinearGradient style={{
          width: 110, height: 130, borderRadius: 10, justifyContent: 'center', alignItems: 'center',
          elevation: 0, shadowColor: 'black'
        }}
          colors={['#E7E8ED', '#697F8E',]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View style={{ width: 80, height: 80, borderRadius: 60, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#C1C2C4', }}>
            <Image style={{ resizeMode: 'contain', height: 78, width: 78, borderRadius: 50 }} source={item.img} />
          </View>
          {/* <ImageBackground style={{ resizeMode: 'contain', width: 110, height: 130, borderRadius: 15, overflow: 'hidden', alignItems: 'center', justifyContent: 'flex-end' }} source={ImagePath.bacImage}>
          <View style={{ width: 80, height: 80, borderRadius: 60, justifyContent: 'center', alignItems: 'center',borderWidth:2,borderColor:'#C1C2C4',elevation:5,shadowColor:'white' }}>
            <Image style={{ resizeMode: 'contain', height: 78, width: 78, borderRadius: 50 }} source={item.img} />
          </View> */}
          <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', }}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', top: 3 }}>Zaheer</Text>
            <Text style={{ color: 'white', fontSize: 12, fontWeight: '600', bottom: 0 }}>5000</Text>
          </View>
          {/* </ImageBackground> */}

        </LinearGradient>
      </TouchableOpacity>
    )
  }
  const QuizRender = ({ item }) => {
    return (
      <TouchableOpacity style={{ flex: 1, marginVertical: 10, marginHorizontal: 6 }}>
        {/* <ImageBackground style={{ resizeMode: 'contain', width: 110, height: 130, borderRadius: 15, overflow: 'hidden', alignItems: 'center', justifyContent: 'flex-end' }} source={ImagePath.bacImage}> */}
        <LinearGradient style={{
          width: 110, height: 130, alignItems: 'center',
          elevation: 0, borderRadius: 10, borderWidth: 0, borderColor: 'lightgray',
          shadowColor: 'black', paddingHorizontal: 0, justifyContent: 'flex-end'
        }}
          colors={['#f6f6f6', '#f6f6f6',]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Image style={{ width: 120, height: 100, resizeMode: 'contain' }} source={ImagePath.Sports} />
          <View style={{ justifyContent: 'center', width: '100%', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'skyblue', height: 40, paddingHorizontal: 5 }}>
            <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', top: 0, }}>{item.name}</Text>
            <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', top: 0, }}>Questions: 150</Text>
          </View>
          {/* </ImageBackground> */}
        </LinearGradient>
      </TouchableOpacity>
    )
  }

  const renderItem2 = ({ item, }) => {
    return (
      <TouchableOpacity style={{ flex: 1, marginVertical: 10, marginHorizontal: 6 }}>
        <LinearGradient style={{
          width: 110, height: 130, alignItems: 'center',
          borderTopRightRadius: 15, borderTopLeftRadius: 15,
          borderBottomRightRadius: 15, elevation: 7,
          shadowColor: 'black', paddingHorizontal: 2, justifyContent: 'center'
        }}
          colors={['#3ECFE2', '#7981A5',]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <TouchableOpacity onPress={item.onPress} style={{}}>
            <Text style={{ fontSize: 14, color: '#FFFF', fontWeight: '700', marginTop: 32, textAlign: 'center', bottom: 5 }}>{item.modeText}</Text>
            <Image style={{ resizeMode: 'contain', alignSelf: 'center' }} source={item.img} />
          </TouchableOpacity>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  const renderItem = ({ item, index }) => {
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }}>
          <ImageBackground style={{ width: '100%', height: 180, borderRadius: 15, overflow: 'hidden' }} source={ImagePath.SlideBackImage}>
            <TouchableOpacity style={{ backgroundColor: '#94A3B2', padding: 5, borderRadius: 10, alignSelf: 'flex-end', marginTop: 10, marginRight: 15, paddingHorizontal: 10 }}>
              <Text style={styles.btnLabel}>Register Open</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 0 }}>
              <Image style={{ resizeMode: 'contain', marginTop: 10 }} source={ImagePath.WinnerCup} />
              <View style={{ justifyContent: 'center', marginLeft: 15 }}>
                <Text style={styles.event}>LEARNO MEGA EVENT </Text>
                <Text style={styles.eventDetails}>Event Date: 15/04/2023</Text>
                <Text style={styles.eventDetails}>500 Seats</Text>
                <TouchableOpacity style={{ backgroundColor: '#94A3B2', padding: 5, paddingHorizontal: 10, borderRadius: 10, alignSelf: 'center', marginTop: 10, marginRight: 15 }}>
                  <Text style={styles.btnLabel}>Enroll Now</Text>
                </TouchableOpacity>
              </View>
            </View>

          </ImageBackground>

        </View>

      </SafeAreaView>
    );
  }
  return (
    <View showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: 'white', }}>
      <View style={styles.headerMainContent}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={{ width: 30, height: 30, alignSelf: 'flex-start', alignItems: 'center' }} onPress={openModal}>
            <Icon name="menu" size={25} color="white" />
          </TouchableOpacity>

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.projectName}>LEARNO</Text>

          </View>
          <TouchableOpacity style={{ backgroundColor: 'white', width: 30, height: 30, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}>
            <Icon3 name="bell" size={20} color="#172866" />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', paddingHorizontal: 0, marginTop: 10 }}>
          <View style={{ width: 50, height: 50, borderRadius: 40, alignSelf: 'center', }}>
            <Image style={{ resizeMode: 'contain', width: 50, height: 50, borderRadius: 40 }} source={ImagePath.myImage} />
          </View>
          <View style={{ justifyContent: 'center', marginLeft: 15 }}>
            <Text style={styles.userName}>Zaheer</Text>
            <View style={{ flexDirection: 'row', marginTop: 5,width:'100%' }}>
              <View style={{ backgroundColor: 'rgba(237, 232, 235, 0.31)', width: 60, height: 30, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Icon3 name="bar-graph" size={20} color="orange" />
                <Text style={{ marginLeft: 10, fontSize: 14, color: 'white', fontWeight: '700' }}>0</Text>
              </View>
              <View style={{ backgroundColor: '#E4E3E3', width: 70, height: 30, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, marginLeft: 10, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Icon3 name="wallet" size={16} color="#172866" />
                <Text style={{ marginLeft: 5, fontSize: 12, color: '#172866', fontWeight: '700' }}>₹ {"5000"}</Text>
              </View>
              <TouchableOpacity onPress={()=>openBottomSheet()} style={{ backgroundColor: '#E4E3E3', width: 70, height: 30, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, marginLeft: 10, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center',alignSelf:'flex-end' }}>
                <Text style={{ marginLeft: 5, fontSize: 12, color: '#172866', fontWeight: '700' }}>Join Quiz</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{ height: 230 }}>
          <AppIntroSlider
            ref={sliderRef}
            data={slides}
            showSkipButton={false}
            showNextButton={false}
            showDoneButton={false}
            renderItem={renderItem}
            dotStyle={{ width: 0, height: 0 }}
            activeDotStyle={{ width: 0, height: 0 }}
            onSlideChange={true}

          />
        </View>

        <View style={{ paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ resizeMode: 'contain' }} source={ImagePath.gameMode} />
          <Image style={{ resizeMode: 'contain', marginLeft: 15 }} source={ImagePath.gameModeIcon} />
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            horizontal
            data={Data}
            renderItem={renderItem2}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.TopWinners}>Top Winners</Text>
            <Image style={styles.winnerCup} source={ImagePath.trophyIcon} />
          </View>
          <TouchableOpacity>
            <Text style={styles.ViewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={{ bottom: 15, marginTop: 15 }}>
          <FlatList
            horizontal
            data={Winner}
            renderItem={WinnerItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.TopWinners}>Trending quiz</Text>
            <View style={{ marginLeft: 8 }}>
              <Icon name="trending-up" size={20} color="orange" />
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.ViewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={{ bottom: 15, marginTop: 15 }}>
          <FlatList
            horizontal
            data={TrendingQuiz}
            renderItem={QuizRender}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Modal
          isVisible={modalVisible}
          animationIn="slideInLeft"  // You can customize the animation style
          animationOut="slideOutLeft"
          onBackdropPress={closeModal}
        >
          <View style={{}}>

            {/* <ImageBackground style={{
            // backgroundColor: 'rgba(3, 3, 86, 0.78)',
            padding: 20,
            width: drawer ? 250 : 100, height: heightPercentageToDP(93),
            bottom: 25, borderWidth: 0, borderColor: 'lightgray',
            marginLeft: -17, borderTopRightRadius: 20, borderBottomRightRadius: 20,
            overflow: 'hidden'
          }} source={ImagePath.drawerBac}> */}
            <LinearGradient style={{
              //  backgroundColor: 'rgba(3, 3, 86, 0.78)'
              backgroundColor: 'rgba(51, 51, 116, 0.78)'
              , padding: 10,
              width: drawer ? 240 : 100, height: heightPercentageToDP(93),
              bottom: 25, borderWidth: 0, borderColor: 'lightgray',
              marginLeft: -17, borderTopRightRadius: 20, borderBottomRightRadius: 20
            }}
              colors={['rgba(150, 150, 166, 0.81)', 'rgba(150, 150, 166, 0.81)'
                // 'rgba(191, 188, 189, 0.7)', 'rgba(191, 188, 189, 0.7)',
              ]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0, y: 0.5 }}
            >
              <View>
                <View style={styles.profileContent}>
                  <View style={{ marginLeft: drawer ? 0 : 10 }}>
                    <Image style={{ resizeMode: 'contain', width: 60, height: 60, borderRadius: 40 }} source={ImagePath.myImage} />
                  </View>
                  {drawer ?
                    <View>
                      <Text style={styles.profileName}>Zaheer</Text>
                    </View> : ''
                  }
                  <TouchableOpacity onPress={() => drawerBtn(true)} style={{
                    width: 20, height: 20, borderRadius: 20,
                    borderWidth: 0.5, borderColor: 'lightgray',
                    backgroundColor: 'rgba(195, 192, 202, 0.90)',
                    marginLeft: drawer ? 105 : 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    {
                      drawer ?
                        <AntDesign name="caretleft" size={17} color="gray" />
                        : <AntDesign name="caretright" size={17} color="gray" />
                    }
                  </TouchableOpacity>
                </View>
                <View style={styles.borderContent}></View>
                <Text style={{ fontSize: 12, fontWeight: 500, color: '#242220', textAlign: drawer ? 'flex-start' : 'center', marginLeft: drawer ? 10 : 0, marginTop: 15 }}>MENU</Text>
                <TouchableOpacity onPress={() => dashboardBTn()} style={{
                  flexDirection: 'row', paddingHorizontal: 10,
                  justifyContent: 'space-between',
                  alignItems: 'center', borderRadius: 10,
                  marginTop: 5, height: 50,
                  backgroundColor: dashboard ? 'rgba(160,156,191,0.25)' : null,
                  width: '100%'
                }}>
                  <View style={{ marginLeft: drawer ? 0 : 17 }}>
                    <AntDesign name="windowso" size={30} color="#242220" />
                  </View>
                  {drawer ?
                    <Text style={styles.dashboardText}>Dashboard</Text>
                    : ''
                  }
                  {drawer ?
                    <TouchableOpacity onPress={() => dashboardBTn()}>
                      <Icon3 name={dashboard ? "chevron-thin-up" : "chevron-thin-down"} size={17} color="#242220" />
                    </TouchableOpacity>
                    : ''
                  }
                </TouchableOpacity>
                {dashboard ?
                  <View style={{ flexDirection: 'row' }}>
                    <Image style={{ resizeMode: 'contain', marginLeft: 30, height: 90 }} source={ImagePath.Union} />
                    {drawer ?
                      <View>
                        <TouchableOpacity onPress={() => colorBtn()} style={{ paddingHorizontal: 10, marginTop: 8 }}>
                          <Text style={styles.selectText}>Activity</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => colorBtn()} style={{ paddingHorizontal: 10, marginTop: 18 }}>
                          <Text style={styles.selectText}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => colorBtn()} style={{ paddingHorizontal: 10, marginTop: 18 }}>
                          <Text style={styles.selectText}>Quiz</Text>
                        </TouchableOpacity>
                      </View>
                      :
                      <View style={{ height: 105, width: 150, backgroundColor: 'rgba(160,156,191,0.25)', borderRadius: 15, borderWidth: 1, borderColor: 'darkgray', marginLeft: 10 }}>
                        <LinearGradient style={{
                          backgroundColor: 'rgba(51, 51, 116, 0.78)',
                          height: 102.5, width: 148, borderRadius: 15, elevation: 5, padding: 5
                        }}
                          colors={['rgba(150, 150, 166, 0.81)', 'rgba(150, 150, 166, 0.81)'
                          ]}
                          start={{ x: 0.5, y: 0 }}
                          end={{ x: 0, y: 0.5 }}
                        >
                          <TouchableOpacity onPress={() => colorBtn()} style={{ paddingHorizontal: 10, marginTop: 3 }}>
                            <Text style={styles.selectText}>Activity</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => colorBtn()} style={{ paddingHorizontal: 10, marginTop: 14 }}>
                            <Text style={styles.selectText}>Profile</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => colorBtn()} style={{ paddingHorizontal: 10, marginTop: 19 }}>
                            <Text style={styles.selectText}>Quiz</Text>
                          </TouchableOpacity>
                        </LinearGradient>
                      </View>
                    }
                  </View>
                  :
                  ''
                }
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: drawer ? null : 'center', alignItems: 'center', marginTop: 15 }}>
                  <View style={{ marginTop: 0, alignItems: 'center', marginLeft: drawer ? 10 : 0 }}>
                    <Ionicons name="notifications-outline" size={25} color="#242220" />
                  </View>
                  {drawer ?
                    <View style={{ marginLeft: 19, justifyContent: 'center' }}>
                      <Text style={styles.selectText}>Skills</Text>
                    </View> : ""
                  }
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: drawer ? null : 'center', alignItems: 'center', marginTop: 15 }}>
                  <View onPress={() => colorBtn()} style={{ marginTop: 0, alignItems: 'center', marginLeft: drawer ? 10 : 0 }}>
                    <Ionicons name="wallet-outline" size={25} color="#242220" />
                  </View>
                  {drawer ?
                    <View onPress={() => colorBtn()} style={{ marginLeft: 19, justifyContent: 'center' }}>
                      <Text style={styles.selectText}>Wallet</Text>
                    </View> : ""
                  }
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: drawer ? null : 'center', alignItems: 'center', marginTop: 15 }}>
                  <View style={{ marginTop: 0, alignItems: 'center', marginLeft: drawer ? 10 : 0 }}>
                    <Ionicons name="notifications-outline" size={25} color="#242220" />
                  </View>
                  {drawer ?
                    <View style={{ marginLeft: 19, justifyContent: 'center' }}>
                      <Text style={styles.selectText}>Notification</Text>
                    </View> : ""
                  }
                </TouchableOpacity>
                <View style={styles.borderContent}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10, alignItems: 'center' }}>
                  <View style={{ marginLeft: drawer ? 0 : 12 }}>
                    <Text style={styles.selectText}>MESSAGES</Text>
                  </View>
                  {drawer ?
                    <TouchableOpacity style={{ marginTop: 0, alignItems: 'center', }}>
                      <AntDesign name="plus" size={20} color="#242220" />
                    </TouchableOpacity> : ''
                  }
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                  <View style={{ marginLeft: drawer ? 0 : 20 }}>
                    <Image style={{ resizeMode: 'contain', width: 40, height: 40, borderRadius: 40 }} source={ImagePath.singleMode} />
                  </View>
                  {drawer ?
                    <View style={{ marginLeft: 15 }}>
                      <Text style={styles.selectText}>Erik Gunsel</Text>
                    </View> : ''
                  }
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                  <View style={{ marginLeft: drawer ? 0 : 20 }}>
                    <Image style={{ resizeMode: 'contain', width: 40, height: 40, borderRadius: 40 }} source={ImagePath.singleMode} />
                  </View>
                  {drawer ?
                    <View style={{ marginLeft: 15, }}>
                      <Text style={styles.selectText}>Emily Smith</Text>
                    </View> : ''
                  }
                </View>
                {drawer ?
                  <View style={{ width: '100%', backgroundColor: 'rgba(160,156,191,0.25)', borderRadius: 15, borderWidth: 1, borderColor: 'darkgray', height: 130, position: 'absolute', left: 0, marginTop: heightPercentageToDP(72), paddingVertical: 10 }}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>Let's start!</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={styles.selectText}>Play new quiz now</Text>
                    </View>
                    <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
                      <TouchableOpacity style={{ backgroundColor: '#172866', width: '100%', height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <AntDesign name="plus" size={20} color="white" />
                        <Text style={{ fontSize: 14, color: 'white', fontWeight: '600', marginLeft: 5 }}>Play Now</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  :
                  <View style={{ justifyContent: 'center', alignItems: 'center', justifyContent: 'flex-end', position: 'absolute', left: 10, marginTop: heightPercentageToDP(83) }}>
                    <TouchableOpacity style={{ backgroundColor: '#172866', height: 50, width: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                      <AntDesign name="plus" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                }
              </View>
            </LinearGradient>
          </View>
        </Modal >
        <RBSheet
          ref={bottomSheetRef}
          closeOnDragDown={false}
          closeOnPressMask={false}
          animationType="fade"
          height={170}
          customStyles={{
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: 'rgba(150, 150, 166, 0.91)'
            },

          }}
        >
          {/* {select === '1' ?
                            <View>
                                <TouchableOpacity onPress={() => closeBottomSheet()} style={{ paddingHorizontal: 15, alignItems: 'flex-end', marginTop: 10 }}>
                                    <Icon3 name="circle-with-cross" size={25} color="white" />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                    <View style={{ width: '50%', paddingHorizontal: 15 }}>
                                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '700', }}>Room Code: </Text>
                                    </View>
                                    <View style={{ width: '50%', alignItems: 'center', flexDirection: 'row' }}>
                                        <View style={{ width: 100, height: 35, backgroundColor: 'rgba(150, 150, 166, 0.71)', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                            <Text style={{ fontSize: 17, color: 'white', fontWeight: '700', textAlign: 'center' }}>999999</Text>
                                        </View>
                                        <TouchableOpacity style={{ width: 40, height: 35, marginLeft: 20, backgroundColor: 'rgba(150, 150, 166, 0.71)', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                            <Icon name="content-copy" size={20} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                    <View style={{ width: '80%', alignItems: 'center', paddingHorizontal: 15 }}>
                                        <Text style={{ fontSize: 15, color: 'white', fontWeight: '700', }}>Share this room code with friends and ask them to join</Text>
                                    </View>
                                    <TouchableOpacity style={{ width: 40, height: 35, marginLeft: 10, backgroundColor: 'rgba(150, 150, 166, 0.71)', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                        <Icon name="share" size={23} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            : */}
          <View>
            <TouchableOpacity onPress={() => closeBottomSheet()} style={{ paddingHorizontal: 15, alignItems: 'flex-end', marginTop: 10 }}>
              <Icon3 name="circle-with-cross" size={25} color="white" />
            </TouchableOpacity>
            <Text style={{ fontSize: 15, color: 'white', fontWeight: '700', textAlign: 'center' }}>Enter your Code</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
              <TextInput style={{ width: 150, padding: 4, paddingHorizontal: 15, borderRadius: 15, color: 'white', fontSize: 17, backgroundColor: 'rgba(59, 67, 72, 0.37)' }} />
            </View>
            <TouchableOpacity style={{ width: '95%', padding: 4, borderRadius: 5, backgroundColor: 'rgba(59, 67, 72, 0.37)', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 7 }}>
              <Text style={{ fontSize: 18, color: 'white', fontWeight: '700', }}>Join Room</Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </ScrollView >
    </View>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between',
    marginTop: 10
  },
  profileName: {
    color: 'rgba(8, 8, 8, 1)', fontSize: 14, fontWeight: 'bold', marginLeft: 10
  },
  selectText: { color: '#242220', fontSize: 13, fontWeight: '500', },
  dashboardText: {
    color: '#242220', fontSize: 13, fontWeight: '500', marginLeft: 0

  },
  // historyUser:{},
  profileContent: {
    flexDirection: 'row', marginTop: 10, alignItems: 'center'
  },
  headerMainContent: {
    backgroundColor: '#172866', width: '100%',
    height: 140, borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, paddingHorizontal: 15,
    elevation: 10, shadowColor: 'black'
  },
  profile: {
    width: 60, height: 60, borderRadius: 40
  },
  dotContent: {
    flexDirection: 'row', justifyContent: 'space-between', width: 60
  },
  projectName: {
    color: 'white', fontSize: 17, fontWeight: 'bold',
  },
  userName: {
    color: 'white', fontSize: 14, fontWeight: 'bold'
  },
  event: {
    color: 'white', fontSize: 14, fontWeight: 'bold'
  },
  eventDetails: {
    color: 'white', fontSize: 12, fontWeight: 'bold'
  },
  btnLabel: {
    fontSize: 10, color: '#FFFF', fontWeight: '700'
  },
  TopWinners: {
    fontSize: 16, lineHeight: 19, fontWeight: '700', color: 'black'
  },
  winnerCup: {
    resizeMode: 'contain', width: 20, height: 18, marginLeft: 5,
  },
  ViewAll: {
    fontSize: 14, lineHeight: 17, fontWeight: '400', color: 'black'
  },
  borderContent: {
    width: '80:', height: 1, borderBottomWidth: 0.5,
    borderStyle: 'solid', borderColor: 'rgba(112, 112, 136, 0.78)',
    marginTop: 10
  },





})