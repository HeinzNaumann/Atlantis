import client, {
} from "../../api/client";
import storage from "../../utils/storage";

export const login = ({  ...credentials }) => {
  return client.post("/api/auth", credentials);

};

export const signup = ({  ...credentials }) => {
  return client.post("/api/users", credentials);
};

export const logout = () =>
  Promise.resolve().then(() => {
    localStorage.removeItem("token");
  });
