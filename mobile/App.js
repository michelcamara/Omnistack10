import React from 'react';
import { StatusBar } from 'react-native';

import Routes from  './src/routes';

export default function App() {
  return (
    <>
      {/* propriedade backgroundColor só vai funcionar no android */}
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
      <Routes />
    </>
  );
}