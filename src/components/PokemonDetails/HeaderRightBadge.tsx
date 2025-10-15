import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { horizontalScale, size } from '../../utils';

type Props = { idText: string; color: string };

export default function HeaderRightBadge({ idText, color }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={[styles.text, { color }]}>{idText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: horizontalScale(size.l) },
  text: { fontWeight: 'bold' },
});