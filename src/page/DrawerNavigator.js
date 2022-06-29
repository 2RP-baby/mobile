import React, { Fragment } from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Menu from '../page/Menu';
import Stack from '../navigations/Stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import hamburger from '../../assets/icon/menu.png';


const DrawerNavigator = () => {
  const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is profile</Text>
        </View>
    );
  };
  const Drawer = createDrawerNavigator();

  return(
    <Drawer.Navigator
    screenOptions={{
        drawerPosition: 'right',
        drawerType: 'back',
        // headerRight: () => (
        //     <TouchableOpacity
        //         onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
        //         <Image style={styles.image} source={hamburger} />
        //     </TouchableOpacity>
        //   ),

        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        drawerItemStyle: {

        },
        // 제스처
        gestureEnabled: false,
        headerShown: false,
      }}
        >
      <Drawer.Screen name=" 00" component={Stack} 
        options={{
            drawerLabel: 'HOME',
            // drawerActiveBackgroundColor: 'red',
        }} 
        />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="test1" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};


const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
    },
})

export default DrawerNavigator;
