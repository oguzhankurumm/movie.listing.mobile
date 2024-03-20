import React, { useMemo } from 'react';
import { ImageURISource, ScrollView, View } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { CastItemProps } from 'src/components/atoms/CastItem/CastItem.types';
import { KeywordItemProps } from 'src/components/atoms/KeywordItem/KeywordItem.types';
import { ReviewItemProps } from 'src/components/atoms/ReviewItem/ReviewItem.types';

import { CastItem, CustomImage, CustomText, KeywordItem, ReviewItem } from '_atoms';
import { useTranslate } from '_hooks/useTranslate';
import { AppWrapper } from '_organisms';
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
    mt24,
    mt16,
    posterImageStyle,
    keywordsContainer,
    mb24,
  } = useMemo(() => styles(theme), [theme]);

  const { isLoading, movieInfo, keywordsData, castData, reviewsData, posterImage } =
    useMovieDetails({
      movieId,
    });

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
              text={translate('movieDetails.overview')}
              textFontStyle='title'
              overrideStyle={mt16}
            />
            <CustomText text={movieInfo?.overview} textFontStyle='body' overrideStyle={mt16} />
            <CustomText
              text={translate('movieDetails.keywords')}
              textFontStyle='title'
              overrideStyle={mt24}
            />
            {/* KEYWORDS LIST */}
            {keywordsData && (
              <View style={keywordsContainer}>
                {keywordsData.map((keyword: KeywordItemProps, index: number) => (
                  <KeywordItem
                    testId={`movieDetails.keywords.${keyword.name}`}
                    name={keyword.name}
                    key={`${keyword.name}-${index}`}
                  />
                ))}
              </View>
            )}
            {/* CAST LIST */}
            {castData && (
              <View style={mt24}>
                <CustomText
                  text={translate('movieDetails.actors')}
                  textFontStyle='title'
                  overrideStyle={mb24}
                />
                {castData.map((cast: CastItemProps) => (
                  <CastItem
                    testId={`movieDetails.cast.${cast?.id}`}
                    key={cast?.id}
                    name={cast?.name}
                    character={cast?.character}
                    profile_path={cast.profile_path}
                  />
                ))}
              </View>
            )}
            {/* REVIEWS */}
            {reviewsData && (
              <View style={mt24}>
                <CustomText
                  text={translate('movieDetails.reviews')}
                  textFontStyle='title'
                  overrideStyle={mb24}
                />
                {reviewsData.map((review: ReviewItemProps) => (
                  <ReviewItem
                    testId={`movieDetails.reviews.${review?.id}`}
                    key={review?.id}
                    author_details={review?.author_details}
                    content={review?.content}
                    created_at={review?.created_at}
                  />
                ))}
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </AppWrapper>
  );
};

export default MovieDetails;
