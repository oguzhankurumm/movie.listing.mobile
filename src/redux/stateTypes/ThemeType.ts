import { AppThemes } from '_types/index';

import { MainState } from './index';

export interface State extends MainState {
  data: ThemeType;
}

export interface ThemeType {
  title: AppThemes;
  themeColors: {
    orange: string;
    grey: string;
    white: string;
  };
  backgroundColors: {
    background: string;
  };
}
