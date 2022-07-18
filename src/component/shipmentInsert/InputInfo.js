import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

const InputInfo = ({id, index, labelContext, replaceContext, defaultValue, handleCondition}) => {
    const _onChange = event => setText(...event.nativeEvent.text);

    return (
        <>
            <Text style={styles.label}>{labelContext}</Text>
            <TextInput
                style={styles.input}
                placeholder={replaceContext}
                defaultValue={defaultValue}
                onChange={event => handleCondition(index, id, event.nativeEvent.text)}/>
        </>
    );
};

const styles = StyleSheet.create({
    head:{
        flexDirection: 'row',
        backgroundColor: 'red',
        // height: 100,
        width: '50%',
        borderWidth: 3
    },
    label: {
        height: 35,
        width: '22%',
        fontSize: 18,
        color: '#005386',
        fontWeight:'bold',
        marginRight: 15,
    },
    input:{
        height: 33,
        width: '28%',
        fontSize: 18,
        color: '#000000',
        borderWidth: 0.7,
        borderColor: '#005386',
        // padding: 10, 
        fontSize: 18,
        marginRight: 7,
        marginBottom: 10,
        marginLeft: -35,
        // backgroundColor: 'yellow',
        textAlign:'center',
        padding:3,
        
    },
})


export default InputInfo;