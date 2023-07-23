// App.js (or your root component file)

import React from 'react';
import { UserProvider } from './contexts/UserContext';
import AppNavigation from './components/navigation/Loginnavigation';
import { StatusBar } from "react-native";



export default function App() {

  return (

    <UserProvider>
     <StatusBar backgroundColor="#fff" barStyle="dark-content" />
     <AppNavigation />
     </UserProvider>
    
  );
  
 
}



