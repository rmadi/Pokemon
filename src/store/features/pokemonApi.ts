import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_API } from '../../utils/baseUrl';
import { PokemonListResponse } from '../../type/pokemonResponseTypes';

export const PokemonApi = createApi({
  reducerPath: 'PokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API }),
  tagTypes: ['Pokemon'],
  endpoints: builder => ({
    // fetch pokmeon list by limit and offset
    getPokemonList: builder.query<
      PokemonListResponse,
      { limit?: number; offset?: number }
    >({
      query: ({ limit = 10, offset = 0 }) =>
        `pokemon?limit=${limit}&offset=${offset}`,
    }),
    getPokemonByName: builder.query<any, string>({
      query: name => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useLazyGetPokemonByNameQuery } =
  PokemonApi;
