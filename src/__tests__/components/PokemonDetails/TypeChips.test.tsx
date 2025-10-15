import React from 'react';
import { render } from '@testing-library/react-native';
import TypeChips from '../../../components/PokemonDetails/TypeChips';

const types = [{ slot: 1, type: { name: 'grass', url: '' } }, { slot: 2, type: { name: 'poison', url: '' } }] as any;

test('renders types with bg color', () => {
  const { getByText } = render(<TypeChips item={{ types, bgColor: '#48D0B0' }} />);
  expect(getByText('grass')).toBeTruthy();
  expect(getByText('poison')).toBeTruthy();
});
