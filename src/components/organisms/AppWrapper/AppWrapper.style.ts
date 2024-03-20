import { Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import globalStyles from '_styles/globalStyles';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    mainContainerStyle: {
      ...globalStyles(theme)?.flexOne,
      backgroundColor: theme?.backgroundColors?.background,
    },
    containerStyle: {
      ...globalStyles(theme)?.flexOne,
      ...globalStyles(theme).mainWrapperPaddingBottom,
    },
    body: {
      ...globalStyles(theme).mainWrapperPaddingHorizontal,
      ...globalStyles(theme)?.flexOne,
      ...Platform.select({
        ios: {
          paddingTop: 0,
        },
        android: {
          paddingTop: getStatusBarHeight(),
        },
        default: {
          // other platforms, web for example
          paddingTop: 0,
        },
      }),
    },
  });

export default styles;
