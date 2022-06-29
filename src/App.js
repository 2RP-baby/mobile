import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Login from './page/Login';
import Menu from './page/Menu';
import NavBar from './page/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import DeliveryInsert from './page/DeliveryInsert';

const App = () => {
  return(
  <NavigationContainer>
      {/* <Login/>*/}
        {/* <Menu/> */}
        {/* <NavBar/> */}
        {/* <DeliveryInsert/> */}
    <StackNavigation/>
  </NavigationContainer> 
  );
};

export default App;
