/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import { SECONDARY } from './../style/colors';
import { styles } from './../style/index';

const Home = ({ navigation }) => {

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Image style={styles.homeImage} source={require('./../../assets/Home.jpg')} />

        <View style={styles.sloganWhite}>
          <Text
            style={styles.sloganText}
          >
            Get your next travel!
            </Text>
        </View>
        <View style={styles.slogan}>
          <Text style={{ textAlign: 'center', fontSize: 14 }}
          >
            Come to discover Switzerland and don't worry about getting around!
            </Text>
        </View>
        <View style={{ ...styles.buttonCenter, marginTop: 30 }}>
          <Button title="Move" color={SECONDARY} onPress={() => navigation.navigate('TravelFrom')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
