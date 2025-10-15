# Pokémon (React Native)

A React Native app that lists Pokémon from PokéAPI with grid/list views, infinite scroll, pull-to-refresh, and a detail screen featuring species color, official artwork, base stats, abilities, and a cry sound on image load.
Built with React Native 0.82, React 19, RTK Query, FlashList, and Jest/Testing Library.

## Features
- Fast lists via FlashList (grid + list toggle)
- Infinite scroll + pull-to-refresh
- React Navigation (stack)
- Detail screen with species color from `pokemon-species/:id`, official artwork fallback, base stats, abilities, height/weight, and sound
- Unit & component tests with ~84% coverage
- ESLint + TypeScript typecheck

## Requirements
- Node ≥ 20
- Java JDK 17 (Android)
- Xcode 15+ (iOS)

## Setup
```bash
npm install
# or
yarn
```

### Environment
Create `.env`:
```
BASE_API_URL=https://pokeapi.co/api/v2
```
Import with:
```ts
import { BASE_API_URL } from '@env'
```

## Run
```bash
npm run start
npm run android
npm run ios
```

Optional explicit dev scripts:
```json
"start:dev": "cross-env BASE_API_URL=https://pokeapi.co/api/v2 react-native start",
"android:dev": "cross-env BASE_API_URL=https://pokeapi.co/api/v2 react-native run-android",
"ios:dev": "cross-env BASE_API_URL=https://pokeapi.co/api/v2 react-native run-ios"
```
Then: `npm i -D cross-env`

## Testing
```bash
npm test
npm test -- --coverage
```

## Lint & Types
```bash
npm run lint
npm run lint:fix
npm run typecheck
```


## Notes
- Jest config uses transformIgnorePatterns for RN libs, FlashList, RTK, immer.
- jest.setup.ts mocks: reanimated, react-native-sound, and @env.
- Redux Persist configured; dev middleware warnings adjusted.

## Design Inspiration

This app’s UI was inspired by the community Figma design “Pokédex — Community”.  
Figma: https://www.figma.com/design/AmiWILZA3kkYEExFDaj16c/Pok%C3%A9dex--Community-?node-id=0-1&p=f&t=vW7qzpUVQ8y9zunw-0


## PS 
This README was drafted with the help of AI to improve clarity, structure, and design.