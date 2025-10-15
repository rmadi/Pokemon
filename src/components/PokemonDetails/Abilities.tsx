import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pokemon } from '../../type/pokemonResponseTypes';
import { colors, horizontalScale, size } from '../../utils';

type Props = {
  item: { abilities: Pokemon['abilities'] };
};

const Abilities = ({ item }: Props) => (
  <View style={styles.wrap}>
    <Text style={styles.title}>Abilities</Text>
    <Text style={styles.text}>{item.abilities.map(a => a.ability.name).join(', ')}</Text>
  </View>
);

export default React.memo(Abilities);

const styles = StyleSheet.create({
  wrap: { marginTop: horizontalScale(size.md) },
  title: { fontSize: size.mmd, fontWeight: '700', marginBottom: horizontalScale(size.s), color: colors.text },
  text: { color: colors.text, fontSize: size.default },
});
