/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import DateInput from './../components/DateInput';
import { SECONDARY } from './../style/colors';
import { styles } from './../style/index';
import { store } from './../context/store';

const TravelSelection = ({ navigation }) => {

  const globalState = useContext(store);

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Image style={styles.homeImage} source={require('./../../assets/Home_image.png')} />

        <View style={styles.sloganWhite}>
          <Text
            style={styles.sloganText}
          >
            Get your next travel!
            </Text>

        </View>

        <View style={{ flex: 1, marginLeft: 16 }}>
          <TouchableOpacity onPress={() => { navigation.navigate('TravelFrom'); }}>

            <Text
              style={styles.inputResult}
            >
              <Text style={styles.inputLabel}>From:</Text>{'  '}{globalState.state.from.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.goBack(); }}>
            <Text
              style={styles.inputResult}
            >
              <Text style={styles.inputLabel}>To:</Text>{'  '}{globalState.state.to.name}
            </Text>
          </TouchableOpacity>
          <DateInput />
        </View>
        <View style={styles.buttonCenter}>
          <Button title="Search" color={SECONDARY} onPress={() => navigation.navigate('Result')} />
        </View>
      </View>
    </ScrollView >
  );
};

export default TravelSelection;
