import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import useRootData from '../../hooks/useRootData';
import InputInfo from './InputInfo';

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
        console.log("index : ", index);
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
    let i = 0
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

    console.log("checkedList", checkedList);

    // let value = false;

    // console.log("itemCondition", itemCondition[0]);
    // itemCondition[0].item_uom = "e"
    // itemCondition[0].a = "ab"

    // console.log("!!!! : ", itemCondition)

    return (
        <ScrollView>
            <>
            {deliveryInsertInfo.map((insertList, index)=>(
                <View key={index} style={styles.header}>
                 <View style={styles.check}>
                    {/* {selected ? console.log("true") : console.log("false")} */}
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
                {/* <>{isSelected ? <Text>hi</Text> : <Text>ii</Text>}</> */}
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
                        <InputInfo id="quantity_ordered" index={index} labelContext="요청수량 :" defaultValue={0} handleCondition={handleItemCondition} />
                        <InputInfo id="need_by_date" index={index} labelContext="요청납기 :" handleCondition={handleItemCondition} />
                    </View>
                    </>
                    <View style={styles.text3_warrap}>
                        <InputInfo id="comment" index={index} labelContext="Comment" handleCondition={handleItemCondition} />
                        {/* <Text style={styles.text3_label}>Comment :</Text>   
                        <TextInput style={styles.input2}
                            onChange={e => handleItemCondition(index, e.nativeEvent.text)}
                            /> */}
                    </View>
                </View>
            </View>
            ))}
            </>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        marginTop: 10,
    },
    check:{
        width: '8%',
        // backgroundColor: '#676767',
        marginRight: 5,
        marginLeft: 10,
    },
    text1: {
        height: 35,
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
        // width: '50%',
        // borderWidth: 3,
        // backgroundColor: 'green',
    },
    text3_label: {
        height: 35,
        width: '24%',
        fontSize: 18,
        color: '#000000',
        marginRight: 5,
        // backgroundColor: 'orange',

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
        borderWidth: 0.7,
        borderColor: '#005386',
        // padding: 10, 
        fontSize: 18,
        marginRight: 10,
        marginBottom: 10,
    },
    input2:{
        height: 30,
        width: '20%',
        borderWidth: 0.7,
        borderColor: '#005386',
        // padding: 10, 
        fontSize: 18,
        marginRight: 10,
        marginBottom: 10,
        // backgroundColor: 'yellow',

    },

})

export default ItemInsert;