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
      flex: 1,
      paddingBottom: verticalScale(20),
    },
    contentContainer: {
      paddingTop: verticalScale(24),
      paddingHorizontal: scale(24),
    },
    posterImageStyle: {
      aspectRatio: 1,
    },
    descriptionTitleStyle: {
      marginTop: verticalScale(16),
    },
    descriptionTextStyle: {
      marginTop: verticalScale(16),
    },
  });

export default styles;
