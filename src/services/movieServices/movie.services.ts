import { fillMovieDetail, fillMovies, fillSearchMovies } from '_redux/actions/movies';
import { store } from '_redux/store/configureStore';
import { env } from '_utils/env';
import axios from 'axios';

export const MovieServices = {
  getMovies: async () => {
    const endPoint = `${env.API_URL}/discover/movie?api_key=${env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
    try {
      const movies: any = await axios.get(endPoint);
      store.dispatch(fillMovies(movies?.data?.results));
      return movies;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getMovieDetail: async (id: string) => {
    const endPoint = `${env.API_URL}/movie/${id}?api_key=${env.API_KEY}&language=en-US`;
    try {
      const movie: any = await axios.get(endPoint);
      store.dispatch(fillMovieDetail(movie?.data?.results));
      return movie;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getReviews: async (id: string) => {
    const endPoint = `${env.API_URL}/movie/${id}/reviews?api_key=${env.API_KEY}&language=en-US&page=1`;
    try {
      const comments: any = await axios.get(endPoint);
      return comments;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getCredits: async (id: string) => {
    const endPoint = `${env.API_URL}/movie/${id}/credits?api_key=${env.API_KEY}&language=en-US`;
    try {
      const credits: any = await axios.get(endPoint);
      return credits;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  searchMovies: async (query: string) => {
    const endPoint = `${env.API_URL}/search/movie?api_key=${env.API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`;
    try {
      const movies: any = await axios.get(endPoint);
      store.dispatch(fillSearchMovies(movies?.data?.results));
      return movies;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};