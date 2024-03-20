import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

import { CustomText, MovieCard } from '_atoms';
import { useTranslate } from '_hooks/useTranslate';
import { AppWrapper, SearchWithIcon } from '_organisms';
import { height, width } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './Home.style';
import { MovieItemTypes } from './Home.types';
import { useHome } from './hooks/useHome';

const Home = () => {
  const theme = useTheme();
  const { translate } = useTranslate();

  const { container, listHeaderContainer, subTitleStyle, searchInputStyle } = useMemo(
    () => styles(theme),
    [theme]
  );

  const { moviesData, onSelectMovie, searchHandler, isLoading } = useHome();

  const renderItem = useCallback((item: MovieItemTypes, testId?: string) => {
    return (
      <MovieCard
        key={item?.id}
        testId={testId}
        title={item?.original_title}
        description={item?.overview}
        image={item?.poster_path}
        onItemPress={() => onSelectMovie(item?.id.toString())}
      />
    );
  }, []);

  return (
    <AppWrapper overrideStyle={container} testId='home'>
      {!isLoading && (
        <FlashList
          ListHeaderComponent={
            <View style={listHeaderContainer}>
              <CustomText text={translate('home.title')} textFontStyle='header' />
              <CustomText
                text={translate('home.subtitle')}
                textFontStyle='caption'
                overrideStyle={subTitleStyle}
              />
              <SearchWithIcon
                placeholder={translate('home.search')}
                searchHandler={searchHandler}
                overrideContainerStyle={searchInputStyle}
              />
            </View>
          }
          showsVerticalScrollIndicator={false}
          data={moviesData}
          keyExtractor={item => item?.id.toString()}
          renderItem={({ item, index }: { item: MovieItemTypes; index: number }) =>
            renderItem(item, `home.movies.${index}`)
          }
          estimatedItemSize={200}
          estimatedListSize={{ height, width }}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </AppWrapper>
  );
};

export default Home;
