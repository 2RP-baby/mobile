import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import hamburger from '../../../assets/icon/menu.png';

const Mybutton2 = () => {
    return (
        <View style={styles.button}>
             <TouchableOpacity
                onPress={()=>alert('버튼2 클릭')}>
                <Image style={styles.image} source={hamburger} />
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


export default Mybutton2;