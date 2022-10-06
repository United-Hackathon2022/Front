import { baseURL } from '../../shared/baseURL';
import axios from 'axios';

const RequestApi = p => {
  try {
    const res = axios({
      method: p.method,
      baseURL: baseURL,
      url: p.url,
      data: p.data,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default RequestApi;
