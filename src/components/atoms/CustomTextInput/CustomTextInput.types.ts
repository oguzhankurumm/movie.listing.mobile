import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';

import MainTypes from '_types/index';

type CustomTextInputPropsTypes = MainTypes & {
  restTextInputProps?: TextInputProps;
  handleChange: (text: string) => void;
  inputValue?: string;
  overrideInputStyle?: StyleProp<TextStyle>;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  hasReturnKeyType?: boolean;
  onBlur?: Function;
  onFocus?: Function;
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  refProp?: any;
  overridePlaceholderTextColor?: string;
  defaultValue?: string;
  maxLength?: number;
  leftChild?: React.ReactElement;
  rightChild?: React.ReactElement;
};

export type { CustomTextInputPropsTypes };
