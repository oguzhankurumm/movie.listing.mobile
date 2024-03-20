import { ViewStyle } from 'react-native';

import MainTypes from '_types/index';

export type ReviewItemProps = MainTypes & {
  id?: string | number;
  author_details: {
    name: string;
    username: string;
  };
  content: string;
  created_at: string;
  containerStyle?: ViewStyle;
};
