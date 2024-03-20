import { StyleSheet } from 'react-native';

import { ThemeType } from '_redux/stateTypes/ThemeType';
import { verticalScale} from '_styles/scaling';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    listHeaderContainer: {
      marginBottom: verticalScale(24),
    },
    subTitleStyle: {
      marginTop: verticalScale(8),
    },
    searchInputStyle: {
      marginTop: verticalScale(24),
    },
  });

export default styles;
