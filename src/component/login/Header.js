import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import poscoICT from '../../../assets/image/POSCO_ICT_CI_ENG.png';
import {mainBlue} from '../../../assets/color';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={poscoICT} />
            <Text style={styles.text}>Mobile Smart 구매관리 시스템</Text>
        </View>
);
};
const styles = StyleSheet.create({
    header:{
        width: '82.5%',
        height: 0,
        // backgroundColor: {mainBlue},
        backgroundColor: '#005386',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 8,
        // marginTop: 20,
        // paddingTop: 20,
    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: 20,
    }
})

export default Header;