
import React from 'react';
import { StatusBar, SafeAreaView, _View, View } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold
       } from '@expo-google-fonts/montserrat';

import Index from './src/telas/Cesta/Index';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fonteCarregada) {
    return <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Index/>
    </SafeAreaView>
  );
}
