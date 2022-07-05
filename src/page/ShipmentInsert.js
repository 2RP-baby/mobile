import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import FixBox from '../component/shipmentInsert/FixBox';
import ItemInsert from '../component/shipmentInsert/ItemInsert';
import useRootData from '../hooks/useRootData';

const ShipmentInsert = ({navigation}) => {
    const {
        deliveryInsertInfo,
        changeDeliveryInsertInfo,
    } = useRootData(({shipDeliveryInsertStore}) => ({
        deliveryInsertInfo: shipDeliveryInsertStore.deliveryInsertInfo.get(),
        changeDeliveryInsertInfo: shipDeliveryInsertStore.changeDeliveryInsertInfo,
    }));
    
    return (
        <View style={styles.header}>
            <FixBox/>
            <ItemInsert/>
            <View style={styles.button}>
                <Button title="다음 단계" color="#005386"
                    onPress={() => navigation.navigate('ShipDeliverySubmit')}
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

export default ShipmentInsert;