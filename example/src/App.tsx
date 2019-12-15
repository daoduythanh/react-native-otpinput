import React from 'react';
import { StyleSheet, View } from 'react-native';
import { registerRootComponent } from 'expo';

import { OtpInput } from 'react-native-otpinput';

export default function App() {
  return (
    <View style={styles.container}>
      <OtpInput />
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
});

registerRootComponent(App);
