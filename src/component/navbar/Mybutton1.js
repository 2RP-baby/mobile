import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import back from '../../../assets/icon/back.png';

const Mybutton1 = () => {
    return (
        <View>
             <TouchableOpacity
                onPress={()=>navigation.navigate('Login')}>
                <Image style={styles.image} source={back} />
            </TouchableOpacity>
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