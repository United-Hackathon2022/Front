import { baseURL } from '../../shared/baseURL';
import axios, { AxiosRequestConfig } from 'axios';

const RequestApi = (p: AxiosRequestConfig, token?: string) => {
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
