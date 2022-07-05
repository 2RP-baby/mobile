import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image,TouchableOpacity,Button, Platform, Text, View,StyleSheet } from 'react-native';
import DeliveryInsert from '../page/DeliveryInsert';
import DeliveryDetailSelect from '../page/DeliveryDetailSelect';
import DeliverySelect from '../page/DeliverySelect';
import DeliverySubmit from '../page/DeliverySubmit';
import Menu from '../page/Menu';
// import Mybutton2 from '../component/navbar/Mybutton2';
import Hamburger from '../../assets/icon/menu.png'
import { DrawerActions } from '@react-navigation/native';
import ShipmentSelect from '../page/ShipmentSelect';
import ShipmentDetailSelect from '../page/ShipmentDetailSelect';
import ShipmentInsert from '../page/ShipmentInsert';
import ShipDeliverySubmit from '../page/ShipDeliverySubmit';
const Stack = createStackNavigator();

const StackNavigation = ({navigation}) => {
  return (
    <>
    <Stack.Navigator
      screenOptions={{
        // 메뉴바
        headerRight: () => (
          <View>
           <TouchableOpacity
              onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
              <Image style={styles.image} source={Hamburger}/>
            </TouchableOpacity>
          </View>
        )
      }}
    >
      <Stack.Screen
        name="Menu"
        component={Menu}
        options = {{headerTitle : 'e-Pro4',
      }}  
      /> 

      {/* 납품 신청 */}
      <Stack.Screen
        name="DeliverySelect"
        component={DeliverySelect}
        options = {{headerTitle : 'SCC 납품 신청 대상 조회',
      }}              
      />
      <Stack.Screen
        name="DeliveryDetailSelect"
        component={DeliveryDetailSelect}
        options = {{headerTitle : 'SCC 납품 신청 대상'}}
      /> 
      <Stack.Screen
        name="DeliveryInsert"
        component={DeliveryInsert}
        options={{headerTitle: 'SCC 납품 신청 정보 입력'}}
      />
      <Stack.Screen
        name="DeliverySubmit"
        component={DeliverySubmit}
        options={{headerTitle: 'SCC 납품신청'}}
      />


      {/* 출하등록 */}
      <Stack.Screen
        name="ShipmentSelect"
        component={ShipmentSelect}
        options = {{headerTitle : 'SCC 출하 대상 조회',
      }}              
      />
      <Stack.Screen
        name="ShipmentDetailSelect"
        component={ShipmentDetailSelect}
        options = {{headerTitle : 'SCC 출하 대상'}}
      /> 
      <Stack.Screen
        name="ShipmentInsert"
        component={ShipmentInsert}
        options={{headerTitle: 'SCC 출하 정보 입력'}}
      />
      
      <Stack.Screen
        name="ShipDeliverySubmit"
        component={ShipDeliverySubmit}
        options={{headerTitle: 'SCC 출하 등록'}}
      /> 
    </Stack.Navigator>
    </>
  );
};
const styles = StyleSheet.create({
  image: {
      width: 30,
      height: 30,
      marginRight:20,
  },
})
export default StackNavigation;