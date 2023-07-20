
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image
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
    // const onLastSlide = (index, lastIndex) => {
    //     if (slides[index].key == slides.length) {
    //         setTimeout(() => {
    //             navigation.navigate('Login')
    //         }, 1000)
    //     }
    // }
    const renderItem = ({ item, index }) => {
        return (
            <SafeAreaView style={styles.slide}>
                <View style={styles.skytextview}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={item.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <Image source={item?.image} style={styles.imageStyle} resizeMode={'contain'} />
                <View style={styles.infoContainer}>

                    <View style={{ marginTop: hp(0) }}>
                        <Text style={item.txt}>{item.text}</Text>
                    </View>
                    <View>
                        <Text style={item.text}>{item.subText}</Text>
                    </View>
                </View>
                {item.key === 3 && (
                    <View style={styles.BTNContent}>
                        <Button onPress={()=>navigation.navigate('Login')} title="Get Started"/>
                    </View>
                )}

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
                dotStyle={{ bottom: hp(10), width: wp('2%'), height: hp('1%'), backgroundColor: '#D9D9D9', borderRadius: 50 }}
                activeDotStyle={{ bottom: hp(10), width: wp('3%'), height: hp('1%'), backgroundColor: '#526D82', borderRadius: 50 }}
            // onSlideChange={onLastSlide}

            />

        </SafeAreaView>
    )
}
export default Swiper;

const styles = ScaledSheet.create({
    slide: {
        flex: 1,
    },


    activeDotStyle: {
        width: wp(6),
        height: hp(1.5),
        backgroundColor: '#25378C',
    },
    dotStyle: {
        width: wp(3),
        height: hp(1.4),
        backgroundColor: '#25378C',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: hp(9)
    },
    infoTextCon: {
        paddingTop: hp(5),
        alignItems: 'center',
    },
    buttonContainer: {
        padding: hp(2.1),
        alignSelf: 'center',
        borderRadius: hp(1.5),
    },
    imageStyle: {
        width: wp(100),
        height: hp(70)
    },
    sweet: {
        position: 'absolute',
        alignItems: 'center',
        top: hp(55),
        left: wp(18)
        , flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingHorizontal: scale(10), borderRadius: scale(10),
        padding: scale(5)
    },
    headingText: {
        color: '#000000', fontSize: '24@s', fontWeight: 'bold',
        textAlign: 'center', marginTop: '22@s'
    },
    BTNContent:{
        paddingHorizontal:50,bottom:20
    },
    skytextview: {
        paddingHorizontal: '14@s',
        position: 'absolute',
        alignSelf: 'flex-end',

    },
    skiptext: {
        color: '#000000', fontSize: '12@s',
        fontWeight: '700', textAlign: 'right',
        marginTop: '10@s',
        // fontFamily:Font.Montserrat
        textDecorationLine: 'underline'
    },
});