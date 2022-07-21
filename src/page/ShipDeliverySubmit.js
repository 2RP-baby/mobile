import React, { useState } from 'react';
import {TouchableOpacity, View, StyleSheet, Button, Alert, TextInput, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { insertSccDeliveryInfo } from '../apis/shipment';
import FixBox from '../component/shipmentInsert/FixBox';
import InputInfo from '../component/deliverySubmit/InputInfo';
import InputInfo2 from '../component/deliverySubmit/InputInfo2';
import ItemInfo from '../component/shipmentSubmit/ItemInfo';
import useRootData from '../hooks/useRootData';
import DatePicker from '../component/shipmentSubmit/DatePicker';
import InputCalendarInfo from '../component/shipmentSubmit/InputCalendarInfo';
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ShipDeliverySubmit = ({navigation,route}) => {

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
    // console.log("checkedList :!!!!~~~", Object.values(checkedList));
    const ship2List = Object.values(checkedList);
    // console.log("deliveryInsertInfo!!!!", deliveryInsertInfo[0].shipment_num.substr(1, 3));
    
    const [inputData, setInputData] = useState({
        "ship1" : {
            "vendor_site_id" : deliveryInsertInfo[0].shipment_num.substr(1, 3),   // 로그인한 공급사 id
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
        console.log(tempCondition);
        setInputData(tempCondition);
    };

    // console.log("inputData : ", inputData);
    // console.log("deliveryInsertInfo : ", deliveryInsertInfo);


    // 납품신청 버튼
    const InsertInfo =  async (sendData) => {
        const data = await insertSccDeliveryInfo(sendData);
        goAlert(data)
    };  

    const goAlert = (data) =>{
        Alert.alert(                   
        "POSCO전송이 정상적으로 완료되었습니다",                 // 첫번째 text: 타이틀 제목
        "생성된 출하번호는 " + data + " 입니다. 출하현황에서 출하정보를 조회하세요 ",   // 두번째 text: 그 밑에 작은 제목
        [                              // 버튼 배열
            { text: "확인", onPress: () => {
                navigation.navigate('Menu');
            }}, 
        ],
        { cancelable: false }
        );  
    }

    function checkListConfirm() {
        if(inputData.ship1.contact_name!="" && inputData.ship1.expected_receipt_date!="" && inputData.ship1.note_to_receiver!="" ){
            console.log("null아님");
            InsertInfo(inputData);
        }else{
            Alert.alert("도착 예정일, 출하 담당자, 특기사항을 모두 입력해주세요");
            // console.log("$$$", inputData.ship1.contact_name);
        }
    }


    return (
        <>
        <View style={styles.header}>
            <View style={styles.fix}>
                <FixBox/>
            </View>
        <ScrollView>
        <KeyboardAwareScrollView>
            <View style={styles.ItemInfo}>
                <ItemInfo/>
            </View>
            <View style ={styles.inputInfo}>
                <View style ={styles.datePicker}>
                    <InputInfo2 value = {moment(route.params.date).format("  yyyy-MM-DD")} id="shipped_date" labelContext="출하일자" handleCondition={handleDeliveryCondition}/>
                </View>
                <View style ={styles.datePicker}>
                    <InputCalendarInfo id="expected_receipt_date" labelContext="  도착예정일" handleCondition={handleDeliveryCondition} date ={inputData.ship1.expected_receipt_date}/>  
                    <View style ={styles.Picker}>
                        <DatePicker id="expected_receipt_date" handleCondition={handleDeliveryCondition}/>
                    </View>
                </View>

                <InputInfo id="contact_name" labelContext="출하담당자" handleCondition={handleDeliveryCondition}/>
                <InputInfo id="note_to_receiver" labelContext="특기사항" handleCondition={handleDeliveryCondition}/>
            </View>
            </KeyboardAwareScrollView>
            </ScrollView>
            <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={styles.button1} 
                        onPress={ () =>{ 
                            checkListConfirm();
                        }}
                        >
                        <Text style={styles.text1}>POSCO 전송</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    Picker : {
        width:'100%',
        marginTop:31,
        marginLeft:20,
    },
    datePicker : {
        width:'100%',
        flexDirection:'row',
        marginLeft: -3,
    },
    button1: {
        width: "80%",
        height: 60,
        backgroundColor: "#005386",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginBottom: -20,
        borderRadius:10,
    },
    text1: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight:'bold',
    },
    header:{
        height:'95%',
        // marginBottom: 400,
        alignItems: "center",
    },
    fix:{
        width:'100%',
        height: 160,
        // backgroundColor: 'red',
    },
    ItemInfo:{
        alignItems: "center",
        height: '50%',
        // height: 530,
        // backgroundColor:'yellow',
        // marginTop:30,
    },
    inputInfo:{
        width: '100%',
        height: '27%',
        marginLeft: '2%',
        marginTop: 150,
        marginBottom:60,
        justifyContent:'flex-end',

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