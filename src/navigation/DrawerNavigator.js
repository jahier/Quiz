import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image } from 'react-native';
import BottomTab from './BottomTab';
import Edit_Profile from '../screen/Edit_Profile';
import Screen2 from '../screen/Screen2';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (

            <Drawer.Navigator initialRouteName="Screen2">
                <Drawer.Screen name="Screen2" component={Screen2} />
            </Drawer.Navigator>
    );
}


export default DrawerNavigator;
const style = StyleSheet.create({});
