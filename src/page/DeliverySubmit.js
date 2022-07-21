import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Button, Alert, TextInput, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { insertSccDeliveryInfo, getNumberFormat } from '../apis/scc';
import FixBox from '../component/deliveryInsert/FixBox';
import InputInfo from '../component/deliverySubmit/InputInfo';
import ItemInfo from '../component/deliverySubmit/ItemInfo';
import useRootData from '../hooks/useRootData';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const DeliverySubmit = ({navigation}) => {

    const {
        // sccSearchOne의 결과
        deliveryInsertInfo,
        changeDeliveryInsertInfo,

        // DeliveryInsert page에서 넘어온 list
        checkedList,
        changeCheckedList,
    } = useRootData(({deliveryInsertStore, checkedListStore}) => ({
        deliveryInsertInfo: deliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: deliveryInsertStore.changeDeliveryInsertInfo,
        checkedList: checkedListStore.checkedList.get(),
        changeCheckedList: checkedListStore.changeCheckedList,
    }));

    // checkedList : json -> 배열
    // console.log("checkedList :!!!!~~~", Object.values(checkedList));
    const scc2List = Object.values(checkedList);
    
    const [inputData, setInputData] = useState({
        "scc1" : {
            "vendor_site_id" : deliveryInsertInfo[0].vendor_id,
            "employee_number" : 3228,  	                        //로그인한 사람(staffId) // TODO: 로그인한 사람 ID 넣어줘야됨
            "deliver_to_location" : "",	                        // input
            "comment" : "",  	                                // input
            "po_header_id" : deliveryInsertInfo[0].po_header_id,
            "po_release_id" : "",                               // 일단 비워두기
            "subinventory" : "",                                // input
        },

        "scc2List" : scc2List,
    });

    const handleDeliveryCondition = (key, value) => {
        const tempCondition = { ...inputData };
        tempCondition["scc1"][key] = value;
        setInputData(tempCondition);
    };

    // console.log("inputData : ", inputData);
    // console.log("deliveryInsertInfo : ", deliveryInsertInfo);


    // 납품신청 버튼
    const InsertInfo =  async (sendData) => {
        const data = await insertSccDeliveryInfo(sendData);
        goAlert(data);
    };

    const goAlert = (data) =>{
        Alert.alert(                   
        "납품신청이 정상적으로 완료되었습니다",                 // 첫번째 text: 타이틀 제목
        "생성된 납품번호는 " + data + " 입니다. 납품현황에서 납품정보를 조회하세요 ",   // 두번째 text: 그 밑에 작은 제목
        [                              // 버튼 배열
            { text: "확인", onPress: () => {
                navigation.navigate('Menu');
            }}, 
        ],
        { cancelable: false }
        );  
    }



    function checkListConfirm(){
        if(inputData.scc1.deliver_to_location==""||inputData.scc1.comment==""||inputData.scc1.subinventory==""){
            Alert.alert("필수 입력 사항을 입력해주세요"); 
        }
        else{
            InsertInfo(inputData);
        }
    }



    return (
        <View style={styles.header}>
            <View style={styles.fix}>
                <FixBox/>
            </View>
            <ScrollView>
                <KeyboardAwareScrollView>
                    <View style={styles.ItemInfo}>
                        <ItemInfo/>
                    </View>
                    <>
                    <View style ={styles.inputInfo}>
                        <InputInfo id="deliver_to_location" labelContext="납품장소*" handleCondition={handleDeliveryCondition}/>
                        <InputInfo id="comment" labelContext="요청 특기사항*" handleCondition={handleDeliveryCondition}/>
                        <InputInfo id="subinventory" labelContext="신청부서* (Code 입력)" handleCondition={handleDeliveryCondition}/>
                    </View>
                    </>
                </KeyboardAwareScrollView>
            </ScrollView>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.button1} 
                onPress={ () =>{ 
                    checkListConfirm();
                }}
                >
                <Text style={styles.text1}>납품신청</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        height:'100%',
        // marginBottom: 100,
        alignItems: "center",
        // position: 'absolute', 
    },
    fix:{
        width:'100%',
        height: 200,
    },
    ItemInfo:{
        alignItems: "center",
        // height: 530,
        height: '50%',
        // backgroundColor:'yellow',
        // flex:3,
    },
    inputInfo:{
        width: '100%',
        height: '27%',
        marginLeft: '2%',
        marginTop: 150,
        marginBottom:60,
        justifyContent:'flex-end',
    },
    button1: {
        width: "80%",
        height: 60,
        backgroundColor: "#005386",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        // marginBottom: 20,
        borderRadius:10,
    },
    text1: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight:'bold',
    },
})

export default DeliverySubmit;