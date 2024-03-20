import { createSlice } from '@reduxjs/toolkit';

import { MoviesType } from '_redux/stateTypes/MoviesType';

import { fillMovies, fillMovieDetail, fillSearchMovies, fillCredits, fillReviews } from '../actions/movies';
import { RootState } from '../store/configureStore';

const initialState: MoviesType = {
  loading: false,
  movies: [],
  movieDetail: {},
  searchMovies: [],
};

export const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fillMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(fillMovies.fulfilled, (state: any, action) => {
      state.movies = action.payload;
      state.loading = false;
    });
    builder.addCase(fillMovies.rejected, state => {
      state.loading = false;
    });
    builder.addCase(fillMovieDetail.pending, state => {
      state.loading = true;
    });
    builder.addCase(fillMovieDetail.fulfilled, (state: any, action) => {
      state.movieDetail = action.payload;
      state.loading = false;
    });
    builder.addCase(fillMovieDetail.rejected, state => {
      state.loading = false;
    });
    builder.addCase(fillSearchMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(fillSearchMovies.fulfilled, (state: any, action) => {
      state.searchMovies = action.payload;
      state.loading = false;
    });
    builder.addCase(fillSearchMovies.rejected, state => {
      state.loading = false;
    });
    builder.addCase(fillCredits.pending, state => {
      state.loading = true;
    });
    builder.addCase(fillCredits.fulfilled, (state: any, action) => {
      state.movieDetail = { ...state.movieDetail, credits: action.payload };
      state.loading = false;
    });
    builder.addCase(fillCredits.rejected, state => {
      state.loading = false;
    });
    builder.addCase(fillReviews.pending, state => {
      state.loading = true;
    });
    builder.addCase(fillReviews.fulfilled, (state: any, action) => {
      state.movieDetail = { ...state.movieDetail, reviews: action.payload };
      state.loading = false;
    });
    builder.addCase(fillReviews.rejected, state => {
      state.loading = false;
    });
  },
});

export const moviesStore = (state: RootState) => state.moviesState;
export default movies.reducer;
