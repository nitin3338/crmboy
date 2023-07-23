import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, TouchableOpacity, Image, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../../screens/welcomescreen/WelcomeScreen";
import LoginScreen from "../../screens/signinscreen/LoginScreen";
import SignupScreen from "../../screens/signUpscreen/SignupScreen";
import ConfirmEmail from "../../screens/confirmscreen/ConfirmEmail";
import ResetPassword from "../../screens/forgretpassword/ResetPassword";
import NewPassword from "../../screens/NewPassword/NewPassword";
import Home from "../../screens/Home";
import Services from "../../screens/Services";
import Contact from "../../screens/Contact";
import CustomDrawer from "../../screens/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import WelcomeScreen2 from "../../screens/welcomescreen2/WelcomScreen2";
import WelcomeScreen3 from "../../screens/welcomescreen3/WelcomeScreen3";
import WelcomeScreen4 from "../../screens/welcomscreen4/WelcomeScreen4";
import Dashboard from "../../screens/Dashboard";
import Profile from "../../screens/Profile";
import Pricing from "../../screens/Pricing";
import Address from "../../screens/Address";
import Orders from "../../screens/Orders";
import Subscription from "../../screens/Subscription";
import PaymentMethod from "../../screens/PaymentMethod";
import Tickets from "../../screens/Requests/Tickets";
import Notification from "../../screens/Notification";
import Settings from "../../screens/Settings";
import axios from "axios";
import { API_URL, NEXT_PUBLIC_API_KEY } from "@env";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const logo = require("../../assets/images/crmboylogo.png");

const handleBackPress = () => {
  const navigation = useNavigation();
  navigation.goBack();
};
const CustomHeader = () => {
  const navigation = useNavigation();
  
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#fff",
      }}
    >
      <View>
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons name="chevron-back-outline" size={35} color="#bfbfbf" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        {/* {user.image ? (
          <Image
            source={{ uri: user.image }} // Use the fetched image URL if available
            style={{ height: 30, width: 30, borderRadius: 10 }}
          />
        ) : (
          <Image
            source={require("../../assets/userProfile.png")} // Use the default image if the user has not uploaded one
            style={{ height: 30, width: 30, borderRadius: 10 }}
          />
        )} */}
         <Image
            source={require("../../assets/userProfile.png")} // Use the default image if the user has not uploaded one
            style={{ height: 30, width: 30, borderRadius: 10 }}
          />
      </TouchableOpacity>
    </View>
  );
};

const AppNavigation = () => {
  // const [userProfileImage, setUserProfileImage] = useState(null);
  // const handleBackPress = () => {
  //   const navigation = useNavigation();
  //   navigation.goBack();
  // };
  // useEffect(() => {
  //   fetchData(); // Fetch data when the component mounts
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const baseURL = "https://apis.crmboy.com";
  //     const response = await axios.get(`${API_URL}/login`);
  //     // Assuming the API response contains the image URL, you can extract it and set it in the state
  //     const imageURL = response.data.user.image;
  //     if (imageURL) {
  //       setUserProfileImage(imageURL); // Update the user profile image state with the fetched URL
  //     }
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // };

  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
    }}
  >
    <TouchableOpacity onPress={handleBackPress}>
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  </View>;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="welcomscreen2"
          component={WelcomeScreen2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="welcomscreen3"
          component={WelcomeScreen3}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="welcomscreen4"
          component={WelcomeScreen4}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="signin"
          component={LoginScreen}
          options={{
            header: ({ navigation }) => (
              <CustomHeader navigation={navigation} />
            ),
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="confirmemail"
          component={ConfirmEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="confirmEmail"
          component={ConfirmEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Afterlogin"
          component={Afterlogin}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Afterlogin = (props) => {
  
  const navigation = useNavigation();
  

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        header: () => <CustomHeader navigation={navigation} />,
        drawerActiveBackgroundColor: "#e6eefa",
        drawerActiveTintColor: "#000",
        headerShown: true, // Ensure the header is shown
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => <Ionicons name="home-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Services"
        component={Services}
        options={{
          drawerIcon: () => <Ionicons name="build-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Pricing"
        component={Pricing}
        options={{
          drawerIcon: () => <Ionicons name="cash-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: () => <Ionicons name="call-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: () => <Ionicons name="grid-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: () => <Ionicons name="person-circle-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Address"
        component={Address}
        options={{
          drawerIcon: () => <Ionicons name="location-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          drawerIcon: () => <Ionicons name="cube-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Subscription"
        component={Subscription}
        options={{
          drawerIcon: () => <Ionicons name="cash-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{
          drawerIcon: () => <Ionicons name="card-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Requests/Tickets"
        component={Tickets}
        options={{
          drawerIcon: () => <Ionicons name="options-outline" size={22} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;
