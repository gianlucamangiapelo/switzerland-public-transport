/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { styles } from '../style';
import { store } from '../context/store';
import Icon from 'react-native-vector-icons/FontAwesome';


const DateInput = () => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateValue, setDateValue] = useState(new Date());
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setDateValue(date);
    dispatch({ type: 'DATE', date: date.toISOString().split('T')[0] });
  };

  return (
    <>
      <TouchableOpacity onPress={() => showDatePicker()}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginLeft: 12, marginTop: 16 }}>
            <Icon name="calendar" size={30} />
          </Text>
          <TextInput pointerEvents="none" editable={false} value={dateValue.toDateString()} style={styles.inputDate} />
        </View>
      </TouchableOpacity>

      {
        isDatePickerVisible &&
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      }
    </>
  );
};

export default DateInput;
