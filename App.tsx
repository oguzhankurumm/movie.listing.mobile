import React, { useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';

import useAssets from '_hooks/useAssets';
import i18next from '_locales/i18n';
import AppNavigator from '_navigations/AppNavigator';
import NavigationServices from '_navigations/NavigationServices';
import { store } from '_redux/store/configureStore';
import globalStyles from '_styles/globalStyles';
import { useTheme } from '_styles/theming';
import { AppThemes } from '_types/index';

const queryClient = new QueryClient();

const App = () => {
  const theme = useTheme();
  const isDarkMode = useMemo(() => theme?.title === AppThemes.Dark, [theme?.title]);
  const isAssetsLoaded = useAssets();
  const navigationRef = useNavigationContainerRef();

  return (
    isAssetsLoaded && (
      <Provider store={store}>
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18next}>
            <GestureHandlerRootView style={globalStyles(theme).flexOne}>
              <NavigationContainer
                ref={navigatorRef => {
                  navigationRef.current = navigatorRef;
                  NavigationServices.setTopLevelNavigator(navigatorRef);
                }}>
                <AppNavigator />
              </NavigationContainer>
            </GestureHandlerRootView>
          </I18nextProvider>
        </QueryClientProvider>
      </Provider>
    )
  );
};

export default App;
