// Absolute imports
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

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
  config.headers.Authorization = `Bearer ${tokenService.getAccessToken()}`;
  return config;
};

const onResponseSuccess = (res: AxiosResponse) => {
  return res;
};

const onResponseFailed = async (err: any) => {
  const originalConfig = err.config;
  if (err.response) {
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const tokens = tokenService.getToken();
        await auth.refreshToken({ refreshToken: tokens?.refreshToken });
        return API(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
};

API.interceptors.request.use(onRequestSuccess);
API.interceptors.response.use(onResponseSuccess, onResponseFailed);

export default API;
