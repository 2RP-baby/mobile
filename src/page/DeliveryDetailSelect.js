import React, { useState } from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import { getSearchList } from '../apis/scc';
import useRootData from '../hooks/useRootData';
import {getDeliveryInsertInfo} from '../apis/scc';

const DeliveryDetailSelect = ({navigation, route}) => {
    const {
        searchedList, 
        changeSearchedList, 
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
        callChangeApi
    } = useRootData(({searchedListStore, deliveryInsertStore}) => ({
        searchedList: searchedListStore.searchedList.get(),
        changeSearchedList: searchedListStore.changeSearchedList,
        deliveryInsertInfo: deliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: deliveryInsertStore.changeDeliveryInsertInfo,
        callChangeApi: deliveryInsertStore.callChangeApi
    }));
 
    

    console.log("detail page");
    // const [searchedList, changeSearchedList] = useState({route.params.searchedList});

    console.log("searchedList@@@@@@@@@@@@",searchedList);
    // console.log("searchedList@@@@@@@@@@@@",searchedList[1].po_num);


    const selectDeliveryInsert =  async (po_num) => {
        const data = await getDeliveryInsertInfo(po_num);
        changeDeliveryInsertInfo(data);
    };  

    return (
        <View style={styles.view}>
            {/* {test()} */}
            {
                searchedList.map((searchedlist, index)=>(
                    <View key={index} style={styles.view}>
                        <View style={styles.containerRow}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}
                                    onPress={async () => {
                                        // await callChangeApi(searchedList.po_num);
                                        await selectDeliveryInsert(searchedlist.po_num);
                                        navigation.navigate('DeliveryInsert');
                                        }
                                    }
                                    >{searchedlist.po_num}
                                </Text>
                            </View>
                            <View style={styles.textContainer1}>
                                <Text
                                    >{searchedlist.vendor_name}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.textContainer2}>
                                <Text>{searchedlist.comments}</Text>
                        </View>
                        <View style={styles.textContainer2}>
                            <Text>
                                {searchedlist.staff_dept_code +" /"+ searchedlist.subinventory+ " /"+searchedlist.promised_date+" /"+searchedlist.staff_name}
                            </Text>
                        </View>
                    </View>
                ))
            }
             <View style={styles.button}>
                    <Button title="더보기" color="#005386" 
                    onPress={() => {
                        Alert.alert("더 보고 싶으면 500원")
                    
                    }
                    
                    }/>
            </View> 
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 20,
    },
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
    //   view:{
    //       justifyContent: 'center',
    //       alignItems: "center",
    //       marginTop: 10,
    //   },
      button:{
          width: 100,
          height: 40,
          borderRadius: 50,
          marginTop: 30,
      }

})

export default DeliveryDetailSelect;