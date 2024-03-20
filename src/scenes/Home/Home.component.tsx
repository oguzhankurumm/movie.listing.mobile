import React, { useCallback, useMemo } from 'react';
import {
  ImageSourcePropType,
  NativeSyntheticEvent,
  RefreshControl,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';

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

  const {
    movies,
    onSelectMovie,
    setSearchTerm,
    onSubmitSearch,
    isRefetching,
    isLoading,
    onRefresh,
  } = useHome();

  const renderItem = useCallback((item: MovieItemTypes, testId?: string) => {
    return (
      <MovieCard
        key={item?._id}
        testId={testId}
        title={item?.title}
        genre={item?.genre}
        description={item?.description}
        image={item?.image as ImageSourcePropType}
        onItemPress={() => onSelectMovie(item)}
      />
    );
  }, []);

  return (
    <AppWrapper overrideStyle={container} testId='home'>
      <FlashList
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={isRefetching ?? false}
            tintColor={theme?.themeColors?.white}
          />
        }
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
              searchHandler={(text: string) => {
                setSearchTerm(text);
              }}
              overrideContainerStyle={searchInputStyle}
              onSubmitSearch={(text: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
                onSubmitSearch(text);
              }}
            />
          </View>
        }
        showsVerticalScrollIndicator={false}
        data={movies}
        keyExtractor={item => item?._id}
        renderItem={({ item, index }: { item: MovieItemTypes; index: number }) =>
          renderItem(item, `home.movies.${index}`)
        }
        estimatedItemSize={200}
        estimatedListSize={{ height, width }}
        showsHorizontalScrollIndicator={false}
      />
    </AppWrapper>
  );
};

export default Home;
