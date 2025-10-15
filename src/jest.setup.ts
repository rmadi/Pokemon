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
