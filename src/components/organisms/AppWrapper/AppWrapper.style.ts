import { Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import globalStyles from '_styles/globalStyles';
import { verticalScale } from '_styles/scaling';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    mainContainerStyle: {
      ...globalStyles(theme)?.flexOne,
      paddingTop: verticalScale(24),
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
          paddingTop: 0,
        },
        default: {
          // other platforms, web for example
          paddingTop: 0,
        },
      }),
    },
  });

export default styles;
