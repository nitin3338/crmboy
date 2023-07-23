import React, { useContext } from 'react';
import {View, StyleSheet,Text,SafeAreaView,ScrollView, Image, ImageBackground} from 'react-native';
import styles from "../styles/style";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import  UserContext  from '../contexts/UserContext';


const Home = () => {
  const { user } = useContext(UserContext);
  
  //console.log(user);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
      <View style={[styles.container]}>
        <Text style={styles.headingNormal}>Hi {user.name}</Text>
        <Text style={[styles.paragraph,{fontSize:18,lineHeight:26}]}>Welcome, You have now access to our premium cloud apps management and maintenance services.</Text>
        <View>
          <Text style={[styles.headingMedium,styles.mt5]}>Services</Text>
          <View style={[localstyles.line,styles.mb3]} />
          <View >
            <View style={[{flexDirection:'row'}]}>
              <View >
              <ImageBackground source={require('../assets/images/Data.png')} style={{width:120,height:120}}/>      
              <Text style={[styles.headingNormal]}>Zoho Cloud Apps</Text>
              <Text >Premium Zoho Business OS Consulting, Customization, and Integration Services</Text>
              </View>      
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const localstyles = StyleSheet.create({
  line:{
    height:2,
    width:'20%',
    backgroundColor:'#000',
  }
})

export default Home;
