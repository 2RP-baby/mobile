import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import InputInfo from '../component/deliverySelect/InputInfo';
import { getSearchList } from '../apis/scc';
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
        const data = await getSearchList(deliveryCondition);

        // mobx에 저장하기
        changeSearchedList(data);
    };
    // console.log("select 조건 ! : ", deliveryCondition);
    // console.log("select 결과 ! : ", searchedList);

    return (
        <ScrollView>
        <View style={styles.view1}>
            <InputInfo id="po_num"      labelContext="주문번호 (주문번호 입력)" replaceContext="466197-10" handleCondition={handleDeliveryCondition}/>
            <InputInfo id="staff_name"     labelContext="주문신청자 *" replaceContext="이은행" handleCondition={handleDeliveryCondition} />
            <InputInfo id="staff_dept_code" labelContext="신청부서 *" replaceContext="PEZ21EQ" handleCondition={handleDeliveryCondition}/>
            <InputInfo id="subinventory"    labelContext="Cost Center *" replaceContext="PSC12" handleCondition={handleDeliveryCondition}/>
            <InputInfo id="vendor_name"     labelContext="공급사" replaceContext="(주)포스코케미칼" handleCondition={handleDeliveryCondition}/>
            <InputInfo id="item_name"       labelContext="Item Code *" replaceContext="Q1109962" handleCondition={handleDeliveryCondition}/>
            <View style={styles.button}>
                <Button title="주문조회" color="#005386" 
                onPress={ () =>{ 
                    selectDeliveryList();
                    navigation.navigate('StatusDeliveryDetailSelect');
                }}/>
            </View>
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
    button:{
        width: 100,
        height: 40,
        borderRadius: 50,
        marginTop: 30,
    }
})

export default DeliverySelect;