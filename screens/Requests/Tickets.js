import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "../../styles/style";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tickets = () => {
  const { control, handleSubmit, watch } = useForm();
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={[styles.container]}>
          <Text style={[styles.headingMedium]}>Create A Request</Text>
          <View style={[styles.mt5]}>
            <CustomInput
              placeholder="Title "
              name="title"
              control={control}
              rules={{ required: true }}
            />
            <View style={{ flexDirection: "row" }}>
              <CustomInput
                placeholder="Related App Name "
                name="relatedAppName"
                control={control}
                rules={{ required: true }}
                style={{ flex: 1 }} // Add this style to make the input take up the available space
              />
              <TouchableOpacity
                style={{ position: "absolute", right: 10, top: 10 }}
              >
                <Ionicons name="chevron-down-outline" size={25} color="#cccaca" />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <CustomInput
                placeholder="Request Priority"
                name="requestpriority"
                control={control}
                rules={{ required: true }}
                style={{ flex: 1 }} // Add this style to make the input take up the available space
              />
              <TouchableOpacity
                style={{ position: "absolute", right: 10, top: 10 }}
              >
                <Ionicons name="chevron-down-outline" size={25} color="#cccaca" />
              </TouchableOpacity>
            </View>
            <View>
              <TextInput
                style={localstyles.textArea}
                //value={Text}
                //onChangeText={setText}
                multiline={true}
                numberOfLines={4} // You can adjust the number of lines visible at once
                placeholder="Request Description..."
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <CustomInput
                placeholder="Estimated Date Of Compliation"
                name="estimateddate"
                control={control}
                rules={{ required: true }}
                style={{ flex: 1 }} // Add this style to make the input take up the available space
              />
              <TouchableOpacity
                style={{ position: "absolute", right: 10, top: 10 }}
              >
                <Ionicons name="calendar-outline" size={25} color="#cccaca" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnCont}>
              <Text style={[styles.btnText, { fontSize: 17 }]}>
                Create Request
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const localstyles = StyleSheet.create({
  textArea: {
    height: 150, // You can adjust the height as needed
    textAlignVertical: "top",
    borderColor: "#e6e6e6",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    margin: 5,
    width: "100%",
  },
});

export default Tickets;
