import React, { FC, useEffect, useRef } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import { isAutoFillSupported } from './helpers';

interface DigitInputProps extends TextInputProps {
  digitInputStyle?: StyleProp<ViewStyle>;
  digitInputHighlightStyle?: StyleProp<ViewStyle>;
  isFocus?: boolean;
}

export const DigitInput: FC<DigitInputProps> = ({
  digitInputStyle = null,
  digitInputHighlightStyle = null,
  isFocus = false,
  ...inputProps
}) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isFocus) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [isFocus]);

  const inputStyle = [
    styles.textInput,
    digitInputStyle,
    isFocus ? digitInputHighlightStyle : null,
  ];

  return (
    <View pointerEvents="none">
      <TextInput
        {...inputProps}
        ref={inputRef}
        style={inputStyle}
        underlineColorAndroid="rgba(0,0,0,0)"
        keyboardType="number-pad"
        selectionColor="#00000000"
        textContentType={isAutoFillSupported ? 'oneTimeCode' : 'none'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 45,
    height: 45,
    borderColor: 'rgba(226, 226, 226, 1)',
    borderWidth: 1,
    borderRadius: 2,
    textAlign: 'center',
  },
});
