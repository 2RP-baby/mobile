import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import { Button, Platform, Text, View } from 'react-native';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options = {{headerTitle : 'SCC납품신청대상조회'}}              
      />
      <Stack.Screen
        name="List"
        component={List}
        options = {{headerTitle : 'SCC납품신청대상'}}
      />
    </Stack.Navigator>
    </>
  );
};

export default StackNavigation;