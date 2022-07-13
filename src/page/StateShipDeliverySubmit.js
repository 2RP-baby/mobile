import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Alert, TextInput, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getCurSearchInsertedOne } from '../apis/scc';
import FixBox from '../component/stateShipmentSubmit/FixBox';
import ItemInfo from '../component/stateShipmentSubmit/ItemInfo';
import useRootData from '../hooks/useRootData';

const StateShipDeliverySubmit = () => {

    return (
        <View style={styles.head}>
            <View style={styles.fix}>
                <FixBox/>
            </View>
            <View style={styles.ItemInfo}>
                <ItemInfo/>
            </View>
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
})

export default StateShipDeliverySubmit;