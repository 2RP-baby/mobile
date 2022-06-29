import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FixBox = () => {
    const data={
        item_id:'466197-10',
        vendor_name:'(주) 포스칼케미컬',
        total:'590,000'
    }
    return (
        <View style={styles.header}>
            <Text style={styles.text}>주문 번호 : {data.item_id}</Text>
            <Text style={styles.text}>공급사 명 : {data.vendor_name}</Text>
            <Text style={styles.text}>총 금액 : {data.total} 원</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    header:{
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#CCCCCC',
    },
    text: {
        width: 250,
        height: 35,
        fontSize: 20,
        color: '#000000',
        marginTop: 3,
        marginLeft: 10,
    },
})


export default FixBox;