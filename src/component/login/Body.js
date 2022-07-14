import React, { createRef, useEffect, useState } from 'react';
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

    const [idpw, setIdpw] = useState({
        email:" ",
        password:" ",
    });
    
    console.log("idpw : ",idpw);

    const handleLoginCondition = (key, value) => {
        const tempCondition = { ...idpw };
        tempCondition[key] = value;
        setIdpw(tempCondition);
    };
    const inputRef = createRef();
    
    const getLoginInfo = async () => {
        const data = await getToken(idpw);
        // setIdpw('');

        console.log("login info : ", data);
        changeLogin(data);
        setIdpw({
            email:" ",
            password:" ",
        });
        inputRef.current.clear();
    };

    // const[text, setText] = useState('');
    // const onChange =(e) =>{
    //     setText(e.target.value);
    // }
    // const onReset =()=>{
    //     setText('');
    // };

    // useEffect(()=>{
    //     setIdpw({
    //         email:" ",
    //         password:" ",
    //     });

    // },[]);

    return (
        <View style={styles.view}>
            <InputSelect/>
            <InputInfo value = {idpw.email} id="email" labelContext="ID" replaceContext="ID를 입력하세요" handleCondition={handleLoginCondition}/>
            <InputInfo value = {idpw.password} id="password" labelContext="PASSWORD" replaceContext="PASSWORD를 입력하세요" handleCondition={handleLoginCondition}/>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.button} 
                onPress={ () =>{ 
                    getLoginInfo();
                    navigation.navigate('Menu');
                    Alert.alert(login.name+ "님 환영합니다! ");
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