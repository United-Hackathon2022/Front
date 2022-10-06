import { baseURL } from '../../shared/baseURL';
import axios from 'axios';

const RequestApi = p => {
  const token = window.localStorage.getItem('accessToken');
  try {
    const res = token
      ? axios({
          method: p.method,
          baseURL: baseURL,
          url: p.url,
          data: p.data,
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              'accessToken',
            )}`,
          },
        })
      : axios({
          method: p.method,
          baseURL: baseURL,
          url: p.url,
          data: p.data,
          withCredentials: true,
        });
    return res;
  } catch (error) {
    return error;
  }
};

export default RequestApi;
