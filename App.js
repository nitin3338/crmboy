// App.js (or your root component file)

import React from 'react';
import { UserProvider } from './contexts/UserContext';
import AppNavigation from './components/navigation/Loginnavigation';
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import *as splashScreen from "expo-splash-screen";
import {useCallback} from "react";

 // Import the custom component
import styles from "./styles/style";

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Ubuntu_Regular.ttf'),
    light: require('./assets/fonts/Ubuntu-Light.ttf'),
    medium: require('./assets/fonts/Ubuntu-Medium.ttf'),
    // semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    // bold: require('./assets/fonts/Poppins-Bold.ttf'),
    // extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  const onLayoutRootView = useCallback( async() => {
    if (fontsLoaded){
      await splashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (

    <UserProvider>
     <StatusBar backgroundColor="#fff" barStyle="dark-content" />
           <AppNavigation />
     </UserProvider>
    
  );
  
 
}



