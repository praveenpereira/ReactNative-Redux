import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import Store from './store';

export default function App(){
  return (
    <Provider store={Store}>
     <Counter/>
     </Provider>
  );
}

