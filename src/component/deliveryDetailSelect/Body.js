import React from 'react';
import {View, Text, Button, StyleSheet, Alert, Linking} from 'react-native';


const Body = ({navigation}) => {   

    return (
        <View style={styles.view}> 
            {/* <Text>Body</Text> */}
            
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10,
    },
    button:{
        width: 100,
        height: 40,
        borderRadius: 50,
        marginTop: 30,
    }
})

export default Body;