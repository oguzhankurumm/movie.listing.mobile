import { ImageURISource, ViewStyle } from 'react-native';

import { ImageContentFit, ImageStyle } from 'expo-image';

import MainTypes from '_types/index';

export type CastItemProps = MainTypes & {
  id?: string | number;
  name: string;
  character: string;
  profile_path: ImageURISource;
  containerStyle?: ViewStyle;
  imageOverrideStyle?: ImageStyle;
  imageProps?: Exclude<ImageStyle, 'source'>;
  overrideResizeMode?: ImageContentFit;
};
