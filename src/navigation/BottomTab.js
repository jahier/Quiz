import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen2 from '../screen/Screen2';
import ImagePath from '../assets/ImagePath';
import { View, Image, Animated, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Login from '../screen/Login';
import Icon from 'react-native-vector-icons/AntDesign';
import Profile from '../screen/Profile';
import Search from '../screen/Search';
import Chat from '../screen/Chat';

const Tab = createBottomTabNavigator();

function BottomTab(props) {
    // const spinValue = useRef(new Animated.Value(0)).current;

    // const startAnimation = () => {
    //     Animated.timing(spinValue, {
    //         toValue: 1,
    //         duration: 1000,
    //         useNativeDriver: true,
    //     }).start();
    // };

    // const spin = spinValue.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: ['0deg', '360deg'],
    // });
    RenderTabIcon = (props) => {
        const { isFocus, active, inActive, TextFocus, activeText, inActiveText, activeRight, inActiveRight } = props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: isFocus ? activeRight : inActiveRight }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 15, paddingHorizontal: 5, marginTop: 12, }}>
                    {/* {isFocus ?
                        <FontAwesome name={isFocus ? active : inActive} size={20} color="white" />
                        :
                        <Ionicons name={isFocus ? active : inActive} size={18} color="white" />
                    } */}
                    <Image style={{ width: isFocus ? 28 : 23, height: isFocus ? 24 : 22, resizeMode: 'contain', margin: 3, tintColor: isFocus ? 'white' : 'lightgray' }} source={isFocus ? active : inActive} />
                    {TextFocus && (
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: '400', lineHeight: 15 }}>{TextFocus ? activeText : inActiveText}</Text>
                    )}
                </View>
            </View>
        )
    }

    const CustomButton = ({ children, onPress }) => (
        <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Event')}
                style={{ height: 50, width: 40, justifyContent: 'center', alignItems: 'center', padding: 2, marginTop: 0 }}
            // onPress={() => ShowDataButton('1') ||setModal(true)}
            // onPress={() => setModal(!modal)}
            >
                {/* <View
                    style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',  bottom: 0,elevation:10 }}> */}
                {children}
                {/* </View> */}

            </TouchableOpacity>
        </View>
    )


    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: { backgroundColor: 'black', height: 50, elevation: 0, width: widthPercentageToDP(100), alignSelf: 'center', },
            }}>
            <Tab.Screen
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        return (
                            <RenderTabIcon
                                active={ImagePath.activeHome}
                                inActive={ImagePath.homeIcon}
                                isFocus={focused}
                                TextFocus={focused}
                                activeText="Home"
                            />
                        )
                    }
                }}
                name="Screen2" component={Screen2} />

            <Tab.Screen
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        return (
                            <RenderTabIcon
                                active={ImagePath.activeSearch}
                                inActive={ImagePath.searchIcon}
                                isFocus={focused}
                                TextFocus={focused}
                                activeText="Search"
                            // activeRight={20}
                            // inActiveRight={20}
                            />
                        )
                    }
                }}
                name="Search" component={Search} />

            <Tab.Screen
                name="post"
                component={Login}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focus }) => (
                        <Icon name="pluscircleo" size={25} color="#FFFF" marginTop={5} />
                    ),
                    tabBarButton: (props) => (
                        <CustomButton {...props} />
                    )
                }}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        return (
                            <RenderTabIcon
                                active={ImagePath.activeChat}
                                inActive={ImagePath.inActiveChat}
                                isFocus={focused}
                                TextFocus={focused}
                                activeText="Message"
                            // activeRight={-20}
                            // inActiveRight={-20}
                            />
                        )
                    }
                }}
                name="Chat" component={Chat} />
            <Tab.Screen
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        return (
                            <RenderTabIcon
                                active={ImagePath.activeUser}
                                inActive={ImagePath.profileIcon}
                                isFocus={focused}
                                TextFocus={focused}
                                activeText="Profile"
                            />
                        )
                    }
                }}
                name="Profile" component={Profile} />



        </Tab.Navigator>
    );
}
export default BottomTab