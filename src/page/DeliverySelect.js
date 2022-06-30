import React, { useState } from 'react';
import {View, StyleSheet, Button} from 'react-native';
import InputInfo from '../component/deliverySelect/InputInfo';
import { getSearchList } from '../apis/scc';



const DeliverySelect = ({navigation}) => {
    const [deliveryCondition, setDeliveryCondition] = useState({
        po_num:"", 
        staff_name:"", 
        staff_dept_code:"",
        subinventory:"",
        vendor_name:"",
        item_name:"",
        page:1
    });
    const [selectResult, setSelectResult] = useState([]);

    const handleDeliveryCondition = (key, value) => {
        const tempCondition = { ...deliveryCondition };
        tempCondition[key] = value;
        setDeliveryCondition(tempCondition);
    };

    const selectDeliveryList = async () => {
        const data = await getSearchList(deliveryCondition);
        console.log(data);
        setSelectResult(data);
        // return data;
    };
    console.log("select 결과 2 : ", selectResult);
    const test = {test1:1}

    return (
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
                    // console.log("button click");
                    navigation.navigate('DeliveryDetailSelect', {sendData: selectResult})
                    // Alert.alert('전송 버튼 클릭');
                    // navigation.navigate('List')
                    // navigation.navigate('List', {sendData: test})
                }}/>
            </View>
        </View>
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