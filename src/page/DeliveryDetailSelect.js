import React, { useState } from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import { getSearchList } from '../apis/scc';
import useRootData from '../hooks/useRootData';
import {getDeliveryInsertInfo} from '../apis/scc';
import { ScrollView } from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';


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

            {
                searchedList.map((searchedlist, index)=>(
                    <View key={index} style={styles.view1}>
                    <Card style={styles.card}>
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
                                <Text style={styles.text2}>{searchedlist.comments}</Text>
                        </View>
                        <View style={styles.textContainer3}>
                            <Text style={styles.text3}>
                                {searchedlist.staff_dept_code +" /"+ searchedlist.subinventory+ " /"+searchedlist.promised_date+" /"+searchedlist.staff_name}
                            </Text>
                        </View>
                        </>
                        </Card>
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
        marginBottom: 10,
        alignItems: "center",
    },
    card:{
        marginTop: 10,
    },
    text:{
        color: '#005386',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize:20,
    },
    containerRow:{
        flexDirection: 'row',
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
        marginTop: 10,
        // borderWidth: 1,
    },
    textContainer1:{
        width: '50%',
        height: 50,
        marginTop: 10,

        // backgroundColor: '#005386',
        justifyContent: 'center',
        alignItems: "center",
        // borderWidth: 1,
    },
    textContainer2:{
        width: '100%',
        height: 30,
        // marginLeft: 20,
        marginTop: 15,
        marginBottom: 20,

        // marginTop: 15,
        justifyContent: 'center',
        alignItems: "center",
        // borderWidth: 1,
    },
    textContainer3:{
        width: '100%',
        height: 50,
        alignItems: "center",
        

        // marginTop: 15,
        // justifyContent: 'center',
        // alignItems: "center",
        // borderWidth: 1,
    },
    text2:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    text3:{
        fontSize: 13,
        // fontWeight: 'bold',
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