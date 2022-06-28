import React from 'react';
import {View, Text, Button} from 'react-native';
import Login from './page/Login';
import Menu from './page/Menu';
import NavBar from './page/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigations/Stack';




const App = () => {
  return(
  <NavigationContainer>
    <StackNavigation/>
    {/* <Login/> */}        
      {/* <Menu/> */}
      {/* <NavBar/> */}
  </NavigationContainer> 
      
         
    
  );
};

export default App;
