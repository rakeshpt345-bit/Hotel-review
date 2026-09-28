import axios from 'axios';
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});
api.interceptors.response.use(r => r, e => Promise.reject(new Error(e.response?.data?.message || 'Could not reach the server.')));
export default api;
