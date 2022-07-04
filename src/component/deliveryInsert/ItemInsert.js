import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import useRootData from '../../hooks/useRootData';

const ItemInsert = () => {
    const data = {
        item_id:"Q1109962",
        total:"15000",
        name:"Shaped Refactory BRICK, MGO-CR, DBH-R2...",
        주문수량: "1384",
        주문잔량: "424",
    }
    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
    } = useRootData(({deliveryInsertStore}) => ({
        deliveryInsertInfo: deliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: deliveryInsertStore.changeDeliveryInsertInfo,
    }));
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.header}>
            <View style={styles.check}>
                <BouncyCheckbox onPress={isSelected}  
                                fillColor="#005386"
                                unfillColor="#ffffff"/>
            </View>
            <View>
                <Text style={styles.text1}>{deliveryInsertInfo.item_id} / {deliveryInsertInfo.item_uom}  / {deliveryInsertInfo.unit_price} 원 </Text>
                <Text style={styles.text2}>{deliveryInsertInfo.item_description}</Text>      
                <View style={styles.text3_warrap}>
                    <Text style={styles.text3_label}>주문수량 : </Text>      
                    <Text style={styles.text3_context}>{deliveryInsertInfo.quantity}</Text>      
                    <Text style={styles.text3_label}>주문잔량 : </Text>      
                    <Text style={styles.text3_context}>{deliveryInsertInfo.remaining}</Text>   
                </View>
                
                <View style={styles.text3_warrap}>
                    <Text style={styles.text3_label}>요청수량 :</Text>      
                    <TextInput
                    style={styles.input1}
                    // placeholder={replaceContext}
                    // onChange={_onChange}
                    />   
                    <Text style={styles.text3_label}>요청납기 :</Text>   
                    <TextInput style={styles.input1}/>
                </View>
                <View style={styles.text3_warrap}>
                    <Text style={styles.text3_label}>Comment :</Text>   
                    <TextInput style={styles.input2}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        marginTop: 10,
    },
    check:{
        width: '8%',
        // backgroundColor: '#676767',
        marginRight: 5,
        marginLeft: 10,
    },
    text1: {
        height: 35,
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
    },
    text3_label: {
        height: 35,
        width: '24%',
        fontSize: 18,
        color: '#000000',
        marginRight: 5,
    },
    text3_context: {
        height: 35,
        width: '23%',
        fontSize: 18,
        color: '#000000',
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
    },

})

export default ItemInsert;