import React from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';

const InputInfo = () => {
    const _onChange = event => setText(event.nativeEvent.text);

    return (
        <View style={styles.header}>
            <Text style={styles.text}>납품장소</Text>
            <TextInput
                style={styles.input}
                onChange={_onChange}/>
                <Text style={styles.text}>요청 특기 사항</Text>
            <TextInput
                style={styles.input}
                onChange={_onChange}/>
                <Text style={styles.text}>신청부서 (Code 입력)</Text>
            <TextInput
                style={styles.input}
                onChange={_onChange}/>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        // marginTop: 5,
        // marginLeft: 10,
        padding: 10
    },
    text: {
        fontSize: 18,
        color: '#000000',
        marginTop: 5,
    },
    input:{
        borderWidth: 1,
        borderColor: '#005386',
        padding: 10, 
        fontSize: 15,
        width: 200,
        height: 40,
        marginTop: 5,
    },
    text1: {
        height: 35,
        fontSize: 20,
        color: '#005386',
    },
    text2: {
        height: 35,
        fontSize: 18,
        color: '#000000',
    },
})

export default InputInfo;