import React, { useMemo } from 'react';
import { Image, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import CustomTextInput from '../../atoms/CustomTextInput/CustomTextInput.component';
import styles from './SearchWithIcon.style';
import { SearchWithIconPropsTypes } from './SearchWithIcon.types';

const searchIcon = iconsObject?.search;

const SearchWithIcon: React.FC<SearchWithIconPropsTypes> = ({
  overrideContainerStyle,
  overrideRowContainerStyle,
  searchHandler = () => {},
  overrideSearchInputContainerStyle,
  overridePlaceholderTextColor,
  placeholder,
  overrideSearchIcon = searchIcon,
  overrideSearchIconStyle,
  restSearchInputProps,
  testId = '',
  onSubmitSearch = () => {},
}) => {
  const theme = useTheme();

  const { searchInputContainer, searchIconStyle, rowContainer } = useMemo(
    () => styles(theme),
    [theme]
  );

  const placeholderTextColor = useMemo(
    () => overridePlaceholderTextColor ?? theme?.themeColors?.grey,
    [overridePlaceholderTextColor, theme?.themeColors?.grey]
  );

  return (
    <View {...getAutomationTestingProp(testId)} style={overrideContainerStyle}>
      <View
        {...getAutomationTestingProp(`${testId}.rowContainer`)}
        style={[rowContainer, overrideRowContainerStyle]}>
        <CustomTextInput
          testId={`${testId}.textInput`}
          handleChange={searchHandler}
          overrideContainerStyle={[searchInputContainer, overrideSearchInputContainerStyle]}
          overridePlaceholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          leftChild={
            <Image
              {...getAutomationTestingProp(`${testId}.searchIcon`)}
              source={overrideSearchIcon}
              style={[searchIconStyle, overrideSearchIconStyle]}
            />
          }
          onSubmitEditing={onSubmitSearch}
          restTextInputProps={restSearchInputProps}
        />
      </View>
    </View>
  );
};

export default SearchWithIcon;
