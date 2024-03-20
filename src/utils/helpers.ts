import { ImageSourcePropType, Platform } from 'react-native';

const getAutomationTestingProp = (id?: string) => {
  if (id) {
    if (Platform.OS === 'ios') {
      return { testID: id };
    }
    return { accessibilityLabel: id };
  }
  return null;
};

const getImagePath = (path: ImageSourcePropType) => `https://image.tmdb.org/t/p/original${path}`

export { getAutomationTestingProp, getImagePath };
