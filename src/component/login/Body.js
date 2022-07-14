import React, { createRef, useState } from 'react';
import {View, Button, StyleSheet, Alert, TouchableOpacity, Text} from 'react-native';
import useRootData from '../../hooks/useRootData';
import InputInfo from './common/InputInfo';
import InputInfo2 from './common/InputInfo2';
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

    const [idpw, setIdpw] = useState({
        email:" ",
        password:" ",
    });

    const inputRef = createRef();


    const handleLoginCondition = (key, value) => {
        const tempCondition = { ...idpw };
        tempCondition[key] = value;
        // setDeliveryCondition(tempCondition);
        setIdpw(tempCondition);
    };

    const getLoginInfo = async () => {
        const data = await getToken(idpw);
        console.log("login info : ", data);
        changeLogin(data);

        // 초기화
        setIdpw({
            email:" ",
            password:" ",
        });
        // inputRef.current.clear();
    };
    console.log("idpw", idpw);

    return (
        <View style={styles.view}>
            <InputSelect/>
            <InputInfo id="email" labelContext="ID" replaceContext="ID를 입력하세요" handleCondition={handleLoginCondition}/>
            <InputInfo2 id="password" labelContext="PASSWORD" replaceContext="PASSWORD를 입력하세요" handleCondition={handleLoginCondition}/>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.button} 
                onPress={ () =>{ 
                    getLoginInfo();
                    navigation.navigate('Menu');
                    Alert.alert("로그인이 완료되었습니다! ");
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