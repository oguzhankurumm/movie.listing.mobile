import { Platform } from 'react-native';

const getAutomationTestingProp = (id?: string) => {
  if (id) {
    if (Platform.OS === 'ios') {
      return { testID: id };
    }
    return { accessibilityLabel: id };
  }
  return null;
};

export { getAutomationTestingProp };
