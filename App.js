import './src/workaroundForNativeBase';
import React from 'react';
import { DefaultTypelessProvider } from 'typeless';
import { Loader } from './src/Loader';

const App = () => {
  return (
    <DefaultTypelessProvider>
      <Loader />
    </DefaultTypelessProvider>
  );
};

export default App;
