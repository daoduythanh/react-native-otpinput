import React, { useState } from 'react';
import { View } from 'react-native';

import { OtpInput } from 'react-native-otpinput';

import { styles } from '../styles';

export const createScreen = (props: any): React.FC<{}> => {
  return () => {
    const [code, setCode] = useState('');

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <OtpInput code={code} onCodeChanged={setCode} {...props} />
        </View>
      </View>
    );
  };
};
