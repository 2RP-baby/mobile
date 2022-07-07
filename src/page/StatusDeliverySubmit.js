import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Alert, TextInput, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusDeliveryInfo } from '../apis/scc';
import FixBox from '../component/statusDeliverySubmit/FixBox';
import ItemInfo from '../component/statusDeliverySubmit/ItemInfo';
import useRootData from '../hooks/useRootData';

const DeliverySubmit = ({navigation}) => {

    const {
        // sccSearchOne의 결과
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
    } = useRootData(({statusDeliveryInsertStore}) => ({
        deliveryInsertInfo: statusDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: statusDeliveryInsertStore.changeDeliveryInsertInfo,
    }));

    // console.log("Submit deliveryInsertInfo : ", deliveryInsertInfo);

    const receiveData =  async (po_num) => {
        const data = await StatusDeliveryInfo(po_num);
        console.log("receiveData", data);
        return data;
    };
    
    useEffect(()=>{
        receiveData(deliveryInsertInfo[0].po_num)
    }, [])

    return (
        <View style={styles.head}>
            <View style={styles.fix}>
                <FixBox receiveData={receiveData}/>
            </View>
            <View>
                <ItemInfo receiveData={receiveData}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    head:{
        height: '100%',
    },
    fix:{
        // width:'100%',
        height: '25%',
        marginBottom:5,
    },
    info:{
        // height: '100%',
    }
})

export default DeliverySubmit;