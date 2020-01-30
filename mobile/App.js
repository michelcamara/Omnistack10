import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from  './src/routes';

//Remove os avisos de tarja amarela e que comecem que o texto contido na array
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Possible Unhandled Promise Rejection',
]);

export default function App() {
  return (
    <>
      {/* propriedade backgroundColor só vai funcionar no android */}
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
      <Routes />
    </>
  );
}