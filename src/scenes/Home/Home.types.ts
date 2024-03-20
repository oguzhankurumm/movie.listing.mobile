import { ImageURISource } from 'react-native';

import MainTypes from '_types/index';

type MovieItemTypes = MainTypes & {
  id: string;
  original_title: string;
  overview: string;
  poster_path: ImageURISource;
};

export type { MovieItemTypes };
