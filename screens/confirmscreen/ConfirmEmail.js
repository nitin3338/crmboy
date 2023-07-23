import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import styles from "../../styles/style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import { NEXT_PUBLIC_API_KEY, API_URL } from "@env";
import axios from "axios";

const VerifyAccount = (props) => {
  const { control, handleSubmit, watch } = useForm();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

 

  const handleVerifyOTP = async (data) => {
    console.log(data.otp);
    console.log(data);
      try {
        const response = await axios.post(`${API_URL}/api/activation`, JSON.stringify({
            code: data.otp,
        }), {
            headers: { 'Content-Type': 'application/json', 'Authorization': NEXT_PUBLIC_API_KEY },
        });

        alert("Account verified successfully");
        //resetForm();

        setTimeout(() => {
          navigation.navigate("signin");
        }, 2000);

      } catch (error) {
        alert(error.error);
        console.log(error.error);
        // if (error.response && error.response.status === 404) {
        //     alert("Invalid Verification Code");
        // }else if (error.response && error.response.status === 400){
        //     alert("Invalid Request");
        // }
      }
    
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.container}>
          <View>
            <TouchableOpacity onPress={handleGoBack}>
              <Ionicons name="chevron-back-outline" size={35} color="#bfbfbf" />
            </TouchableOpacity>
          </View>

          <View style={[styles.mt11]}>
            <Text style={[styles.headingMedium]}>Verify Account</Text>
            <View style={[localstyles.line, styles.mb3]} />
            <Text
              style={[
                styles.paragraph,
                { paddingRight: 50, color: "#a1a1a1", fontSize: 15 },
              ]}
            >
              Enter the OTP sent to your email address to verify your account.
            </Text>
          </View>

          <View style={styles.mt6}>
            <CustomInput
              placeholder="Enter OTP"
              name="otp"
              control={control}
              rules={{ required: true }}
            />
          </View>

          <TouchableOpacity style={styles.btnCont} onPress={handleSubmit(handleVerifyOTP)}>
            <Text style={[styles.btnText, { fontSize: 17 }]}>
              Verify Account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const localstyles = StyleSheet.create({
  line: {
    height: 2,
    width: "30%",
    backgroundColor: "#000",
  },
});

export default VerifyAccount;
