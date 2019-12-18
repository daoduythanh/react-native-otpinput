import React, { useCallback, useEffect, useState } from 'react';
import {
  Keyboard,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import { DigitInput } from './DigitInput';

export interface OtpInputProps {
  code: string | undefined;
  onCodeChanged: (code: string) => void;
  pinCount: number;

  autoFocusOnLoad?: boolean;
  digitInputHighlightStyle?: StyleProp<ViewStyle>;
  digitInputStyle?: StyleProp<ViewStyle>;
  onCodeFilled?: (code: string) => void;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const OtpInput: React.FC<OtpInputProps> = ({
  code,
  pinCount,
  onCodeChanged,
  autoFocusOnLoad = false,
  digitInputHighlightStyle = null,
  digitInputStyle = null,
  onCodeFilled = null,
  secureTextEntry = false,
  style,
}) => {
  const [digits, setDigits] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(autoFocusOnLoad ? 0 : -1);

  useEffect(() => {
    const array = code ? code.split('') : new Array(pinCount).fill(undefined);
    setDigits(array);
  }, [code, pinCount]);
  useEffect(() => {
    const newCode = digits.join('');
    if (newCode !== code) {
      onCodeChanged(newCode);
    }
  }, [code, digits, onCodeChanged]);
  useEffect(() => {
    const newCode = digits.join('');
    if (newCode.length >= pinCount) {
      onCodeFilled?.(newCode);
      setCurrentIndex(-1);
    }
  }, [digits, onCodeFilled, pinCount]);

  useEffect(() => {
    const listener = Keyboard.addListener('keyboardDidHide', () =>
      setCurrentIndex(-1)
    );
    return () => {
      listener.remove();
    };
  }, []);

  const onChangeText = useCallback(
    (index: number, text: string) => {
      let newDigits = digits.slice();
      const oldLength = newDigits[index]?.length || 0;
      const newLength = text.length;

      if (newLength - oldLength === pinCount) {
        // new code pasted in
        newDigits = text.split('').slice(oldLength, newLength);
      } else {
        if (newLength === 0) {
          if (newDigits.length > 0) {
            newDigits = newDigits.slice(0, newDigits.length - 1);
          }
        } else {
          let tmpIndex = index;
          text.split('').forEach(value => {
            newDigits[tmpIndex] = value;
            tmpIndex += 1;
          });
          tmpIndex -= 1;
        }
      }
      setDigits(newDigits);

      const newCode = newDigits.join('');
      if (
        newCode.length < pinCount &&
        text.length > 0 &&
        index < pinCount - 1
      ) {
        setCurrentIndex(index + 1);
      }
    },
    [digits, pinCount]
  );
  const onKeyPress = useCallback(
    (index: number, key: string) => {
      if (key === 'Backspace') {
        if (!digits[index] && index > 0) {
          onChangeText(index - 1, '');
          setCurrentIndex(index - 1);
        }
      }
    },
    [digits, onChangeText]
  );
  const onWrapperPress = useCallback(() => {
    let lastDigitIndex = digits.findIndex(digit => !digit);
    if (lastDigitIndex < 0) {
      lastDigitIndex = digits.length - 1;
    }
    setCurrentIndex(lastDigitIndex);
  }, [digits]);

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback
        style={styles.touchable}
        onPress={onWrapperPress}
      >
        <View style={styles.digitContainer}>
          {new Array(pinCount).fill(undefined).map((_, index) => (
            <DigitInput
              digitInputStyle={digitInputStyle}
              digitInputHighlightStyle={digitInputHighlightStyle}
              secureTextEntry={secureTextEntry}
              value={digits[index]}
              key={`digit-${index}`}
              isFocus={index === currentIndex}
              onChangeText={text => onChangeText(index, text)}
              onKeyPress={({ nativeEvent: { key } }) => onKeyPress(index, key)}
            />
          ))}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
  },
  touchable: {
    width: '100%',
    height: '100%',
  },
  digitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
