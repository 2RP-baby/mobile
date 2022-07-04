import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const InputInfo = ({id, index, labelContext, replaceContext, defaultValue, handleCondition}) => {
    const _onChange = event => setText(...event.nativeEvent.text);

    return (
        <>
            <Text style={styles.text3_label}>{labelContext}</Text>
            <TextInput
                style={styles.input1}
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
    text3_label: {
        height: 35,
        width: '20%',
        fontSize: 18,
        color: '#000000',
        // backgroundColor: 'orange',
        // marginRight: 5,
    },
    input1:{
        height: 30,
        width: '28%',
        borderWidth: 0.7,
        borderColor: '#005386',
        // padding: 10, 
        fontSize: 18,
        // marginRight: 10,
        marginBottom: 10,
        // backgroundColor: 'yellow',

    },
})


export default InputInfo;