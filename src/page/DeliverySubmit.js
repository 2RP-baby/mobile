import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Button, Alert, TextInput, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { insertSccDeliveryInfo } from '../apis/scc';
import FixBox from '../component/deliveryInsert/FixBox';
import InputInfo from '../component/deliverySubmit/InputInfo';
import ItemInfo from '../component/deliverySubmit/ItemInfo';
import useRootData from '../hooks/useRootData';

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
            "employee_number" : 1685,  	                        //로그인한 사람(staffId)
            "deliver_to_location" : "",	                        // input
            "comment" : "",  	                                // input
            "po_header_id" : deliveryInsertInfo[0].po_header_id,
            "po_release_id" : "",                               // 일단 비워두기
            "subniventory" : "",                                // input
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
        // console.log(data);
    };  

    const goAlert = () =>{
        Alert.alert(                   
        "납품 신청을 하시겠습니까?",                 // 첫번째 text: 타이틀 제목
        "신청 완료 후 메뉴 페이지로 이동합니다. ",   // 두번째 text: 그 밑에 작은 제목
        [                              // 버튼 배열
            {
                text: "아니요",                              // 버튼 제목
                onPress: () => console.log("아니라는데"),     //onPress 이벤트시 콘솔창에 로그를 찍는다
                style: "cancel"
            },
            { text: "네", onPress: () => {
                navigation.navigate('Menu');
                InsertInfo(inputData);
            }}, //버튼 제목
        ],
        { cancelable: false }
        );  
    }
    return (
        <View style={styles.header}>
            <View style={styles.fix}>
                <FixBox/>
            </View>
            <View style={styles.ItemInfo}>
                <ItemInfo/>
            </View>
            <View style ={styles.inputInfo}>
                <InputInfo id="deliver_to_location" labelContext="납품장소" handleCondition={handleDeliveryCondition}/>
                <InputInfo id="comment" labelContext="요청 특기사항" handleCondition={handleDeliveryCondition}/>
                <InputInfo id="subniventory" labelContext="신청부서 (Code 입력)" handleCondition={handleDeliveryCondition}/>
            </View>
            <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={styles.button1} 
                        onPress={ () =>{ 
                            goAlert();
                        }}
                        >
                        <Text style={styles.text1}>납품신청</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button1: {
        width: "80%",
        height: 60,
        backgroundColor: "#005386",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 20,
        borderRadius:10,
      },
    text1: {
        color: "#ffffff",
        fontSize:25,
        fontWeight:'bold',
    },
    header:{
        height:'75%',
        marginBottom: 400,
        alignItems: "center",
    },
    fix:{
        width:'100%',
        height:'25%',
    },
    ItemInfo:{
        alignItems: "center",
        height: '70%',
        // backgroundColor:'yellow',
    },
    inputInfo:{
        width: '100%',
        alignItems: "center",
        marginTop: 10,
    },
    button:{
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 50,
        marginTop: 7,
        // fontSize: 20,
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

export default DeliverySubmit;