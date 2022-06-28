import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import hamburger from '../../../assets/icon/menu.png';

const Mybutton2 = () => {
    return (
        <View>
             <TouchableOpacity style={styles.container1}
                onPress={()=>alert('납품신청 버튼 클릭')}>
                <Image source={hamburger} />
            </TouchableOpacity>
        </View>
    );
};

export default Mybutton2;