import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {mainBlue} from '../../../../assets/color';

const InputInfo = ({id, value, labelContext, replaceContext, handleCondition}) => {
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
                // onChange={event => setText(...event.nativeEvent.text)}/>
                value={value}
                onChange={event => handleCondition(id, event.nativeEvent.text)}
                secureTextEntry={true} 
                />
                {/* onChange={(e) => handleCondition(id, e.target.value)} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        width: 600,
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
    },
})


export default InputInfo;