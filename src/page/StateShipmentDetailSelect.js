import React, { useState } from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import { getSearchList } from '../apis/scc';
import useRootData from '../hooks/useRootData';
import {getShipmentInsertInfo} from '../apis/shipment';
import { ScrollView } from 'react-native-gesture-handler';

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
        changeShipmentCondition({...shipmentCondition, page: shipmentCondition.page+1})
        console.log("page++", shipmentCondition);
        selectMoreList();
    }

    const beforeInfo = () => {
        changeDeliveryCondition({...deliveryCondition, page: deliveryCondition.page-1})
        console.log("page--", deliveryCondition);
        selectMoreList();
    }

    const selectMoreList = async () => {
        const data = await getSearchList(shipmentCondition);
        console.log("typeof list : ", typeof data);
        changeSearchedList(data);
    };

    const selectDeliveryInsert =  async (po_num) => {
        const data = await getShipmentInsertInfo(po_num);
        changeDeliveryInsertInfo(data);
    };  

    return (
        <ScrollView>
        <View style={styles.view}>
            {
                searchedList.map((searchedlist, index)=>(
                    <View key={index} style={styles.view1}>
                        <View style={styles.containerRow}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}
                                    onPress={async () => {
                                        // await callChangeApi(searchedList.po_num);
                                        console.log("searchedlist.po_num ::: ", searchedlist.po_num);
                                        await selectDeliveryInsert(searchedlist.po_num);
                                        navigation.navigate('StateShipDeliverySubmit');
                                        }
                                    }
                                    >{searchedlist.po_num}
                                </Text>
                            </View>
                            <View style={styles.textContainer1}>
                                <Text
                                    >{searchedlist.comments}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.textContainer2}>
                            <Text>
                                {searchedlist.scc_amount +" /"+ searchedlist.staff_name+ " /"+searchedlist.deliver_to_location +" /"+searchedlist.send_date}
                            </Text>
                        </View>
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
    // view:{
    //     justifyContent: 'center',
    //     alignItems: "center",
    //     marginTop: 20,
    // },
    // text:{
    //     color: 'blue',
    //     textDecorationLine: 'underline',
    //   },
    //   containerRow:{
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: "center",
    //     marginBottom: 0,
    // },
    // textContainer:{
    //     width: 100,
    //     height: 40,
    //     // backgroundColor: '#005386',
    //     justifyContent: 'center',
    //     alignItems: "center",
    //     borderWidth: 1,
    // },
    // textContainer1:{
    //     width: 250,
    //     height: 40,
    //     // backgroundColor: '#005386',
    //     justifyContent: 'center',
    //     alignItems: "center",
    //     borderWidth: 1,
    // },
    // textContainer2:{
    //     width: 350,
    //     height: 40,
    //     justifyContent: 'center',
    //     alignItems: "center",
    //     borderWidth: 1,
    // },
    // button:{
    //     width: 100,
    //     height: 40,
    //     borderRadius: 50,
    //     marginTop: 30,
    // }
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
        width: 100,
        height: 40,
        borderRadius: 50,
        marginTop: 30,
    }
})

export default ShipmentDetailSelect;