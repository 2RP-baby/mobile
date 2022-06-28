import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import { color } from 'react-native-reanimated';
import {mainBlue} from '../../../assets/color';
import Mybutton1 from './Mybutton1';
import Mybutton2 from './Mybutton2';
import SubmitButton from './SubmitButton';

const Tail = () => {
    return (
        <View style={styles.header}>
            <SubmitButton/>
        </View>
);
};
const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
    },
    button: {
        marginRight :10,
        color:'#111111',
    }
})

export default Tail;