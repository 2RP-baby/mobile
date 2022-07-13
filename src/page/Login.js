import React from 'react';
import Header from '../component/login/Header';
import Body from '../component/login/Body';
import {View, StyleSheet} from 'react-native';


const Login = ({navigation}) => {
    return (
        <View style={styles.view}>
            <Header style={styles.header}/>
            <Body style={styles.body} navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 20,
    },
    header:{  
    },
    body:{  
       
    },

})

export default Login;