import React from 'react';
import { ActivityIndicator } from 'react-native';

import { getAutomationTestingProp } from '_utils/helpers';

import styles from './CustomActivityIndicator.style';
import { CustomActivityIndicatorPropsTypes } from './CustomActivityIndicator.types';

const { loaderStyle } = styles();

const CustomActivityIndicator: React.FC<CustomActivityIndicatorPropsTypes> = ({
  testId = '',
  loaderColor = '',
  isAnimating = true,
  loaderSize = 'small',
  overrideStyle,
  hidesWhenStopped = false,
}) => {
  return (
    <ActivityIndicator
      size={loaderSize}
      color={loaderColor}
      style={[loaderStyle, overrideStyle]}
      animating={isAnimating}
      {...getAutomationTestingProp(testId)}
      hidesWhenStopped={hidesWhenStopped}
    />
  );
};

export default CustomActivityIndicator;
