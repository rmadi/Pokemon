export const getPokemonId = (uri: string) => {
  const findId = uri.split('/').filter(Boolean);
    console.log('findId[findId.length - 1]:', findId[findId.length])

  return findId[findId.length - 1];
};
