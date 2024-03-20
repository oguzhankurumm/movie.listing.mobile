import {
  ImageSourcePropType,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  TextInputProps,
  TextInputSubmitEditingEventData,
  ViewStyle,
} from 'react-native';

import MainTypes from '_types/index';

type SearchWithIconPropsTypes = MainTypes & {
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideRowContainerStyle?: StyleProp<ViewStyle>;
  searchHandler?: (text: string) => void;
  overrideSearchInputContainerStyle?: StyleProp<ViewStyle>;
  overridePlaceholderTextColor?: string;
  placeholder?: string;
  overrideSearchIcon?: ImageSourcePropType;
  overrideSearchIconStyle?: StyleProp<ImageStyle>;
  restSearchInputProps?: TextInputProps;
  onSubmitSearch?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
};

export type { SearchWithIconPropsTypes };
