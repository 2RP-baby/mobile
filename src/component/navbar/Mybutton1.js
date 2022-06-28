import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import back from '../../../assets/icon/back.png';

const Mybutton1 = () => {
    return (
        <View>
             <TouchableOpacity style={styles.container1}
                onPress={()=>alert('납품신청 버튼 클릭')}>
                <Image source={back} />
            </TouchableOpacity>
        </View>
    );
};

export default Mybutton1;