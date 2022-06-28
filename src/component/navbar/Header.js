import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import { color } from 'react-native-reanimated';
import {mainBlue} from '../../../assets/color';
import Mybutton1 from './Mybutton1';
import Mybutton2 from './Mybutton2';

const Header = () => {
    return (
        <View style={styles.header}>
            <Mybutton1></Mybutton1>
            <Text style={styles.text}>화면명</Text>
            <Mybutton2></Mybutton2>
        </View>
);
};
const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        width: '100%',
        height: 50,
        // backgroundColor: {mainBlue},
        backgroundColor: '#005386',
        justifyContent: 'center',
        alignItems: "center",
        // borderRadius: 8,
        // marginTop: 20,
        // paddingTop: 20,
    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 120,
        marginRight: 120,
    },
    button: {
        marginRight :10,
        color:'#111111',
    }
})

export default Header;