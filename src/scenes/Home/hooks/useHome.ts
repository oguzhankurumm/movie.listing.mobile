import { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { RootState, useAppDispatch } from '_redux/store/configureStore';
import { fillLoading } from '_redux/actions/loading';
import { MovieServices } from '_services/movieServices/movie.services';
import { translateFunc } from '_locales/localesHelpers';

export const useHome = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector((state: RootState) => state.loadingState);
  const { movies, searchMovies } = useSelector((state: RootState) => state.moviesState);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchMovies = async () => {
    try {
      dispatch(fillLoading({ isLoading: true }));
      await MovieServices.getMovies();
      dispatch(fillLoading({ isLoading: false }));
    } catch (error: any) {
      Alert.alert(translateFunc('common.error'), error.message);
      dispatch(fillLoading({ isLoading: false }));
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const onSelectMovie = useCallback((movieId: string) => {
    NavigationServices.navigate(Scenes.movieDetails, { movieId });
  }, []);

  const searchHandler = useCallback(async(text: string) => {
    if (text) {
      setSearchTerm(text);
      await MovieServices.searchMovies(text);
      return;
    }
    setSearchTerm('');
  }, []);

  const moviesData = useMemo(() => {
    if (searchTerm) {
      return searchMovies?.data;
    }
    return movies?.data;
  }, [movies, searchMovies, searchTerm]);

  return {
    moviesData,
    onSelectMovie,
    isLoading,
    searchTerm,
    searchHandler,
  };
};