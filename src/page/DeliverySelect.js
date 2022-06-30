import React from 'react';
import {View, StyleSheet} from 'react-native';
import Body from '../component/deliverySelect/Body';


const DeliverySelect = ({navigation}) => {
    return (
        <View style={styles.view}>
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
    body:{  
       
    },

})

export default DeliverySelect;