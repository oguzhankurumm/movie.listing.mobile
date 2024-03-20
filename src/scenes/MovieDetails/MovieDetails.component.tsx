import React, { useMemo } from 'react';
import { ImageURISource, ScrollView, View } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { CustomImage, CustomText } from '_atoms';
import { useTranslate } from '_hooks/useTranslate';
import { AppWrapper } from '_organisms';
import { width } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './MovieDetails.style';
import { useMovieDetails } from './hooks/useMovieDetails';

const MovieDetails = () => {
  const { movieId } = useRoute().params as { movieId: string };

  const theme = useTheme();
  const { translate } = useTranslate();

  const {
    container,
    scrollViewContainer,
    contentContainer,
    posterImageStyle,
    descriptionTitleStyle,
    descriptionTextStyle,
  } = useMemo(() => styles(theme), [theme]);

  const { isLoading, movieInfo, posterImage } = useMovieDetails({ movieId });

  return (
    <AppWrapper overrideStyle={container} testId='movieDetails'>
      {!isLoading && (
        <ScrollView
          contentContainerStyle={scrollViewContainer}
          showsVerticalScrollIndicator={false}>
          <CustomImage source={posterImage as ImageURISource} overrideStyle={posterImageStyle} />
          <View style={contentContainer}>
            <CustomText text={movieInfo?.original_title} textFontStyle='header' />
            <CustomText
              text={translate('movieDetails.description')}
              textFontStyle='title'
              overrideStyle={descriptionTitleStyle}
            />
            <CustomText
              text={movieInfo?.overview}
              textFontStyle='body'
              overrideStyle={descriptionTextStyle}
            />
          </View>
        </ScrollView>
      )}
    </AppWrapper>
  );
};

export default MovieDetails;
