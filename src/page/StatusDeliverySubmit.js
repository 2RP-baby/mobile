import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, TextInput, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusDeliveryInfo } from '../apis/scc';
import FixBox from '../component/statusDeliverySubmit/FixBox';
import InputInfo from '../component/deliverySubmit/InputInfo';
import ItemInfo from '../component/statusDeliverySubmit/ItemInfo';
import useRootData from '../hooks/useRootData';

const DeliverySubmit = ({navigation}) => {

    const {
        // sccSearchOne의 결과
        deliveryInsertInfo,
        changeDeliveryInsertInfo,

        // DeliveryInsert page에서 넘어온 list
        checkedList,
        changeCheckedList,
    } = useRootData(({statusDeliveryInsertStore, statusCheckedListStore}) => ({
        deliveryInsertInfo: statusDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: statusDeliveryInsertStore.changeDeliveryInsertInfo,
        checkedList: statusCheckedListStore.checkedList.get(),
        changeCheckedList: statusCheckedListStore.changeCheckedList,
    }));

    console.log("Submit deliveryInsertInfo : ", deliveryInsertInfo);

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
                {
                    "quantity_ordered" : 50,
                    "cost_center" : "QVC02",
                    "comment" : "comment1",
                    "need_by_date" : "2020-07-01",
                    "po_line_id" : 5140735,
                    "po_distribution_id" : 223703442
                },
                {
                    "quantity_ordered" : 70,
                    "cost_center" : "QVC02",
                    "comment" : "comment1",
                    "need_by_date" : "2020-07-01",
                    "po_line_id" : 5140736,
                    "po_distribution_id" : 223703443
                },
                {
                    "quantity_ordered" : 80,
                    "cost_center" : "QVC02",
                    "comment" : "comment1",
                    "need_by_date" : "2020-07-01",
                    "po_line_id" : 5140736,
                    "po_distribution_id" : 223703443
                },
                {
                    "quantity_ordered" : 90,
                    "cost_center" : "QVC02",
                    "comment" : "comment1",
                    "need_by_date" : "2020-07-01",
                    "po_line_id" : 5140736,
                    "po_distribution_id" : 223703443
                },
            ]
        }
        

    // checkedList : json -> 배열
    // console.log("checkedList :!!!!~~~", Object.values(checkedList));
    // const scc2List = Object.values(checkedList);
    
    // const [inputData, setInputData] = useState({
    //     "scc1" : {
    //         "vendor_site_id" : deliveryInsertInfo[0].vendor_id,
    //         "employee_number" : 1685,  	                        //로그인한 사람(staffId)
    //         "deliver_to_location" : "",	                        // input
    //         "comment" : "",  	                                // input
    //         "po_header_id" : deliveryInsertInfo[0].po_header_id,
    //         "po_release_id" : "",                               // 일단 비워두기
    //         "subniventory" : "",                                // input
    //     },

    //     "scc2List" : scc2List,
    // });

    // const handleDeliveryCondition = (key, value) => {
    //     const tempCondition = { ...inputData };
    //     tempCondition["scc1"][key] = value;
    //     setInputData(tempCondition);
    // };

    // console.log("inputData : ", inputData);
    // console.log("deliveryInsertInfo : ", deliveryInsertInfo);

    return (
        // <ScrollView>
            <View style={styles.head}>
            <View style={styles.fix}>
                <FixBox receiveData={receiveData}/>
            </View>
            <View>
                <ItemInfo receiveData={receiveData}/>
            </View>
            <View>
                <Text>hihi</Text>
            </View>
            </View>
        // </ScrollView>
    );
};

const styles = StyleSheet.create({
    head:{
        height: '100%',

    },
    fix:{
        // width:'100%',
        height: '25%',
        marginBottom:5,

    },
    info:{
        // height: '100%',
    }
})

export default DeliverySubmit;