import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/style";
import UserContext from "../contexts/UserContext";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = () => {
  const { user } = useContext(UserContext);
 
  //console.log(user.user);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={[styles.container]}>
          <Text style={styles.headingNormal}>Hi {user ? user.user.name : 'Guest'}</Text>
          <Text style={[styles.paragraph, { fontSize: 15, lineHeight: 22 }]}>
            Welcome, You have now access to our premium cloud apps management
            and maintenance services.
          </Text>
          <View>
            <Text style={[styles.headingNormal, styles.mt5]}>Services</Text>
            <View
              style={{
                width: 324,
                height: 145,
                backgroundColor: "#FA6F77",
                borderRadius: 10,
              }}
            >
              <ImageBackground
                source={require("../assets/images/Data.png")}
                style={localstyles.imageBackground}
              >
                <View style={localstyles.overlay}>
                  <Text
                    style={[
                      styles.headingNormal,
                      styles.plr2,
                      { color: "#fcfcfc" },
                    ]}
                  >
                    Zoho Cloud Apps
                  </Text>
                  <Text style={[styles.plr2, { color: "#fcfcfc" }]}>
                    Premium Zoho Business OS Consulting, Customization, and
                    Integration Services
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={[
                        styles.plr2,
                        styles.mt3,
                        { fontSize: 18, color: "#fff" },
                      ]}
                    >
                      Learn More{" "}
                      <Ionicons
                        name="chevron-forward-outline"
                        size={20}
                        color="#fff"
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>

            <View
              style={{
                width: 324,
                height: 145,
                backgroundColor: "#FA6F77",
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <ImageBackground
                source={require("../assets/images/CRMSERVICES.png")}
                style={localstyles.imageBackground}
              >
                <View
                  style={[
                    localstyles.overlay,
                    { backgroundColor: "rgba(79, 206, 214, 0.9)" },
                  ]}
                >
                  <Text
                    style={[
                      styles.headingNormal,
                      styles.plr2,
                      { color: "#fcfcfc" },
                    ]}
                  >
                    Microsoft Dynamics 365
                  </Text>
                  <Text style={[styles.plr2, { color: "#fcfcfc" }]}>
                    Professional Dynamics 365 services including Power Apps
                    customization etc.
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={[
                        styles.plr2,
                        styles.mt3,
                        { fontSize: 18, color: "#fff" },
                      ]}
                    >
                      Learn More{" "}
                      <Ionicons
                        name="chevron-forward-outline"
                        size={20}
                        color="#fff"
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View
            style={[
              styles.mt6,styles.mb6,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
            ]}
          >
            <View
              style={[{
                width: 156,
                height: 247,
                backgroundColor: "#FFF6E0",
                borderRadius: 10,
                paddingLeft: 5,
              }]}
            >
              <Text style={[styles.headingNormal,styles.mt2]}>Our Plans</Text>
              <Text>
                Discover our tailored monthly subscription plans for businesses
                of all sizes and needs. Each plan comes bundled with top-tier
                custom development, reliable support, and strategic
                consultations to fuel your growth.
              </Text>
            </View>

            <View
              style={{
                width: 156,
                height: 247,
                backgroundColor: "#FFE0E0",
                borderRadius: 10,
                paddingLeft: 5,
              }}
            >
              <Text style={[styles.headingNormal,styles.mt2]}>New Requests </Text>
              <Text>
                Submit your requests for consultation, custom development,
                integration or enhancements of your Zoho/Microsoft Dynamics
                Systems. Experience a centralized support system
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const localstyles = StyleSheet.create({
  line: {
    height: 2,
    width: "20%",
    backgroundColor: "#000",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "contain", // You can set 'contain' or 'stretch' depending on your needs
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(250, 111, 119, 0.9)", // Change the opacity (last value) to adjust the overlay
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Home;
