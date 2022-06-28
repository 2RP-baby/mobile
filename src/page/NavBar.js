import React from 'react';
import { View } from 'react-native';
import Body from '../component/navbar/Body';
import Header from '../component/navbar/Header';
import Tail from '../component/navbar/Tail';
const NavBar = () => {
    return (
        <View>
            <Header title={"화면명"}/>
            <Body/>
            <Tail/>
        </View>
    );
};

export default NavBar;