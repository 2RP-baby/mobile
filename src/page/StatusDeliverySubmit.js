import React, { useEffect, useState } from 'react';
import { TouchableOpacity,View, StyleSheet, Button, Alert, TextInput, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getCurSearchInsertedOne } from '../apis/scc';
import FixBox from '../component/statusDeliverySubmit/FixBox';
import ItemInfo from '../component/statusDeliverySubmit/ItemInfo';
import useRootData from '../hooks/useRootData';

const DeliverySubmit = () => {

    return (
        <View style={styles.head}>
            <View style={styles.fix}>
                <FixBox/>
            </View>
            <View style={styles.ItemInfo}>
                <ItemInfo/>
            </View>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.button} 
                onPress={ () =>{ 
                    navigation.navigate('Menu');
                }}>
                <Text style={styles.text}>메인으로</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        height:'100%',
        alignItems: "center",
    },
    fix:{
        width:'100%',
        height:'35%',
        // backgroundColor:'yellow',
    },
    ItemInfo:{
        alignItems: "center",
        height: '90%',
        marginBottom: -500,

    },
    button: {
        width: "80%",
        height: 60,
        backgroundColor: "#005386",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 130,
        marginBottom: 20,
        borderRadius:10,
        marginLeft: 80,
    },
    text: {
        color: "#ffffff",
        fontSize:25,
        fontWeight:'bold',
    }
})

export default DeliverySubmit;