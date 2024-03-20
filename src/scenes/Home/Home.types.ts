import { ImageSourcePropType, ImageURISource } from 'react-native';

import MainTypes from '_types/index';

type MovieItemTypes = MainTypes & {
  _id: string;
  title: string;
  image: string;
  description: string;
  genre: string;
};

export type { MovieItemTypes };
