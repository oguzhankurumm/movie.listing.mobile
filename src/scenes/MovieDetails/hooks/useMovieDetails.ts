import { useCallback, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

import { useTranslate } from '_hooks/useTranslate';
import { fillLoading } from '_redux/actions/loading';
import { RootState, useAppDispatch } from '_redux/store/configureStore';
import { MovieServices } from '_services/movieServices/movie.services';
import { getImagePath } from '_utils/helpers';

export const useMovieDetails = ({ movieId }: { movieId: string }) => {
  const dispatch = useAppDispatch();
  const { translate } = useTranslate();
  const { isLoading } = useSelector((state: RootState) => state.loadingState);
  const { movieDetail } = useSelector((state: RootState) => state.moviesState);

  const fetchMovieDetails = useCallback(async () => {
    try {
      dispatch(fillLoading({ isLoading: true }));
      await MovieServices.getMovieDetail(movieId);
      await MovieServices.getCredits(movieId);
      await MovieServices.getReviews(movieId);
      await MovieServices.getKeywords(movieId);
      dispatch(fillLoading({ isLoading: false }));
    } catch (error: any) {
      Alert.alert(translate('common.error'), error.message);
      dispatch(fillLoading({ isLoading: false }));
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  const movieInfo = useMemo(() => {
    return movieDetail?.data;
  }, [movieDetail]);

  const posterImage = useMemo(() => {
    return getImagePath(movieDetail?.data?.belongs_to_collection?.poster_path);
  }, [movieDetail]);

  return {
    isLoading,
    posterImage,
    movieInfo,
  };
};
