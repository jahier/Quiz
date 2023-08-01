// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab'
import MultipleSkills from '../screen/MultipleSkills'
import SelectSkill from '../screen/SelectSkill';
import Demo from '../screen/Demo';
const Stack = createNativeStackNavigator();
function MainStack() {
    return (
        <>
                    <Stack.Screen name="SelectSkill" component={SelectSkill} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="MultipleSkills" component={MultipleSkills} />
            <Stack.Screen name="Demo" component={Demo} />

        </>
    );
}
export default MainStack;