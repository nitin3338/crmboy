import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApiManager = axios.create({
    baseURL: 'https://apis.crmboy.com/api',
    responseType: 'json',
});

// Add a request interceptor
ApiManager.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('userToken');
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
