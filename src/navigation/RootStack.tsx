import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokemon from '../screens/Pokemon';
import PokemonDetail from '../screens/PokemonDetail';
import PokemonSearch from '../screens/PokemonSearch';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Pokemon" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
      <Stack.Screen name="PokemonSearch" component={PokemonSearch} />
    </Stack.Navigator>
  );
};

export default RootStack;
