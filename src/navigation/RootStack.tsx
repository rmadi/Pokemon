import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokemon from '../screens/Pokemon';
import PokemonDetail from '../screens/PokemonDetail';
import { RootStackParamList } from '../type/navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Pokemon" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} options={{headerShown:true, title:''}} />
    </Stack.Navigator>
  );
};

export default RootStack;
