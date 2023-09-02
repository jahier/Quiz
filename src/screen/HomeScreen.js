import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { Image } from 'react-native-animatable'
import ImagePath from '../assets/ImagePath'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import AppIntroSlider from 'react-native-app-intro-slider'
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const slides = [
    { eventDate: '15/04/2023', eventSeats: '500 Seats' },
    { eventDate: '10/06/2023', eventSeats: '400 Seats' },
    { eventDate: '1/01/2023', eventSeats: '200 Seats' },
    { eventDate: '21/08/2023', eventSeats: '800 Seats' },
  ];

  const Data = [
    { modeText: 'Single\nPlayer', modeBacImage: ImagePath.SingleModeImage },
    { modeText: 'Double\nPlayer', modeBacImage: ImagePath.SingleModeImage },
    { modeText: 'Multiple \nPlayer', modeBacImage: ImagePath.SingleModeImage },
  ];
  const Winner = [
    { winnerImage: ImagePath.profileImage }, { winnerImage: ImagePath.profileImage }, { winnerImage: ImagePath.profileImage }, { winnerImage: ImagePath.profileImage },
    { winnerImage: ImagePath.profileImage }, { winnerImage: ImagePath.profileImage }, { winnerImage: ImagePath.profileImage }, { winnerImage: ImagePath.profileImage },
  ]
  const TrendingQuiz = [
    {}, {}, {},
  ]

  const sliderRef = useRef();
  const sliderRef2 = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.goToSlide(currentIndex + 1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.goToSlide(currentIndex - 1);
      setCurrentIndex(currentIndex - 1);
    }
  };
  const renderItem = ({ item, index }) => {
    return (
      <SafeAreaView style={{}}>
        <View style={styles.SlideContent}>
          <Image style={styles.SlideBackImage} source={ImagePath.SlideBackImage} />
          <View style={styles.positionAbsoluteContent}>
            <TouchableOpacity style={{ marginTop: 20, }}>
              <Text style={styles.RegisterNowText}>Register Now</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
              <View style={{ marginLeft: 10, marginTop: 30 }}>
                <Text style={styles.learnMegaEventText}>LEARN MEGA EVENT </Text>
                <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                  <Text style={styles.eventDate}>Event Date: </Text>
                  <Text style={styles.eventDate}>{item.eventDate}</Text>
                  <Text style={styles.Seats}>{item.eventSeats}</Text>
                </View>
              </View>
              <View>
                <Image style={styles.QuizFrame} source={ImagePath.QuizFrame} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 8 }}>
              <View>
                <TouchableOpacity style={styles.EnrollNowBTN}>
                  <Text style={styles.EnrollNowTitle}>Enroll now</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => onPrevSlide()}>
                  <Image style={styles.leftArrow} source={ImagePath.leftArrow} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNextSlide()}>
                  <Image style={styles.rightArrow} source={ImagePath.rightArrow} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

      </SafeAreaView>
    );
  }

  const renderItem2 = ({ item, }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity style={{ marginTop: 15, paddingHorizontal: 0, }}>
          <Image style={{ resizeMode: 'contain', width: 150, height: 150 }} source={item.modeBacImage} />
          <Text style={styles.modeSelectText}>{item.modeText}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  const WinnerList = ({ item, }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity style={{ marginTop: 15, paddingHorizontal: 0, margin: 5 }}>
          <Image style={{ resizeMode: 'contain', width: 70, height: 70, borderRadius: 35, overflow: 'hidden' }} source={item.winnerImage} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  const TrendingQuizList = ({ item, }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient colors={['#88C541', '#2352A4',]} style={{ flex: 1 }}>

          <View style={{ marginTop: 15, paddingHorizontal: 0, margin: 5 }}>
            <Image style={{ resizeMode: 'contain', width: 70, height: 70, borderRadius: 35, overflow: 'hidden' }} source={ImagePath.WinnerImage} />
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#27374D', }}>
      <View style={styles.hederContent}>
        <TouchableOpacity style={styles.menuContent}>
          <Image style={styles.menuIcon} source={ImagePath.menuIcon} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: '90%' }}>
          <Text style={styles.learnText}>LEARN</Text>
        </View>
      </View>

      <View style={styles.SearchBarContent}>
        <TouchableOpacity style={{ width: '20%', paddingHorizontal: 15 }}>
          <Image style={styles.profileImage} source={ImagePath.profileImage} />
        </TouchableOpacity>
        <View style={{ width: '60%' }}>
          <TextInput style={styles.searchInput} placeholder='Search' placeholderTextColor="#27374D" />
          <Image style={styles.searchIcon} source={ImagePath.searchIcon} />
        </View>
        <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity>
            <Image style={styles.notificationIcon} source={ImagePath.notificationIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.walletIcon} source={ImagePath.walletIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        <Text style={styles.helloText}>Hello ! </Text>
        <Text style={styles.userText}>UserName</Text>
      </View>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
        renderItem={renderItem}
        dotStyle={{ width: 0, height: 0 }}
        activeDotStyle={{ width: 0, height: 0 }}
      // onSlideChange={onLastSlide}
      />
      <View style={{ marginTop: 0, paddingHorizontal: 15 }}>
        <Text style={styles.gameModeText}>Choose your Game Mood</Text>
      </View>
      <FlatList
        horizontal
        data={Data}
        renderItem={renderItem2}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.TopWinners}>Top Winners</Text>
          <Image style={styles.winnerCup} source={ImagePath.trophyIcon} />
        </View>
        <TouchableOpacity>
          <Text style={styles.ViewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <FlatList
          horizontal
          data={Winner}
          renderItem={WinnerList}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
        <Text style={styles.TopWinners}>Trending Quiz</Text>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <FlatList
          horizontal
          data={TrendingQuiz}
          renderItem={TrendingQuizList}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  hederContent: {
    flexDirection: 'row', marginTop: 15, paddingHorizontal: 10
  },
  menuContent: {
    alignItems: 'center', justifyContent: 'center', width: '10%',
  },
  menuIcon: {
    width: 25, height: 25, tintColor: 'white', resizeMode: 'contain'
  },
  learnText: {
    fontSize: 16, color: 'white', fontWeight: 'bold', lineHeight: 29, textAlign: 'center', marginRight: 30
  },
  SearchBarContent: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10
  },
  profileImage: {
    resizeMode: 'contain', borderRadius: 50, width: 40, height: 40
  },
  searchInput: {
    width: '100%', borderRadius: 15, backgroundColor: 'white', height: 35, paddingHorizontal: 35, color: '#27374D'
  },
  notificationIcon: {
    resizeMode: 'contain', width: 25, height: 25, tintColor: 'white', margin: 5
  },
  walletIcon: {
    resizeMode: 'contain', height: 25, width: 25
  },
  searchIcon: {
    resizeMode: 'contain', width: 20, height: 20, position: 'absolute', top: 7, left: 10, tintColor: '#27374D'
  },
  SlideContent: {
    width: '100%', paddingHorizontal: 10, marginTop: 15, paddingRight: 25
  },
  SlideBackImage: {
    width: '100', resizeMode: 'contain'
  },
  positionAbsoluteContent: {
    position: 'absolute', width: '100%'
  },
  RegisterNowText: {
    fontSize: 13, fontWeight: '500', lineHeight: 15, color: 'white', marginLeft: widthPercentageToDP(65)
  },
  learnMegaEventText: {
    fontSize: 12, color: 'white', fontWeight: 'bold', lineHeight: 14
  },
  eventDate: {
    fontSize: 10, color: 'white', lineHeight: 10, fontWeight: '400'
  },
  Seats: {
    fontSize: 12, color: 'white', lineHeight: 12, fontWeight: '800', marginLeft: 15
  },
  QuizFrame: {
    resizeMode: 'contain', marginLeft: 10
  },
  EnrollNowBTN: {
    width: '100%', backgroundColor: 'white', borderRadius: 15, padding: 5, paddingHorizontal: 20,
  },
  EnrollNowTitle: {
    fontSize: 15, color: '#526D82', fontWeight: '700', lineHeight: 16
  },
  leftArrow: {
    resizeMode: 'contain', tintColor: 'white', width: 20, height: 15
  },
  rightArrow: {
    resizeMode: 'contain', tintColor: 'white', width: 20, height: 15, bottom: 5, left: 5
  },
  helloText: {
    fontSize: 14, color: 'white', fontWeight: '400', lineHeight: 15
  },
  userText: {
    fontSize: 14, color: 'white', fontWeight: '700', lineHeight: 15
  },
  gameModeText: {
    fontSize: 16, fontWeight: '600', lineHeight: 20, color: 'white'
  },
  modeSelectText: {
    fontSize: 16, color: 'white', position: 'absolute', top: 50, left: 45, fontWeight: '900'
  },
  TopWinners: {
    fontSize: 16, lineHeight: 19, fontWeight: '600', color: 'white'
  },
  winnerCup: {
    resizeMode: 'contain', width: 20, height: 15, marginLeft: 5
  },
  ViewAll: {
    fontSize: 14, lineHeight: 17, fontWeight: '400', color: 'white'
  },
})