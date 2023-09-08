// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import authStack from './authStack';
import MainStack from './mainStack';
// BottomTab
const Stack = createNativeStackNavigator();
function ApplicationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Wallet' screenOptions={{ headerShown: false }}>
                {authStack(Stack)}
                {MainStack(Stack)}  
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default ApplicationStack;