import React from 'react';
import { Text, StyleSheet, TextInput, View} from 'react-native';

const InputInfo = ({id, labelContext, handleCondition}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{labelContext}</Text>
            <TextInput
                style={styles.input}
                onChange={event => handleCondition(id, event.nativeEvent.text)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent: 'center',
        width: '90%',
    },
    text: {
        width: '35%',
        fontSize: 18,
        color: '#ffffff',
        marginTop: 5,
    },
    input:{
        width: '50%',
        borderWidth: 1,
        borderColor: '#ffffff',
        // padding: 10, 
        fontSize: 15,
        width: 200,
        height: 40,
        marginTop: 5,
        borderRadius: 5,
    },
    text1: {
        height: 35,
        fontSize: 20,
        color: '#005386',
    },
    text2: {
        height: 35,
        fontSize: 18,
        color: '#ffffff',
    },
})

export default InputInfo;