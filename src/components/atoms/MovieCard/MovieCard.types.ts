import { ImageSourcePropType, ViewStyle } from 'react-native';

import { ImageContentFit, ImageStyle } from 'expo-image';

import MainTypes from '_types/index';

export type MovieCardProps = MainTypes & {
  title?: string;
  image: ImageSourcePropType;
  description: string;
  genre: string;
  containerStyle?: ViewStyle;
  onItemPress?: () => void;
  imageOverrideStyle?: ImageStyle;
  imageProps?: Exclude<ImageStyle, 'source'>;
  overrideResizeMode?: ImageContentFit;
  disabled?: boolean;
};
