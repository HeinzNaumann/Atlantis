import axios from "axios";

const clients = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

clients.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      ...error.response,
      ...error.response.data,
    });
  }
);

export const setAuthorizationHeader = (token) => {
  clients.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default clients;
