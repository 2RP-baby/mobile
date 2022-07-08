import React, { useState } from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import { getSearchList } from '../apis/scc';
import useRootData from '../hooks/useRootData';
import {getDeliveryInsertInfo} from '../apis/scc';
import { ScrollView } from 'react-native-gesture-handler';

const DeliveryDetailSelect = ({navigation}) => {
    const {
        searchedList, 
        changeSearchedList, 
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
        callChangeApi,
        deliveryCondition,
        changeDeliveryCondition
    } = useRootData(({searchedListStore, deliveryInsertStore, deliverySelectStore}) => ({
        deliveryCondition: deliverySelectStore.deliveryCondition.get(),
        changeDeliveryCondition: deliverySelectStore.changeDeliveryCondition,
        searchedList: searchedListStore.searchedList.get(),
        changeSearchedList: searchedListStore.changeSearchedList,
        deliveryInsertInfo: deliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: deliveryInsertStore.changeDeliveryInsertInfo,
        callChangeApi: deliveryInsertStore.callChangeApi
    }));

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
        <ScrollView>
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
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 100,
        marginBottom:100,
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