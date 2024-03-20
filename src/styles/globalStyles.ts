import { StyleSheet } from 'react-native';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import { scale, verticalScale } from '_styles/scaling';

const globalStyles = (theme: ThemeType) =>
  StyleSheet.create({
    flexOne: {
      flex: 1,
    },
    mainWrapperPaddingBottom: { paddingBottom: verticalScale(24) },
    mainWrapperPaddingHorizontal: { paddingHorizontal: scale(24) },
    mainBackgroundColor: { backgroundColor: theme?.backgroundColors?.background },
    textStyle: { color: theme?.themeColors?.white},
  });

export default globalStyles;
