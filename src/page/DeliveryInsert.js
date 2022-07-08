import React from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
        // <ScrollView>
        <View style={styles.header}>
            <View style={styles.fix}>
                <FixBox/>
            </View>
            <View>
                <ItemInsert/>
            </View>
            <View style={styles.button}>
                {/* <Text>안녕</Text> */}
                <Button title="다음 단계" color="#005386"
                    onPress={() => navigation.navigate('DeliverySubmit')}
                    />
            </View>
        </View>
        // </ScrollView>
    );
};

const styles = StyleSheet.create({
    header:{
        alignItems: "center",
        height:'75%',
        marginBottom: 500,
    },
    fix:{
        width:'100%',
        height:'25%',
    },
   
    button:{
        // width: 100,
        height: '30%',
        // justifyContent: 'center',
        // alignItems: "center",
        // borderRadius: 50,
        // marginTop: 30,
        // marginBottom : 700,
        // backgroundColor: 'red',
    }
})

export default DeliveryInsert;