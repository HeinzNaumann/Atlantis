import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../api/client";
import storage from "../utils/storage";

export const login = ({ mem = 1, ...credentials }) => {
  return client.post("/api/auth", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    if (mem) {
      storage.set("auth", accessToken);
    }
  });
};

export const logout = () =>
  Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove("auth");
  });
