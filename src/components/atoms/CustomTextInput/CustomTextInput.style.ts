import { StyleSheet } from 'react-native';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import { scale, verticalScale } from '_styles/scaling';
import { TextStyle } from '_styles/typography';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    inputContainer: {
      paddingVertical: scale(10),
      paddingHorizontal: scale(10),
      minHeight: verticalScale(41),
      height: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: scale(8),
    },
    focusedInput: {
      borderColor: theme?.themeColors?.white,
    },
    errorStyle: {
      backgroundColor: theme?.themeColors?.orange,
      borderColor: theme?.themeColors?.orange,
    },
    disabledStyle: {
      backgroundColor: theme?.themeColors?.grey,
      borderColor: theme?.themeColors?.grey,
    },
    inputStyle: {
      ...TextStyle?.body,
      color: theme?.themeColors?.white,
      flex: 1,
      padding: 0,
      textAlign: 'left',
    },
    disabledInput: {
      ...TextStyle.body,
      lineHeight: undefined,
      padding: 0,
      flex: 1,
      color: theme?.themeColors?.grey,
      textAlign: 'left',
    },
  });

export default styles;
