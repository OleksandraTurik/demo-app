import axios, { InternalAxiosRequestConfig } from 'axios';

// Services
import auth from '@/services/authService';
import { tokenService } from '@/services/tokenService';

export const API_URL = 'https://expa.fly.dev';

const API = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const onRequestSuccess = async (config: InternalAxiosRequestConfig) => {
  const tokens = tokenService.getToken();
  //   const currentDate = new Date();
  //   if (tokens?.accessToken) {
  //     const [header, payload, signature] = tokens.accessToken.split('.');
  //     const decodedPayload = JSON.parse(atob(payload));
  // if (decodedPayload.exp * 1000 < currentDate.getTime()) {
  //   await auth.refreshToken({ refreshToken: tokens.refreshToken });
  //   if (config.headers) {
  //     config.headers.Authorization = `Bearer ${tokenService.getAccessToken()}`;
  //   }
  // }
  if (config.headers) {
    config.headers.Authorization = `Bearer ${tokenService.getAccessToken()}`;
  }
  //   }
  return config;
};

API.interceptors.request.use(onRequestSuccess);

export default API;
