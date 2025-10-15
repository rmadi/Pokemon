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
  image: 70,
};

const colors = {
  primary: '#3C5AA6',
  secondary: '#FFCB05',
  accent: '#E3350D',
  background: '#f5f7fa',
  text: '#2D2D2D',
  grey: '#D3D3D3',
  white: '#f0f3f9',
  black:'#000',
  
};
  export const speciesColor: Record<string, string> = {
  black:  '#3c3c3c',
  blue:   '#77BDFE',
  brown:  '#B1736C',
  gray:   '#A0A0A0',
  green:  '#48D0B0',
  pink:   '#F4A4C7',
  purple: '#9B6DF0',
  red:    '#FB6C6C',
  white:  '#F5F7FA',
  yellow: '#FFD76F',
};

export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;
export const gap = 5;
export  const LIMIT = 12;
const horizontalScale = (x: number) => (width / guidelineBaseWidth) * x;
const verticalScale = (x: number) => (height / guidelineBaseHeight) * x;
const moderateScale = (x: number, factor = 0.5) =>
  x + (horizontalScale(x) - x) * factor;

export { horizontalScale, verticalScale, moderateScale };
export const { width, height, scale, fontScale } = Dimensions.get('window');
export { size, colors };
