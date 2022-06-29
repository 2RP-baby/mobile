import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import List from '../screens/List';
import { Image,TouchableOpacity,Button, Platform, Text, View,StyleSheet } from 'react-native';
import DeliveryInsert from '../page/DeliveryInsert';
import DeliverySubmit from '../page/DeliverySubmit';
import Menu from '../page/Menu';
// import Mybutton2 from '../component/navbar/Mybutton2';
import Hamburger from '../../assets/icon/menu.png'

const Stack = createStackNavigator();

const StackNavigation = ({navigation}) => {
  return (
    <>
    <Stack.Navigator>
       <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerTitle: 'Menu',
          headerRight: () => (
            <View>
             <TouchableOpacity>
                {/* onPress={()=>navigation.navigate('Login')}> */}
                <Image style={styles.image} source={Hamburger} />
            </TouchableOpacity>
            {/* <Login/> */}
        </View>
          ),
        }}
      /> 
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
const styles = StyleSheet.create({
  image: {
      width: 30,
      height: 30,
      marginRight:20,
  },
})
export default StackNavigation;