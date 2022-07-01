import React from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import { getSearchList } from '../apis/scc';
import useRootData from '../hooks/useRootData';

const DeliveryDetailSelect = ({navigation}) => {
    console.log("detail page");
    const {
        searchedList, //searchedListStore에 있는 searchedList 값을 가져온다
        changeSearchedList, //searchedListStore에 있는 changeSearchedList 함수를 가져온다.
    } = useRootData(({searchedListStore}) => ({
        searchedList: searchedListStore.searchedList.get(),
        changeSearchedList: searchedListStore.changeSearchedList,
    }));
    console.log("searchedList@@@@@@@@@@@@",searchedList);
    // console.log("searchedList@@@@@@@@@@@@",searchedList[1].po_num);

    // 더보기 버튼 클릭시 DeleverySelect 페이지에서 보낸 condition의 page를 ++하기
    const selectDeliveryList = async ({num}) => {
        const data = await getSearchList();

        // mobx에 저장하기
        changeSearchedList(data);
        return data;
    };

    return (
        <View style={styles.view}>
            {searchedList.map(searchedlist=>(
                <View style={styles.view}> 
                <View style={styles.containerRow}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}
                            onPress={() => navigation.navigate('DeliveryInsert')}
                            >{searchedlist.po_num}
                        </Text>
                    </View>
                    <View style={styles.textContainer1}>
                        <Text
                            onPress={() => navigation.navigate('DeliveryInsert')}
                            >{searchedlist.vendor_name}
                        </Text>
                    </View>
                </View>
                <View style={styles.textContainer2}>
                        <Text>{searchedlist.comments}</Text>
                </View>
                <View style={styles.textContainer2}>
                    <Text>
                        {searchedlist.staff_dept_code +" /"+ searchedlist.subinventory+ " /"+searchedlist.promised_date+" /"+searchedlist.staff_name}
                    </Text>
                </View>
            </View>
            ))}
             <View style={styles.button}>
                    <Button title="더보기" color="#005386" 
                    onPress={() => {
                        Alert.alert("더 보고 싶으면 500원")
                    
                    }
                    
                    }/>
            </View> 
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 20,
    },
    text:{
        color: 'blue',
        textDecorationLine: 'underline',
      },
      containerRow:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 0,
    },
    containerColumn:{
      // flexDirection: 'column',
      // justifyContent: 'center',
      // alignItems: "center",
      // marginBottom: 0,
    },
    textContainer:{
      width: 100,
      height: 40,
      // backgroundColor: '#005386',
      justifyContent: 'center',
      alignItems: "center",
      borderWidth: 1,
      // marginTop: 20,
      // paddingTop: 20,
    },
    textContainer1:{
      width: 250,
      height: 40,
      // backgroundColor: '#005386',
      justifyContent: 'center',
      alignItems: "center",
      borderWidth: 1,
      // marginTop: 20,
      // paddingTop: 20,
    },
    textContainer2:{
      width: 350,
      height: 40,
      // backgroundColor: '#005386',
      justifyContent: 'center',
      alignItems: "center",
      borderWidth: 1,
      // marginTop: 20,
      // paddingTop: 20,
    },
    //   view:{
    //       justifyContent: 'center',
    //       alignItems: "center",
    //       marginTop: 10,
    //   },
      button:{
          width: 100,
          height: 40,
          borderRadius: 50,
          marginTop: 30,
      }

})

export default DeliveryDetailSelect;