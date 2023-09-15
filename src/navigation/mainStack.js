// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab'
import MultipleSkills from '../screen/MultipleSkills'
import SelectSkill from '../screen/SelectSkill';
import Demo from '../screen/Demo';
import DataShow from '../screen/DataShow';
import SkillVerify from '../screen/SkillVerify';
import SingleMode from '../screen/SingleMode';
import Quiz from '../screen/Quiz';
import WinnerShow from '../screen/WinnerShow';
import DuoMode from '../screen/DuoMode';
import PlayTyp from '../screen/PlayTyp';
import DualModeGame from '../screen/DualModeGame';
import ProfileGame from '../screen/ProfileGame';
import Congratulations from '../screen/Congratulations';
import WinningShow from '../screen/WinningShow';
import Edit_Profile from '../screen/Edit_Profile';
import Change_Password from '../screen/Change_Password';
import Notifications from '../screen/Notifications';
import EventRegistration from '../screen/EventRegistration';
import DrawerNavigator from './DrawerNavigator';
import Wallet from '../screen/Wallet';
import Terms_Conditions from '../screen/Terms_Conditions';
import Privacy_Policy from '../screen/Privacy_Policy';
import Screen2 from '../screen/Screen2';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Event from '../screen/Event';
import EventDetails from '../screen/EventDetails';
import EventQuiz from '../screen/EventQuiz';
import Activity from '../screen/Activity';
import PlayVideo from '../screen/PlayVideo';
import TopAuthors from '../screen/TopAuthors';
import AuthorsProfile from '../screen/AuthorsProfile';
import Following from '../screen/Following';
import Followers from '../screen/Followers';
import OtherProfile from '../screen/OtherProfile';

const Stack = createNativeStackNavigator();
//  const Drawer = createDrawerNavigator();

//  function MydDrawer({}) {
//      return (
//         <Drawer.Navigator
//             screenOptions={{
//                 headerShown: false,
//                 drawerStyle: {
//                     backgroundColor: '#c6cbef',
//                     width: 300,
//                 },
//             }}
//             drawerContent={(props) => <Drawer {...props}  />}>
//             <Drawer.Screen name="Screen2" component={Screen2}/>
//         </Drawer.Navigator>
//      );
//  }
function MainStack() {
    
    return (
        <>
            <Stack.Screen name="SelectSkill" component={SelectSkill} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="MultipleSkills" component={MultipleSkills} />
            <Stack.Screen name="Demo" component={Demo} />
            <Stack.Screen name="DataShow" component={DataShow} />
            <Stack.Screen name="SkillVerify" component={SkillVerify} />
            <Stack.Screen name="SingleMode" component={SingleMode} />
            <Stack.Screen name="DuoMode" component={DuoMode} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="WinnerShow" component={WinnerShow} />
            <Stack.Screen name="PlayTyp" component={PlayTyp} />
            <Stack.Screen name="DualModeGame" component={DualModeGame} />
            <Stack.Screen name="ProfileGame" component={ProfileGame} />
            <Stack.Screen name="Congratulations" component={Congratulations} />
            <Stack.Screen name="WinningShow" component={WinningShow} />
            <Stack.Screen name="Edit_Profile" component={Edit_Profile} />
            <Stack.Screen name="Change_Password" component={Change_Password} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="EventRegistration" component={EventRegistration} />
            <Stack.Screen name="Wallet" component={Wallet} />
            <Stack.Screen name="Terms_Conditions" component={Terms_Conditions} />
            <Stack.Screen name="Privacy_Policy" component={Privacy_Policy} />
            <Stack.Screen name="Event" component={Event} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="EventQuiz" component={EventQuiz} />
            <Stack.Screen name="Activity" component={Activity} />
            <Stack.Screen name="PlayVideo" component={PlayVideo} />
            <Stack.Screen name="TopAuthors" component={TopAuthors} />
            <Stack.Screen name="AuthorsProfile" component={AuthorsProfile} />
            <Stack.Screen name="Following" component={Following} />
            <Stack.Screen name="Followers" component={Followers} />
            <Stack.Screen name="OtherProfile" component={OtherProfile} />
            




        </>
    );
}
export default MainStack;