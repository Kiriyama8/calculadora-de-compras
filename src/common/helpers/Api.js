import axios from 'axios';
import URLS from '../constants/Environment';

const api = axios.create({
  baseURL: URLS.baseURL,
  timeout: 30000
});

export default api;