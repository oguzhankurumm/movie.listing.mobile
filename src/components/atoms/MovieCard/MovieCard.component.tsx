import React, { useMemo } from 'react';
import { ImageSourcePropType, TouchableOpacity, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import CustomImage from '../CustomImage/CustomImage.component';
import CustomText from '../CustomText/CustomText.component';
import { styles } from './MovieCard.styles';
import { MovieCardProps } from './MovieCard.types';

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  genre,
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

  const { cardContainer, imageStyle, textContainer, genreTextStyle, descriptionTextStyle } =
    useMemo(() => styles(theme), [theme]);
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
        source={image as ImageSourcePropType}
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
          overrideStyle={genreTextStyle}
          text={genre}
          textFontStyle='caption'
          testId={`${testId}.genre`}
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
            numberOfLines: 3,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
