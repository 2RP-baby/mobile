import React, { useState } from 'react';
import {TouchableOpacity,View, StyleSheet, Text, Button, Alert} from 'react-native';
import { getSearchList } from '../apis/scc';
import useRootData from '../hooks/useRootData';
import {getDeliveryInsertInfo} from '../apis/scc';
import { ScrollView } from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import moment from 'moment';


const DeliveryDetailSelect = ({navigation}) => {
    const {
        searchedList, 
        changeSearchedList,
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
        callChangeApi,
        deliveryCondition,
        changeDeliveryCondition,
        checkedList,
        changeCheckedList,
    } = useRootData(({searchedListStore, deliveryInsertStore, deliverySelectStore,checkedListStore}) => ({
        deliveryCondition: deliverySelectStore.deliveryCondition.get(),
        changeDeliveryCondition: deliverySelectStore.changeDeliveryCondition,
        searchedList: searchedListStore.searchedList.get(),
        changeSearchedList: searchedListStore.changeSearchedList,
        deliveryInsertInfo: deliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: deliveryInsertStore.changeDeliveryInsertInfo,
        callChangeApi: deliveryInsertStore.callChangeApi,
        checkedList: checkedListStore.checkedList.get(),
        changeCheckedList: checkedListStore.changeCheckedList,
    }));

    // const [newPage, setnewPage] = useState();

    // 더보기 버튼 클릭시 DeleverySelect 페이지에서 보낸 condition의 page를 ++하기
    const moreInfo = () => {
        changeDeliveryCondition({...deliveryCondition, page: ++deliveryCondition.page})
        console.log("page++", deliveryCondition);
        selectMoreList();
    }

    const beforeInfo = () => {
        changeDeliveryCondition({...deliveryCondition, page: --deliveryCondition.page})
        console.log("page--", deliveryCondition);
        selectMoreList();
    }

    // console.log("deliveryCondition.page", deliveryCondition.page);

    const selectMoreList = async () => {
        console.log("deliveryCondition.page", deliveryCondition.page);
        const data = await getSearchList(deliveryCondition);
        // console.log("typeof list : ", typeof data);
        console.log("data result : ", data);
        changeSearchedList(data);
    };

    // const selectBeforeList = async () => {
    //     const data = await getSearchList({...deliveryCondition, page: deliveryCondition.page-1});
    //     // console.log("typeof list : ", typeof data);
    //     console.log("data result------page : ", deliveryCondition.page);
    //     console.log("data result------ : ", data);
    //     changeSearchedList(data);
    // };

    const selectDeliveryInsert =  async (po_num) => {
        const data = await getDeliveryInsertInfo(po_num);
        changeDeliveryInsertInfo(data);
    };  

    return (
        <View style={styles.view}>
            <ScrollView style={styles.scroll}>
            {
                searchedList.map((searchedlist, index)=>(
                    <View key={index} style={styles.view1}>
                    <Card style={styles.card}>
                        <View style={styles.containerRow}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}
                                    onPress={async () => {
                                        // await callChangeApi(searchedList.po_num);
                                        await selectDeliveryInsert(searchedlist.po_num);
                                        changeCheckedList({});
                                        navigation.navigate('DeliveryInsert');
                                        }
                                    }
                                    >{searchedlist.po_num}
                                </Text>
                            </View>
                            <View style={styles.textContainer1}>
                                <Text style={styles.text1}>{searchedlist.vendor_name}</Text>
                            </View>
                        </View>
                        <>
                        <View style={styles.textContainer2}>
                                <Text style={styles.text2}>{searchedlist.comments}</Text>
                        </View>
                        <View style={styles.textContainer3}>
                            <Text style={styles.text3}>
                                {searchedlist.staff_dept_code +" /"+ searchedlist.subinventory+ " /"+moment(searchedlist.promised_date).format("yyyy-MM-DD") +" /"+searchedlist.staff_name}
                            </Text>
                        </View>
                        </>
                        </Card>
                    </View>
                ))
            }
            </ScrollView>
            
            <View flexDirection='row'  >
                {deliveryCondition.page==1 ? true : 
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.button} 
                    onPress={ () =>{ 
                        beforeInfo();
                    }}
                    >
                    <Text style={styles.buttonText}>이전페이지</Text>
                </TouchableOpacity>} 
                <Text>     </Text>
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.button} 
                    onPress={ () =>{ 
                        moreInfo();
                    }}
                    >
                    <Text style={styles.buttonText}>다음페이지</Text>
                </TouchableOpacity> 
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 30,
        marginBottom:100,

    },
    scroll:{
        height:'110%',
    },
    view1:{
        marginBottom: 10,
        alignItems: "center",
    },
    card:{
        marginTop: 10,
    },
    text:{
        color: '#005386',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize:23,
        // marginRight:150,
    },
    containerRow:{
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    containerColumn:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 0,
    },
    textContainer:{
        width: '30%',
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10,
    },
    textContainer1:{
        width: '50%',
        height: 50,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: "center",
    },
    textContainer2:{
        width: '100%',
        height: 30,
        // marginLeft: 20,
        marginTop: 15,
        marginBottom: 20,

        // marginTop: 15,
        justifyContent: 'center',
        alignItems: "center",
        // borderWidth: 1,
    },
    textContainer3:{
        width: '100%',
        height: 50,
        alignItems: "center",
    },
    text1: {
        fontSize:16,
    },
    text2:{
        fontSize: 23,
        fontWeight: 'bold',
    },
    text3:{
        fontSize: 20,
        // fontWeight: 'bold',
    },
    button: {
        width: "30%",
        height: 60,
        backgroundColor: "#005386",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 20,
        borderRadius:10,
    },
    buttonText: {
        color: "#ffffff",
        fontSize:23,
        fontWeight:'bold',
    },
})

export default DeliveryDetailSelect;