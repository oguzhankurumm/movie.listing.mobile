import { StyleSheet } from 'react-native';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import { scale, verticalScale } from '_styles/scaling';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 0,
    },
    scrollViewContainer: {
      paddingBottom: verticalScale(20),
    },
    contentContainer: {
      paddingTop: verticalScale(24),
      paddingHorizontal: scale(24),
    },
    posterImageStyle: {
      aspectRatio: 1,
    },
    mt16: {
      marginTop: verticalScale(16),
    },
    mt24: {
      marginTop: verticalScale(24),
    },
    mb24: {
      marginBottom: verticalScale(16),
    },
    keywordsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: verticalScale(16),
      gap: scale(8),
    },
  });

export default styles;
