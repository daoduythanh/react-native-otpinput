import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';

import { OtpInput } from 'react-native-otpinput';

export default function App() {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Otp input</Text>
        <OtpInput
          autoFocusOnLoad
          code={code}
          pinCount={4}
          digitInputStyle={styles.codeInputStyle}
          digitInputHighlightStyle={styles.codeInputStyleFocus}
          onCodeChanged={setCode}
          onCodeFilled={code => console.log(`code filled: ${code}`)}
        />
      </View>
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
  wrapper: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
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
