import React from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';
import InputInfo from './common/InputInfo';
import InputSelect from './common/InputSelect';


const Body = () => {   

    return (
        <View style={styles.view}>
            <InputSelect/>
            <InputInfo labelContext="ID" replaceContext="ID를 입력하세요"/>
            <InputInfo labelContext="PASSWORD" replaceContext="PASSWORD를 입력하세요"/>
            <View style={styles.button}>
                <Button title="로그인" color="#005386" 
                onPress={() => Alert.alert('로그인 버튼 클릭')}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 150,
    },
    button:{
        width: 100,
        height: 40,
        borderRadius: 50,
        marginTop: 30,
    }
})

export default Body;