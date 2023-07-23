import React, { useState,useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import styles from "../../styles/style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomInput2 from "../../components/CustomInput2";
import CustomInput from "../../components/CustomInput";
import { API_URL, NEXT_PUBLIC_API_KEY } from "@env";
import  UserContext  from '../../contexts/UserContext';




const SignupScreen = (props) => {
  const { control, handleSubmit, watch } = useForm();
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);


  const handleGoBack = () => {
    navigation.goBack();
  };

  const onSigninPress = () => {
    props.navigation.navigate("signin");
  };

  const onForgetPress = () => {
    props.navigation.navigate("ResetPassword");
  };

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const signup = async (data) => {
    if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}:;<>,.?/~_+\-|=]).{8,32}$/.test(
        data.password
      )
    ) {
      alert("Enter Strong Password!");
    }
    try {
      const response = await axios.post(
        `${API_URL}/api/signup`,
        JSON.stringify({
          fname: data.firstname,
          lname: data.lastname,
          email: data.email,
          phone: data.phone,
          password: data.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: NEXT_PUBLIC_API_KEY,
          },
        }
      );
      //console.log("Response: " + response.data);
      alert("Account created successfully. Redirecting...");
      setTimeout(() => {
        navigation.navigate("confirmEmail");
      }, 2000);
      setUser(response.data);
    } catch (error) {
      // Handle request errors
      //console.error(error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert(`Error: ${error.response.data.error}`);
      } else if (error.request) {
        // The request was made but no response was received
        alert("Error: No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an Error
        alert("Error:", error.error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={[styles.container]}>
          {/* <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      /> */}
          <View>
            <TouchableOpacity onPress={handleGoBack}>
              <Ionicons name="chevron-back-outline" size={35} color="#bfbfbf" />
            </TouchableOpacity>
          </View>
          <View style={[styles.mt11]}>
            <Text style={[styles.headingMedium]}>Create Account</Text>
            <View style={[localstyles.line, styles.mb3]} />
            <Text
              style={[
                styles.paragraph,
                { paddingRight: 50, color: "#a1a1a1", fontSize: 15 },
              ]}
            >
              Create your account to access products, services, orders,
              subscriptions, etc.
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginRight: 10 }}>
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
          <CustomInput
            placeholder="Email Address"
            name="email"
            control={control}
            rules={{ required: true }}
          />
          <CustomInput
            placeholder="Phone Number"
            name="phone"
            control={control}
            rules={{ required: true }}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 8,
            }}
          >
            <CustomInput2
              placeholder="Password"
              name="password"
              control={control}
              rules={{ required: true }}
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity onPress={toggleSecureTextEntry}>
              <Ionicons
                name={secureTextEntry ? "eye-outline" : "eye-off-outline"}
                size={25}
                color="#bfbfbf"
                style={{ marginLeft: -40 }}
              />
            </TouchableOpacity>

            <CustomInput2
              placeholder="Confirm Password"
              name="confirmPassword"
              control={control}
              rules={{ required: true }}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            style={styles.btnCont}
            onPress={handleSubmit(signup)}
          >
            <Text style={[styles.btnText, { fontSize: 17 }]}>
              Create Account
            </Text>
          </TouchableOpacity>

          <View
            style={[
              styles.plr1,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
            ]}
          >
            <TouchableOpacity onPress={onForgetPress}>
              <Text
                style={[{ fontSize: 15, color: "#333", fontWeight: "600" }]}
              >
                Forget Password ?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onSigninPress}>
              <Text
                style={[{ fontSize: 15, color: "#333", fontWeight: "600" }]}
              >
                Already have an account?
              </Text>
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
    width: "30%",
    backgroundColor: "#000",
  },
});

export default SignupScreen;
