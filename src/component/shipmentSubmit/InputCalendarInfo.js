import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import moment from 'moment';

const InputCalendarInfo = ({labelContext, date}) => {
    const _onChange = event => setText(...event.nativeEvent.text);
    console.log("input Calender",date);
    return (
        <>
        <View style={styles.head}>
            <Text style={styles.text}>{labelContext}</Text>
            {date?(
                <Text style={styles.input}>{moment(date).format("yyyy-MM-DD")}</Text>
                ):(
                <Text style={styles.input}>{date}</Text>
                )
            }
        </View>
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
        flexDirection: 'column',
        // backgroundColor: 'red',
        // // height: 100,
        // width: '50%',
        // borderWidth: 3
    },
    label: {
        height: 35,
        width: '100%',
        fontSize: 18,
        color: '#000000',
        // backgroundColor: 'orange',
        // marginRight: 5,
    },
    input:{
        borderWidth: 1,
        borderColor: '#C8C8C8',
        fontSize: 20,
        width: '500%',
        height: 40,
        borderRadius:10,
        backgroundColor:'#ffffff',
        marginBottom:10,
        marginLeft:10,
    },
    text: {
        color: '#000000',
        fontWeight:'bold',
        fontSize: 18,
        marginLeft:5,
    },
})


export default InputCalendarInfo;