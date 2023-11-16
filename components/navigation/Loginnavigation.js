import React, { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, Image, Text , Platform} from "react-native";
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
import UserContext from "../../contexts/UserContext";
import useUserImage from "../../components/useUserImage";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const logo = require("../../assets/images/crmboylogo.png");

// const handleBackPress = () => {
//   const navigation = useNavigation();
//   navigation.goBack();
// };

// Import necessary libraries and modules here if not already done in your code.
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

const CustomHeader = (props) => {
  const userImage = useUserImage(); 
  const navigation = useNavigation();
  //console.log(userImage);

  // console.log("User:", user);

  const handleLogoPress = () => {
    navigation.navigate("Home");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#fff",
        height: 60,
      }}
    >
      <View>
        <TouchableOpacity onPress={handleLogoPress}>
          <Image
            source={require("../../assets/images/crmboylogo.png")}
            resizeMode="contain"
            style={{ width: 120, height: 120 }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        {userImage ? (
          <Image
            source={{ uri: userImage }} // Display the fetched user image
            style={{ height: 30, width: 30, borderRadius: 15 }}
          />
        ) : (
          <Image
            source={require("../../assets/userProfile.png")} // Default profile image
            style={{ height: 30, width: 30, borderRadius: 15 }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};
const TabNavigation = () => {
  return (
     
       <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Ionicons name="home" size={24} color={focused ? "#5865ff": "#bfbfbf"} />
                  
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="orders" 
          component={Orders} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Ionicons name="cube" size={24} color={focused ? "#5865ff": "#bfbfbf"} />
                  
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Tickets" 
          component={Tickets} 
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                 // backgroundColor: "#5865ff",
                  // width: Platform.OS == "ios" ? 25 : 30,
                  // height: Platform.OS == "ios" ? 25 : 30,
                  top: Platform.OS == "ios" ? -15 : -30,
                  //borderRadius: Platform.OS == "ios" ? 25 : 30
                 }}
                >
                  <Ionicons name="add-circle" size={60} color="#5865ff" />
                </View>
              )
            }
           }}
          />
          <Tab.Screen
           name="Notifications" 
           component={Notification}
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Ionicons name="notifications" size={24} color={focused ? "#5865ff": "#bfbfbf"} />
                  
            </View>
              )
            }
          }}
           />
          <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Ionicons name="settings" size={24}  color={focused ? "#5865ff": "#bfbfbf"} />
                  
            </View>
              )
            }
          }}
          />
         
       </Tab.Navigator>
)
}


const Afterlogin = (props) => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  //console.log("User in Afterlogin:", user);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        header: () => <CustomHeader navigation={navigation} user={user} />,
        drawerActiveBackgroundColor: "#e6eefa",
        drawerActiveTintColor: "#000",
        headerShown: true, // Ensure the header is shown
      }}
    >
      <Drawer.Screen
        name="TabScreen"
        component={TabNavigation}
        options={{
          title: "Home",
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



const AppNavigation = () => {
  // ... existing code ...

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
       <Stack.Screen
          name="Bottom Tab"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};





export default AppNavigation;
