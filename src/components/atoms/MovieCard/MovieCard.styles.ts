import { StyleSheet } from 'react-native';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import { scale, verticalScale } from '_styles/scaling';

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    cardContainer: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: verticalScale(24),
    },
    imageStyle: {
      width: scale(110),
      height: scale(110),
      borderRadius: scale(12),
    },
    textContainer: {
      flex: 1,
      marginStart: scale(32),
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    genreTextStyle: {
      marginTop: verticalScale(8),
      color: theme?.themeColors?.orange,
    },
    descriptionTextStyle: {
      marginTop: verticalScale(16),
      color: theme?.themeColors?.grey,
    },
  });
