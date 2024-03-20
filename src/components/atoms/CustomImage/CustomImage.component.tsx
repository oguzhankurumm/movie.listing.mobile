import React, { useMemo } from 'react';

import { Image } from 'expo-image';

import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import styles from './CustomImage.style';
import { CustomImagePropsTypes } from './CustomImage.types';

const CustomImage: React.FC<CustomImagePropsTypes> = ({
  source,
  overrideStyle,
  testId = '',
  overrideResizeMode = 'cover',
  placeholder,
}) => {
  const theme = useTheme();
  const { imageStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <Image
      {...getAutomationTestingProp(testId)}
      source={source}
      style={overrideStyle ?? imageStyle}
      contentFit={source ? overrideResizeMode : 'contain'}
      recyclingKey={source?.toString()}
      placeholder={placeholder}
      placeholderContentFit={overrideResizeMode}
      transition={200}
    />
  );
};

export default CustomImage;
