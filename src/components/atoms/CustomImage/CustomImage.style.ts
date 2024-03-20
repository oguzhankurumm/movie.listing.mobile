import { StyleSheet } from 'react-native';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import { scale } from '_styles/scaling';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    imageStyle: {
      width: scale(24),
      height: scale(24),
      tintColor: theme?.themeColors?.grey,
    },
  });

export default styles;
