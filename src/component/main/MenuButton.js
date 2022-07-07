import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native"

const MenuButton = ({navigation}) => {
    return(
        <>
        <View style={styles.flex1}>
            <TouchableOpacity style={styles.container1}
                onPress={()=>navigation.navigate('DeliverySelect')}>
                <Text style={styles.text1}>납품신청</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container2}
                onPress={()=>alert('출하등록 버튼 클릭')}>
                <Text style={styles.text2}>납품신청현황</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.flex1}>
            <TouchableOpacity style={styles.container2}
                onPress={()=>navigation.navigate('ShipmentSelect')}>
                <Text style={styles.text2}>출하등록</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1}
                onPress={()=>navigation.navigate('StateShipmentSelect')}>
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
        width: '35%',
        height: '100%',
        backgroundColor: '#005386',
        
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 8,
    },
    container2:{
        justifyContent: 'center',
        alignItems: "center",
        width: '35%',
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
        fontSize: 28,
    },
    text2:{
        color: '#005386',
        fontSize: 28,
    }
   
})

export default MenuButton;