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
        width: '20%',
        fontSize: 18,
        color: '#000000',
        // backgroundColor: 'orange',
        // marginRight: 5,
    },
    input:{
        height: 30,
        width: '28%',
        borderWidth: 0.7,
        borderColor: '#005386',
        // padding: 10, 
        fontSize: 10,
        marginRight: 5,
        marginBottom: 10,
        // backgroundColor: 'yellow',
        textAlign:'center',
    },
})


export default InputInfo;