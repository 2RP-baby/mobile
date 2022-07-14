import React, { useState } from 'react';
import {View, StyleSheet, Text, Button, Alert, ScrollView, TouchableOpacity} from 'react-native';
import { getCurSearchList, getCurSearchInsertedOne } from '../apis/scc';
import useRootData from '../hooks/useRootData';
import {getDeliveryInsertInfo} from '../apis/scc';
import {Card} from 'react-native-shadow-cards';
import moment from 'moment';

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
        changeDeliveryCondition({...deliveryCondition, page: ++deliveryCondition.page})
        // console.log("page++", deliveryCondition);
        selectMoreList();
    }

    const beforeInfo = () => {
        changeDeliveryCondition({...deliveryCondition, page: --deliveryCondition.page})
        // console.log("page--", deliveryCondition);
        selectMoreList();
    }

    const selectMoreList = async () => {
        const data = await getCurSearchList(deliveryCondition);
        // console.log("typeof list : ", typeof data);
        changeSearchedList(data);
    };

    // 해당 shipment_num 클릭시 select 결과를 DeliveryInsertInfo(mobx)에 저장 
    const selectCurSearchInsertedOne =  async (shipment_num) => {
        const data = await getCurSearchInsertedOne(shipment_num);
        changeDeliveryInsertInfo(data);
    };  
    // console.log("searchedList scccccccc", searchedList);
    return (
        <View style={styles.view}>
            <ScrollView style={styles.scroll}>
            {searchedList.map((searchedlist, index)=>(
                    <View key={index} style={styles.view1}>
                        <Card style={styles.card}>
                            <View style={styles.containerRow}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}
                                        onPress={async () => {
                                            await selectCurSearchInsertedOne(searchedlist.scc1_shipment_num);
                                            navigation.navigate('StatusDeliverySubmit');
                                            }
                                        }
                                        >{searchedlist.scc1_shipment_num}
                                    </Text>
                                </View>
                                <View style={styles.textContainer1}>
                                    <Text style={styles.text1}>{searchedlist.vendor_name}</Text>
                                </View>
                            </View>
                            <>
                                <View style={styles.textContainer2}>
                                        <Text style={styles.text2}>{searchedlist.po1_comments}</Text>
                                </View>
                                <View style={styles.textContainer3}>
                                    <Text style={styles.text3}>
                                        {searchedlist.staff_dept_code +" /"+ searchedlist.po5_subinventory+ " /"+ moment(searchedlist.scc1_send_date).format("yyyy-MM-DD") +" /"+searchedlist.staff_name}
                                    </Text>
                                </View>
                            </>
                        </Card>
                    </View>
                ))
            }
            </ScrollView>
            <View flexDirection='row'  >
                {deliveryCondition.page==1 ? true : 
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.button} 
                    onPress={ () =>{ 
                        beforeInfo();
                    }}
                    >
                    <Text style={styles.buttonText}>이전페이지</Text>
                </TouchableOpacity>} 
                <Text>     </Text>
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.button} 
                    onPress={ () =>{ 
                        moreInfo();
                    }}
                    >
                    <Text style={styles.buttonText}>다음페이지</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 30,
        marginBottom:100,

    },
    scroll:{
        height:'110%',
    },
    view1:{
        marginBottom: 10,
        alignItems: "center",
    },
    card:{
        marginTop: 10,
    },
    containerRow:{
        flexDirection: 'row',
    },
    textContainer:{
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10,
    },
    text:{
        color: '#005386',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize:23,
    },
    // containerColumn:{
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: "center",
    //     marginBottom: 0,
    // },
    textContainer1:{
        width: '50%',
        height: 50,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: "center",
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
    },
    text1: {
        fontSize:18,
    },
    text2:{
        fontSize: 23,
        fontWeight: 'bold',
    },
    text3:{
        fontSize: 20,
        // fontWeight: 'bold',
    },
    button: {
        width: "30%",
        height: 60,
        backgroundColor: "#005386",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 20,
        borderRadius:10,
    },
    buttonText: {
        color: "#ffffff",
        fontSize:23,
        fontWeight:'bold',
    },
})
export default DeliveryDetailSelect;