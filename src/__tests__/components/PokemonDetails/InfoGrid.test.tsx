import React from 'react';
import { render } from '@testing-library/react-native';
import InfoGrid from '../../../components/PokemonDetails/InfoGrid';

test('shows  height and weight', () => {
  const { getByText } = render(<InfoGrid item={{ height: 7, weight: 69 }} />);
  expect(getByText(/0\.7 m/)).toBeTruthy();
  expect(getByText(/6\.9 kg/)).toBeTruthy();
});
