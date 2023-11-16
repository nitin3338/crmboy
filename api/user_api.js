// api/user_api.js

import ApiManager from "./ApiManager";
import * as SecureStore from 'expo-secure-store';

const user_login = async (data) => {
  console.log(data);
  try {
    const result = await ApiManager('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    });

    // Assuming the API response contains the user data
    const userData = result.data;  // removed .json()
    //console.log(userData);

    // Store the user data and token
    await SecureStore.setItemAsync('user', JSON.stringify(userData.user));
    await SecureStore.setItemAsync('userToken', userData.token);
    const userInfo = await SecureStore.getItemAsync('user');
    //console.log(userInfo);
    return userData;
  } catch (error) {
    // Handle login errors
    throw new Error(error);
  }
};

export default user_login;
