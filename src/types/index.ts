type MainTypes = {
  testId?: string;
};

type ThemeProviderType<Theme> = React.ComponentType<{
  children?: React.ReactNode;
  theme?: Theme;
}>;

enum AppThemes {
  Dark = 'dark',
}

export { AppThemes };

export type { ThemeProviderType,};

export default MainTypes;
