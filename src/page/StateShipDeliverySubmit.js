import React, { useEffect, useState } from 'react';
import { TouchableOpacity,View, StyleSheet, Button, Alert, TextInput, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getCurSearchInsertedOne } from '../apis/scc';
import FixBox from '../component/stateShipmentSubmit/FixBox';
import ItemInfo from '../component/stateShipmentSubmit/ItemInfo';
import useRootData from '../hooks/useRootData';

const StateShipDeliverySubmit = ({navigation}) => {

    return (
        <View style={styles.head}>
            <View style={styles.fix}>
                <FixBox/>
            </View>
            <View style={styles.ItemInfo}>
                <ItemInfo/>
            </View>
            <View style={styles.buttonWrap}>
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.button} 
                    onPress={ () =>{ 
                        navigation.navigate('Menu');
                    }}>
                    <Text style={styles.text}>메인으로</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    head:{
        height:'100%',
        alignItems: "center",
        flexDirection: 'column',
    },
    fix:{
        width:'100%',
        height:'17.5%',
        // backgroundColor:'yellow',
    },
    ItemInfo:{
        alignItems: "center",
        height: '75%',
        marginBottom: -500,

    },
    buttonWrap:{
        alignItems: "center",
        width: "80%",
        height: "50%",
        marginTop: 380,

    },
    button: {
        width: "80%",
        height: "10%",
        backgroundColor: "#005386",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 130,
        marginBottom: 20,
        borderRadius:10,
        marginLeft: 30,
    },
    text: {
        color: "#ffffff",
        fontSize:25,
        fontWeight:'bold',
    }
})

export default StateShipDeliverySubmit;