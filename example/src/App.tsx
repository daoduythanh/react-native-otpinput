import React from 'react';
import { registerRootComponent } from 'expo';

import { AppContainer } from './navigator';

export default function App() {
  return <AppContainer />;
}

registerRootComponent(App);
