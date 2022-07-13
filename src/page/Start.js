import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import poscoICT from '../../assets/icon/sideBackGround.png';
import box from '../../assets/gif/box.gif';

const Start = ({navigation}) => {
    
    setTimeout(() => {
        navigation.navigate('Login');
    }, 3000)

    return (
        <View style={styles.view}>
            <View style={styles.imageContainer}>
                <Image source={poscoICT} style={styles.image}/>
            </View>
            <View style={styles.gifContainer}>
                <Image source={box} style={styles.gif}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        // width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#ffffff',
        
        
    },
    imageContainer:{
        width: '53%',
        height: '20%',
        alignItems: "center",
        marginTop: 300,
    },
    image:{
        width: '73.5%',
        height: '49.8%',
        // backgroundColor: '#ffff00',
    },
    gifContainer:{
        marginTop: 200,
        width: '50%',
        height: '50%',
        alignItems: "center",
    },
    gif:{
        width: '75%',
        height: '50%',
        // backgroundColor: '#ffff00',
    },

})

export default Start;

