import { StyleSheet } from 'react-native';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import { scale, verticalScale } from '_styles/scaling';

const globalStyles = (theme: ThemeType) =>
  StyleSheet.create({
    flexOne: {
      flex: 1,
    },
    mainWrapperPaddingBottom: { paddingBottom: verticalScale(20) },
    mainWrapperPaddingHorizontal: { paddingHorizontal: scale(20) },
    mainBackgroundColor: { backgroundColor: theme?.backgroundColors?.background },
    textStyle: { color: theme?.themeColors?.white},
  });

export default globalStyles;
