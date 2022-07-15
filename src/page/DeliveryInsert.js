import React from 'react';
import { TouchableOpacity,View, StyleSheet, Button, Text,Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FixBox from '../component/deliveryInsert/FixBox';
import ItemInsert from '../component/deliveryInsert/ItemInsert';
import useRootData from '../hooks/useRootData';

const DeliveryInsert = ({navigation}) => {
    // const input = 1;
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

    const index = Object.keys(checkedList);
    console.log("checkedList11111111", checkedList);
    function mapFunction() {

        if(index.length==0){
            Alert.alert("아이템을 체크해 주세요");
        }
        for (let i = 0; i < index.length; i++) {
            const temp = index[i];
            const element = checkedList[temp];
            console.log("element", element);
            if(element.quantity_ordered!=0 && (element.remaining>=element.quantity_ordered)){
                navigation.navigate('DeliverySubmit') 
            }
            else if(element.quantity_ordered==0){
                Alert.alert('요청수량을 입력해 주세요')
                // navigation.navigate('DeliveryInsert') 
                break;
            }
            else if(element.remaining<element.quantity_ordered){
                Alert.alert('주문잔량을 초과 하였습니다');
                // navigation.navigate('DeliveryInsert') 
                break;
            }
        }
    }
    return (
        // <ScrollView>
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
                            mapFunction();
                        }}
                        >
                        <Text style={styles.text1}>다음단계</Text>
                </TouchableOpacity>
            
        </View>
        // </ScrollView>
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
        height:'25%',
    },
   
    
})

export default DeliveryInsert;