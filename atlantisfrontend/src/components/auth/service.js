import client, { removeAuthorizationHeader
} from "../../api/client";


export const login = ({  ...credentials }) => {
  return client.post("/api/auth", credentials)
};

export const signup = ({  ...credentials }) => {
  return client.post("/api/users", credentials);
};

export const logout = () =>
  Promise.resolve().then(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("nombre");
    localStorage.removeItem("usuario");
  }).then(() => {
    removeAuthorizationHeader();
  });
