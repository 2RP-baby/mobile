import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-shadow-cards';
import useRootData from '../../hooks/useRootData';


const ItemInfo = () => {
    // mobx
    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
    } = useRootData(({statusDeliveryInsertStore}) => ({
        deliveryInsertInfo: statusDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: statusDeliveryInsertStore.changeDeliveryInsertInfo,
    }));

    console.log("Submit deliveryInsertInfo 000000000 : ", deliveryInsertInfo[0]);

    
    return (
        
        <ScrollView>
            <>
            {deliveryInsertInfo.map((insertList, index)=>(
                <View key={index} style={styles.header}>
                <Card style={styles.card}>
                    <Text style={styles.text1}>{insertList.item} / {insertList.item_uom} / {insertList.po2_unit_price} 원 </Text>
                    <Text style={styles.text2}>{insertList.item_description}</Text> 
                    <>
                    <View style={styles.text3_warrap}>
                        <Text style={styles.text3_label}>요청수량 : </Text>      
                        <Text style={styles.text3_context}>{insertList.scc2_quantity_ordered}</Text>      
                        <Text style={styles.text3_label}>요청납기 : </Text>      
                        <Text style={styles.text3_context}>{insertList.scc2_need_by_date}</Text> 
                    </View>
                    <View style={styles.text3_warrap}>
                        <Text style={styles.text4_label}>Comment:</Text>      
                        <Text style={styles.text4_context}>{insertList.scc2_comment}</Text>      
                    </View>
                    </>
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