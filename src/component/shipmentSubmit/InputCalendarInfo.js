import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import moment from 'moment';
import DatePicker from './DatePicker'
const InputCalendarInfo = ({id, index, labelContext, replaceContext, defaultValue, handleCondition, date}) => {
    const _onChange = event => setText(...event.nativeEvent.text);
    console.log("input Calender",date);
    return (
        <>
            <Text style={styles.label}>{labelContext}</Text>
            {date?(<Text style={styles.input}>{moment(date).format("yyyy-MM-DD")}</Text>):(<Text style={styles.input}>{date}</Text>)}

            {/* <Text
                style={styles.input}
                placeholder={replaceContext}
                value={date}
                // onChangeText={date}
                // onChange={event => handleCondition(index, id, date)}
                /> */}
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
        fontSize: 15,
        marginRight: 10,
        marginBottom: 10,
        // backgroundColor: 'yellow',

    },
})


export default InputCalendarInfo;