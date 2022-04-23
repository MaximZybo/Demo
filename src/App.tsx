import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {RootStack} from '@/Navigators/RootStack';
import {store} from '@/Store/index';

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <RootStack />
    </SafeAreaProvider>
  </Provider>
);

export default App;
