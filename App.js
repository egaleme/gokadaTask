import * as React from 'react';
import {View, Text} from 'react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import rootReducer from './src/slices';

import Routes from './src/navigation';

const store = configureStore({reducer: rootReducer});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
