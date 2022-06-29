import React from 'react';
import {View, Text, Button, StyleSheet, Image, ImageBackground} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
const CustomDrawer = (props) => {
    return (
        <View style = {{flex:1}}>
            <DrawerContentScrollView
                {...props} 
                contentContainerStyle ={{backgroundColor:'#005386'}}>
                <ImageBackground 
                    source ={require('../../assets/image/POSCO_ICT_CI_ENG.png')}
                    style={{padding:45}}/>
                    <Image 
                        source={require('../../assets/icon/profile.jpg')} 
                        style={{height:80,width:80,borderRadius:40, marginBottom:10}}
                    />
            
            </DrawerContentScrollView>
            <DrawerItemList {...props}/>
        <View>
            <Text>Our Custom Text</Text>
        </View>
        </View>
    );
};

export default CustomDrawer;