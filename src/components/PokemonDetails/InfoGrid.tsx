import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, horizontalScale, size } from '../../utils';

type Props = {
  item: { height: number; weight: number }; 
};

const InfoGrid = ({ item }: Props) => {
  const heightM = item.height / 10;
  const weightKg = item.weight / 10;

  return (
    <View style={styles.grid}>
      <View style={styles.cell}>
        <Text style={styles.label}>Height</Text>
        <Text style={styles.value}>{heightM.toFixed(1)} m</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.cell}>
        <Text style={styles.label}>Weight</Text>
        <Text style={styles.value}>{weightKg.toFixed(1)} kg</Text>
      </View>
    </View>
  );
};

export default React.memo(InfoGrid);

const styles = StyleSheet.create({
  grid: {
    marginTop: horizontalScale(size.md),
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.background,
    borderRadius: size.lg,
    overflow: 'hidden',
  },
  cell: { flex: 1, paddingVertical: horizontalScale(size.md), alignItems: 'center' },
  divider: { width: 1, backgroundColor: colors.grey, opacity: 0.6 },
  label: { color: colors.text, opacity: 0.6, fontSize: size.xs },
  value: { fontSize: size.mmd, fontWeight: '700', marginTop: horizontalScale(size.s), color: colors.text },
});
