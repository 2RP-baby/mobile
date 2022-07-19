import React from 'react';
import { TouchableOpacity,Text,View, StyleSheet, Button, Alert} from 'react-native';
import FixBox from '../component/shipmentInsert/FixBox';
import ItemInsert from '../component/shipmentInsert/ItemInsert';
import useRootData from '../hooks/useRootData';

const ShipmentInsert = ({navigation, route}) => {
    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
        checkedList,
        changeCheckedList,
    } = useRootData(({shipDeliveryInsertStore, shipCheckedListStore}) => ({
        deliveryInsertInfo: shipDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: shipDeliveryInsertStore.changeDeliveryInsertInfo,
        checkedList: shipCheckedListStore.checkedList.get(),
        changeCheckedList: shipCheckedListStore.changeCheckedList,
    }));

    const index = Object.keys(checkedList);
    console.log("index.length", index.length);
    console.log("checkedList11111111", checkedList);
    function checkListConfirm() {
        if(index.length==0){
            Alert.alert("아이템을 체크해 주세요");
        }
        for (let i = 0; i < index.length; i++) {
            const temp = index[i];
            const element = checkedList[temp];
            console.log("element", element);
            if(element.quantity_shipped != 0 && (element.quantity_ordered>=element.quantity_shipped)){
                navigation.navigate('ShipDeliverySubmit',{date:route.params.date}); 

            }
            else if(element.quantity_shipped == null || element.quantity_shipped =="" ){
                Alert.alert('출하수량을 입력해 주세요')
                break;
            }
            else if(element.quantity_ordered < element.quantity_shipped){
                Alert.alert('요청수량을 초과 하였습니다');
                break;
            }
        }
    }


    return (
        <View style={styles.header}>
            <View style={styles.fix}>
                <FixBox/>
            </View>
            
            <View>
                <ItemInsert/>
            </View>
            <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={styles.button1} 
                        onPress={ () =>{ 
                            checkListConfirm();
                        }}
                        >
                        <Text style={styles.text1}>다음단계</Text>
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
        marginTop:15,
        marginBottom: 20,
        borderRadius:10,
    },
    text1: {
        color: "#ffffff",
        fontSize:25,
        fontWeight:'bold',
    },
    fix:{
        width:'100%',
        height:'17%',
    },
    header:{
        alignItems: "center",
        height:'73%',
        marginBottom: 500,
    },
    fix:{
        width:'100%',
        height:'20%',
    },
})

export default ShipmentInsert;