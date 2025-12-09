import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import CryptoJS from 'crypto-js';

import { BASE_API } from '../../utils/baseUrl';
import {
  Pokemon,
  PokemonListResponse,
  PokemonSpecies,
} from '../../type/pokemonResponseTypes';
import { SECRET_KEY as Secret } from '@env';


const SECRET_KEY = Secret;


function signRequest(path: string, body: any = {}) {
  const timestamp = Date.now().toString();
  const nonce = Math.random().toString(36).substring(2, 12);

  const bodyString = JSON.stringify(body || {});

  const raw = path + bodyString + timestamp + nonce + SECRET_KEY;

  const signature = CryptoJS.SHA256(raw).toString();

  return { timestamp, nonce, signature };
}


export const PokemonApi = createApi({
  reducerPath: 'PokemonApi',

  baseQuery: async (args, api, extraOptions) => {
    const isObject = typeof args === 'object';

    const path = isObject ? args.url : args; 
    const body = isObject && args.body ? args.body : {};

    const { timestamp, nonce, signature } = signRequest(path, body);


    const base = fetchBaseQuery({
      baseUrl: BASE_API,
      prepareHeaders: headers => {
        headers.set('X-TIMESTAMP', timestamp);
        headers.set('X-NONCE', nonce);
        headers.set('X-SIGNATURE', signature);
        return headers;
      },
    });

    return base(args, api, extraOptions);
  },

  tagTypes: ['Pokemon'],
  keepUnusedDataFor: 1500,
  refetchOnReconnect: true,

  endpoints: builder => ({

    getPokemonList: builder.query<
      PokemonListResponse,
      { limit?: number; offset?: number }
    >({
      query: ({ limit, offset }) => `pokemon?limit=${limit}&offset=${offset}`,
    }),

    getPokemonById: builder.query<Pokemon, string | number>({
      query: pokemonId => `pokemon/${pokemonId}`,
    }),

    getPokemonSpecies: builder.query<PokemonSpecies, string | number>({
      query: idOrName => `pokemon-species/${idOrName}`,
    }),
  }),
});

export const {
  useGetPokemonListQuery,
  useGetPokemonByIdQuery,
  useGetPokemonSpeciesQuery,
} = PokemonApi;
