import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useRootData from '../../hooks/useRootData';


const FixBox = () => {
    const data={
        total:'590,000'
    }
    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
    } = useRootData(({deliveryInsertStore}) => ({
        deliveryInsertInfo: deliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: deliveryInsertStore.changeDeliveryInsertInfo,
    }));
    
    return (
        <View style={styles.header}>
            <Text style={styles.text}>주문 번호 : {deliveryInsertInfo[0].po_num}</Text>
            <Text style={styles.text}>공급사 명 : {deliveryInsertInfo[0].vendor_name}</Text>
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