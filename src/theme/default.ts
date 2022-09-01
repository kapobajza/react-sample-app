import { DefaultTheme } from 'styled-components';

import { applyColorTransparency, lightColors } from './colors';

const getSizeInPx = (val: number) => `${val}px`;

export const defaultTheme: DefaultTheme = {
  name: 'light',
  colors: lightColors,
  applyColorTransparency,
  spacing: (val) => getSizeInPx(val * 8),
  sizes: {
    navigationBarHeight: getSizeInPx(50),
  },
  getSizeInPx,
  fontSizes: {
    Size16: 16,
    Size20: 20,
    Size24: 24,
  },
};
