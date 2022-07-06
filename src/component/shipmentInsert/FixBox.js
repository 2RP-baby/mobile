import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useRootData from '../../hooks/useRootData';


const FixBox = () => {
    const data={
        total:'590,000'
    }
    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
        checkedList,
        changeCheckedList,
    } = useRootData(({shipDeliveryInsertStore, shipCheckedListStore}) => ({
        deliveryInsertInfo: shipDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: shipDeliveryInsertStore.changeDeliveryInsertInfo,
        checkedList: shipCheckedListStore.checkedList.get(),
        changeCheckedList: shipCheckedListStore.changeCheckedList,
    }));

    let total = 0;
    
    return (
        <View style={styles.header}>
            <Text style={styles.text}>주문 번호 : {deliveryInsertInfo[0].po_num}</Text>
            <Text style={styles.text}>요청 번호 : {deliveryInsertInfo[0].shipment_num}</Text>
            <Text style={styles.text}>납품신청자 : {deliveryInsertInfo[0].staff_name}     납품 장소 : {deliveryInsertInfo[0].deliver_to_location}</Text>
            <>
            {Object.keys(checkedList).map((key, index)=>{
                let list = checkedList[key];
                total += (list.quantity_shipped)*(list.unit_price);
            })}            
            </> 
            <Text style={styles.text}>총 금액 : {total} 원</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    header:{
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#CCCCCC',
    },
    text: {
        width: '100%',
        height: '17%',
        fontSize: 20,
        color: '#000000',
        marginTop: 10,
        marginLeft: 10,
    },
})


export default FixBox;