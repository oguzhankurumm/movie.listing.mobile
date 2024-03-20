import { StyleSheet } from 'react-native';

import { moderateScale, verticalScale } from '_styles/scaling';

export const Fonts = {
  Roboto: 'Roboto-Regular',
  RobotoBold: 'Roboto-Bold',
};

const AppFonts = {
  regular: Fonts.Roboto, // 400
  bold: Fonts.RobotoBold, // 700
};

export const TextStyle = StyleSheet.create({
  // ** Start Header Font **
  header: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(24),
    lineHeight: verticalScale(24),
  },
  // ** End Header Font **

  // ** Start Title Font **
  title: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(20),
    lineHeight: verticalScale(20),
  },
  // ** End Title Font **

  // ** Start Caption Font **
  caption: {
    fontFamily: AppFonts.regular,
    fontSize: moderateScale(16),
    lineHeight: verticalScale(16),
  },
  // ** End Caption Font **

  // ** Start Body Font **
  body: {
    fontFamily: AppFonts.regular,
    fontSize: moderateScale(12),
    lineHeight: undefined,
  },
  // ** End Body Font **
});

export type TextStyleTypes = keyof typeof TextStyle;
