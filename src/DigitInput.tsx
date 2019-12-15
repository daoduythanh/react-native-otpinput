import React, { FC } from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

interface DigitInputProps extends TextInputProps {
  digitInputStyle?: StyleProp<ViewStyle>;
  digitInputHighlightStyle?: StyleProp<ViewStyle>;
}

export const DigitInput: FC<DigitInputProps> = () => (
  <View pointerEvents="none">
    <TextInput />
  </View>
);
