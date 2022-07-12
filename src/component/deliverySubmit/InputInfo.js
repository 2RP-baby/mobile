import React from 'react';
import { Text, StyleSheet, TextInput, View} from 'react-native';

const InputInfo = ({id, labelContext, handleCondition}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{labelContext}</Text>
                <TextInput
                    style={styles.input}
                    onChange={event => handleCondition(id, event.nativeEvent.text)}/>
            </View>
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
        padding: 7,
        
    },
    textContainer:{
        width: '80%',
        height: 60,
        justifyContent: 'center',

    },
    text: {
        color: '#000000',
        fontWeight:'bold',
        fontSize: 18,
        marginLeft:5,
    },
    input:{
        borderWidth: 1,
        borderColor: '#C8C8C8',
        padding: 10, 
        fontSize: 20,
        width: '100%',
        height: 40,
        borderRadius:10,
        backgroundColor:'#ffffff',
        marginBottom:10,
    },
})

export default InputInfo;