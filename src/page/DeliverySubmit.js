import React from 'react';
import { View, StyleSheet, Button, Alert} from 'react-native';
import FixBox from '../component/deliveryInsert/FixBox';
import InputInfo from '../component/deliverySubmit/InputInfo';
import ItemInfo from '../component/deliverySubmit/ItemInfo';

const DeliverySubmit = ({navigation}) => {
    const goAlert = () =>
        Alert.alert(                    // 말그대로 Alert를 띄운다
        "납품 신청을 하시겠습니까?",                 // 첫번째 text: 타이틀 제목
        "신청 완료 후 메뉴 페이지로 이동합니다. ",   // 두번째 text: 그 밑에 작은 제목
        [                              // 버튼 배열
            {
                text: "아니요",                              // 버튼 제목
                onPress: () => console.log("아니라는데"),     //onPress 이벤트시 콘솔창에 로그를 찍는다
                style: "cancel"
            },
            { text: "네", onPress: () => navigation.navigate('Menu') }, //버튼 제목
                                                                    // 이벤트 발생시 로그를 찍는다
        ],
        { cancelable: false }
        );  

    return (
        <View style={styles.header}>
            <FixBox/>
            <ItemInfo/>
            <InputInfo/>
            <View style={styles.button}>
                <Button title="납품신청" color="#005386"
                    onPress={() => goAlert()}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        // alignItems: "center",
    },
    button:{
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 50,
        marginTop: 30,
    }
})

export default DeliverySubmit;