import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Item from '../screens/Item';
import { Button, Platform, Text, View } from 'react-native';
import DeliveryInsert from '../page/DeliveryInsert';
import DeliverySubmit from '../page/DeliverySubmit';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <>
    <Stack.Navigator>
      <Stack.Screen
        name="DeliveryInsert"
        component={DeliveryInsert}
        options={{headerTitle: 'SCC 납품신청정보 입력'}}
      />
      <Stack.Screen
        name="DeliverySubmit"
        component={DeliverySubmit}
        options={{headerTitle: 'SCC 납품신청'}}
      />
    </Stack.Navigator>
    </>
  );
};

export default StackNavigation;