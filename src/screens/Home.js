import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Body from '../component/navbar/Body';
import DeliverySelect from '../page/DeliverySelect';

const Home = ({navigation}) => {
  return (
    <View style={styles.view}>
      <DeliverySelect navigation={navigation}/>    
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