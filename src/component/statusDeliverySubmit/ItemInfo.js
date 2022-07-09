import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ScrollView } from 'react-native-gesture-handler';
import useRootData from '../../hooks/useRootData';


const ItemInfo = ({receiveData}) => {
    // mobx
    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
    } = useRootData(({statusDeliveryInsertStore}) => ({
        deliveryInsertInfo: statusDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: statusDeliveryInsertStore.changeDeliveryInsertInfo,
    }));
    
    return (
        <ScrollView>
            {/* <View style={styles.info}> */}
            {deliveryInsertInfo.map((insertList, index)=>(
                <View key={index} style={styles.header}>
                <View>
                    {/* <Text style={styles.text1}>{insertList.item_name} / {insertList.item_uom} / {insertList.unit_price} 원 </Text>
                    <Text style={styles.text2}>{insertList.item_description}</Text> 
                    <>
                    <View style={styles.text3_warrap}>
                        <Text style={styles.text3_label}>요청수량 : </Text>      
                        <Text style={styles.text3_context}>{receiveData.scc2List[index].quantity_ordered}</Text>      
                        <Text style={styles.text3_label}>요청납기 : </Text>      
                        <Text style={styles.text3_context}>{receiveData.scc2List[index].need_by_date}</Text> 
                    </View>
                    <View style={styles.text3_warrap}>
                        <Text style={styles.text4_label}>Comment:</Text>      
                        <Text style={styles.text4_context}>{receiveData.scc2List[index].comment}</Text>      
                    </View>
                    </> */}
                </View>
            </View>
            ))}
            {/* </View> */}
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    info:{
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    },
    header:{
        flexDirection: 'row',
        marginTop: 10,
        borderWidth:2,
        borderColor:"rgba(0,83,134,0.5)",
        marginLeft: 10,
        marginRight: 10,
        // height: '100%',
        backgroundColor: '#ffffff'

    },
    text1: {
        height: 30,
        fontSize: 20,
        color: '#005386',
    },
    text2: {
        height: 35,
        fontSize: 18,
        color: '#000000',
    },
    text3_warrap: {
        flexDirection: 'row',
        width: '90%',
        // borderWidth: 3,
        // backgroundColor: 'green',
    },
    text3_label: {
        height: 35,
        width: '24%',
        fontSize: 18,
        color: '#005386',
        // marginRight: 15,
        // backgroundColor: 'orange',
    },
    text3_context: {
        height: 35,
        width: '23%',
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
    input1:{
        height: 30,
        width: '20%',
        borderWidth: 0.7,
        borderColor: '#005386',
        // padding: 10, 
        fontSize: 18,
        marginRight: 10,
        marginBottom: 10,
    },
    input2:{
        height: 30,
        width: '20%',
        borderWidth: 0.7,
        borderColor: '#005386',
        // padding: 10, 
        fontSize: 18,
        marginRight: 10,
        marginBottom: 10,
        // backgroundColor: 'yellow',
    },
})

export default ItemInfo;