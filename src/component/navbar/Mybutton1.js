import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import back from '../../../assets/icon/back.png';
import Login from '../../page/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Mybutton1 = ({navigation}) => {
    return (
        <View>
             <TouchableOpacity>
                {/* onPress={()=>navigation.navigate('Login')}> */}
                <Image style={styles.image} source={back} />
            </TouchableOpacity>
            {/* <Login/> */}
        </View>
    );
};
const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
    },
})

export default Mybutton1;