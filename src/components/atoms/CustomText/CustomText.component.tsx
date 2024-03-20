import React, { useMemo } from 'react';
import { Text } from 'react-native';

import { useTheme } from '_styles/theming';
import { TextStyle } from '_styles/typography';
import { getAutomationTestingProp } from '_utils/helpers';

import styles from './CustomText.style';
import { CustomTextPropsTypes } from './CustomText.types';

const CustomText: React.FC<CustomTextPropsTypes> = ({
  text,
  overrideStyle,
  textFontStyle = 'body',
  onPress,
  restTextProps,
  testId = '',
}) => {
  const theme = useTheme();
  const { textStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <Text
      {...getAutomationTestingProp(testId)}
      {...restTextProps}
      style={[textStyle, textFontStyle && TextStyle[textFontStyle], overrideStyle]}
      onPress={onPress}
      allowFontScaling={false}>
      {text}
    </Text>
  );
};

export default CustomText;
