import axios from "axios";
import { BASE_URL } from "./pageConstants";
import { toast } from "react-toastify";

const setupInterceptors = () => {
    axios.defaults.baseURL = BASE_URL;
    axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('accessToken');
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
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) =>  {
        if(error?.response?.data?.status === 401) {
          toast(error?.response?.data?.detail);
        } else {
          switch(error?.response?.status){
            case 400:
              toast(error?.response?.data?.message);
              return error;
            default:
              return error;
          }
        }
      }
    );
}

export default setupInterceptors;