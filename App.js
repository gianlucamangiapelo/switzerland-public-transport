/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TravelSelection from './src/scenes/TravelSelection';
import Home from './src/scenes/Home';
import TravelResults from './src/scenes/TravelResults';
import { PRIMARY, BLACK } from './src/style/colors';
import { StateProvider } from './src/context/store';
import TravelFrom from './src/scenes/TravelFrom';
import TravelTo from './src/scenes/TravelTo';
import TravelDetail from './src/scenes/TravelDetail';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerTintColor: BLACK,
          headerStyle: { backgroundColor: PRIMARY },
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TravelFrom" component={TravelFrom} />
          <Stack.Screen name="TravelTo" component={TravelTo} />
          <Stack.Screen name="Selection" component={TravelSelection} />
          <Stack.Screen name="Result" component={TravelResults} />
          <Stack.Screen name="Detail" component={TravelDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;
