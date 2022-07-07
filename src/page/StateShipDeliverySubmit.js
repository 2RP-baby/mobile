import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, TextInput, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { insertSccDeliveryInfo } from '../apis/shipment';
import FixBox from '../component/stateShipmentSubmit/FixBox';
import InputInfo from '../component/deliverySubmit/InputInfo';
import ItemInfo from '../component/stateShipmentSubmit/ItemInfo';
import useRootData from '../hooks/useRootData';

const StateShipDeliverySubmit = ({navigation}) => {

    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,

        checkedList,
        changeCheckedList,
    } = useRootData(({StateShipDeliveryInsertStore, StateShipCheckedListStore}) => ({
        deliveryInsertInfo: StateShipDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: StateShipDeliveryInsertStore.changeDeliveryInsertInfo,
        checkedList: StateShipCheckedListStore.checkedList.get(),
        changeCheckedList: StateShipCheckedListStore.changeCheckedList,
    }));


    const receiveData = {
            "scc1" : {
                "vendor_site_id" : "6666",  		//공급사 id
                "employee_number" : 1685,  	        // 로그인한 사람(staffId)
                "deliver_to_location" : "로케이션1",	 // input 납품 장소
                "comment" : "코멘트1",  		    // input 특기사항
              	
                "po_header_id" : 1282047,	  	    // sccSearchOne의 결과
                "po_release_id" : "",		        // 일단 비워두기
                "subinventory" : "서브인벤토리1"	 // input 신청 부서
            },
            "scc2List" : [
                {
                    "quantity_ordered" : 40,		// 요청 수량
                    "cost_center" : "QVC02",		// sccSearchOne의 결과 : subinventory
                    "comment" : "comment1",	        // comment
                    "need_by_date" : "2020-07-01",	// 요청 납기
                    "po_line_id" : 5140734,		        // sccSearchOne의 결과
                    "po_distribution_id" : 223703441	// sccSearchOne의 결과
                },
                {
                    "quantity_ordered" : 50,
                    "cost_center" : null,
                    "comment" : "comment1",
                    "need_by_date" : "2020-07-01",
                    "po_line_id" : 5140734,
                    "po_distribution_id" : 224091722
                },
            ]
        }

    // checkedList : json -> 배열
    // console.log("checkedList :!!!!~~~", Object.values(checkedList));
    // const ship2List = Object.values(checkedList);
    
    // const [inputData, setInputData] = useState({
    //     "ship1" : {
    //         "vendor_site_id" : "6666",   // 로그인한 공급사 id
    //         "contact_name" : "",  	                         // input
    //         "deliver_to_location" : deliveryInsertInfo[0].deliver_to_location,    
    //         "note_to_receiver" : "",  	                                // input
    //         "expected_receipt_date" : "",  	                            // input
    //         "shipped_date" : "",  	                                    // input
    //         "po_header_id" : deliveryInsertInfo[0].po_header_id,
    //         "po_release_id" : "",                          // 일단 비워두기
    //         "scc1_id" : deliveryInsertInfo[0].scc1_id,               
    //     },
    //     "ship2List" : ship2List,
    // });

    // const handleDeliveryCondition = (key, value) => {
    //     const tempCondition = { ...inputData };
    //     tempCondition["ship1"][key] = value;
    //     setInputData(tempCondition);
    // };

    // console.log("inputData : ", inputData);
    // console.log("deliveryInsertInfo : ", deliveryInsertInfo);


    // // 납품신청 버튼
    // const InsertInfo =  async (sendData) => {
    //     const data = await insertSccDeliveryInfo(sendData);
    //     console.log(data);
    //     data ? goAlert() :  Alert.alert("POSCO 전송이 실패되었습니다.")
    // };  

    // const goAlert = () =>{
    //     Alert.alert(                   
    //     "POSCO전송이 정상적으로 완료되었습니다",                 // 첫번째 text: 타이틀 제목
    //     "출하현황에서 출하정보를 조회하세요 ",   // 두번째 text: 그 밑에 작은 제목
    //     [                              // 버튼 배열
    //         // {
    //         //     text: "아니요",                              // 버튼 제목
    //         //     onPress: () => console.log("아니라는데"),     //onPress 이벤트시 콘솔창에 로그를 찍는다
    //         //     style: "cancel"
    //         // },
    //         { text: "확인", onPress: () => {
    //             navigation.navigate('Menu');
    //             // InsertInfo(inputData);
    //         }}, //버튼 제목
    //     ],
    //     { cancelable: false }
    //     );  
    // }
    return (
        <View style={styles.head}>
            <View style={styles.fix}>
                <FixBox receiveData={receiveData}/>
            </View>
            <View>
                <ItemInfo receiveData={receiveData}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    head:{
        height: '100%',
    },
    fix:{
        height: '25%',
        marginBottom:5,
    },
})

export default StateShipDeliverySubmit;