import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useRootData from '../../hooks/useRootData';
import {Card} from 'react-native-shadow-cards';

const FixBox = () => {
    
    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
        checkedList,
        changeCheckedList,
    } = useRootData(({deliveryInsertStore, checkedListStore}) => ({
        deliveryInsertInfo: deliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: deliveryInsertStore.changeDeliveryInsertInfo,
        checkedList: checkedListStore.checkedList.get(),
        changeCheckedList: checkedListStore.changeCheckedList,
    }));
    // const [total, setTotal] = useState();
    // const totalState = (a, b) => {
    //     setTotal(a * b);
    // }
    // const [num, setNum] = useState(0);
    // useEffect(()=>{

    // }, [num])
    let total = 0;
    if (isNaN(total)) { // 값이 없어서 NaN값이 나올 경우
        total = 0;
       }
    
    return (
        
        <View style={styles.header}>
            <Card style={styles.card1}>
            <Text style={styles.text}>주문 번호 : {deliveryInsertInfo[0].po_num}</Text>
            <Text style={styles.text}>공급사 명 : {deliveryInsertInfo[0].vendor_name}</Text>
            <>
            {Object.keys(checkedList).map((key, index)=>{
                let list = checkedList[key];
                total += (list.quantity_ordered)*(list.unit_price);
            })}            
            </> 
            <Text style={styles.text}>총 금액 : {total} 원</Text>
            </Card>
        </View>
    
    );
};
const styles = StyleSheet.create({
    header:{
        // flexDirection: 'column',
        // width: '100%',
        height: '90%',
        alignItems: "center",
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // margin:30,
    },
    card1:{
        width: '90%',
        // marginTop: 10,
        backgroundColor: '#005386',
        // backgroundColor: "rgba(0,83,134,0.5)",
        // borderRadius
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 20,
        
    },
    text: {
        width: '100%',
        height: '23%',
        fontSize: 20,
        // color: '#000000',
        color: '#ffffff',
        marginTop: 10,
        marginLeft: 10,
    },
})


export default FixBox;