import axios from 'axios';
import { baseURL } from './baseURL';

const requestApi = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default requestApi;
