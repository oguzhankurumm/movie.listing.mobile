import React, { useMemo } from 'react';
import { View } from 'react-native';

import moment from 'moment';

import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import CustomText from '../CustomText/CustomText.component';
import { styles } from './ReviewItem.styles';
import { ReviewItemProps } from './ReviewItem.types';

const ReviewItem: React.FC<ReviewItemProps> = ({
  author_details: { name, username },
  content,
  created_at,
  containerStyle,
  testId = '',
}) => {
  const theme = useTheme();
  const formattedDate = moment(created_at).fromNow();

  const { container, nameContainer, usernameText, dateText } = useMemo(
    () => styles(theme),
    [theme]
  );
  return (
    <View {...getAutomationTestingProp(testId)} style={[container, containerStyle]}>
      <View style={nameContainer}>
        <CustomText text={name} textFontStyle='caption' testId={`${testId}.name`} />
        <CustomText
          text={`@${username}`}
          textFontStyle='body'
          testId={`${testId}.username`}
          overrideStyle={usernameText}
        />
      </View>
      <CustomText text={content} textFontStyle='body' testId={`${testId}.content`} />
      <CustomText
        text={formattedDate}
        textFontStyle='body'
        testId={`${testId}.created_at`}
        overrideStyle={dateText}
      />
    </View>
  );
};

export default ReviewItem;
