// api/user_api.js

import ApiManager from "./ApiManager";

const user_login = async (data) => {
  try {
    const result = await ApiManager('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    });

    // Assuming the API response contains the user data
    const userData = result.data;

    return userData;
  } catch (error) {
    // Handle login errors
    throw new Error(error);
  }
};

export default user_login;
