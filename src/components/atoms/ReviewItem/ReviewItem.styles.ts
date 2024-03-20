import { StyleSheet } from 'react-native';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import { scale } from '_styles/scaling';

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme?.themeColors?.dark,
      borderRadius: scale(9),
      padding: scale(9),
      marginBottom: scale(8),
      gap: scale(10),
    },
    nameContainer: {
      flex: 1,
      flexDirection: 'row',
      gap: scale(4),
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    usernameText: {
      color: theme?.themeColors?.grey,
    },
    dateText: {
      color: theme?.themeColors?.grey,
    },
  });
