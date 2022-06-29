import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from './page/DrawerNavigator';

const App = () => {

  const Drawer = createDrawerNavigator();

  return(
  <NavigationContainer>
    <DrawerNavigator />
   </NavigationContainer>  
  );
};

export default App;
