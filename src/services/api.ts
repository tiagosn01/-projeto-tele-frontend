/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(async (config: any) => {
  const token = localStorage.getItem('@MjTele:token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default api;
