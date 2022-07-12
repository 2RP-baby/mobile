import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import useRootData from '../../hooks/useRootData';
import InputInfo from './InputInfo';
import InputInfo2 from './InputInfo2';
import DatePicker from './DatePicker';
import InputCalendarInfo from './InputCalendarInfo';
import {Card} from 'react-native-shadow-cards';

const ItemInsert = () => {

    // mobx
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
    
    // input 데이터도 넣은 값
    const [itemCondition, setItemCondition] = useState(deliveryInsertInfo);

    const handleItemCondition = (index, id, value) => {
        const tempCondition = { ...itemCondition };
        tempCondition[index][id] = value;
        // tempCondition[index][value] = value;
        // tempCondition.index.value = value;

        // console.log("id : ", id);
        // console.log("value : ", value);
        // console.log("index : ", index);
        // itemCondition[index].key = value;
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

    // let value = false;

    // console.log("itemCondition", itemCondition[0]);
    // itemCondition[0].item_uom = "e"
    // itemCondition[0].a = "ab"

    // console.log("!!!! : ", itemCondition)

    return (
        <ScrollView>
            {deliveryInsertInfo.map((insertList, index)=>(
                <View key={index} style={styles.header}>
                    <Card style={styles.card}>
                        <View style={styles.check}>
                            <BouncyCheckbox 
                                style={styles.checheckBox}
                                onPress={
                                    (value)=> {
                                        console.log("index : ",index,", value : ", value);
                                        value ?  checkedCondition(index) : uncheckedCondition(index)
                                    }
                                }  
                                fillColor="#005386"
                                unfillColor="#ffffff"/>
                        </View>
                        <View>
                            <Text style={styles.text1}>{insertList.item_name} / {insertList.item_uom} / {insertList.unit_price} 원 </Text>
                            <Text style={styles.text2}>{insertList.item_description}</Text>     
                        <>
                            <View style={styles.text3_warrap}>
                                <Text style={styles.text3_label}>주문수량 : </Text>      
                                <Text style={styles.text3_context}>{insertList.quantity}</Text>      
                                <Text style={styles.text3_label}>주문잔량 : </Text>      
                                <Text style={styles.text3_context}>{insertList.remaining}</Text>   
                            </View>
                        </>
                        <>
                            <View style={styles.text3_warrap}>
                                <InputInfo id="quantity_ordered" index={index} labelContext="요청수량:" defaultValue={0} handleCondition={handleItemCondition} /><Text>  </Text>
                                <InputCalendarInfo id="need_by_date" index={index} labelContext="요청납기:" handleCondition={handleItemCondition} date ={insertList.need_by_date}/>
                                {/* <Text style={styles.label}>요청납기 :</Text>
                                <Text style={styles.text3_context}>{date}</Text> */}
                                <DatePicker id="need_by_date" index={index} handleCondition={handleItemCondition}/>
                                {/* <DatePicker/> */}
                            </View>
                        </>
                        <View style={styles.text3_warrap}>
                            <InputInfo2 id="comment" index={index} labelContext="Comment" handleCondition={handleItemCondition} />
                            {/* <Text style={styles.text3_label}>Comment :</Text>   
                            <TextInput style={styles.input2}
                                onChange={e => handleItemCondition(index, e.nativeEvent.text)}
                                /> */}
                        </View>
                    </View>
                </Card>
            </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header:{
        // flexDirection: 'row',
        marginTop: 5,
        // borderWidth:2,
        // borderColor:"rgba(0,83,134,0.5)",
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
        // backgroundColor: '#676767',
        marginRight: 5,
        marginLeft: 10,
        marginTop: 5,
    },
    text1: {
        height: 30,
        fontSize: 20,
        color: '#005386',
    },
    text2: {
        height: 35,
        fontSize: 18,
        color: '#000000',
    },
    text3_warrap: {
        flexDirection: 'row',
        width: '90%',
        // marginTop: 10,
    },
    text3_label: {
        height: 35,
        width: '22%',
        fontSize: 18,
        color: '#000000',
        marginRight: 15,
    },
    text3_context: {
        height: 35,
        width: '23%',
        fontSize: 18,
        color: '#000000',
    },
    input1:{
        height: 30,
        width: '20%',
        // borderWidth: 0.7,
        // borderColor: '#005386',
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