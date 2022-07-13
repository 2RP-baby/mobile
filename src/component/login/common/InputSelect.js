import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {mainBlue} from '../../../../assets/color';
import {Picker} from '@react-native-picker/picker';

const InputSelect = () => {
    const [division, setDivision] = useState('선택');

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>구분</Text>
            </View>
            <Picker style={styles.input} selectedValue={division}
                onValueChange={(val, idx) => setDivision(val)}>
                <Picker.Item label="사용부서" value={'staff'} />
                <Picker.Item label="공급사" value={'vendor'} />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: 600,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        
    },
    textContainer:{
        width: '80%',
        height: 60,
        justifyContent: 'center',

    },
    text: {
        color: '#000000',
        fontWeight:'bold',
        fontSize: 25,
        marginLeft:5,
        
    },
    input:{
        borderWidth: 1,
        borderColor: '#C8C8C8',
        padding: 10, 
        fontSize: 20,
        width: '80%',
        height: 60,
        borderRadius:10,
        backgroundColor:'#ffffff',
        marginBottom:10,
        // borderRadius: 40,
        // borderWidth: 2,
    },
})


export default InputSelect;