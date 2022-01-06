import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColourPalette from './screens/ColourPalette';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColourPalette"
          component={ColourPalette}
          options={({ route }) => ({ title: route.params.paletteName })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;