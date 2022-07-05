import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {mainBlue} from '../../../../assets/color';

const InputInfo = ({id, labelContext, replaceContext, handleCondition}) => {
    const _onChange = event => setText(...event.nativeEvent.text);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{labelContext}</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder={replaceContext}
                // onChange={event => setText(...event.nativeEvent.text)}/>
                onChange={event => handleCondition(id, event.nativeEvent.text)}/>
                {/* onChange={(e) => handleCondition(id, e.target.value)} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 0,
        width:'100%',
    },
    textContainer:{
        width: '80%',
        height: 60,
        backgroundColor: '#005386',
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 1,
        // marginTop: 20,
        // paddingTop: 20,
    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    input:{
        borderWidth: 1,
        borderColor: '#005386',
        padding: 10, 
        fontSize: 20,
        width: '80%',
        height: 60,
    },
    

})


export default InputInfo;