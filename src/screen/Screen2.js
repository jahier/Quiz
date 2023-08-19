import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import AppIntroSlider from 'react-native-app-intro-slider';
import ImagePath from '../assets/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import Icon3 from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer';


export default function Screen2() {
  const MyDrawerContent = ({ closeDrawer }) => {
    return (
      <View style={{width:'70%',height:300,backgroundColor:'black'}}>
        <TouchableOpacity style={styles.drawerItem} >
          <Text style={{ color: 'red' }}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={closeDrawer}>
          <Text>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={closeDrawer}>
          <Text>Option 3</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen();
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };


  const sliderRef = useRef();
  const slides = [
    {}, {}, {}, {},
  ];
  const Data = [
    { modeText: 'Single\nPlayer', backgroundColor: '#FF9850' },
    { modeText: 'Double\nPlayer', backgroundColor: "#CA4F5D" },
    { modeText: 'Multiple \nPlayer', backgroundColor: '#DF35E5' },
  ];

  const Winner = [
    {}, {}, {}, {}, {}, {},
  ]
  const TrendingQuiz = [
    {}, {}, {}, {}, {}, {},
  ]
  const Withdraws = [
    {}, {}, {}, {}, {}, {},
  ]
  const WinnerItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{ flex: 1, marginVertical: 10, marginHorizontal: 6 }}>
        <LinearGradient style={{ width: 110, height: 130, alignItems: 'center', borderRadius: 15 }}
          colors={['#6304FA', '#935AED', '#935AED']} // Define your linear gradient colors
          start={{ x: 0, y: 0 }} // Gradient start point (top-left)
          end={{ x: 0, y: 1 }} // Gradient end point (bottom-left)
        >
          <ImageBackground style={{ resizeMode: 'contain', width: 110, height: 130, borderRadius: 15, overflow: 'hidden', alignItems: 'center', justifyContent: 'flex-end' }} source={ImagePath.myImage}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: 'rgba(57, 55, 58, 0.55)', height: 32 }}>
              <Text style={{ color: '#FFFF', fontSize: 14, fontWeight: '600', top: 3 }}>Zaheer</Text>
              <Text style={{ color: '#FFFF', fontSize: 14, fontWeight: '600', bottom: 3 }}>5000</Text>
            </View>
          </ImageBackground>

        </LinearGradient>
      </TouchableOpacity>
    )
  }
  const QuizRender = ({ item }) => {
    return (
      <TouchableOpacity style={{ flex: 1, marginVertical: 10, marginHorizontal: 6 }}>
          <ImageBackground style={{ resizeMode: 'contain', width: 110, height: 130, borderRadius: 15, overflow: 'hidden', alignItems: 'center', justifyContent: 'flex-end' }} source={ImagePath.bacImage}>
            <View style={{ justifyContent: 'center', width: '100%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: 'rgba(57, 55, 58, 0.55)', height: 40 ,paddingHorizontal:5}}>
              <Text style={{ color: '#FFFF', fontSize: 12, fontWeight: '500', top: 3 }}>Future of AI{'\n'}Tech</Text>
            </View>
          </ImageBackground>
      </TouchableOpacity>
    )
  }
  const RecentWithdraws = ({ item, index }) => {
    return (
      <TouchableOpacity style={{ flex: 1, marginVertical: 10, marginHorizontal: 6 }}>
          <ImageBackground style={{ resizeMode: 'contain', width: 110, height: 130, borderRadius: 15, overflow: 'hidden', alignItems: 'center', justifyContent: 'flex-end' }} source={ImagePath.SlideBackImage}>
      
          </ImageBackground>

      </TouchableOpacity>
    )
  }
  const renderItem2 = ({ item, }) => {
    return (
      <SafeAreaView style={{ flex: 1, marginVertical: 10, marginHorizontal: 6 }}>
        <TouchableOpacity style={{ width: 110, height: 130, backgroundColor: item.backgroundColor, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 15, borderTopLeftRadius: 15, borderBottomRightRadius: 15, elevation: 5, shadowColor: '#6304FA' }}>
          <Text style={{ fontSize: 14, color: '#FFFF', fontWeight: '700' }}>{item.modeText}</Text>
        </TouchableOpacity>

      </SafeAreaView>
    );
  }
  const renderItem = ({ item, index }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }}>
          <ImageBackground style={{ width: '100%', height: 180, borderRadius: 15, overflow: 'hidden' }} source={ImagePath.SlideBackImage}>
            <TouchableOpacity style={{ backgroundColor: '#614AED', padding: 5, borderRadius: 10, alignSelf: 'flex-end', marginTop: 10, marginRight: 15, paddingHorizontal: 10 }}>
              <Text style={styles.btnTital}>Register Open</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 0 }}>
              <Image style={{ resizeMode: 'contain', marginTop: 0 }} source={ImagePath.WinnerCup} />
              <View style={{ justifyContent: 'center', marginLeft: 15 }}>
                <Text style={styles.event}>LEARNO MEGA EVENT </Text>
                <Text style={styles.eventDetails}>Event Date: 15/04/2023</Text>
                <Text style={styles.eventDetails}>500 Seats</Text>
                <TouchableOpacity style={{ backgroundColor: '#614AED', padding: 5, paddingHorizontal: 10, borderRadius: 10, alignSelf: 'center', marginTop: 10, marginRight: 15 }}>
                  <Text style={styles.btnTital}>Enroll Now</Text>
                </TouchableOpacity>
              </View>
            </View>

          </ImageBackground>

        </View>

      </SafeAreaView>
    );
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', }}>
      <View style={styles.headerMainContent}>
        <View style={styles.headerContent}>
            <TouchableOpacity style={{width:30,height:30,alignSelf:'flex-start'}} onPress={()=>setIsDrawerOpen(true)}>
              <Icon name="menu" size={25} color="white" />
            </TouchableOpacity>
        

          <Text style={styles.projectName}>LEARNO</Text>
          <TouchableOpacity style={{ backgroundColor: 'white', width: 30, height: 30, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}>
            <Icon3 name="bell" size={20} color="#6304FA" />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', paddingHorizontal: 0, marginTop: 10 }}>
          <View style={{ width: 80, height: 80, borderRadius: 40, alignSelf: 'center', }}>
            <Image style={{ resizeMode: 'contain', width: 80, height: 80, borderRadius: 40 }} source={ImagePath.myImage} />
          </View>
          <View style={{ justifyContent: 'center', marginLeft: 15 }}>
            <Text style={styles.userName}>Zaheer</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <View style={{ backgroundColor: 'rgba(237, 232, 235, 0.31)', width: 70, height: 35, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Icon3 name="bar-graph" size={20} color="orange" />
                <Text style={{ marginLeft: 10, fontSize: 14, color: 'white', fontWeight: '700' }}>0</Text>
              </View>
              <View style={{ backgroundColor: '#E4E3E3', width: 80, height: 35, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, marginLeft: 10, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Icon3 name="wallet" size={20} color="#6304FA" />
                <Text style={{ marginLeft: 5, fontSize: 14, color: '#614AED', fontWeight: '700' }}>₹ {"5000"}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
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

      <View style={{  paddingHorizontal:15 }}>
          <Text style={styles.TopWinners}>Trending quiz</Text>
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
       <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 15,bottom:15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.TopWinners}>Recent withdraws</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.ViewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ bottom: 30, marginTop: 15 }}>
        <FlatList
          horizontal
          data={Withdraws}
          renderItem={RecentWithdraws}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between',
    marginTop: 10
  },
  headerMainContent: {
    backgroundColor: '#614AED', width: '100%',
    height: 160, borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, paddingHorizontal: 15
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
  btnTital: {
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





})