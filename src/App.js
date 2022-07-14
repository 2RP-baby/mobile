import React from 'react';
import {View, Text, Button, StyleSheet, LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from './page/DrawerNavigator';

const App = () => {
  // error 창 없애기
  LogBox.ignoreAllLogs();
  const Drawer = createDrawerNavigator();

  return(
  <NavigationContainer>
    <DrawerNavigator />
   </NavigationContainer>  
  );
};

export default App;
