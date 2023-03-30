// Config
import API from '@/config/api';

// Services
import { tokenService } from './tokenService';

interface IUserData {
  username: string;
  password: string;
  displayName?: string;
}

interface IRefreshToken {
  refreshToken: string | undefined;
}

export const auth = {
  login: async (userData: IUserData) => {
    const { data } = await API.post('/auth/login', userData);
    tokenService.updateTokens(data);
    return data;
  },

  registration: async (userData: IUserData) => {
    const { data } = await API.post('/auth/register', userData);
    return data;
  },

  logout: async () => {
    await API.get('/auth/logout');
    localStorage.removeItem('tokens');
  },

  refreshToken: async (refreshToken: IRefreshToken) => {
    const { data } = await API.post('/auth/refresh', refreshToken);
    tokenService.updateTokens(data);
    return data;
  },
};

export default auth;
