import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ScrollView } from 'react-native-gesture-handler';
import useRootData from '../../hooks/useRootData';


const ItemInfo = () => {

    // mobx
    const {
        checkedList,
        changeCheckedList,
    } = useRootData(({shipCheckedListStore}) => ({
        checkedList: shipCheckedListStore.checkedList.get(),
        changeCheckedList: shipCheckedListStore.changeCheckedList,
    }));
    console.log("4 page : ", checkedList);

    return (
        <ScrollView>
            {Object.keys(checkedList).map((key,index)=>{
                let list = checkedList[key];
                let item_name = list.item
                let item_uom = list.uom
                let unit_price = list.unit_price
                let item_description = list.description
                let quantity_ordered = list.quantity_ordered
                let quantity_shipped = list.quantity_shipped
                let need_by_date = list.need_by_date
                let comment = list.comment;
                // console.log(key, " : -> ", list);

                return (
                <View key={index} style={styles.header}>
                    <Text style={styles.text1}>{item_name} / {item_uom} / {unit_price} 원 </Text>
                    <Text style={styles.text2}>{item_description}</Text>      
                    <View style={styles.text3_warrap}>
                        <Text style={styles.text3_label}>요청수량:</Text>      
                        <Text style={styles.text3_context}>{quantity_ordered}</Text>  
                        <Text style={styles.text3_label}>출하수량:</Text>      
                        <Text style={styles.text3_context}>{quantity_shipped}</Text>      
                        <Text style={styles.text3_label}>요청납기:</Text>      
                        <Text style={styles.text3_context}>{need_by_date}</Text>  
                    </View>
                    <View style={styles.text3_warrap}>
                        <Text style={styles.text4_label}>Comment:</Text>      
                        <Text style={styles.text4_context}>{comment}</Text>      
                    </View>
                </View>
                )
            })}
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    header:{
        marginTop: 5,
        marginLeft: 10,
        marginBottom: 20,
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