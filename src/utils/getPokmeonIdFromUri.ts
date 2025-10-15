export const getPokemonId = (uri: string) => {
  const findId = uri.split('/').filter(Boolean);

  return findId[findId.length - 1];
};
