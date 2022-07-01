import React, { useState } from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import { getSearchList } from '../apis/scc';
import useRootData from '../hooks/useRootData';

const DeliveryDetailSelect = ({navigation}) => {
    const {
        // select 조건
        deliveryCondition,
        changeDeliveryCondition, 

        // select 결과
        searchedList, //searchedListStore에 있는 searchedList 값을 가져온다
        changeSearchedList, //searchedListStore에 있는 changeSearchedList 함수를 가져온다.
    } = useRootData(({searchedListStore, deliverySelectStore }) => ({
        deliveryCondition: deliverySelectStore.deliveryCondition.get(),
        changeDeliveryCondition: deliverySelectStore.changeDeliveryCondition,
        searchedList: searchedListStore.searchedList.get(),
        changeSearchedList: searchedListStore.changeSearchedList,
    }));

    // 더보기 버튼 클릭시 DeleverySelect 페이지에서 보낸 condition의 page를 ++하기
    const moreInfo = () => {
        changeDeliveryCondition({...deliveryCondition, page: deliveryCondition.page+1})
        console.log("page++", deliveryCondition);
        selectMoreList();
    }

    const selectMoreList = async () => {
        const data = await getSearchList(deliveryCondition);
        changeSearchedList(data);
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
                                    onPress={() => {
                                        // selectDeliveryInsert(searchedlist.po_num)
                                        navigation.navigate('DeliveryInsert')
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
                        moreInfo();
                        // Alert.alert("더 보고 싶으면 500원")
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
    textContainer:{
        width: 100,
        height: 40,
        // backgroundColor: '#005386',
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 1,
    },
    textContainer1:{
        width: 250,
        height: 40,
        // backgroundColor: '#005386',
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 1,
    },
    textContainer2:{
        width: 350,
        height: 40,
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 1,
    },
    button:{
        width: 100,
        height: 40,
        borderRadius: 50,
        marginTop: 30,
    }
})

export default DeliveryDetailSelect;