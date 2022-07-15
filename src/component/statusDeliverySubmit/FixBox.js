import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import useRootData from '../../hooks/useRootData';


const FixBox = () => {
    
    const {
        // sccSearchOne의 결과
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
    } = useRootData(({statusDeliveryInsertStore}) => ({
        deliveryInsertInfo: statusDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: statusDeliveryInsertStore.changeDeliveryInsertInfo,
    }));

    // console.log("Submit deliveryInsertInfo 000000000 : ", deliveryInsertInfo[0]);

    let total = 0;
    
    return (
        <View style={styles.header}>
            <Card style={styles.card}>
                <View style={styles.view}>
                    <View style={styles.view1}>
                        <Text style={styles.text}>납품 번호</Text>
                        <Text style={styles.text}>공급사 명</Text>
                       
                        <Text style={styles.text}>총 금액</Text>
                        <Text style={styles.text}>납품 장소</Text>
                        <Text style={styles.text}>요청 특기사항</Text>
                        <Text style={styles.text}>신청부서(Code 입력)</Text>
                    </View>
                {deliveryInsertInfo.map((value, index)=>{
                    // console.log(deliveryInsertInfo[index].po2_unit_price);
                    total += (deliveryInsertInfo[index].po2_unit_price)*(deliveryInsertInfo[index].scc2_quantity_ordered);
                })}            

                <View style={styles.view1}>
                    <Text style={styles.textvalue}>{deliveryInsertInfo[0].scc1_shipment_num}</Text>
                    <Text style={styles.textvalue}>{deliveryInsertInfo[0].vendor_name}</Text>
                    <Text style={styles.textvalue}>{total}</Text>
                    <Text style={styles.textvalue}>{deliveryInsertInfo[0].scc1_deliver_to_location}</Text>
                    <Text style={styles.textvalue}>{deliveryInsertInfo[0].scc1_comment}</Text>
                    <Text style={styles.textvalue}>{deliveryInsertInfo[0].scc1_subinventory}</Text>
                </View>
                </View>

            </Card>
        </View>
    );
};
const styles = StyleSheet.create({
  
    header:{
        height: '90%',
        alignItems: "center",
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    card:{
        width: '90%',
        backgroundColor: '#005386',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 20,
    },
    view:{
        flexDirection: 'row',
    },
    view1:{
        flexDirection: 'column',
        width: 300,
    },
    text: {
        width: '100%',
        // height: '23%',
        fontSize: 20,
        color: '#ffffff',
        marginTop: 10,
        marginLeft: 10,
    },
    textvalue: {
        width: '130%',
        // height: '23%',
        fontSize: 20,
        color: '#ffffff',
        marginTop: 10,
        marginLeft: 10,
    },
})


export default FixBox;