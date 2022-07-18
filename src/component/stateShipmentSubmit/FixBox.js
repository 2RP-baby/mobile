import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useRootData from '../../hooks/useRootData';
import { Card } from 'react-native-shadow-cards';
import { getNumberFormat } from '../../apis/scc';

const FixBox = () => {
    
    const {
        // sccSearchOne의 결과
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
    } = useRootData(({StateShipDeliveryInsertStore}) => ({
        deliveryInsertInfo: StateShipDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: StateShipDeliveryInsertStore.changeDeliveryInsertInfo,
    }));


    let total = 0;
    
    return (
        <View style={styles.header}>
            <Card style={styles.card}>
                <View style={styles.view}>
                    <View style={styles.view1}>
                        <Text style={styles.text}>출하번호 :     {deliveryInsertInfo[0].shipment_num}</Text>
                        <Text style={styles.text}>납품담당자 :  {deliveryInsertInfo[0].staff_name}</Text>
                    </View>
                    {deliveryInsertInfo.map((value, index)=>{
                        // console.log(deliveryInsertInfo[index].po2_unit_price);
                        total += (deliveryInsertInfo[index].unit_price)*(deliveryInsertInfo[index].quantity_ordered);
                    })}            
                    <View style={styles.view2}>
                        <Text style={styles.text}>납품 장소 : {deliveryInsertInfo[0].deliver_to_location}</Text>
                        <Text style={styles.text}>총 금액 :    {getNumberFormat(total) + " 원"}</Text>
                    </View>
                </View>
            </Card>
        </View>
    );
};
const styles = StyleSheet.create({
    header:{
        height: '70%',
        alignItems: "center",
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    card:{
        width: '90%',
        height: '100%',
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
        width: '100%',
        // backgroundColor:'red',
        marginRight: -300,
    },
    view2:{
        flexDirection:'column',
        width: '100%',

    },
    text: {
        width: '50%',
        // height: '23%',
        fontSize: 20,
        color: '#ffffff',
        marginTop: 10,
        marginLeft: 10,
        // backgroundColor:'yellow',
    },
    text_vendor:{
        height:70,
        // alignItems: "center",
        justifyContent: "center",
    },
    textvalue: {
        width: '40%',
        // backgroundColor: 'red',
        // height: '23%',
        fontSize: 20,
        color: '#ffffff',
        marginTop: 10,
        marginLeft: 10,
        textAlign:'left',
        paddingLeft:10,
    },
})


export default FixBox;