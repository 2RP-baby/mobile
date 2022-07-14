import React from 'react';
import { TouchableOpacity,Text,View, StyleSheet, Button} from 'react-native';
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
            <View style={styles.fix}>
                <FixBox/>
            </View>
            <View marginTop={30}>
                <ItemInsert/>
            </View>

            <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={styles.button1} 
                        onPress={ () =>{ 
                            navigation.navigate('ShipDeliverySubmit'); 
                        }}
                        >
                        <Text style={styles.text1}>다음단계</Text>
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    button1: {
        width: "80%",
        height: 60,
        backgroundColor: "#005386",
        justifyContent: "center",
        alignItems: "center",
        marginTop:15,
        marginBottom: 20,
        borderRadius:10,
    },
    text1: {
        color: "#ffffff",
        fontSize:25,
        fontWeight:'bold',
    },
    fix:{
        width:'100%',
        height:'17%',
    },
    header:{
        alignItems: "center",
        height:'73%',
        marginBottom: 500,
    },
    fix:{
        width:'100%',
        height:'23%',
    },
})

export default ShipmentInsert;