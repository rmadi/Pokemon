import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, horizontalScale, size } from '../../utils';
import { Pokemon } from '../../type/pokemonResponseTypes';


type Props = {
  item: { stats: Pokemon['stats']; barColor: string };
};

const StatsList = ({ item }: Props) => (
  <View style={styles.wrap}>
    <Text style={styles.title}>Base Stats</Text>
    {item.stats.map(s => {
      const pct = Math.min(s.base_stat, 100);
      return (
        <View key={s.stat.name} style={styles.row}>
          <Text style={styles.name}>{s.stat.name}</Text>
          <View style={styles.barBg}>
            <View style={[styles.barFill, { width: `${pct}%`, backgroundColor: item.barColor }]} />
          </View>
          <Text style={styles.val}>{s.base_stat}</Text>
        </View>
      );
    })}
  </View>
);

export default React.memo(StatsList);

const styles = StyleSheet.create({
  wrap: { marginTop: horizontalScale(size.lg) },
  title: { fontSize: size.mmd, fontWeight: '700', marginBottom: horizontalScale(size.s), color: colors.text },
  row: { flexDirection: 'row', alignItems: 'center', gap: horizontalScale(size.l), marginBottom: horizontalScale(size.s) },
  name: { width: horizontalScale(110), textTransform: 'capitalize', color: colors.text, fontSize: size.default, opacity: 0.8 },
  barBg: { flex: 1, height: horizontalScale(size.l), borderRadius: size.l, backgroundColor: colors.grey, opacity: 0.35, overflow: 'hidden' },
  barFill: { height: '100%', borderRadius: size.l },
  val: { width: horizontalScale(40), textAlign: 'right', color: colors.text, fontSize: size.default },
});
