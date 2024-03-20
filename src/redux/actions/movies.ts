import { createAsyncThunk } from '@reduxjs/toolkit';

export const fillMovies = createAsyncThunk(
  'movies/fillMovies',
  async (fillMovies: any) => {
    return { data: fillMovies };
  }
);

export const fillMovieDetail = createAsyncThunk(
  'movies/fillMovieDetail',
  async (fillMovieDetail: any) => {
    return { data: fillMovieDetail };
  }
);

export const fillSearchMovies = createAsyncThunk(
  'movies/fillSearchMovies',
  async (fillSearchMovies: any) => {
    return { data: fillSearchMovies };
  }
);

export const fillReviews = createAsyncThunk(
  'movies/fillReviews',
  async (fillReviews: any) => {
    return { data: fillReviews };
  }
);

export const fillCredits = createAsyncThunk(
  'movies/fillCredits',
  async (fillCredits: any) => {
    return { data: fillCredits };
  }
);

export const fillKeywords = createAsyncThunk(
  'movies/fillKeywords',
  async (fillKeywords: any) => {
    return { data: fillKeywords };
  }
);