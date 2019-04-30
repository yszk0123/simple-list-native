import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { DefaultTypelessProvider } from 'typeless';
import { Loader } from './Loader';
import { AppNavigator } from './navigation/AppNavigator';

export const App = () => {
  return (
    <DefaultTypelessProvider>
      <Loader>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </Loader>
    </DefaultTypelessProvider>
  );
};
