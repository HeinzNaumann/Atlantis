import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_ATLANTIS_URL,
});

client.interceptors.response.use(
  response => response.data,
  error => {
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

export const setAuthorizationHeader = token => {
<<<<<<< HEAD
  client.defaults.headers.common["Authorization"] = token;
=======
  
  client.defaults.headers.common["Authorization"] = token;
  console.log("AuTH:", client.defaults.headers.common["Authorization"])
>>>>>>> ChatNotificacion
};

export const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common["Authorization"];
};

export default client;
