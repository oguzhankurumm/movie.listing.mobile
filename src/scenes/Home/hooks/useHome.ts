import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Alert, FlatList, LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';
import { useSelector } from 'react-redux';

import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { useAppDispatch } from '_redux/store/configureStore';
import { MovieItemTypes } from '../Home.types';

export const useHome = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isRefetching, setIsRefetching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const movies = [
    {
      _id: '0',
      title: 'The Witcher',
      image: 'https://lh3.googleusercontent.com/proxy/2JArUPomGr2PP7U1OS3i50FHrVdfs3GvkKpd9NsCzC8zkCVB0xx5OZW-gxaEwtFnYXFCVqIYV89Ij9yqktIWEDYuhIDaojmtJxldlVjmTZA',
      description: 'The Witcher is a Polish-American fantasy drama streaming television series produced by Lauren Schmidt Hissrich. It is based on the book series of the same name by Andrzej Sapkowski.',
      genre: 'Action',
    },
    {
      _id: '1',
      title: 'The Witcher',
      image: 'https://lh3.googleusercontent.com/proxy/2JArUPomGr2PP7U1OS3i50FHrVdfs3GvkKpd9NsCzC8zkCVB0xx5OZW-gxaEwtFnYXFCVqIYV89Ij9yqktIWEDYuhIDaojmtJxldlVjmTZA',
      description: 'The Witcher is a Polish-American fantasy drama streaming television series produced by Lauren Schmidt Hissrich. It is based on the book series of the same name by Andrzej Sapkowski.',
      genre: 'Action',
    },
    {
      _id: '2',
      title: 'The Witcher',
      image: 'https://lh3.googleusercontent.com/proxy/2JArUPomGr2PP7U1OS3i50FHrVdfs3GvkKpd9NsCzC8zkCVB0xx5OZW-gxaEwtFnYXFCVqIYV89Ij9yqktIWEDYuhIDaojmtJxldlVjmTZA',
      description: 'The Witcher is a Polish-American fantasy drama streaming television series produced by Lauren Schmidt Hissrich. It is based on the book series of the same name by Andrzej Sapkowski.',
      genre: 'Action',
    },
  ];

  const onSelectMovie = useCallback((item: MovieItemTypes) => {
    NavigationServices.navigate(Scenes.movieDetails, { movie: item });
  }, []);
  
    const onRefresh = () => {
    try {
      console.log('onRefresh');
    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
  };

  const onSubmitSearch = useCallback((text: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    setSearchTerm(text.nativeEvent.text);
  }, []);

  return {
    movies,
    onSelectMovie,
    isRefetching,
    onRefresh,
    isLoading,
    searchTerm,
    setSearchTerm,
    onSubmitSearch,
  };
};