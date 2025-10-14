import { Dimensions } from 'react-native';

const size = {
  l: 5,
  lx: 8,
  xs: 10,
  s: 12,
  default: 14,
  md: 16,
  mmd: 18,
  lg: 20,
  xlg: 24,
  xxlg: 30,
  xxxlg: 39,
};

const colors = {
  primary: '#83B011',
  secondary: '#0078C6',
  white: '#fff',
  black: '#141414',
  grey: '#D1D1D1',
  border: '#DEF4F8',
  label: '#5A5D64',
  error: '#FF0000',
};
export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;
export const gap = 10;

const horizontalScale = (x: number) => (width / guidelineBaseWidth) * x;
const verticalScale = (x: number) => (height / guidelineBaseHeight) * x;
const moderateScale = (x: number, factor = 0.5) =>
  x + (horizontalScale(x) - x) * factor;

export { horizontalScale, verticalScale, moderateScale };
export const { width, height, scale, fontScale } = Dimensions.get('window');
export { size, colors };
