import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Body from '../component/navbar/Body';
import DeliverySelect from '../page/DeliverySelect';

const Home = ({navigation}) => {
  return (
    <View style={styles.view}>
      <DeliverySelect/>    
      <View style={styles.button}>
        <Button title="주문조회" color="#005386" 
         onPress={() => navigation.navigate('List')}/>
      </View>
        
    </View>
  );
};
const styles = StyleSheet.create({
  view:{
      justifyContent: 'center',
      alignItems: "center",
      marginTop: 10,
  },
  button:{
      width: 100,
      height: 40,
      borderRadius: 50,
      marginTop: 30,
  }
})
export default Home;