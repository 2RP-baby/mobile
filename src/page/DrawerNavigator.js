import React, { Fragment } from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Menu from '../page/Menu';
import Stack from '../navigations/Stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import hamburger from '../../assets/icon/menu.png';
import CustomDrawer from '../component/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
    drawerContent={props =><CustomDrawer{...props}/>}
    screenOptions={{
        drawerPosition: 'right',
        drawerType: 'back',
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
          
        },
        drawerItemStyle: {

        },
        // 제스처
        gestureEnabled: false,
        headerShown: false,
        // drawerLabelStyle: {marginLeft:-25}
        drawerActiveBackgroundColor: "rgba(0,83,134,0.5)",
        drawerActiveTintColor:"#fff",
        drawerInactiveTintColor:'#333',
      }}
        >
      <Drawer.Screen
       name="Home" 
       component={Stack} 
       options={{
          drawerIcon: ()=>{
            <Ionicons name="home-outline" size={22} />
            },
          }} 
      />
      <Drawer.Screen name="Profile" component={ProfileScreen}
      options={{
        drawerIcon: ()=>{
          <Ionicons name="person-outline" size={22}/>
          },
        }} 
         />
      <Drawer.Screen name="Settings" component={ProfileScreen}
      options={{
        drawerIcon: ()=>{
          <Ionicons name="setting-outline" size={22} />
          },
        }}  
        />
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
