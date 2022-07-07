import React, { useState } from "react";
import { Button, View, Image,StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from 'react-native-gesture-handler';
import calendar from '../../../assets/icon/calendar.png';
import moment from 'moment';

const DatePicker = ({id, index, handleCondition}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    // setDate(date);
    // setDate('22-06-06');
    // onchangeText(date.format("yyyy/mm/dd"));
    handleCondition(index, id, date);

    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity
              onPress={showDatePicker} >
              <Image style={styles.image} source={calendar}/>
        </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
        marginRight:20,
    },
  })
export default DatePicker;