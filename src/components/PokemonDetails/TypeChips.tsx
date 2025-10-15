import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pokemon } from '../../type/pokemonResponseTypes';
import { colors, horizontalScale, size } from '../../utils';


type Props = {
  item: { types: Pokemon['types']; bgColor: string }; // pass bgColor inside item
};

const TypeChips = ({ item }: Props) => {
  return (
    <View style={styles.row}>
      {item.types.map(t => (
        <View key={t.type.name} style={[styles.chip, { backgroundColor: item.bgColor }]}>
          <Text style={styles.text}>{t.type.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default React.memo(TypeChips);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: horizontalScale(size.l) },
  chip: {
    paddingHorizontal: horizontalScale(size.md),
    paddingVertical: horizontalScale(size.s),
    borderRadius: 999,
  },
  text: { fontSize: size.default, fontWeight: '600', color: colors.text, textTransform: 'capitalize' },
});
