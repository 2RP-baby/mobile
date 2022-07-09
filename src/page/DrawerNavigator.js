import React, { Fragment } from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Menu from '../page/Menu';
import Stack from '../navigations/Stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import hamburger from '../../assets/icon/menu.png';
import homeIcon from '../../assets/icon/home.png'
import settingIcon from '../../assets/icon/settings.png'
import profileIcon from '../../assets/icon/user.png'
import CustomDrawer from '../component/CustomDrawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';


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
        drawerLabelStyle: {marginLeft:-20},
        drawerActiveBackgroundColor: "rgba(0,83,134,0.5)",
        drawerActiveTintColor:"#fff",
        drawerInactiveTintColor:'#333',
      }}
        >
      <Drawer.Screen
       name="Home" 
       component={Stack} 
       options={{
          drawerIcon: ()=>(
            <Image style={styles.image} source={homeIcon} />
          ),
        }} 
      />
      <Drawer.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{
        drawerIcon: ()=>(
          <Image style={styles.image} source={profileIcon} />
        ),
        }} 
         />
      <Drawer.Screen name="Settings" component={ProfileScreen}
      options={{
        drawerIcon: ()=>(
          <Image style={styles.image} source={settingIcon} />
        ),
        }}  
        />
      <Drawer.Screen name="Home menu" component={Menu}
      options={{
        drawerIcon: ()=>(
          <Image style={styles.image} source={homeIcon} />
        ),
        }}  
        />
    </Drawer.Navigator>
  );
};


const styles = StyleSheet.create({
    image: {
        width: 15,
        height: 15,
    },
})

export default DrawerNavigator;
