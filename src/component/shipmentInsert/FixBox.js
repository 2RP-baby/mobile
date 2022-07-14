import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useRootData from '../../hooks/useRootData';
import {Card} from 'react-native-shadow-cards';


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
            <Card style={styles.card1}>
                <View style={styles.view1}>
                    <Text style={styles.text}>주문 번호 : {deliveryInsertInfo[0].po_num}</Text>
                    <Text style={styles.text}>요청 번호 : {deliveryInsertInfo[0].shipment_num}</Text>
                    <>
                        {Object.keys(checkedList).map((key, index)=>{
                            let list = checkedList[key];
                            total += (list.quantity_shipped)*(list.unit_price);
                        })}            
                    </> 
                    <Text style={styles.text}>총 금액 : {total} 원</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text}>납품신청자 : {deliveryInsertInfo[0].staff_name}</Text>
                    <Text style={styles.text}>납품 장소 : {deliveryInsertInfo[0].deliver_to_location}</Text>
                </View>
            </Card>
        </View>
    );
};
const styles = StyleSheet.create({
    header:{
        // flexDirection: 'column',
        // width: '100%',
        height: '90%',
        alignItems: "center",
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    card1:{
        width: '90%',
        height: '113%',
        flexDirection:'row',

        // marginTop: 10,
        backgroundColor: '#005386',
        // backgroundColor: "rgba(0,83,134,0.5)",
        // borderRadius
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 30,
        marginTop: -20,
        // marginBottom: 20,
        // padding:10,
        
    },
    view1:{
        flexDirection:'column',
        width: '50%',
    },
    view2:{
        flexDirection:'column',
    },
    text: {
        width: '100%',
        height: '23%',
        fontSize: 20,
        // color: '#000000',
        color: '#ffffff',
        marginTop: 10,
        marginLeft: 10,
    },
})


export default FixBox;