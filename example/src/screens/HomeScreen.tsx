import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import { exampleConfig } from '../examples';

type Props = {
  navigation: NavigationStackProp;
};

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {Object.keys(exampleConfig).map((key) => (
        <Button
          key={key}
          title={exampleConfig[key].title}
          onPress={() => navigation.navigate(key)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
