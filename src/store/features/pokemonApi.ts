import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_API } from '../../utils/baseUrl';
import { Pokemon, PokemonListResponse, PokemonSpecies } from '../../type/pokemonResponseTypes';

export const PokemonApi = createApi({
  reducerPath: 'PokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API }),
  tagTypes: ['Pokemon'],
  keepUnusedDataFor: 1500,
  refetchOnReconnect: true,

  endpoints: builder => ({
    // fetch pokmeon list by limit and offset
    getPokemonList: builder.query<
      PokemonListResponse,
      { limit?: number; offset?: number }
    >({
      // onQueryStarted: async ({ limit, offset }, { queryFulfilled }) => {
      //   console.log('offset:', offset);
      //   console.log('limit:', limit);
      // },
      query: ({ limit, offset }) => `pokemon?limit=${limit}&offset=${offset}`,
    }),
    getPokemonById: builder.query<Pokemon, string | number>({
      query: pokemonId => `pokemon/${pokemonId}`,
      async onQueryStarted(pokemonId, { queryFulfilled }) {
        console.log('[getPokemonByName] arg:', pokemonId);
        try {
          const { data } = await queryFulfilled;
          console.log('[getPokemonByName] data:', data);
        } catch (err) {
          console.log('[getPokemonByName] error:', err);
        }
      },
    }),

      getPokemonSpecies: builder.query<PokemonSpecies, string|number>({
      query: (idOrName) => `pokemon-species/${idOrName}`,
    }),
  }),
  
});

export const { useGetPokemonListQuery, useGetPokemonByIdQuery, useGetPokemonSpeciesQuery } = PokemonApi;
