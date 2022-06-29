import React, { useLayoutEffect } from 'react';
import { Text, View ,StyleSheet, Alert, Button} from 'react-native';
import DeliveryDetailSelect from '../page/DeliveryDetailSelect';

const List = ({navigation}) => {
  return (
    <View style={styles.view}>
      <DeliveryDetailSelect navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    color: 'blue',
    textDecorationLine: 'underline',
  },
  containerRow:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 0,
},
containerColumn:{
  // flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: "center",
  // marginBottom: 0,
},
textContainer:{
  width: 100,
  height: 40,
  // backgroundColor: '#005386',
  justifyContent: 'center',
  alignItems: "center",
  borderWidth: 1,
  // marginTop: 20,
  // paddingTop: 20,
},
textContainer1:{
  width: 250,
  height: 40,
  // backgroundColor: '#005386',
  justifyContent: 'center',
  alignItems: "center",
  borderWidth: 1,
  // marginTop: 20,
  // paddingTop: 20,
},
textContainer2:{
  width: 350,
  height: 40,
  // backgroundColor: '#005386',
  justifyContent: 'center',
  alignItems: "center",
  borderWidth: 1,
  // marginTop: 20,
  // paddingTop: 20,
},
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
export default List;