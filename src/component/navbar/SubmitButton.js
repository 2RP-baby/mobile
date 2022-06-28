import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native';
import back from '../../../assets/icon/back.png';
import poscoICT from '../../../assets/image/POSCO_ICT_CI_ENG.png';


const SubmitButton = () => {
    return (
        <View>
             <View style={styles.button}>
                <Button title="전송" color="#005386" 
                onPress={() => Alert.alert('전송 버튼 클릭')}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    button:{
        width: 100,
        height: 40,
        borderRadius: 50,
        marginTop: 30,
    }
})

export default SubmitButton;