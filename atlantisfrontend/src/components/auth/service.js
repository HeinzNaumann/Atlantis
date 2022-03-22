import client, { removeAuthorizationHeader
} from "../../api/client";


export const login = ({  ...credentials }) => {
  return client.post("/api/auth", credentials)
};

export const passwordRecover = ({  ...credentials }) => {
  return client.post("/api/users", credentials)
};

export const signup = ({  ...credentials }) => {
  return client.post("/api/users", credentials);
};

export const logout = () =>
  Promise.resolve().then(() => {
    localStorage.removeItem("token");
  }).then(() => {
    removeAuthorizationHeader();
  });
