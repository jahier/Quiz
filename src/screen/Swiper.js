
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image, ImageBackground
} from 'react-native';
import React, { useRef, useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { scale, ScaledSheet } from 'react-native-size-matters';
import ImagePath from '../assets/ImagePath';
import Button from '../Component/ButtonComponent';
// import Font from '../asstes/Font';
// import imagePath from '../asstes/Imagepath';

const slides = [
    {
        key: 1,
        text: "Create , share and play\n quizzess whenever and\n wherever you want",
        image: ImagePath.swiper1,
        txt: {
            color: '#27374D', fontSize: 22, fontWeight: 600,
            textAlign: 'center',
        },
        skipText: {
            color: '#000000', fontSize: 12,
            fontWeight: '700', textAlign: 'right',
            marginTop: 35,
            // fontFamily:Font.Montserrat
            // textDecorationLine: 'underline',
        },

    },
    {
        key: 2,
        text: "Find Fun and interesting\n quizzes to boost up your\n knowledge",
        image: ImagePath.Swiper2,
        txt: {
            color: '#27374D', fontSize: 22, fontWeight: 600,
            textAlign: 'center',
        },

        skipText: {
            color: '#000000', fontSize: 12,
            fontWeight: '700', textAlign: 'right',
            marginTop: 35,
            // fontFamily:Font.Montserrat
            // textDecorationLine: 'underline',
        },

    },
    {
        key: 3,
        text: "Play and take quiz\nchallenges together\nwith your friends.",
        image: ImagePath.Swiper3,
        txt: {
            color: '#27374D', fontSize: 22, fontWeight: 600,
            textAlign: 'center',
        },
        skipText: {
            color: '#000000', fontSize: 12,
            fontWeight: '700', textAlign: 'right',
            marginTop: 35,
            // fontFamily:Font.Montserrat
            // textDecorationLine: 'underline',
        },
    },
];

const Swiper = ({ navigation }) => {
    const sliderRef = useRef();
    const onLastSlide = (index, lastIndex) => {
        if (slides[index].key == slides.length) {
            setTimeout(() => {
                navigation.navigate('SelectVerify')
            }, 1000)
        }
    }
    const renderItem = ({ item, index }) => {
        return (
            <SafeAreaView style={styles.slide}>
                <ImageBackground source={item?.image} style={styles.imageStyle}>
                    <Text style={styles.titleText}>LEARNO</Text>
                    <Text style={styles.Text}>Open your wings{'\n'}
                        and Fly with Learno </Text>
                </ImageBackground>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppIntroSlider
                ref={sliderRef}
                data={slides}
                showSkipButton={false}
                showNextButton={false}
                showDoneButton={false}
                renderItem={renderItem}
                dotStyle={{ width: wp('2%'), height: hp('1%'), backgroundColor: '#D9D9D9', borderRadius: 50 }}
                activeDotStyle={{ width: wp('4%'), height: hp('1%'), backgroundColor: '#526D82', borderRadius: 50 }}
                onSlideChange={onLastSlide}
            />

        </SafeAreaView>
    )
}
export default Swiper;

const styles = ScaledSheet.create({
    slide: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    Text: {
        fontSize: 18, fontWeight: 'bold',
        lineHeight: 19, color: '#FFFF', textAlign: 'center',
        marginTop: 10
    },


    titleText: {
        fontSize: 60, fontWeight: 'bold',
        lineHeight: 61, color: '#FFFF'
    },
    imageStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

});