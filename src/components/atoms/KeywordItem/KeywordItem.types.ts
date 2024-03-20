import { ViewStyle } from 'react-native';

import MainTypes from '_types/index';

export type KeywordItemProps = MainTypes & {
  name: string;
  containerStyle?: ViewStyle;
};
