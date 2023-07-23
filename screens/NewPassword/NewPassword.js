import React from 'react';
import {View, StyleSheet, TouchableOpacity,Platform, StatusBar, SafeAreaView, ScrollView,Text} from 'react-native';
import styles from "../../styles/style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { useForm } from "react-hook-form";
import CustomInput from '../../components/CustomInput';
import CustomInput2 from '../../components/CustomInput2';

const NewPassword = (props) => {
    const { control, handleSubmit, watch } = useForm();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onSigninPress =() => {
    props.navigation.navigate('signin')
  };

    return (
       <SafeAreaView style={styles.rootContainer}>
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
        <View>
        <TouchableOpacity onPress={handleGoBack}>
        <Ionicons name="chevron-back-outline" size={35} color='#bfbfbf' />
        </TouchableOpacity>
      </View>

      <View style={[styles.mt11]}>
          <Text style={[styles.headingMedium]}>Reset Password</Text>
          <View style={[localstyles.line,styles.mb3]} />
          <Text style={[styles.paragraph,{paddingRight:50,color:'#a1a1a1',fontSize:15}]}>Enter OTP and enter a new strong password to access your account.</Text>
             </View>

        <View style={styles.mt6}>
             <CustomInput
          placeholder=" Enter Email Address"
          name="email"
          control={control}
          rules={{ required: true }}
        />
        </View>
        <View style={{flexDirection:'row',marginRight:10}}>
             <CustomInput2
          placeholder="First Name"
          name="firstname"
          control={control}
          rules={{ required: true }}
        />
         <CustomInput2
          placeholder="Last Name"
          name="lastname"
          control={control}
          rules={{ required: true }}
        />
        </View>

        <TouchableOpacity style={styles.btnCont}>
                <Text style={[styles.btnText,{fontSize:17}]}>Set New Password</Text>
        </TouchableOpacity>

       
        </View>
        </ScrollView>
       </SafeAreaView>  
    );
}

const localstyles = StyleSheet.create({
    line:{
      height:2,
      width:'30%',
      backgroundColor:'#000',
    }
  })

export default NewPassword;
