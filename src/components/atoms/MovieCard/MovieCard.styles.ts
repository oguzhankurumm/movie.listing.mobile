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
      width: scale(90),
      height: scale(90),
      borderRadius: scale(12),
    },
    textContainer: {
      flex: 1,
      marginStart: scale(16),
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    descriptionTextStyle: {
      marginTop: verticalScale(8),
      color: theme?.themeColors?.grey,
    },
  });
