import clients, { setAuthorizationHeader } from "../api/clients";

export const login = (credentials) => {
  return clients.post("api/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
  });
};
export const detailAds = (id) => {
  const url = "http://localhost:3000";
  return clients.get(url, id);
};
