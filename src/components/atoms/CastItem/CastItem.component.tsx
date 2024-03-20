import React, { useMemo } from 'react';
import { ImageURISource, View } from 'react-native';

import { useTranslate } from '_hooks/useTranslate';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp, getImagePath } from '_utils/helpers';

import CustomImage from '../CustomImage/CustomImage.component';
import CustomText from '../CustomText/CustomText.component';
import { styles } from './CastItem.styles';
import { CastItemProps } from './CastItem.types';

const CastItem: React.FC<CastItemProps> = ({
  name,
  character,
  profile_path,
  imageOverrideStyle,
  containerStyle,
  imageProps,
  overrideResizeMode,
  testId = '',
}) => {
  const theme = useTheme();
  const image = getImagePath(profile_path);
  const { translate } = useTranslate();

  const { container, imageStyle, textContainer } = useMemo(() => styles(theme), [theme]);
  return (
    <View {...getAutomationTestingProp(testId)} style={[container, containerStyle]}>
      <CustomImage
        {...getAutomationTestingProp(`${testId}.customImage`)}
        overrideStyle={[imageStyle, imageOverrideStyle]}
        overrideResizeMode={overrideResizeMode}
        source={image as ImageURISource}
        {...imageProps}
      />
      <View style={textContainer}>
        <CustomText text={name} textFontStyle='caption' testId={`${testId}.name`} />
        <CustomText text={character} textFontStyle='body' testId={`${testId}.character`} />
      </View>
    </View>
  );
};

export default CastItem;
