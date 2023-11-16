import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from "../../styles/style";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from 'axios';
import {API_URL,NEXT_PUBLIC_API_KEY} from '@env';
import user_login from '../../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  UserContext from '../../contexts/UserContext'; 


const LoginScreen = (props) => {
  const { control, handleSubmit, watch } = useForm();
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const onSignupPress = () => {
    navigation.navigate('signup');
  };

  const onForgetPress = () => {
    navigation.navigate('ResetPassword');
  };
  const handleSignInPress = async (values) => {
    try {
      const userData = await user_login({
        email: values.email,
        password: values.password,
      });

      // If login is successful, navigate to the Afterlogin screen
      if (userData) {
        await AsyncStorage.setItem('UserData', JSON.stringify(userData));
        setUser(userData);
        alert('Login successful');
        navigation.navigate('Afterlogin');
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
        <View style={[styles.container]}>
          <View style={[styles.mt11]}>
            <Text style={[styles.headingMedium]}>Login</Text>
            <View style={[localstyles.line, styles.mb3]} />
            <Text style={[styles.paragraph, { paddingRight: 50, color: '#a1a1a1', fontSize: 15 }]}>Sign in to your account to access your products/services</Text>
          </View>
          <View style={styles.mt6}>
            <CustomInput
              placeholder="Email"
              name="email"
              control={control}
              rules={{ required: true }}
            />
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <CustomInput
                placeholder="Password"
                name="password"
                control={control}
                rules={{ required: true }}
                secureTextEntry={secureTextEntry}
              />
              
              <TouchableOpacity style={{marginLeft:-50}} onPress={toggleSecureTextEntry}>
                <Text>
                  <Ionicons name={secureTextEntry ? "eye-outline" : "eye-off-outline"} size={25} color='#bfbfbf' />
                </Text>
              </TouchableOpacity>
              
            </View>
          </View>
          <TouchableOpacity style={styles.btnCont} onPress={handleSubmit(handleSignInPress)}>
            <Text style={[styles.btnText, { fontSize: 17 }]}>SignIn</Text>
          </TouchableOpacity>
          <View style={[styles.plr1, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
            <TouchableOpacity onPress={onForgetPress}>
              <Text style={[{ fontSize: 15, color: '#333', fontWeight: '600' }]}>Forget Password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSignupPress} >
              <Text style={[{ fontSize: 15, color: '#333', fontWeight: '600' }]}>Create An Account</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.mt8, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }]}>
            <View style={[{ height: 1, width: '40%', backgroundColor: '#c7c7c7' }]} />
            <Text style={{ fontWeight: '600', fontSize: 16 }}>Or</Text>
            <View style={[{ height: 1, width: '40%', backgroundColor: '#c7c7c7' }]} />
          </View>
          <View>
          <Text style={{textAlign: 'center', marginTop: 20, fontWeight: 700, fontSize: 17}}>Sign In With</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity style={[styles.googleSocial]}>
              <Text><Ionicons name="logo-google" size={25} color='#fff' /></Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.linkedSocial]}>
              <Text style={{color: '#fff', fontSize:16}}><Ionicons name="logo-linkedin" size={25} color='#fff' /></Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const localstyles = StyleSheet.create({
  line: {
    height: 2,
    width: '16%',
    backgroundColor: '#000',
  },
});

export default LoginScreen;
