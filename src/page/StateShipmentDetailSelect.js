import React, { useState } from 'react';
import {View, StyleSheet, Text, Button, Alert, TouchableOpacity} from 'react-native';
import { getSearchList } from '../apis/shipment';
import useRootData from '../hooks/useRootData';
import {getShipmentInsertInfo,shipCurSearchList} from '../apis/shipment';
import { ScrollView } from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import moment from 'moment';
const ShipmentDetailSelect = ({navigation}) => {
    const {
        // 전 페이지에서 select 한 결과
        searchedList, 
        changeSearchedList, 

        // po_num 클릭시 다음 페이지로 이동
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
        callChangeApi,

        // 더보기
        shipmentCondition,
        changeShipmentCondition
    } = useRootData(({StateShipSearchedListStore, StateShipDeliveryInsertStore, StateShipmentSelectStore}) => ({
        searchedList: StateShipSearchedListStore.searchedList.get(),
        changeSearchedList: StateShipSearchedListStore.changeSearchedList,

        deliveryInsertInfo: StateShipDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: StateShipDeliveryInsertStore.changeDeliveryInsertInfo,
        callChangeApi: StateShipDeliveryInsertStore.callChangeApi,

        shipmentCondition: StateShipmentSelectStore.shipmentCondition.get(),
        changeShipmentCondition: StateShipmentSelectStore.changeShipmentCondition,
    }));

    // 더보기 버튼 클릭시 DeleverySelect 페이지에서 보낸 condition의 page를 ++하기
    const moreInfo = () => {
        changeShipmentCondition({...shipmentCondition, page: ++shipmentCondition.page})
        console.log("page++", shipmentCondition);
        selectMoreList();
    }

    const beforeInfo = () => {
        changeShipmentCondition({...shipmentCondition, page: --shipmentCondition.page})
        console.log("page--", shipmentCondition);
        selectMoreList();
    }

    const selectMoreList = async () => {
        console.log("select 전의 : ", shipmentCondition);

        const data = await shipCurSearchList(shipmentCondition);
        // console.log("typeof list : ", typeof data);
        changeSearchedList(data);
    };

    const selectDeliveryInsert =  async (po_num) => {
        const data = await getShipmentInsertInfo(po_num);
        changeDeliveryInsertInfo(data);
    };  
    const selectCurSearchInsertedOne =  async (shipment_num) => {
        const data = await getCurSearchInsertedOne(shipment_num);
        changeDeliveryInsertInfo(data);
    };
    console.log("searchedList chullllllllhaaaaaa", searchedList);
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
                                                // await callChangeApi(searchedList.po_num);
                                                // console.log("searchedlist.po_num ::: ", searchedlist.po_num);
                                                await selectDeliveryInsert(searchedlist.shipment_num);
                                                navigation.navigate('StateShipDeliverySubmit');
                                                }
                                            }
                                            >{searchedlist.shipment_num}
                                        </Text>
                                    </View>
                                    <View style={styles.textContainer1}>
                                        <Text style={styles.text1}>{searchedlist.note_to_receiver}</Text>
                                    </View>
                                </View>
                                <>
                                <View style={styles.textContainer2}>
                                    <Text style={styles.text2}> {searchedlist.subinventory +" /"+ searchedlist.contact_name+ " /"+searchedlist.deliver_to_location +" /"+moment(searchedlist.send_date).format("yyyy-MM-DD")}</Text>
                                </View>
                                </>
                            </Card>
                        </View>
                    ))
                }
            </ScrollView>

            {/* <View style={styles.button}>
                <Button title="이전페이지" color="#005386"
                    onPress={() => {
                        beforeInfo();
                    }}/>
                    <Text>               </Text>
                    <Button title="다음페이지" color="#005386"
                    onPress={() => {
                        moreInfo();
                    }}/>
                </View> */}
            <View flexDirection='row'  >
                {shipmentCondition.page==1 ? true : 
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
        height:'115%',
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
        fontSize:23,
    },
    containerRow:{
        flexDirection: 'row',
    },
    containerColumn:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 0,
    },
    textContainer:{
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10,
    },
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
        fontSize:16,
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
        marginBottom: 20,
        borderRadius:10,
    },
    buttonText: {
        color: "#ffffff",
        fontSize:23,
        fontWeight:'bold',
    },
})

export default ShipmentDetailSelect;