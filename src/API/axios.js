import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
  baseURL: 'https://dice-draft-service.onrender.com/api/v1',
});

axiosInstance.interceptors.request.use(
  async config => {
    try {
      const token = (await AsyncStorage.getItem('token'))?.trim();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error fetching token from AsyncStorage:', error);
    }

    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.log('logging out...');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
