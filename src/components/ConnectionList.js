/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from '../style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { store } from '../context/store';
import { useNavigation } from '@react-navigation/native';
import { formatAMPM, formatDuration } from '../utils';
import Icon from 'react-native-vector-icons/FontAwesome';


function Item ({ item }) {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const navigation = useNavigation();

  const dispAndNavigate = () => {
    dispatch({ type: 'TRAVEL_SELECTION', travel: item });
    navigation.navigate('Detail');
  };

  return (
    <View style={{ marginBottom: 4 }}>
      <TouchableOpacity onPress={() => { dispAndNavigate(); }}>
        <View style={{ marginTop: 8, borderBottomWidth: 1, borderBottomColor: '#cacaca' }}>
          {/* <Text style={{ marginLeft: 12 }}>{new Date(item.from.departure).toDateString()}</Text> */}
          <Text style={styles.connectionInfo}>
            {item.from.station.name}
            {'  ->  '}
            {item.to.station.name}
            {'  '}
            ({item.transfers} changes)</Text>
          <Text style={styles.connectionTime}>
            {formatAMPM(new Date(item.from.departure))}
            {' - '}
            {formatAMPM(new Date(item.to.arrival))}</Text>
          <Text style={styles.connectionInfo}>
            <Icon name="subway" /> {' '}{formatDuration(item.duration)}
          </Text>
        </View>

      </TouchableOpacity>
    </View>
  );
}

const Empty = () => {
  return (
    //View to show when list is empty
    <View style={{ marginTop: 20 }}>
      <Text style={{ textAlign: 'center' }}>No Data Found</Text>
    </View>
  );
};

const ConnectionList = () => {
  const [state, setState] = useState({ connections: [] });
  const globalState = useContext(store);

  const findConnection = (from, to, date) => {
    let con = [];
    fetch(`http://transport.opendata.ch/v1/connections?from=${from.id}&to=${to.id}&date=${date}&limit=10`).then(res => res.json()).then((json) => {
      con = json.connections.map((item, index) => {
        item.id = index;
        return item;
      });
      setState({ connections: con });
    }).catch(err => {
      console.log(err);
    });
  };

  useEffect(() => { findConnection(globalState.state.from, globalState.state.to, globalState.state.date); },
    [globalState.state.date, globalState.state.from, globalState.state.to]);

  return (
    <FlatList
      data={state.connections}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={Empty}
    />
  );
};

export default ConnectionList;
