// src/services/httpClient.js
import axios from 'axios';

export const createHttpClient = (ApiUrl:string) => {

  const httpClient = axios.create({
    baseURL: ApiUrl, 
    headers:{
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Credentials":"true",
      "Connection":"	keep-alive"
    },
    timeout: 10000, // Optional timeout
  });
  
  // httpClient.interceptors.request.use(
  //   (config) => {
  //     // Add authorization or custom headers if necessary
  //     const token = localStorage.getItem('authToken'); // Example for token
  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  
  httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle common response errors globally
      console.error('API Error:', error.response?.data || error.message);
      return Promise.reject(error);
    }
  );
  
  return httpClient;
}



