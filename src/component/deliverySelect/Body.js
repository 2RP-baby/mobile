import React, { useState } from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import { getSearchList } from '../../apis/scc';
import InputInfo from './InputInfo';
// import InputSelect from './common/InputSelect';


const Body = ({navigation}) => {   
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
        return data;
    };
    console.log("select 결과 2 : ", selectResult);


    return (
        <View style={styles.view}> 
            <InputInfo id="po_num"      labelContext="주문번호 (주문번호 입력)" replaceContext="466197-10" handleCondition={handleDeliveryCondition}/>
            <InputInfo id="staff_name"     labelContext="주문신청자 *" replaceContext="이은행" handleCondition={handleDeliveryCondition} />
            <InputInfo id="staff_dept_code" labelContext="신청부서 *" replaceContext="PEZ21EQ" handleCondition={handleDeliveryCondition}/>
            <InputInfo id="subinventory"    labelContext="Cost Center *" replaceContext="PSC12" handleCondition={handleDeliveryCondition}/>
            <InputInfo id="vendor_name"     labelContext="공급사" replaceContext="(주)포스코케미칼" handleCondition={handleDeliveryCondition}/>
            <InputInfo id="item_name"       labelContext="Item Code *" replaceContext="Q1109962" handleCondition={handleDeliveryCondition}/>
            <View style={styles.button}>
                <Button title="주문조회" color="#005386" 
                // onPress={ (list) =>{ 
                onPress={ () =>{ 
                    selectDeliveryList()
                    // console.log("button click");
                    navigation.navigate('List')
                    // navigation.navigate('List', {sendData: list.selectResult})
                }}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({ 
    view:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10,
    },
    button:{
        width: 200,
        height: 60,
        borderRadius: 50,
        marginTop: 60,
    }
})

export default Body;