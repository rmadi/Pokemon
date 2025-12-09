import '@testing-library/jest-native/extend-expect';
import 'whatwg-fetch';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('react-native-sound', () => {
  const Mock = function () {};
  (Mock as any).setCategory = jest.fn();
  (Mock as any).prototype.play = function (cb?: (success: boolean) => void) { cb?.(true); };
  (Mock as any).prototype.release = function () {};
  
  return Mock;
});
jest.mock('@env', () => ({
  BASE_API_URL: 'https://pokeapi.co/api/v2',
}));

jest.mock("react-native-bootsplash", () => {
  return {
    //@ts-ignore
    hide: jest.fn().mockResolvedValue(),
    isVisible: jest.fn().mockResolvedValue(false),
    useHideAnimation: jest.fn().mockReturnValue({
      container: {},
      logo: { source: 0 },
      brand: { source: 0 },
    }),
  };
});