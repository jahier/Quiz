import React from 'react'
import Splash from '../screen/Splash'
import Swiper from '../screen/Swiper'
import Login from '../screen/Login'
import Sign_up from '../screen/Sign_up'
import BottomTab from './BottomTab'

export default function (Stack) {
  return (
    <>
         <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Swiper" component={Swiper} />
      <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Sign_up" component={Sign_up} />
    <Stack.Screen name="BottomTab" component={BottomTab} />

    </>
  )
}