import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen2 from '../screen/Screen2';
import ImagePath from '../assets/ImagePath';
import { View, Image, Animated, Text,TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';
import { useRef } from 'react';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Sign_up from '../screen/Sign_up';
import Login from '../screen/Login';
import HomeScreen from '../screen/HomeScreen';

const Tab = createBottomTabNavigator();

function BottomTab() {
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
        const { isFocus, active, inActive, marginLeft ,TextFocus,activeText,inActiveText,activeRight,inActiveRight} = props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginRight:isFocus?activeRight:inActiveRight }}>
                <View style={{ backgroundColor:isFocus? "#27374D":'white',justifyContent:'center',alignItems:'center',borderRadius:15,flexDirection:'row',padding:1,paddingHorizontal:5 ,marginTop:12,}}>
                    <Image style={{ width: isFocus ? 25 : 20, height: isFocus ? 22 : 20, resizeMode: 'contain',margin:3,tintColor:isFocus?'white':'#27374D'}} source={isFocus ? active : inActive} />
                    {TextFocus&&(
                        <Text style={{color:'white',fontSize:14,fontWeight:'300',lineHeight:15}}>{TextFocus?activeText:inActiveText}</Text>
                    )}
                </View>
            </View>
        )
    }

    const CustomButton = ({ children, onPress }) => (
        <View>
            <TouchableOpacity
                style={{flex:1, justifyContent: 'center', alignItems: 'center' }}
                // onPress={() => ShowDataButton('1') ||setModal(true)}
                // onPress={() => setModal(!modal)}
            >
                <View
                    style={{ width: 30, height: 30, borderRadius: 20, backgroundColor: '#9DB2BF', justifyContent: 'center', alignItems: 'center',position:'absolute',bottom:30  }}>
                    {children}
                </View>

            </TouchableOpacity>

        </View>
    )

    return (
        <Tab.Navigator
         screenOptions={{
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarStyle: { backgroundColor: 'white', height: 45, elevation: 15, position: 'absolute', bottom: 10, width: widthPercentageToDP(96), alignSelf: 'center', borderRadius: 20, marginLeft: widthPercentageToDP(2.5) },
                }}>
            <Tab.Screen
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        return (
                            <RenderTabIcon
                                active={ImagePath.homeIcon}
                                inActive={ImagePath.homeIcon}
                                isFocus={focused}
                                TextFocus={focused}
                                activeText="Home"
                            />
                        )
                    }
                }}
                name="HomeScreen" component={HomeScreen} />
                
<Tab.Screen
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        return (
                            <RenderTabIcon
                                active={ImagePath.homeIcon}
                                inActive={ImagePath.homeIcon}
                                isFocus={focused}
                                TextFocus={focused}
                                activeText="Message"
                                activeRight={5}
                                inActiveRight={0}
                            />
                        )
                    }
                }}
                name="Sign_up" component={Sign_up} />
                
<Tab.Screen
                    name="post"
                    component={Login}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focus }) => (
                            <Image style={{ width: 20, height: 20, tintColor: 'white', alignSelf: 'center', top: 6 }} source={ImagePath.scanIcon} resizeMode='contain' />
                        ),
                        tabBarButton: (props) => (
                            <CustomButton {...props} />
                        )

                    }}
                />
            <Tab.Screen
                options={{
                    tabBarLabel:'' ,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        return (
                            <RenderTabIcon
                                active={ImagePath.profileIcon}
                                inActive={ImagePath.profileIcon}
                                isFocus={focused}
                                TextFocus={focused}
                                activeText="Login"
                            />
                        )
                    }
                }}
                name="Login" component={Login} />
            <Tab.Screen
                options={{
                    tabBarLabel:'' ,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        return (
                            <RenderTabIcon
                                active={ImagePath.profileIcon}
                                inActive={ImagePath.profileIcon}
                                isFocus={focused}
                                TextFocus={focused}
                                activeText="Profile"
                            />
                        )
                    }
                }}
                name="Screen2" component={Screen2} />



        </Tab.Navigator>
    );
}
export default BottomTab