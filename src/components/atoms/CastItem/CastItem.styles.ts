import { StyleSheet } from 'react-native';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import { scale } from '_styles/scaling';

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: theme?.themeColors?.dark,
      paddingVertical: scale(9),
      paddingHorizontal: scale(9),
      marginBottom: scale(8),
      borderRadius: scale(32),
    },
    imageStyle: {
      width: scale(32),
      height: scale(32),
      borderRadius: scale(32),
    },
    textContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginStart: scale(9),
    },
  });
