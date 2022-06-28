import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {mainBlue} from '../../../../assets/color';

const InputInfo = ({labelContext, replaceContext}) => {
    const [text, setText] = useState('');
    const _onChange = event => setText(event.nativeEvent.text);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{labelContext}</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder={replaceContext}
                onChange={_onChange}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 7,
    },
    textContainer:{
        width: 100,
        height: 40,
        backgroundColor: '#005386',
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 1,
        // marginTop: 20,
        // paddingTop: 20,
    },
    text: {
        fontSize: 15,
        color: '#FFFFFF',
    },
    input:{
        borderWidth: 1,
        borderColor: '#005386',
        padding: 10, 
        fontSize: 15,
        width: 200,
        height: 40,
    },
    

})


export default InputInfo;