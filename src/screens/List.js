import React, { useLayoutEffect } from 'react';
import { Text, View ,StyleSheet, Alert, Button} from 'react-native';
import DeliveryDetailSelect from '../page/DeliveryDetailSelect';

const List = ({navigation}) => {
  return (
    <View style={styles.view}>
      <DeliveryDetailSelect/>
      <View style={styles.containerRow}>
        <View style={styles.textContainer}>
            <Text style={styles.text}
                  onPress={() => navigation.navigate('DeliveryInsert')}
                  >466197-10
            </Text>
        </View>
        <View style={styles.textContainer1}>
            <Text
                  onPress={() => navigation.navigate('DeliveryInsert')}
                  >(주)포스코케미칼
            </Text>
        </View>
      </View>
        <View style={styles.textContainer2}>
                <Text>[BPA' 20] 양소 RH용 (건명)</Text>
        </View>
        <View style={styles.textContainer2}>
                <Text>PEZ21EQ PSC12 2021-09-30 이은행(부서코드,..,..)</Text>
        </View>

      <View style={styles.button}>
        <Button title="더보기" color="#005386" 
         onPress={() => Alert.alert("더 보고 싶으면 500원")}/>
      </View>      

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