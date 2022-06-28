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
        width: 300,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#005386',
        marginBottom: 7,
    },
    textContainer:{
        width: 100,
        height: 40,
        backgroundColor: '#005386',
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        fontSize: 15,
        color: '#FFFFFF',
    },
    input:{
        fontSize: 15,
        width: 200,
        height: 40,
    }

})


export default InputSelect;