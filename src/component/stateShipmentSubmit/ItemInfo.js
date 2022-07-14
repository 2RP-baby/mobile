import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ScrollView } from 'react-native-gesture-handler';
import useRootData from '../../hooks/useRootData';
import { Card } from 'react-native-shadow-cards';
import moment from 'moment';

const ItemInfo = ({receiveData}) => {

    // mobx
    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
    } = useRootData(({StateShipDeliveryInsertStore}) => ({
        deliveryInsertInfo: StateShipDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: StateShipDeliveryInsertStore.changeDeliveryInsertInfo,
    }));
    // console.log("receiveData.scc2List : ",receiveData.scc2List);
    console.log("deliveryInsertInfo ~!!~", deliveryInsertInfo.item_uom);
    // console.log("receiveData.scc2List[0].quantity_ordered : ",receiveData.scc2List[0].quantity_ordered);

    return (
        <ScrollView>
            <>
            {deliveryInsertInfo.map((insertList, index)=>(
                <View key={index} style={styles.header}>
                <Card style={styles.card}>
                <View>
                    <Text style={styles.text1}>{insertList.item} / {insertList.item_uom} / {insertList.unit_price} 원 </Text>
                    <>
                    <View style={styles.text3_warrap}>
                        <Text style={styles.text3_label}>요청수량 : </Text>      
                        <Text style={styles.text3_context}>{insertList.quantity_ordered}</Text>      
                        <Text style={styles.text3_label}>요청납기 : </Text>      
                        <Text style={styles.text3_context}>{moment(insertList.need_by_date).format("yyyy-MM-DD")}</Text> 
                    </View>
                    <View style={styles.text3_warrap}>
                        <Text style={styles.text4_label}>Comment:</Text>      
                        <Text style={styles.text4_context}>{insertList.comment}</Text>      
                    </View>
                    </>
                </View>
                </Card>
            </View>
            ))}
            </>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    header:{
        marginLeft: 10,
        marginBottom: 5,
        marginRight:10,
    },
    card:{
        padding: 20,
    },
    text1: {
        height: 35,
        fontSize: 20,
        color: '#005386',
        marginLeft:10,
        marginTop:10,
    },
    text2: {
        height: 35,
        fontSize: 18,
        color: '#000000',
        marginLeft:10,
    },
    text3_warrap: {
        flexDirection: 'row',
        marginLeft:10,
    },
    text3_label: {
        height: 35,
        width: '24%',
        fontSize: 18,
        color: '#005386',
    },
    text3_context: {
        height: 35,
        width: '25%',
        fontSize: 18,
        color: '#005386',
    },
    text4_label: {
        height: 35,
        width: '25%',
        fontSize: 18,
        color: '#005386',
        marginRight: 5,
    },
    text4_context: {
        height: 35,
        width: '50%',
        fontSize: 18,
        color: '#005386',
    },
})

export default ItemInfo;