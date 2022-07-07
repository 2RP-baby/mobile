import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ScrollView } from 'react-native-gesture-handler';
import useRootData from '../../hooks/useRootData';


const ItemInfo = ({receiveData}) => {

    // mobx
    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
    } = useRootData(({statusDeliveryInsertStore}) => ({
        deliveryInsertInfo: statusDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: statusDeliveryInsertStore.changeDeliveryInsertInfo,
    }));
    console.log("receiveData.scc2List : ",receiveData.scc2List);
    console.log("receiveData.scc2List[0].quantity_ordered : ",receiveData.scc2List[0].quantity_ordered);


    return (
        <ScrollView>
            <>
            {deliveryInsertInfo.map((insertList, index)=>(
                <View key={index} style={styles.header}>
                <View>
                    <Text style={styles.text1}>{insertList.item_name} / {insertList.item_uom} / {insertList.unit_price} 원 </Text>
                    <Text style={styles.text2}>{insertList.item_description}</Text>     
                    <>
                    <View style={styles.text3_warrap}>
                        <Text style={styles.text3_label}>요청수량 : </Text>      
                        <Text style={styles.text3_context}>{receiveData.scc2List[index].quantity_ordered}</Text>      
                        <Text style={styles.text3_label}>요청납기 : </Text>      
                        <Text style={styles.text3_context}>{receiveData.scc2List[index].need_by_date}</Text> 
                        <Text style={styles.text3_label}>comment : </Text>      
                        <Text style={styles.text3_context}>{receiveData.scc2List[index].comment1}</Text>     
                    </View>
                    </>
                    {/* <>
                    <View style={styles.text3_warrap}>
                        <InputInfo id="quantity_ordered" index={index} labelContext="요청수량 :" defaultValue={0} handleCondition={handleItemCondition} />
                        <InputInfo id="need_by_date" index={index} labelContext="요청납기 :" handleCondition={handleItemCondition} />
                    </View>
                    </>
                    <View style={styles.text3_warrap}>
                        <InputInfo id="comment" index={index} labelContext="Comment" handleCondition={handleItemCondition} />
                    </View> */}
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
        borderWidth:2,
        borderColor:"rgba(0,83,134,0.5)",
        marginLeft: 10,
        marginRight: 10,
    },
    check:{
        width: '5%',
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
        // borderWidth: 3,
        // backgroundColor: 'green',
    },
    text3_label: {
        height: 35,
        width: '24%',
        fontSize: 18,
        color: '#000000',
        marginRight: 15,
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

export default ItemInfo;