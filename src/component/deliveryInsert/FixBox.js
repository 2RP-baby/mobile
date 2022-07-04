import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useRootData from '../../hooks/useRootData';


const FixBox = () => {
    const data={
        total:'590,000'
    }
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
    
    return (
        <View style={styles.header}>
            <Text style={styles.text}>주문 번호 : {deliveryInsertInfo[0].po_num}</Text>
            <Text style={styles.text}>공급사 명 : {deliveryInsertInfo[0].vendor_name}</Text>
            <>
            {/* {checkedList.keys().map((key, index)=>{ */}
            {Object.keys(checkedList).map((key, index)=>{
                let list = checkedList[key];
                total += (list.quantity_ordered)*(list.unit_price);
                // let num = (list.quantity_ordered)*(list.unit_price);
                // setTotal(1);
                // totalState(list.quantity_ordered,list.unit_price);
            })}            
            </> 
            <Text style={styles.text}>총 금액 : {total} 원</Text>
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
        width: '100%',
        height: 35,
        fontSize: 20,
        color: '#000000',
        marginTop: 3,
        marginLeft: 10,
    },
})


export default FixBox;