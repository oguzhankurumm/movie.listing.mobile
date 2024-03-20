import React, { useMemo } from 'react';
import { ImageURISource, TouchableOpacity, View } from 'react-native';

import { useTheme } from '_styles/theming';
import { getAutomationTestingProp, getImagePath } from '_utils/helpers';

import CustomImage from '../CustomImage/CustomImage.component';
import CustomText from '../CustomText/CustomText.component';
import { styles } from './MovieCard.styles';
import { MovieCardProps } from './MovieCard.types';

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  image,
  imageOverrideStyle,
  containerStyle,
  onItemPress,
  imageProps,
  overrideResizeMode,
  disabled = false,
  testId = '',
}) => {
  const theme = useTheme();
  const posterUrl = getImagePath(image);

  const { cardContainer, imageStyle, textContainer, descriptionTextStyle } = useMemo(
    () => styles(theme),
    [theme]
  );
  return (
    <TouchableOpacity
      {...getAutomationTestingProp(testId)}
      onPress={onItemPress}
      style={[cardContainer, containerStyle]}
      activeOpacity={0.8}
      disabled={disabled}>
      <CustomImage
        {...getAutomationTestingProp(`${testId}.customImage`)}
        overrideStyle={[imageStyle, imageOverrideStyle]}
        overrideResizeMode={overrideResizeMode}
        source={posterUrl as ImageURISource}
        {...imageProps}
      />
      <View style={textContainer}>
        <CustomText
          text={title}
          textFontStyle='title'
          testId={`${testId}.title`}
          restTextProps={{
            numberOfLines: 1,
          }}
        />
        <CustomText
          overrideStyle={descriptionTextStyle}
          text={description}
          textFontStyle='body'
          testId={`${testId}.description`}
          restTextProps={{
            numberOfLines: 4,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
