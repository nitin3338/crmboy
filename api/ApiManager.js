import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const ApiManager = axios.create({
    baseURL: 'https://apis.crmboy.com/api',
    responseType: 'json',
});

// Add a request interceptor
ApiManager.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync('userToken');
    const UserData = await SecureStore.getItemAsync('user');
   // console.log(UserData);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ApiManager;
