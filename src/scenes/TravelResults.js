/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import ConnectionList from '../components/ConnectionList';
import { store } from '../context/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GRAY_MEDIUM } from '../style/colors';

const TravelResults = () => {
  const global = useContext(store);
  const { from, to, date } = global.state;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'white', minHeight: 40 }}>
        <Text style={{ alignSelf: 'center', fontSize: 20 }}>
          {from.name} {'  '}<Icon name="arrow-right" size={18} color={GRAY_MEDIUM} />{'  '} {to.name}
        </Text>
        <Text style={{ alignSelf: 'center', fontSize: 16 }}>
          {new Date(date).toDateString()}
        </Text>
      </View>
      <ConnectionList />
    </View>
  );
};

export default TravelResults;
