import { Axios } from "axios";
import { BASE_URL } from "./pageConstants";

const setupInterceptors = () => {
    Axios.defaults.baseURL = BASE_URL;
    Axios.interceptors.request.use(
        (config) => {
          const token = localStorage.getItem('accesstoken');
          const baseURL = BASE_URL;
          config.headers["user-tz"] = new Date().getTimezoneOffset();
          if (token) {
            config.baseURL = baseURL;
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => Promise.reject(error)
      );
}

export default setupInterceptors;