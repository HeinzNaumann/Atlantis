import clients, { setAuthorizationHeader } from "../api/clients";

export const login = (credentials) => {
  return clients.post("api/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
  });
};
export const detailAds = () => {
  const url = "/api/ads/62264cc5b06439597a080232";
  return clients.get(url);
};
