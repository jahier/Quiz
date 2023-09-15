import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, ImageBackground } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import ImagePath from '../assets/ImagePath'
import Icon3 from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RBSheet from "react-native-raw-bottom-sheet";
import VideoPlayer from 'react-native-video-player';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function PlayVideo(props) {
    const videoData = [
        {
            id: '1',
            title: 'Video 1',
            uri: 'https://youtube.com/shorts/l4Y4VCQrl_Y?si=sC5nBPiyALhoRW1u', // Replace with your actual video URL
        },
        { id: '2' }, { id: '3' }, { id: '4' },

        // Add more video data as needed
    ];

    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
    const [thumbnails, setThumbnails] = useState({});
    const videoPlayer = useRef(null);
    useEffect(() => {
        // Generate thumbnails when the component mounts
        generateThumbnails();
    }, []);
    const generateThumbnails = async () => {
        try {
            const thumbnailData = await Promise.all(
                videoData.map(async (video) => {
                    const thumb = await getThumbnail({
                        url: video.uri,
                        timeStamp: 1000, // Time in milliseconds to capture the thumbnail (1 second in this example)
                    });
                    return { id: video.id, thumbnail: thumb };
                })
            );

            const thumbnailMap = thumbnailData.reduce((acc, item) => {
                acc[item.id] = item.thumbnail;
                return acc;
            }, {});

            setThumbnails(thumbnailMap);
        } catch (error) {
            console.error('Error generating thumbnails:', error);
        }
    };

    const handlePlayVideo = (video) => {
        setSelectedVideo(video);
    };


    const renderItem2 = ({ item }) => (
        <TouchableOpacity onPress={() => handlePlayVideo(item.id)} style={{ marginVertical: 10 }}>
            {selectedVideo === item.id ? (
                <VideoPlayer
                    // key={index}
                    ref={videoPlayer}
                    resizeMode={"cover"}
                    onFullScreen={false}
                    video={require('../assets/video/pexels-pressmaster-3129752-3840x2160-30fps.mp4')}
                    videoWidth={200}
                    videoHeight={150}
                    showDuration={false}
                    autoplay
                    controlsTimeout={false}
                    disableControlsAutoHide={false}
                    defaultMuted={false}
                    pauseOnPress={true}
                    thumbnail={true}
                    onShowControls={false}
                    // onLoad={handleVideoLoad}

                    // paused={!videoLoaded}
                    style={{
                        maxWidth: '100%',
                        maxHeight: 200,
                        backgroundColor: 'black',
                        borderRadius: 24,
                        justifyContent: 'center',

                    }}
                />
            ) : (
                <ImageBackground
                    source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2052894734/display_1500/stock-vector-quiz-and-question-marks-trivia-night-quiz-symbol-neon-sign-night-online-game-with-questions-2052894734.jpg' }}
                    style={{ width: '100%', height: 200, borderRadius: 24, alignSelf: 'center', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}
                    resizeMode="cover"
                >
                    <View style={{ width: '100%', height: 200, borderRadius: 24, backgroundColor: 'rgba(35, 34, 35, 0.5)',padding:10 }}>
                        <View style={{ alignItems: 'center', marginTop: 60 }}>
                            <AntDesign name="playcircleo" size={50} color="white" />
                        </View>
                        <View style={{ justifyContent: 'flex-end',flex:1 }}>
                            <Text style={styles.videoTitle}>1. How to play in slots mode?</Text>
                        </View>
                    </View>
                </ImageBackground>
            )}
        </TouchableOpacity>
    );
    return (
        <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
            <View style={styles.headerMainContent}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={props.goBack} style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
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
                        <View style={{ flexDirection: 'row', marginTop: 5, width: '100%' }}>

                            <View style={{ backgroundColor: '#666666', width: 80, height: 30, borderTopRightRadius: 0, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, marginLeft: 0, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="wallet-outline" size={16} color="white" />
                                <Image style={{ width: 13, height: 13, resizeMode: 'contain', marginLeft: 5 }} source={require('../assets/image/coin.png')} />
                                <Text style={{ marginLeft: 5, fontSize: 12, color: 'white', fontWeight: '700' }}>{"5000"}</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </View>

            <Text style={styles.howPlayText}>How to play?</Text>

            <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 15 }}>
                <FlatList
                    data={videoData}
                    renderItem={renderItem2}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />


            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headerMainContent: {
        backgroundColor: '#E8E8E836', width: '100%',
        height: 140, borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, paddingHorizontal: 15,
        elevation: 0, shadowColor: 'black'
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
    howPlayText: {
        color: 'white', fontSize: 20, fontWeight: '600',
        marginTop: 20, textAlign: 'center'
    },
    videoTitle: {
        color: 'white', fontSize: 14, fontWeight: '600',
    }
})