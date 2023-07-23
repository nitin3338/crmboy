import React from 'react';
import {View,Text} from 'react-native';
import styles from "../styles/style";
import { useFonts } from 'expo-font';



const Services = () => {
    const [fontsLoaded] = useFonts({
        'Ubuntu': require('../assets/fonts/Ubuntu_Regular.ttf'),
      });
    
      if (!fontsLoaded) {
        return null; // Render a loading state or fallback component until the font is loaded
      }
    return (
        <View>
            <Text style={[styles.headingNormal,styles.centered,styles.mt8,{lineHeight:40,fontSize:30,color:'#3b3a39',fontFamily:'Ubuntu'}]}>Elevate Your Business to New Heights with Premium Zoho Services</Text>
        </View>
    );
}



export default Services;
