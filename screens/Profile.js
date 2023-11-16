import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useForm } from "react-hook-form";
import styles from "../styles/style";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomInput2 from "../components/CustomInput2";
import CustomInput from "../components/CustomInput";
import { API_URL, NEXT_PUBLIC_API_KEY } from "@env";

const Profile = () => {
  const { control, handleSubmit, watch } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch(`${API_URL}/api/updateprofile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the form data
      });

      const responseData = await response.json();
      console.log(responseData.message); // Print the response message
      alert ('User Profile Updated')
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={[styles.container]}>
          <View>
            <TouchableOpacity
              onPress={selectImage}
              style={localstyles.imageContainer}
            >
              <View style={localstyles.imagePicker}>
                {selectedImage && (
                  <Image
                    source={{ uri: selectedImage }}
                    style={localstyles.image}
                  />
                )}
                <Ionicons
                  name="camera"
                  size={30}
                  color="#ccc"
                  style={localstyles.cameraIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.mt5]}>
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
          </View>
          <View style={[styles.mt3, { marginLeft: 10 }]}>
            <Text style={[styles.headingSmall]}>Billing Details</Text>
          </View>
          <View style={[styles.mt2]}>
            <CustomInput
              placeholder="Street Address"
              name="address"
              control={control}
              rules={{ required: true }}
            />

            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <CustomInput2
                placeholder="City"
                name="city"
                control={control}
                rules={{ required: true }}
              />
              <CustomInput2
                placeholder="Zipcode"
                name="zipcode"
                control={control}
                rules={{ required: true }}
              />
            </View>
            <CustomInput
              placeholder="State/Region"
              name="state"
              control={control}
              rules={{ required: true }}
            />

            <CustomInput
              placeholder="Country"
              name="country"
              control={control}
              rules={{ required: true }}
            />
          </View>
          <TouchableOpacity
            style={styles.btnCont}
            onPress={onSubmit}
          >
            <Text style={[styles.btnText, { fontSize: 17 }]}>
              Update Profile
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const localstyles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  imagePicker: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#e8e8e8", // Replace with your desired background color
    //overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    // marginBottom: 20,
    borderRadius: 50,
    backgroundColor: "transparent",
    // borderColor:'#ccc',
    // borderWidth: 1,
  },
  cameraIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    color: "#949494",
    zIndex: 9999,
  },
});

export default Profile;
