import { useEffect, useState } from 'react';

import * as Font from 'expo-font';

import fontsObject from '_assets/fonts/fontsObject';
import { Alert } from 'react-native';

const roboto = fontsObject?.Roboto;
const robotoBold = fontsObject?.RobotoBold;

export default function useAssets() {
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);

  // Load the assets before rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          'Roboto-Regular': roboto, // 400
          'Roboto-Bold': robotoBold, // 700
        });
      } catch (e: any) {
        Alert.alert('Error', e.message);
      } finally {
        setIsAssetsLoaded(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isAssetsLoaded;
}
