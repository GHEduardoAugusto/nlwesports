import React from 'react';

import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { Loading } from './src/components';
import { Background } from './src/components';
import { Routes } from './src/routes';

import store from './src/store';
import { Provider as MobxProvider } from 'mobx-react';

export default function App() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <MobxProvider rootStore={store}>
      <Background>
        <StatusBar
          barStyle='light-content'
          backgroundColor='trasnparent'
          translucent
        />
        {fontsLoader ? <Routes /> : <Loading />}
      </Background>
    </MobxProvider>
  );
}
