import React from 'react';
import {View, Text, Button, StyleSheet, Image, ImageBackground, ScrollView} from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity } from 'react-native-gesture-handler';
import logoutIcon from '../../assets/icon/logout.png'
import useRootData from '../hooks/useRootData';

const CustomDrawer = (props) => {
// const CustomDrawer = ({props, navigation}) => {

    const {
        login,
        changeLogin
    } = useRootData(({loginStore}) => ({
        login: loginStore.login.get(),
        changeLogin: loginStore.changeLogin,
    }));

    return (
        <View style = {{flex:1}}>
            <View {...props}  contentContainerStyle ={{backgroundColor:'#005386' }}>
                    {/* <ImageBackground 
                        source ={require('../../assets/image/POSCO_ICT_CI_ENG.png')}
                        style={{padding:20}}/> */}
                    <View style = {{flexDirection:'column',backgroundColor:'#005386' }}>
                        {login.authority=='ROLE_USER'? 
                        <>
                        <Image 
                        source={require('../../assets/icon/profile.jpg')} 
                        style={{height:80,width:80,borderRadius:40, marginBottom:10, marginLeft:20, marginTop:60}}/> 
                        <Text style={{color:'#fff',fontSize: 18, marginLeft:10 , marginTop:10, marginBottom:10}}>{login.name} 님</Text>
                        </>:true}
                        

                        {login.authority=='ROLE_VENDOR'? 
                        <>
                        <Image 
                        source={require('../../assets/icon/vendor.jpg')} 
                        style={{height:80,width:80,borderRadius:40, marginBottom:10, marginLeft:20, marginTop:60}}/> 
                        <Text style={{color:'#fff',fontSize: 18, marginLeft:10 , marginTop:10, marginBottom:10}}>{login.name} 님</Text>
                        </>:true}

                        {login.authority==null? 
                        <Text style={{color:'#fff',fontSize: 18, marginLeft:35 , marginTop:100, marginBottom:100}}> 
                        로그인이 필요합니다.</Text>
                        :true}      

                       
                        <Text style={{color:'#fff',fontSize: 12, marginLeft:10, marginBottom:15}}>{login.site_name}</Text>
                    </View>
                    <View>
                        <ScrollView style={{height:830}}>
                            <View backgroundColor='#fff' marginTop={-50}>
                                <DrawerItemList {...props}/>
                            </View>
                        </ScrollView>
                    </View>

            </View>

        <View style={{padding:20, borderTopWidth:1, borderTopColor:'#ccc'}}>
            <TouchableOpacity onPress={()=>{
                props.navigation.navigate('Login');
                // changeLogin('');
                // navigation.navigate('Login');

            }} style ={{paddingVertical:15}}>
            <View style ={{flexDirection: 'row', alignItems:'center'}}>
                <Image style={styles.image} source={logoutIcon} />
                <Text> logout</Text>
            </View>    
            </TouchableOpacity>
        </View>
        
        </View>
    );
};
const styles = StyleSheet.create({
    image: {
        width: 15,
        height: 15,
    },

})
export default CustomDrawer;