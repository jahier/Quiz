import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Button } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import ImagePath from '../assets/ImagePath'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function Chating({ navigation }) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const flatListRef = useRef(null);

    const sendMessage = () => {
        if (message.trim() !== '') {
            const newMessage = { text: message, key: Date.now().toString() };
            setMessages([...messages, newMessage]);
            setMessage('');
        }
    };

    const deleteMessage = (key) => {
        const updatedMessages = messages.filter((msg) => msg.key !== key);
        setMessages(updatedMessages);
    };

    useEffect(() => {
        // Scroll to the end of the FlatList whenever messages change
        flatListRef.current.scrollToEnd({ animated: true });
    }, [messages]);

    return (
        <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>

            <View style={styles.headerMainContent}>
                <View style={styles.profileContent}>
                    <Image style={styles.profile} source={ImagePath.myImage} />
                </View>
                <View style={styles.userNameContent}>
                    <Text style={styles.otherUserName}>Himanshu Saini</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.message}>Active</Text>
                        <View style={{ marginLeft: 8 }}>
                            <Text style={styles.message}>10 min ago</Text>
                        </View>
                    </View>
                </View>
            </View>
            <KeyboardAvoidingView
                style={styles.container}
                // behavior="padding"
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
            >
                <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                        data={messages}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onLongPress={() => deleteMessage(item.key)}
                            >
                                <View style={styles.messageContainer}>
                                    <Text style={styles.messageText}>{item.text}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        inverted={false} 
                        ref={flatListRef}
                        keyExtractor={(item) => item.key}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type a message..."
                        value={message}
                        onChangeText={(text) => setMessage(text)}
                    />

                    <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                        <Icon3 name="send-circle-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageContainer: {
        backgroundColor: 'rgba(94, 94, 103, 0.65)',
        margin: 5,
        padding: 10,
        paddingRight:30,
        alignSelf: 'flex-end',
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(94, 94, 103, 0.65)',
        justifyContent: 'flex-end',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10

    },
    input: {
        flex: 1,
        marginRight: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(94, 94, 103, 0.65)',
        borderRadius: 10,
        height: 40,
    },
    sendButton: {
        paddingVertical: 6, paddingHorizontal: 10, backgroundColor: 'rgba(94, 94, 103, 0.65)', borderRadius: 10
    },
    headerMainContent: {
        flexDirection: 'row', alignItems: 'center',
        marginTop: 15
    },
    profileContent: {
        width: '25%', alignItems: 'center',
    },
    profile: {
        width: 60, height: 60,
        borderRadius: 30,
        resizeMode: 'contain'
    },
    userNameContent: {
        width: '75%',
        paddingHorizontal: 0
    },
    otherUserName: {
        color: 'white', fontSize: 13, fontWeight: '700'
    },
    message: {
        color: 'white', fontSize: 11, fontWeight: '400'
    },

});

//     const [message, setMessage] = useState('');
//     console.log('========>>>', message);
//     const [messages, setMessages] = useState([]);

//     const flatListRef = useRef(null);


//     const sendMessage = () => {
//         if (message.trim() !== '') {
//             const newMessage = { text: message, key: Date.now().toString() };
//             setMessages([...messages, newMessage]);
//             setMessage('');
//             flatListRef.current.scrollToEnd({ animated: true });
//         }
//     };

//     const deleteMessage = (key) => {
//         const updatedMessages = messages.filter((msg) => msg.key !== key);
//         setMessages(updatedMessages);
//     };

//     return (

//         <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
//             {/* <TouchableOpacity onPress={() => navigation.goBack('')} style={{ alignSelf: 'flex-start', alignItems: 'center', marginTop: 10,paddingHorizontal:15 }}>
//                 <Icon3 name="chevron-thin-left" size={18} color="white" />
//             </TouchableOpacity> */}
//             <View style={styles.headerMainContent}>
//                 <View style={styles.profileContent}>
//                     <Image style={styles.profile} source={ImagePath.myImage} />
//                 </View>
//                 <View style={styles.userNameContent}>
//                     <Text style={styles.otherUserName}>Himanshu Saini</Text>
//                     <View style={{ flexDirection: 'row' }}>
//                         <Text style={styles.message}>Active</Text>
//                         <View style={{ marginLeft: 8 }}>
//                             <Text style={styles.message}>10 min ago</Text>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//             <ScrollView style={{}}>

//                 <FlatList
//                     data={messages}
//                     renderItem={({ item }) => (
//                         <TouchableOpacity onPress={() => deleteMessage(item.key)} style={styles.messageContainer}>
//                             <Text style={styles.messageText}>{item.text}</Text>
//                         </TouchableOpacity>
//                     )}
//                     inverted={true} // Reverse the order of messages
//                     ref={flatListRef}
//                 />
//             </ScrollView>

//             <View style={{ position:'absolute',paddingHorizontal:15,width:'100%',bottom:15 }}>
//                 <TextInput style={styles.input}
//                     placeholder='Message'
//                     value={message}
//                     onChangeText={(text) => setMessage(text)}
//                 />
//                 <View style={styles.sendIcon}>
//                     <TouchableOpacity onPress={() => sendMessage()}>
//                         <Icon3 name="send" size={18} color="white" />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </ImageBackground>
//     )
// }

// const styles = StyleSheet.create({
//     headerMainContent: {
//         flexDirection: 'row', alignItems: 'center',
//         marginTop: 15
//     },
//     profileContent: {
//         width: '25%', alignItems: 'center',
//     },
//     profile: {
//         width: 60, height: 60,
//         borderRadius: 30,
//         resizeMode: 'contain'
//     },
//     userNameContent: {
//         width: '75%',
//         paddingHorizontal: 0
//     },
//     otherUserName: {
//         color: 'white', fontSize: 13, fontWeight: '700'
//     },
//     message: {
//         color: 'white', fontSize: 11, fontWeight: '400'
//     },
//     input: {
//         backgroundColor: 'rgba(94, 94, 103, 0.65)',
//         borderRadius: 10,
//         paddingHorizontal: 15,
//         paddingVertical: 5,
//         alignItems: 'center',
//         fontSize: 16,
//         color: 'white',
//         zIndex:999,
//         width:'100%'
//     },
//     sendIcon: {
//         position: 'absolute', bottom: 10,
//         right: 30,
//         zIndex:999
//     },
//     FlatListContent: {
//         flex: 1,
//         alignItems: 'flex-end',
//         justifyContent: 'flex-end'
//     },
//     messageContainer: {
//         backgroundColor: 'black',
//         margin: 5,
//         padding: 10,
//         borderRadius: 10,
//         elevation: 5, shadowColor: 'white'
//     },
//     messageText: {
//         fontSize: 16,
//         color: 'white'
//     },
// })