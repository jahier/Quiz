/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import ApplicationStack from './src/navigation/ApplicationStack';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ApplicationStack />
    </SafeAreaView>
  );
};

export default App;
