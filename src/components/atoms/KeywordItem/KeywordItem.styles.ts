import { StyleSheet } from 'react-native';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import { scale, verticalScale } from '_styles/scaling';

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme?.themeColors?.orange,
      borderRadius: scale(9),
      paddingHorizontal: scale(10),
      paddingVertical: verticalScale(4),
    },
    textStyle: {
      color: theme?.themeColors?.dark,
    },
  });
