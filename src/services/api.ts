/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.83.232.90',
});

api.interceptors.request.use(async (config: any) => {
  const token = localStorage.getItem('@MjTele:token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default api;
