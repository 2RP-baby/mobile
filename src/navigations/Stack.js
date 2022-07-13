import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image,TouchableOpacity,Button, Platform, Text, View,StyleSheet } from 'react-native';
import Hamburger from '../../assets/icon/menu.png'
import { DrawerActions, NavigationContainer } from '@react-navigation/native';

import DeliveryInsert from '../page/DeliveryInsert';
import DeliveryDetailSelect from '../page/DeliveryDetailSelect';
import DeliverySelect from '../page/DeliverySelect';
import DeliverySubmit from '../page/DeliverySubmit';
import Menu from '../page/Menu';
import ShipmentSelect from '../page/ShipmentSelect';
import ShipmentDetailSelect from '../page/ShipmentDetailSelect';
import ShipmentInsert from '../page/ShipmentInsert';
import ShipDeliverySubmit from '../page/ShipDeliverySubmit';
import StatusDeliverySelect from '../page/StatusDeliverySelect';
import StatusDeliveryDetailSelect from '../page/StatusDeliveryDetailSelect';
import StatusDeliverySubmit from '../page/StatusDeliverySubmit';
import StateShipmentSelect from '../page/StateShipmentSelect';
import StateShipmentDetailSelect from '../page/StateShipmentDetailSelect';
import StateShipDeliverySubmit from '../page/StateShipDeliverySubmit';
import Login from '../page/Login';


const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const InsertDelivery = createStackNavigator();
const SelectDelivery = createStackNavigator();
const InsertShipment = createStackNavigator();
const SelectShipment = createStackNavigator();

function HomeStacksrc({navigation}){
  return(  
    <HomeStack.Navigator initialRouteName='Login' screenOptions={{
      // 메뉴바
      headerRight: () => (
        <View>
         <TouchableOpacity
            onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
            <Image style={styles.image} source={Hamburger}/>
          </TouchableOpacity>
        </View>
      )
    }}>
      <HomeStack.Screen name="Login" component={Login} options = {{headerTitle : 'e-Pro4'}}/>
      <HomeStack.Screen name="Menu" component={Menu} options = {{headerTitle : 'e-Pro4'}} />
    </HomeStack.Navigator>
  )
}

export function InsertDeliverysrc({navigation}){
  return(  
    <InsertDelivery.Navigator initialRouteName='DeliverySelect' screenOptions={{
      // 메뉴바
      headerRight: () => (
        <View>
         <TouchableOpacity
            onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
            <Image style={styles.image} source={Hamburger}/>
          </TouchableOpacity>
        </View>
      )
    }}>
      <InsertDelivery.Screen name="DeliverySelect" component={DeliverySelect} options = {{headerTitle : 'SCC 납품 신청 대상 조회'}}/>
      <InsertDelivery.Screen name="DeliveryDetailSelect" component={DeliveryDetailSelect} options = {{headerTitle : 'SCC 납품 신청 대상'}}/>
      <InsertDelivery.Screen name="DeliveryInsert" component={DeliveryInsert} options = {{headerTitle : 'SCC 납품 신청 정보 입력'}}/>
      <InsertDelivery.Screen name="DeliverySubmit" component={DeliverySubmit} options = {{headerTitle : 'SCC 납품 신청'}}/>
    </InsertDelivery.Navigator>
  )
}

export function SelectDeliverysrc({navigation}){
  return(  
    <SelectDelivery.Navigator initialRouteName='StatusDeliverySelect' screenOptions={{
      // 메뉴바
      headerRight: () => (
        <View>
         <TouchableOpacity
            onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
            <Image style={styles.image} source={Hamburger}/>
          </TouchableOpacity>
        </View>
      )
    }}>
      <SelectDelivery.Screen name="StatusDeliverySelect" component={StatusDeliverySelect} options = {{headerTitle : 'SCC 납품 신청 현황 조회'}}/>
      <SelectDelivery.Screen name="StatusDeliveryDetailSelect" component={StatusDeliveryDetailSelect} options = {{headerTitle : 'SCC 납품 신청 현황 조회 리스트'}}/>
      <SelectDelivery.Screen name="StatusDeliverySubmit" component={StatusDeliverySubmit} options = {{headerTitle : 'SCC 납품 신청 현황 조회'}}/>
    </SelectDelivery.Navigator>
  )
}

export function InsertShipmentsrc({navigation}){
  return(  
    <InsertShipment.Navigator initialRouteName='ShipmentSelect' screenOptions={{
      // 메뉴바
      headerRight: () => (
        <View>
         <TouchableOpacity
            onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
            <Image style={styles.image} source={Hamburger}/>
          </TouchableOpacity>
        </View>
      )
    }}>
      <InsertShipment.Screen name="ShipmentSelect" component={ShipmentSelect} options = {{headerTitle : 'SCC 출하 대상 조회'}}/>
      <InsertShipment.Screen name="ShipmentDetailSelect" component={ShipmentDetailSelect} options = {{headerTitle : 'SCC 출하 대상'}}/>
      <InsertShipment.Screen name="ShipmentInsert" component={ShipmentInsert} options = {{headerTitle : 'SCC 출하 정보 입력'}}/>
      <InsertShipment.Screen name="ShipDeliverySubmit" component={ShipDeliverySubmit} options = {{headerTitle : 'SCC 출하 등록'}}/>
    </InsertShipment.Navigator>
  )
}

export function SelectShipmentsrc({navigation}){
  return(  
    <SelectShipment.Navigator initialRouteName='StateShipmentSelect' screenOptions={{
      // 메뉴바
      headerRight: () => (
        <View>
         <TouchableOpacity
            onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
            <Image style={styles.image} source={Hamburger}/>
          </TouchableOpacity>
        </View>
      )
    }}>
      <SelectShipment.Screen name="StateShipmentSelect" component={StateShipmentSelect} options = {{headerTitle : 'SCC 출하 등록 현황 조회'}}/>
      <SelectShipment.Screen name="StateShipmentDetailSelect" component={StateShipmentDetailSelect} options = {{headerTitle : 'SCC 출하 등록 현황 조회 리스트'}}/>
      <SelectShipment.Screen name="StateShipDeliverySubmit" component={StateShipDeliverySubmit} options = {{headerTitle : 'SCC 출하 등록 현황 조회'}}/>
    </SelectShipment.Navigator>
  )
}

const styles = StyleSheet.create({
  image: {
      width: 30,
      height: 30,
      marginRight:20,
  },
})

export default () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="HomeStacksrc" component={HomeStacksrc} options={{ headerShown: false}}/>
      <Stack.Screen name="InsertDeliverysrc" component={InsertDeliverysrc} options={{ headerShown: false}}/>
      <Stack.Screen name="SelectDeliverysrc" component={SelectDeliverysrc} options={{ headerShown: false}}/>
      <Stack.Screen name="InsertShipmentsrc" component={InsertShipmentsrc} options={{ headerShown: false}}/>
      <Stack.Screen name="SelectShipmentsrc" component={SelectShipmentsrc} options={{ headerShown: false}}/>
    </Stack.Navigator>
)}