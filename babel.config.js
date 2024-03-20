const plugins = [
  [
    'module-resolver',
    {
      root: ['.'],
      extensions: ['.ts', '.jsx', '.js', '.json', '.svg'],
      alias: {
        _assets: './src/assets',
        _atoms: './src/components/atoms',
        _molecules: './src/components/molecules',
        _organisms: './src/components/organisms',
        _hooks: './src/hooks',
        _locales: './src/locales',
        _navigations: './src/navigations',
        _queries: './src/queries',
        _redux: './src/redux',
        _scenes: './src/scenes',
        _services: './src/services',
        _styles: './src/styles',
        _types: './src/types',
        _utils: './src/utils',
      },
    },
  ],
  'react-native-reanimated/plugin',
];
if (process?.env?.NODE_ENV !== 'development') {
  plugins.push('transform-remove-console');
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: plugins,
  };
};
