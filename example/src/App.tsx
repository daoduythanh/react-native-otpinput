import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { registerRootComponent } from 'expo';

import { OtpInput } from 'react-native-otpinput';

export default function App() {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <OtpInput
        code={code}
        onCodeChanged={setCode}
        pinCount={4}
        style={{ paddingHorizontal: 20 }}
        digitInputStyle={styles.codeInputStyle}
        digitInputHighlightStyle={styles.codeInputStyleFocus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeInputStyle: {
    fontWeight: 'normal',
    backgroundColor: '#F2F2F2',
    borderColor: '#F2F2F2',
    borderRadius: 4,
    borderWidth: 1,
    color: '#02324C',
    fontSize: 14,
    height: 40,
    width: 40,
  },
  codeInputStyleFocus: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
  },
});

registerRootComponent(App);
