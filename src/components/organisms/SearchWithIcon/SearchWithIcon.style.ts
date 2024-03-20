import { StyleSheet } from 'react-native';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import { scale } from '_styles/scaling';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchInputContainer: {
      flex: 1,
      borderWidth: 0,
      backgroundColor: theme?.themeColors?.dark,
    },
    searchIconStyle: {
      marginRight: scale(10),
      tintColor: theme?.themeColors?.orange,
      width: scale(24),
      height: scale(24),
    },
  });

export default styles;
