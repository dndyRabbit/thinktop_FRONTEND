import axios from "axios";
import {get} from "lodash";
import jwt from "./jwt";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.interceptors.request.use(
  async (response) => {
    let originalConfig = response;
    const userToken = jwt.getToken();
    const _token = userToken !== undefined ? userToken : null;
    if (_token) originalConfig.headers.Authorization = `Bearer ${_token?.access_token}`;
    originalConfig.headers['Access-Control-Allow-Origin'] = '*';
    originalConfig.headers['Content-Type'] = 'application/json';
    return originalConfig;
  },
  (errors) => Promise.reject(errors)
)

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (get(error, 'response.data.code', '') === '401' || get(error, 'response.data.message', '') === 'Unauthorized') {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  },
);

export default axios;