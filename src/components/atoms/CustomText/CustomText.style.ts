import { StyleSheet } from 'react-native';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import globalStyles from '_styles/globalStyles';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    textStyle: {
      ...globalStyles(theme)?.textStyle,
    },
  });

export default styles;
