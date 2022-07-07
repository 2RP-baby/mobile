import React from 'react';
import Header from '../component/login/Header';
import {View, StyleSheet, Button, Alert} from 'react-native';
import MenuButton from '../component/main/MenuButton';

const Menu = ({navigation}) => {
    return (
        <View style={styles.view}>
            <Header/>
            <MenuButton navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 30,
    },
   
})

export default Menu;