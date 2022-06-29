import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const ItemInfo = () => {
    const data = {
        item_id: "Q1109962",
        total: "15000",
        name: "Shaped Refactory BRICK, MGO-CR, DBH-R2...",
        요청수량: "30",
        요청납기: "2021-09-17",
        Comment: "20, 10 별도 포장"
    }

    const [isSelected, setSelection] = useState(false);
    // const [sendData, setSendData] = useState({});
    // const _onChange = event => setSendData(event.nativeEvent.text);

    return (
            <View style={styles.header}>
                <Text style={styles.text1}>{data.item_id} / ea / {data.total} 원 </Text>
                <Text style={styles.text2}>{data.name}</Text>      
                <View style={styles.text3_warrap}>
                    <Text style={styles.text3_label}>요청수량:</Text>      
                    <Text style={styles.text3_context}>{data.요청수량}</Text>      
                    <Text style={styles.text3_label}>요청납기:</Text>      
                    <Text style={styles.text3_context}>{data.요청납기}</Text>   
                </View>
                <View style={styles.text3_warrap}>
                    <Text style={styles.text4_label}>Comment:</Text>      
                    <Text style={styles.text4_context}>{data.Comment}</Text>      
                </View>
            </View>

    );
};

const styles = StyleSheet.create({
    header:{
        marginTop: 5,
        marginLeft: 10,
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
    },
    text3_context: {
        height: 35,
        width: '25%',
        fontSize: 18,
        color: '#000000',
    },
    text4_label: {
        height: 35,
        width: '25%',
        fontSize: 18,
        color: '#000000',
        marginRight: 5,
    },
    text4_context: {
        height: 35,
        width: '50%',
        fontSize: 18,
        color: '#000000',
    },
})

export default ItemInfo;