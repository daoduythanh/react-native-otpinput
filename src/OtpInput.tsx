import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { DigitInput } from './DigitInput';

export interface OtpInputProps {}

export const OtpInput: React.FC<OtpInputProps> = () => {
  return (
    <View>
      <TouchableWithoutFeedback style={styles.touchable}>
        <View style={styles.digitContainer}>
          <DigitInput />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
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
