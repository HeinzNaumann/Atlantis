import clients, { setAuthorizationHeader } from "../api/clients";

export const login = (credentials) => {
  return clients.post("api/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
  });
};
export const detailAds = (id) => {
  const url = `/api/ads/${id}`;
  return clients.get(url);
};

export const getAdsList = () => {
  const url = "/api/ads";
  return clients.get(url);
};

export const createAd = (adObj) => {
  const url = "/api/ads";
  console.log(adObj);
  return clients.post(url, adObj);
};
