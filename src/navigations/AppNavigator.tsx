import React from 'react';
import { useSelector } from 'react-redux';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTranslate } from '_hooks/useTranslate';
import { GlobalLoader } from '_molecules';
import { themeStore } from '_redux/reducers/theme';
import Home from '_scenes/Home/Home.component';
import MovieDetails from '_scenes/MovieDetails/MovieDetails.component';
import { IThemeProviders } from '_styles/theming';

import Scenes from './Scenes';

const MainStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  const themeState = useSelector(themeStore);
  const { translate } = useTranslate();

  return (
    <IThemeProviders theme={themeState && themeState?.data}>
      <GlobalLoader />
      <MainStackNavigator.Navigator
        initialRouteName={Scenes.home}
        screenOptions={{
          gestureEnabled: true,
          headerShown: true,
          animation: 'slide_from_right',
          headerTintColor: themeState?.data?.themeColors?.white,
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: themeState?.data?.backgroundColors?.background,
          },
        }}>
        <MainStackNavigator.Screen
          name={Scenes.home}
          component={Home}
          options={{
            headerTitle: translate('home.headerTitle'),
          }}
        />
        <MainStackNavigator.Screen
          name={Scenes.movieDetails}
          component={MovieDetails}
          options={{
            headerTitle: translate('movieDetails.headerTitle'),
          }}
        />
      </MainStackNavigator.Navigator>
    </IThemeProviders>
  );
};

export default AppNavigator;
