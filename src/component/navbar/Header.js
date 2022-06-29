import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import { color } from 'react-native-reanimated';
import {mainBlue} from '../../../assets/color';
import Mybutton1 from './Mybutton1';
import Mybutton2 from './Mybutton2';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Mybutton1/>
            <Text style={styles.text}>{title}</Text>
            <Mybutton2/>
        </View>
    );
};
const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: '#005386',
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        width: 250,
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 50,
    },
    button: {
        marginRight :10,
        color:'#111111',
    }
})   

export default Header;