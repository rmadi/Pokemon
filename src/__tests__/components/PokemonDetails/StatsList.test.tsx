import React from 'react';
import { render } from '@testing-library/react-native';
import StatsList from '../../../components/PokemonDetails/StatsList';

const stats = [{ base_stat: 45, effort: 0, stat: { name: 'hp', url: '' } }, { base_stat: 49, effort: 0, stat: { name: 'attack', url: '' } }] as any;

test('check stats', () => {
  const { getByText } = render(<StatsList item={{ stats, barColor: '#48D0B0' }} />);
  expect(getByText('Base Stats')).toBeTruthy();
  expect(getByText('hp')).toBeTruthy();
  expect(getByText('45')).toBeTruthy();
  expect(getByText('attack')).toBeTruthy();
  expect(getByText('49')).toBeTruthy();
});
