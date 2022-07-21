import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import useRootData from '../../hooks/useRootData';
import InputInfo from './InputInfo';
import {Card} from 'react-native-shadow-cards';
import moment from 'moment';
const ItemInsert = () => {

    // mobx
    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
        checkedList,
        changeCheckedList,
    } = useRootData(({shipDeliveryInsertStore, shipCheckedListStore}) => ({
        deliveryInsertInfo: shipDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: shipDeliveryInsertStore.changeDeliveryInsertInfo,
        checkedList: shipCheckedListStore.checkedList.get(),
        changeCheckedList: shipCheckedListStore.changeCheckedList,
    }));

    // input 데이터도 넣은 값
    const [itemCondition, setItemCondition] = useState(deliveryInsertInfo);

    const handleItemCondition = (index, id, value) => {
        const tempCondition = { ...itemCondition };
        tempCondition[index][id] = value;
        setItemCondition(tempCondition);

        // check list 다시 불러오기
        var keys = Object.keys(checkedList); //키를 가져옵니다. 이때, keys 는 반복가능한 객체가 됩니다.
        for (var i=0; i<keys.length; i++) {
            if(keys[i] == index){
                const temp = {...checkedList};
                temp[index] = itemCondition[index];
                changeCheckedList(temp);
            }
        }
        
    };

    // check한 것만 넣기
    const checkedCondition = (index) => {
        const tempCondition = { ...checkedList };
        tempCondition[index] = itemCondition[index];
        changeCheckedList(tempCondition);
    };

    const uncheckedCondition = (index) => {
        let tempCondition = { ...checkedList };
        delete tempCondition[index];
        changeCheckedList(tempCondition);
    };
    
    // console.log("checkedList", checkedList);
    return (
            <>
            {deliveryInsertInfo.map((insertList, index)=>(
                <View key={index} style={styles.header}>
                <Card style={styles.card}>
                 <View style={styles.check}>
                    {/* {selected ? console.log("true") : console.log("false")} */}
                 <BouncyCheckbox 
                                style={styles.checheckBox}
                                onPress={
                                    (value)=> {
                                        // console.log("index : ",index,", value : ", value);
                                        value ?  checkedCondition(index) : uncheckedCondition(index)
                                    }
                                }  
                                fillColor="#005386"
                                unfillColor="#ffffff"/>
                </View>
                {/* <>{isSelected ? <Text>hi</Text> : <Text>ii</Text>}</> */}
                <View>
                    <Text style={styles.text1}>{insertList.item} / {insertList.uom} / {insertList.unit_price} 원 </Text>
                    <Text style={styles.text2}>{insertList.description}</Text>     
                    <>
                    <View style={styles.text3_warrap}>
                        <Text style={styles.text3_label}>납품수량 : </Text><Text>  </Text> 
                        <Text style={styles.text3_context}>{insertList.quantity_ordered}</Text>      
                        <Text style={styles.text3_label}>납품잔량 :</Text>      
                        <Text style={styles.text3_context}>{insertList.remaining}</Text>   
                    </View>
                    </>
                    <>
                    <View style={styles.text3_warrap}>
                        <InputInfo id="quantity_shipped" index={index} labelContext="출하수량* :" defaultValue={0} handleCondition={handleItemCondition} />
                        {/* <InputInfo id="need_by_date" index={index} labelContext="요청납기 :" handleCondition={handleItemCondition} /> */}
                        <Text style={styles.text3_label}> 요청납기 : </Text>      
                        <Text style={styles.text3_context}>{moment(insertList.need_by_date).format("yyyy-MM-DD")}</Text> 
                    </View>
                    </>
                    <View style={styles.text3_warrap}>
                        <Text style={styles.text4_label}>Comment : </Text>      
                        <Text style={styles.text4_context}>{insertList.comment}</Text> 
                    </View>
                </View>
                </Card>
            </View>
            ))}
            </>
    );
};

const styles = StyleSheet.create({
    header:{
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
    },
    card: {
        flexDirection: 'row',
        padding: 20,
    },
    check:{
        width: '5%',
        justifyContent : 'flex-start',
        marginRight: 5,
        marginLeft: 10,
        marginTop: 5,
    },
    text1: {
        height: 30,
        fontSize: 20,
        fontWeight:'bold',
        color: '#005386',
        marginBottom: 5,
    },
    text2: {
        height: 54,
        width: 660,
        fontSize: 18,
        color: '#000000',
        marginBottom: 5,
    },
    text3_warrap__: {
        flexDirection: 'row',
        width: '90%',
        marginBottom: 10,
        marginTop: 10,
    },
    text3_warrap: {
        flexDirection: 'row',
        width: '90%',
        marginBottom: 5,
    },
    text3_label: {
        height: 35,
        width: '22%',
        fontSize: 18,
        color: '#005386',
        fontWeight:'bold',
        marginRight: 15,
    },
    text3_context: {
        height: 35,
        width: '23%',
        fontSize: 18,
        color: '#000000',
    },
    text4_label: {
        height: 35,
        width: '22%',
        fontSize: 18,
        color: '#005386',
        fontWeight:'bold',
        marginRight: 15,
    },
    text4_context: {
        height: 35,
        width: '80%',
        fontSize: 18,
        color: '#000000',
    },
    input1:{
        height: 30,
        width: '20%',
        fontSize: 18,
        marginRight: 10,
        marginBottom: 10,
    },
    input2:{
        height: 30,
        width: '20%',
        fontSize: 18,
        marginRight: 10,
        marginBottom: 10,
    },

})

export default ItemInsert;