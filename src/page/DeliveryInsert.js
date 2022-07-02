import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import FixBox from '../component/deliveryInsert/FixBox';
import ItemInsert from '../component/deliveryInsert/ItemInsert';
import useRootData from '../hooks/useRootData';

const DeliveryInsert = ({navigation}) => {
    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
    } = useRootData(({deliveryInsertStore}) => ({
        deliveryInsertInfo: deliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: deliveryInsertStore.changeDeliveryInsertInfo,
    }));
    
    return (
        <View style={styles.header}>
            <FixBox/>
            <ItemInsert/>
            <View style={styles.button}>
                <Button title="다음 단계" color="#005386"
                    onPress={() => navigation.navigate('DeliverySubmit')}
                    />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        alignItems: "center",
        marginBottom: 200,
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

export default DeliveryInsert;