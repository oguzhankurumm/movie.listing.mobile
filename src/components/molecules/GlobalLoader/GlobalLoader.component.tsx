import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '_redux/store/configureStore';
import { getAutomationTestingProp } from '_utils/helpers';

import CustomActivityIndicator from '../../atoms/CustomActivityIndicator/CustomActivityIndicator.component';
import styles from './GlobalLoader.style';
import { GlobalLoaderPropsTypes } from './GlobalLoader.types';

const { container } = styles();

const GlobalLoader: React.FC<GlobalLoaderPropsTypes> = ({
  testId = '',
  overrideContainerStyle = undefined,
  activityIndicatorProps = {
    loaderColor: '#fff',
    loaderSize: 'large',
  },
}) => {
  const { isLoading } = useSelector((state: RootState) => state.loadingState);

  return isLoading ? (
    <View {...getAutomationTestingProp(testId)} style={[container, overrideContainerStyle]}>
      <CustomActivityIndicator {...activityIndicatorProps} />
    </View>
  ) : null;
};

export default GlobalLoader;
