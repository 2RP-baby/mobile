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
        color: '#000000',
        // backgroundColor: 'orange',
        // marginRight: 5,
    },
    input:{
        height: '60%',
        width: '78%',
        borderWidth: 0.7,
        borderColor: '#005386',
        // padding: 10, 
        fontSize: 15,
        marginRight: 10,
        marginBottom: 10,
    },
})


export default InputInfo;