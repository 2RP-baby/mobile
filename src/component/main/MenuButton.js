import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert} from "react-native"
import useRootData from '../../hooks/useRootData';

const MenuButton = ({navigation}) => {

    const {
        login,
        changeLogin
    } = useRootData(({loginStore}) => ({
        login: loginStore.login.get(),
        changeLogin: loginStore.changeLogin,
    }));
    
    return(
        <>
        
        <View style={styles.flex1}>
            <TouchableOpacity style={styles.container1}
                onPress={()=>{
                    if(login.authority=="ROLE_VENDOR"){
                        Alert.alert("권한이 없습니다.");
                    }
                    else{
                        navigation.navigate('InsertDeliverysrc', {screen: 'DeliverySelect'});
                    }
                    }}>
                <Text style={styles.text1}>납품신청</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container2}
                onPress={()=>{
                    if(login.authority=="ROLE_VENDOR"){
                        Alert.alert("권한이 없습니다.");
                    }
                    else{
                        navigation.navigate('SelectDeliverysrc', {screen: 'StatusDeliverySelect'});
                    }
                    }}>
                <Text style={styles.text2}>납품신청현황</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.flex1}>
            <TouchableOpacity style={styles.container2}
                onPress={()=>{
                    if(login.authority=="ROLE_VENDOR"){
                        navigation.navigate('InsertShipmentsrc', {screen: 'ShipmentSelect'});
                    }
                    else{
                        // navigation.navigate('InsertShipmentsrc', {screen: 'ShipmentSelect'});
                        Alert.alert("권한이 없습니다.");
                    }
                    }}>
                <Text style={styles.text2}>출하등록</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1}
                onPress={()=>{
                    if(login.authority=="ROLE_VENDOR"){
                        navigation.navigate('SelectShipmentsrc', {screen: 'StateShipmentSelect'});
                    }
                    else{
                        // navigation.navigate('SelectShipmentsrc', {screen: 'StateShipmentSelect'});
                        Alert.alert("권한이 없습니다.");
                    }
                    }}>
                <Text style={styles.text1}>출하현황</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    flex1:{
        flexDirection: 'row',
        height:'33%',
        marginTop: 15,
    },
    container1:{
        justifyContent: 'center',
        alignItems: "center",
        width: '44%',
        height: '100%',
        backgroundColor: '#005386',
        
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 8,
    },
    container2:{
        justifyContent: 'center',
        alignItems: "center",
        width: '44%',
        height: '100%',
        backgroundColor: '#ffffff',
        
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#005386',
    },
    text1:{
        color: '#ffffff',
        fontSize: 33,
        fontWeight:'bold',
    },
    text2:{
        color: '#005386',
        fontSize: 33,
        fontWeight:'bold',
    }
   
})

export default MenuButton;