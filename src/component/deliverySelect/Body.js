import React from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import InputInfo from './InputInfo';
// import InputSelect from './common/InputSelect';


const Body = () => {   

    return (
        <View style={styles.view}> 
            <InputInfo labelContext="주문번호 (주문번호 입력)" replaceContext="466197-10"/>
            <InputInfo labelContext="주문신청자 *" replaceContext="이은행"/>
            <InputInfo labelContext="신청부서 *" replaceContext="PEZ21EQ"/>
            <InputInfo labelContext="Cost Center *" replaceContext="PSC12"/>
            <InputInfo labelContext="공급사" replaceContext="(주)포스코케미칼"/>
            <InputInfo labelContext="Item Code *" replaceContext="Q1109962"/>
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
        width: 100,
        height: 40,
        borderRadius: 50,
        marginTop: 30,
    }
})

export default Body;