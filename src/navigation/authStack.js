import React from 'react'
import Splash from '../screen/Splash'
import Swiper from '../screen/Swiper'
import Login from '../screen/Login'
import Sign_up from '../screen/Sign_up'
import SelectVerify from '../screen/SelectVerify'
import ForgetPassword from '../screen/ForgetPassword'
import Otp from '../screen/Otp'
import NewPassword from '../screen/NewPassword'


export default function (Stack) {
  return (
    <>
         <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Swiper" component={Swiper} />
        <Stack.Screen name="SelectVerify" component={SelectVerify} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    <Stack.Screen name="Sign_up" component={Sign_up} />
  


    </>
  )
}