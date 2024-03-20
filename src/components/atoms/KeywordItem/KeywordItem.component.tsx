import React, { useMemo } from 'react';
import { View } from 'react-native';

import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import CustomText from '../CustomText/CustomText.component';
import { styles } from './KeywordItem.styles';
import { KeywordItemProps } from './KeywordItem.types';

const KeywordItem: React.FC<KeywordItemProps> = ({ name, containerStyle, testId = '' }) => {
  const theme = useTheme();
  const { container, textStyle } = useMemo(() => styles(theme), [theme]);
  return (
    <View {...getAutomationTestingProp(testId)} style={[container, containerStyle]}>
      <CustomText text={name} textFontStyle='body' overrideStyle={textStyle} />
    </View>
  );
};

export default KeywordItem;
