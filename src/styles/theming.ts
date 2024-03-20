import { createTheming } from '@callstack/react-theme-provider';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import { AppThemes, ThemeProviderType } from '_types/index';

export const themes = {
  dark: {
    title: AppThemes.Dark,
    themeColors: {
     orange: '#E9853A',
     dark: '#21202D',
     grey: '#636070',
     white: '#FFFFFF',
    },
    backgroundColors: {
      background: '#0E0E1D',
    },
  } as ThemeType,
};

const { ThemeProvider, withTheme, useTheme } = createTheming(themes?.dark);

const IThemeProviders = ThemeProvider as ThemeProviderType<ThemeType>;

export { IThemeProviders, useTheme, withTheme };
