import React from 'react';
import {View, Button, StyleSheet, Alert, TouchableOpacity, Text} from 'react-native';
import InputInfo from './common/InputInfo';
import InputSelect from './common/InputSelect';


const Body = ({navigation}) => {   

    return (
        <View style={styles.view}>
            <InputSelect/>
            <InputInfo labelContext="ID" replaceContext="ID를 입력하세요"/>
            <InputInfo labelContext="PASSWORD" replaceContext="PASSWORD를 입력하세요"/>
            {/* <View style={styles.button}>
                <Button title="로그인" color="#005386" 
                onPress={() => {
                    Alert.alert('로그인 버튼 클릭');
                    navigation.navigate('Menu');
                }}/>
            </View> */}
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.button} 
                onPress={ () =>{ 
                    Alert.alert('로그인 버튼 클릭');
                    navigation.navigate('Menu');
                }}
                >
                <Text style={styles.text}>로그인</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        width:'100%',
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 80,
    },
    button:{
        width: "40%",
        height: 60,
        backgroundColor: "#005386",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 140,
        marginBottom: 20,
        borderRadius:10,
    },
    text:{
        color: "#ffffff",
        fontSize:25,
        fontWeight:'bold',
    },
})

export default Body;