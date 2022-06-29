import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import FixBox from '../component/deliveryInsert/FixBox';
import DeliveryInsert from '../component/deliverySubmit/DeliveryInsert';
import ItemInfo from '../component/deliverySubmit/ItemInfo';

const DeliverySubmit = ({navigation}) => {
    return (
        <View style={styles.header}>
            <FixBox/>
            <ItemInfo/>
            <DeliveryInsert/>
            <View style={styles.button}>
                <Button title="납품신청" color="#005386"
                    // onPress={() => navigation.navigate('DeliverySubmit')}
                    />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        alignItems: "center",
    },
    button:{
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 50,
        marginTop: 30,
    }
})

export default DeliverySubmit;