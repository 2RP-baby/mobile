import React, { useState } from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import { getSearchList } from '../apis/scc';
import useRootData from '../hooks/useRootData';
import {getDeliveryInsertInfo} from '../apis/scc';

const DeliveryDetailSelect = ({navigation}) => {
    const {
        searchedList, 
        changeSearchedList, 
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
        callChangeApi,
        deliveryCondition,
        changeDeliveryCondition
    } = useRootData(({statusSearchedListStore, statusDeliveryInsertStore, statusDeliverySelectStore}) => ({
        deliveryCondition: statusDeliverySelectStore.deliveryCondition.get(),
        changeDeliveryCondition: statusDeliverySelectStore.changeDeliveryCondition,
        searchedList: statusSearchedListStore.searchedList.get(),
        changeSearchedList: statusSearchedListStore.changeSearchedList,
        deliveryInsertInfo: statusDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: statusDeliveryInsertStore.changeDeliveryInsertInfo,
        callChangeApi: statusDeliveryInsertStore.callChangeApi
    }));

    // 전 페이지에서의 select 결과
    // console.log("Detail searchedList : ", searchedList);

    // po_num 클릭 후 해당 데이터를 다음 페이지로 넘긴다.
    // console.log("Detail deliveryInsertInfo : ", deliveryInsertInfo);

    // 전 페이지에서의 select 조건
    // console.log("Detail deliveryCondition : ", deliveryCondition);


    // 더보기 버튼 클릭시 DeleverySelect 페이지에서 보낸 condition의 page를 ++하기
    const moreInfo = () => {
        changeDeliveryCondition({...deliveryCondition, page: deliveryCondition.page+1})
        // console.log("page++", deliveryCondition);
        selectMoreList();
    }

    const beforeInfo = () => {
        changeDeliveryCondition({...deliveryCondition, page: deliveryCondition.page-1})
        // console.log("page--", deliveryCondition);
        selectMoreList();
    }

    const selectMoreList = async () => {
        const data = await getSearchList(deliveryCondition);
        // console.log("typeof list : ", typeof data);
        changeSearchedList(data);
    };
    const selectDeliveryInsert =  async (po_num) => {
        const data = await getDeliveryInsertInfo(po_num);
        changeDeliveryInsertInfo(data);
    };  

    return (
        <View style={styles.view}>
            {/* {test()} */}
            {
                searchedList.map((searchedlist, index)=>(
                    <View key={index} style={styles.view1}>
                        <View style={styles.containerRow}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}
                                    onPress={async () => {
                                        // await callChangeApi(searchedList.po_num);
                                        await selectDeliveryInsert(searchedlist.po_num);
                                        navigation.navigate('StatusDeliverySubmit');
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
                        

                        <>
                        <View style={styles.textContainer2}>
                                <Text>{searchedlist.comments}</Text>
                        </View>
                        <View style={styles.textContainer2}>
                            <Text>
                                {searchedlist.staff_dept_code +" /"+ searchedlist.subinventory+ " /"+searchedlist.promised_date+" /"+searchedlist.staff_name}
                            </Text>
                        </View>
                        </>
                    </View>
                ))
            }
             <View style={styles.button}>
                    <Button title="이전페이지" color="#005386"
                        onPress={() => {
                            beforeInfo();
                        }}/>
                    <Text>               </Text>
                    <Button title="다음페이지" color="#005386"
                        onPress={() => {
                            moreInfo();
                        }}/>
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
    view1:{
        width: '80%',
        marginBottom: 20,
    },
    text:{
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize:20,
      },
    containerRow:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 0,
    },
    containerColumn:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 0,
        // width:'80%',
    },
    textContainer:{
        width: '50%',
        height: 50,
        // backgroundColor: '#005386',
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 1,
    },
    textContainer1:{
        width: '50%',
        height: 50,
        // backgroundColor: '#005386',
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 1,
    },
    textContainer2:{
        // width: 573,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 1,
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        height: '20%',
        borderRadius: 50,
        marginTop: 30,
    },
})

export default DeliveryDetailSelect;