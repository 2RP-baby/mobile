import React from 'react';
import {View, Button, StyleSheet, Alert, TouchableOpacity, Text} from 'react-native';
import useRootData from '../../hooks/useRootData';
import InputInfo from './common/InputInfo';
import InputSelect from './common/InputSelect';
import { getToken } from '../../apis/login';
import { serverAxios } from "../../apis/axios2";



const Body = ({navigation}) => {   

    const {
        login,
        changeLogin
    } = useRootData(({loginStore}) => ({
        login: loginStore.login.get(),
        changeLogin: loginStore.changeLogin,
    }));


    const handleLoginCondition = (key, value) => {
        const tempCondition = { ...login };
        tempCondition[key] = value;
        // setDeliveryCondition(tempCondition);
        changeLogin(tempCondition);
    };

    const getTokenInfo = async () => {
        const data = await getToken(login);
        console.log("login info : ", data);

        // // token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
        // serverAxios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`
        // // serverAxios.defaults.headers.common['Authorization'] = `Bearer ${res.payload.accessToken}`
        // serverAxios.get('/user/me')
        //     .then(res => {
        //     console.log("login 성공", res);	
        //     })
        
        // mobx에 token 저장하기
        // changeLogin(data.accessToken);
    };

    console.log("login 정보", login);

    return (
        <View style={styles.view}>
            <InputSelect/>
            <InputInfo id="email" labelContext="ID" replaceContext="ID를 입력하세요" handleCondition={handleLoginCondition}/>
            <InputInfo id="password" labelContext="PASSWORD" replaceContext="PASSWORD를 입력하세요" handleCondition={handleLoginCondition}/>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.button} 
                onPress={ () =>{ 
                    // Alert.alert('로그인 버튼 클릭');
                    getTokenInfo();
                    // Alert.alert('로그인 버튼 클릭');
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