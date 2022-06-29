import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Login from './page/Login';
import Menu from './page/Menu';
import NavBar from './page/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './navigations/Stack';
import DeliveryInsert from './page/DeliveryInsert';
import DeliverySubmit from './page/DeliverySubmit';
import SideVar from './page/DrawerNavigator';
import DrawerNavigator from './page/DrawerNavigator';

const App = () => {
  const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
  };
  const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is profile</Text>
        </View>
    );
  };
  const Drawer = createDrawerNavigator();

  return(
    <>
  {/* <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>   */}
   <NavigationContainer>
    <StackNavigation/> 
  </NavigationContainer>
  </>  
  );
};

export default App;
