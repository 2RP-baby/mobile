import React from 'react';
import {View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import InputInfo from '../component/deliverySelect/InputInfo';
import { getCurSearchList } from '../apis/scc';
import useRootData from '../hooks/useRootData';
import { ScrollView } from 'react-native-gesture-handler';

const DeliverySelect = ({navigation}) => {

    const {
        // select 조건
        deliveryCondition,
        changeDeliveryCondition, 

        // select 결과
        searchedList, //searchedListStore에 있는 searchedList 값을 가져온다
        changeSearchedList, //searchedListStore에 있는 changeSearchedList 함수를 가져온다.
    } = useRootData(({statusSearchedListStore, statusDeliverySelectStore }) => ({
        deliveryCondition: statusDeliverySelectStore.deliveryCondition.get(),
        changeDeliveryCondition: statusDeliverySelectStore.changeDeliveryCondition,
        searchedList: statusSearchedListStore.searchedList.get(),
        changeSearchedList: statusSearchedListStore.changeSearchedList,
    }));

    const handleDeliveryCondition = (key, value) => {
        const tempCondition = { ...deliveryCondition };
        tempCondition[key] = value;
        // setDeliveryCondition(tempCondition);
        changeDeliveryCondition(tempCondition);
    };

    const selectDeliveryList = async () => {
        const data = await getCurSearchList(deliveryCondition);

        console.log("select한 결과::", data);
        // mobx에 저장하기
        changeSearchedList(data);
    };
    // console.log("select 조건 ! : ", deliveryCondition);
    // console.log("select 결과 ! : ", searchedList);

    return (
        <ScrollView>
        <View style={styles.view1}>
            <InputInfo id="shipment_num"       labelContext="납품번호 (납품번호 입력)" replaceContext="466197-10" handleCondition={handleDeliveryCondition}/>
            <InputInfo id="staff_name"          labelContext="납품신청자"         replaceContext="이은행" handleCondition={handleDeliveryCondition} />
            <InputInfo id="deliver_to_location" labelContext="납품장소"             replaceContext="QMA21" handleCondition={handleDeliveryCondition}/>
            <InputInfo id="subinventory"        labelContext="납품신청부서" replaceContext="PSC12" handleCondition={handleDeliveryCondition}/>
            <InputInfo id="vendor_name"         labelContext="공급사(공급사명 조회)" replaceContext="(주)포스코케미칼" handleCondition={handleDeliveryCondition}/>
            <InputInfo id="item_name"           labelContext="Item Code (Code 입력)" replaceContext="Q1109962" handleCondition={handleDeliveryCondition}/>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.button} 
                onPress={ () =>{ 
                    selectDeliveryList();
                    navigation.navigate('StatusDeliveryDetailSelect');
                }}>
                <Text style={styles.text}>주문조회</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    view1:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 20,
    },
    view2:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10,
    },
    button: {
        width: "80%",
        height: 60,
        backgroundColor: "#005386",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 20,
        borderRadius:10,
    },
    text: {
        color: "#ffffff",
        fontSize:25,
        fontWeight:'bold',
    }
})

export default DeliverySelect;