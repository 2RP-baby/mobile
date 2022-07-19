import React, { useState } from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Button} from 'react-native';
import InputInfo from '../component/deliverySelect/InputInfo';
import { getSearchList} from '../apis/shipment';
import useRootData from '../hooks/useRootData';

const ShipmentSelect = ({navigation}) => {

    const {
        // select 조건
        shipmentCondition,
        changeShipmentCondition, 

        searchedList, //searchedListStore에 있는 searchedList 값을 가져온다
        changeSearchedList, //searchedListStore에 있는 changeSearchedList 함수를 가져온다.
    } = useRootData(({shipmentSelectStore, shipSearchedListStore}) => ({
        shipmentCondition: shipmentSelectStore.shipmentCondition.get(),
        changeShipmentCondition: shipmentSelectStore.changeShipmentCondition,
        searchedList: shipSearchedListStore.searchedList.get(),
        changeSearchedList: shipSearchedListStore.changeSearchedList,
    }));

    const handleShipmentCondition = (key, value) => {
        const tempCondition = { ...shipmentCondition };
        tempCondition[key] = value;
        // setDeliveryCondition(tempCondition);
        changeShipmentCondition(tempCondition);
    };

    const selectShipmentList = async () => {
        const data = await getSearchList(shipmentCondition);

        // mobx에 저장하기
        changeSearchedList(data);
    };
    // console.log("select 조건 ! : ", shipmentCondition);
    // console.log("select 결과 ! : ", searchedList);

    return (
        <View style={styles.view1}>
            <InputInfo id="shipment_num"      labelContext="납품번호" replaceContext="466197-10" handleCondition={handleShipmentCondition}/>
            <InputInfo id="deliver_to_location"      labelContext="납품장소" replaceContext="QMA21" handleCondition={handleShipmentCondition}/>
            <InputInfo id="staff_name"              labelContext="납품신청자" replaceContext="이은행" handleCondition={handleShipmentCondition} />
            <InputInfo id="cost_center"             labelContext="납품신청부서 (Code 입력)" replaceContext="PSC12" handleCondition={handleShipmentCondition}/>
            <InputInfo id="item_name"               labelContext="Item Code (Code 입력)" replaceContext="Q1109962" handleCondition={handleShipmentCondition}/>
            <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.button} 
                    onPress={ () =>{ 
                        selectShipmentList();
                        navigation.navigate('ShipmentDetailSelect');
                    }}
                    >
                    <Text style={styles.text}>주문조회</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    view1:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 20,
    },
    view2:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10,
    },
    button: {
        width: "80%",
        height: 60,
        backgroundColor: "#005386",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 20,
        borderRadius:10,
      },
    text: {
        color: "#ffffff",
        fontSize:25,
        fontWeight:'bold',
    }
})

export default ShipmentSelect;