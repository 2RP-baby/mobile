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
            <View style={styles.ItemInfo}>
                <ItemInfo receiveData={receiveData}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        height:'75%',
        marginBottom: 400,
        alignItems: "center",
    },
    fix:{
        width:'100%',
        height:'25%',
    },
    ItemInfo:{
        alignItems: "center",
        height: '70%',
        // backgroundColor:'yellow',
    },
    inputInfo:{
        width: '100%',
        // alignItems: "center",
        marginTop: 10,
        marginLeft: '4%',
    },
    button1: {
        width: "80%",
        height: 60,
        backgroundColor: "#005386",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        // marginBottom: 20,
        borderRadius:10,
    },
    text1: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight:'bold',
    },
})

export default DeliverySubmit;