import React, { Fragment } from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Menu from '../page/Menu';
import Stack, {InsertDeliverysrc, SelectDeliverysrc, InsertShipmentsrc, SelectShipmentsrc} from '../navigations/Stack';
import homeIcon from '../../assets/icon/home.png';
import tackbaeIcon from '../../assets/icon/tackbae.png';
import searchIcon from '../../assets/icon/search.png';
import packageIcon from '../../assets/icon/package.png';
import penIcon from '../../assets/icon/pen.png';
import CustomDrawer from '../component/CustomDrawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';


const DrawerNavigator = ({navigation}) => {
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
    initialRouteName=" "
    drawerContent={props =><CustomDrawer {...props}/>}
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
      <Drawer.Screen name=" "  component={Stack} />
      <Drawer.Screen
       name="Home" 
       component={Menu} 
       options={{
          drawerIcon: ()=>(
            <Image style={styles.image} source={homeIcon} />
          ),
        }} 
      />

      <Drawer.Screen
       name="납품신청" 
       component={InsertDeliverysrc} 
       options={{
          drawerIcon: ()=>(
            <Image style={styles.image} source={penIcon} />
          ),
        }} 
      />

      <Drawer.Screen
       name="납품신청현황" 
       component={SelectDeliverysrc} 
       options={{
          drawerIcon: ()=>(
            <Image style={styles.image} source={searchIcon} />
          ),
        }} 
      />

      <Drawer.Screen
       name="출하등록" 
       component={InsertShipmentsrc} 
       options={{
          drawerIcon: ()=>(
            <Image style={styles.image} source={penIcon} />
          ),
        }} 
      />

    <Drawer.Screen
       name="출하현황" 
       component={SelectShipmentsrc} 
       options={{
          drawerIcon: ()=>(
            <Image style={styles.image} source={searchIcon} />
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
