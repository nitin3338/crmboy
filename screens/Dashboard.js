import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/style";
import UserContext from "../contexts/UserContext";
import Ionicons from "react-native-vector-icons/Ionicons";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={[styles.container, { marginTop: 10, marginBottom: 10 }]}>
          <Text style={styles.headingNormal}>
            Hi {user ? user.user.name : "Guest"}
          </Text>
          <Text style={[styles.paragraph, { fontSize: 15, lineHeight: 22 }]}>
            Welcome, You have now access to our premium cloud apps management
            and maintenance services.
          </Text>

          <View style={localstyles.horizontalContainer}>
            <View style={localstyles.card}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={[styles.headingSmall, { margin: 10 }]}>
                  Subscription
                </Text>
                <Text
                  style={{
                    backgroundColor: "#40CE8A",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 30,
                    marginRight: 6,
                    marginTop: 4,
                  }}
                >
                  Active
                </Text>
              </View>
            </View>

            <View style={localstyles.card}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={[styles.headingSmall, { margin: 4 }]}>
                  Subscription
                </Text>
                <Text
                  style={{
                    backgroundColor: "#40CE8A",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 30,
                    marginRight: 6,
                    marginTop: 4,
                  }}
                >
                  Active
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.mt6,
              { flexDirection: "row", alignItems: "center", gap: 10 },
            ]}
          >
            <View
              style={[
                styles.plr2,
                {
                  height: 120,
                  width: "48%",
                  backgroundColor: "#FF5A6E",
                  borderRadius: 10,
                },
              ]}
            >
              <Text
                style={[styles.headingNormal, { color: "#fff", fontSize: 18 }]}
              >
                All Orders
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Ionicons name="cube-outline" size={70} color={"#d64242"} />
                <Text
                  style={[styles.headingBig, { color: "#fff", fontSize: 50 }]}
                >
                  {user.orders}4
                </Text>
              </View>
            </View>

            <View
              style={[
                styles.plr2,
                {
                  height: 120,
                  width: "48%",
                  backgroundColor: "#5865FF",
                  borderRadius: 10,
                },
              ]}
            >
              <Text
                style={[styles.headingNormal, { color: "#fff", fontSize: 18 }]}
              >
                Active Cards
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Ionicons name="card-outline" size={40} color={"#3C58BF"} />
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  ***4224
                </Text>
              </View>
              <Text style={{ color: "#ccc", fontWeight: "700" }}>04/24</Text>
            </View>
          </View>
          <Text style={[styles.headingNormal, styles.mt6]}>Recent Orders</Text>
          <View
            style={{
              width: 320,
              height: 108,
              backgroundColor: "#e8e8e8",
              borderRadius: 10,
            }}
          >
            <View
              style={[
                styles.plr1,
                { flexDirection: "row", alignItems: "center", gap: 10 },
              ]}
            >
              <Ionicons name="document-text-outline" size={28} color={"#333"} />
              <View>
                <Text style={{ fontSize: 15, color: "#818080" }}>Order Id</Text>
                <Text style={{ fontSize: 15, color: "#818080" }}>
                  {user ? user.user._id : "64sdftgbbhnhnbvdsssergtjm"}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.plr1,
                styles.mt1,
                { flexDirection: "row", alignItems: "center", gap: 25 },
              ]}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Ionicons name="briefcase-outline" size={28} color={"#333"} />
                <View>
                  <Text style={{ fontSize: 15, color: "#818080" }}>
                    Order Date
                  </Text>
                  <Text style={{ fontSize: 15, color: "#818080" }}>
                    25/04/2023
                  </Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Ionicons name="checkbox-outline" size={28} color={"#333"} />
                <View>
                  <Text style={{ fontSize: 15, color: "#818080" }}>Status</Text>
                  <Text style={{ fontSize: 15, color: "#818080" }}>
                    Completed
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.mt4,
              {
                width: 320,
                height: 108,
                backgroundColor: "#e8e8e8",
                borderRadius: 10,
              },
            ]}
          >
            <View
              style={[
                styles.plr1,
                { flexDirection: "row", alignItems: "center", gap: 10 },
              ]}
            >
              <Ionicons name="document-text-outline" size={28} color={"#333"} />
              <View>
                <Text style={{ fontSize: 15, color: "#818080" }}>Order Id</Text>
                <Text style={{ fontSize: 15, color: "#818080" }}>
                  {user ? user.user._id : "64sdftgbbhnhnbvdsssergtjm"}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.plr1,
                styles.mt1,
                { flexDirection: "row", alignItems: "center", gap: 25 },
              ]}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Ionicons name="briefcase-outline" size={28} color={"#333"} />
                <View>
                  <Text style={{ fontSize: 15, color: "#818080" }}>
                    Order Date
                  </Text>
                  <Text style={{ fontSize: 15, color: "#818080" }}>
                    25/04/2023
                  </Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Ionicons name="checkbox-outline" size={28} color={"#333"} />
                <View>
                  <Text style={{ fontSize: 15, color: "#818080" }}>Status</Text>
                  <Text style={{ fontSize: 15, color: "#818080" }}>
                    Completed
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const localstyles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: 324,
    height: 100,
    backgroundColor: "#b1f0d2",
    borderRadius: 10,
    marginRight: 15,
  },
});

export default Dashboard;
