import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

const InputInfo = ({id, index, labelContext, replaceContext, defaultValue, handleCondition}) => {
    const _onChange = event => setText(...event.nativeEvent.text);

    return (
        <>
            <Text style={styles.label}>{labelContext}</Text>
            <TextInput
                style={styles.input}
                // placeholder={replaceContext}
                // defaultValue={defaultValue}
                onChange={event => handleCondition(index, id, event.nativeEvent.text)}/>
        </>
    );
};

const styles = StyleSheet.create({
    head:{
        // flexDirection: 'row',
        // backgroundColor: 'red',
        // height: 100,
        // width: '100%',
        // borderWidth: 3
    },
    label: {
        height: 35,
        width: '18%',
        fontSize: 18,
        fontWeight:'bold',
        color: '#005386',
        // backgroundColor: 'orange',
        // marginRight: 5,
    },
    input:{
        height: '60%',
        width: '28%',
        borderWidth: 0.7,
        borderColor: '#005386',
        // padding: 10, 
        fontSize: 18,
        marginRight: 10,
        marginBottom: 10,
        textAlign:'center',
        padding:3,

    },
})


export default InputInfo;