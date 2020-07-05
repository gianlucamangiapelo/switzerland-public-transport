/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import { SECONDARY } from '../style/colors';
import { styles } from '../style/index';
import { store } from '../context/store';
import StationList from '../components/StationList';
import Icon from 'react-native-vector-icons/FontAwesome';

const TravelFrom = ({ navigation }) => {

  const globalState = useContext(store);
  const { dispatch } = globalState;

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <Text style={styles.iconContainer}>
            <Icon name="search" size={20} color={SECONDARY} />
          </Text>
          <TextInput
            style={styles.inputSelection}
            placeholder="Choose departure station"
            onChangeText={text => dispatch({ type: 'TYPING_SELECTION', query: text })}
          />
        </View>
        <StationList isFrom={true} />
      </View>

    </>
  );
};

export default TravelFrom;
