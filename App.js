import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Route from './src/route';

export default function App() {
  return (
    <NativeBaseProvider>
      <Route />
    </NativeBaseProvider>
  );
}
