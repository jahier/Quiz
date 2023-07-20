// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab'
import MultipleSkills from '../screen/MultipleSkills'
const Stack = createNativeStackNavigator();
function MainStack() {
    return (
        <>
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="MultipleSkills" component={MultipleSkills} />
        </>
    );
}
export default MainStack;