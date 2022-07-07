import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, TextInput, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { insertSccDeliveryInfo } from '../apis/shipment';
import FixBox from '../component/shipmentInsert/FixBox';
import InputInfo from '../component/deliverySubmit/InputInfo';
import ItemInfo from '../component/shipmentSubmit/ItemInfo';
import useRootData from '../hooks/useRootData';

const ShipDeliverySubmit = ({navigation}) => {

    const {
        // sccSearchOne의 결과
        deliveryInsertInfo,
        changeDeliveryInsertInfo,

        // DeliveryInsert page에서 넘어온 list
        checkedList,
        changeCheckedList,
    } = useRootData(({shipDeliveryInsertStore, shipCheckedListStore}) => ({
        deliveryInsertInfo: shipDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: shipDeliveryInsertStore.changeDeliveryInsertInfo,
        checkedList: shipCheckedListStore.checkedList.get(),
        changeCheckedList: shipCheckedListStore.changeCheckedList,
    }));

    // checkedList : json -> 배열
    console.log("checkedList :!!!!~~~", Object.values(checkedList));
    const ship2List = Object.values(checkedList);
    
    const [inputData, setInputData] = useState({
        "ship1" : {
            "vendor_site_id" : "6666",   // 로그인한 공급사 id
            "contact_name" : "",  	                         // input
            "deliver_to_location" : deliveryInsertInfo[0].deliver_to_location,    
            "note_to_receiver" : "",  	                                // input
            "expected_receipt_date" : "",  	                            // input
            "shipped_date" : "",  	                                    // input
            "po_header_id" : deliveryInsertInfo[0].po_header_id,
            "po_release_id" : "",                          // 일단 비워두기
            "scc1_id" : deliveryInsertInfo[0].scc1_id,               
        },
        "ship2List" : ship2List,
    });

    const handleDeliveryCondition = (key, value) => {
        const tempCondition = { ...inputData };
        tempCondition["ship1"][key] = value;
        setInputData(tempCondition);
    };

    console.log("inputData : ", inputData);
    console.log("deliveryInsertInfo : ", deliveryInsertInfo);


    // 납품신청 버튼
    const InsertInfo =  async (sendData) => {
        const data = await insertSccDeliveryInfo(sendData);
        console.log(data);
        data ? goAlert() :  Alert.alert("POSCO 전송이 실패되었습니다.")
    };  

    const goAlert = () =>{
        Alert.alert(                   
        "POSCO전송이 정상적으로 완료되었습니다",                 // 첫번째 text: 타이틀 제목
        "출하현황에서 출하정보를 조회하세요 ",   // 두번째 text: 그 밑에 작은 제목
        [                              // 버튼 배열
            // {
            //     text: "아니요",                              // 버튼 제목
            //     onPress: () => console.log("아니라는데"),     //onPress 이벤트시 콘솔창에 로그를 찍는다
            //     style: "cancel"
            // },
            { text: "확인", onPress: () => {
                navigation.navigate('Menu');
                // InsertInfo(inputData);
            }}, //버튼 제목
        ],
        { cancelable: false }
        );  
    }
    return (
        <ScrollView>
        <View style={styles.header}>
            <View style={styles.fix}>
                <FixBox/>
            </View>
            <View>
                <ItemInfo/>
            </View>
            <View style ={styles.inputInfo}>
                <InputInfo id="shipped_date" labelContext="출하일자" handleCondition={handleDeliveryCondition}/>
                <InputInfo id="expected_receipt_date" labelContext="도착예정일" handleCondition={handleDeliveryCondition}/>
                <InputInfo id="contact_name" labelContext="납품담당자" handleCondition={handleDeliveryCondition}/>
                <InputInfo id="note_to_receiver" labelContext="특기사항" handleCondition={handleDeliveryCondition}/>
            </View>
            <View style={styles.button}>
                <Button title="POSCO 전송" color="#005386"
                    onPress={() => InsertInfo(inputData)}/>
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    inputInfo:{
        marginLeft:10,
    },
    fix:{
        width:'100%',
        height:'16%',
        marginBottom:25,

    },
    header:{
        // alignItems: "center",
        marginBottom: 400,
    },
    button:{
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 50,
        marginTop: 30,
    },
    text: {
        fontSize: 18,
        color: '#000000',
        marginTop: 5,
    },
    input:{
        borderWidth: 1,
        borderColor: '#005386',
        padding: 10, 
        fontSize: 15,
        width: 200,
        height: 40,
        marginTop: 5,
    },
})

export default ShipDeliverySubmit;