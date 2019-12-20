import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import mapValues from 'lodash.mapvalues';

import { HomeScreen } from './screens/HomeScreen';
import { createScreen } from './screens/createScreen';

import { exampleConfig } from './examples';

const exampleStack = mapValues(exampleConfig, ({ title, props }) => ({
  screen: createScreen(props),
  navigationOptions: {
    title,
  },
}));

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Otp Input Examples',
      },
    },
    ...exampleStack,
  },
  {
    initialRouteName: 'Home',
  }
);

export const AppContainer = createAppContainer(AppNavigator);
