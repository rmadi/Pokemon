import { formatPokemonId } from '../../utils/getPokmeonIdFromUri';
test('add  # based on id number use pad ', () => {
  expect(formatPokemonId('1')).toBe('#001');
  expect(formatPokemonId('10')).toBe('#010');
  expect(formatPokemonId('123')).toBe('#123');
});
