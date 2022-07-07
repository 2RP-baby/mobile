import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useRootData from '../../hooks/useRootData';


const FixBox = ({receiveData}) => {
    
    const {
        // sccSearchOne의 결과
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
    } = useRootData(({statusDeliveryInsertStore}) => ({
        deliveryInsertInfo: statusDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: statusDeliveryInsertStore.changeDeliveryInsertInfo,
    }));


    // const [num, setNum] = useState(0);
    // useEffect(()=>{

    // }, [num])
    let total = 0;
    // console.log("receiveData : ", receiveData);
    // console.log("receiveData.scc1.deliver_to_location : ", receiveData.scc1.deliver_to_location);
    
    return (
        <View style={styles.header}>
            <Text style={styles.text}>주문 번호 : {deliveryInsertInfo[0].po_num}</Text>
            <Text style={styles.text}>공급사 명 : {deliveryInsertInfo[0].vendor_name}</Text>
            {/* 
            <>
            {Object.keys(checkedList).map((key, index)=>{
                let list = checkedList[key];
                total += (list.quantity_ordered)*(list.unit_price);
            })}            
            </>  
            */}
            <Text style={styles.text}>납품 장소 : {receiveData.scc1.deliver_to_location}</Text>
            <Text style={styles.text}>요청 특기사항 : {receiveData.scc1.comment}</Text>
            <Text style={styles.text}>신청부서(Code 입력) : {receiveData.scc1.subniventory}</Text>

        </View>
    );
};
const styles = StyleSheet.create({
    header:{
        flexDirection: 'column',
        // width: '100%',
        // height: '100%',
        backgroundColor: '#CCCCCC',
    },
    text: {
        // width: '100%',
        // height: '23%',
        fontSize: 20,
        color: '#000000',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
    },
})


export default FixBox;