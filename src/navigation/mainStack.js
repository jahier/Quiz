// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import Quiz_question_page from '../screen/Quiz_question_page';

const Stack = createNativeStackNavigator();
function MainStack() {
    return (
        <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Quiz_question_page" component={Quiz_question_page} />

        </>
    );
}
export default MainStack;