/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from '../style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { store } from '../context/store';
import { useNavigation } from '@react-navigation/native';


function Item ({ item, isFrom }) {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const navigation = useNavigation();

  const dispAndNavigate = (isFromP) => {
    if (isFromP) {
      dispatch({ type: 'FROM', from: item });
      dispatch({ type: 'TYPING_SELECTION', query: '' });
      navigation.navigate('TravelTo');
    }
    else {
      dispatch({ type: 'TO', to: item }); navigation.navigate('Selection');
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => { dispAndNavigate(isFrom); }}>
        <Text style={styles.stationInput}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const StationList = ({ isFrom }) => {
  const [state, setState] = useState({ station: [] });
  const globalState = useContext(store);

  const findData = (query) => {
    if (!query) {
      query = 'a';
    }
    let arr = [];
    fetch(`http://transport.opendata.ch/v1/locations?type=stations&query=${query}&limit=15`).then(res => res.json()).then((json) => {
      arr = json.stations.filter(j => j.id != null).map(j => ({ name: j.name, id: j.id }));
      setState({ station: arr });
    }).catch(err => {
      console.log(err);
    });
  };

  useEffect(() => { findData(globalState.state.query); },
    [globalState.state.query]);

  return (
    <FlatList
      data={state.station}
      renderItem={({ item }) => <Item isFrom={isFrom} item={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default StationList;
