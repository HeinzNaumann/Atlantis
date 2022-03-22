import client from "../api/client";


export const detailAds = (id) => {
  const url = `/api/ads/${id}`;
  return client.get(url);
};

export const getAdsList = (usuario) => {
  const url = `/api/ads/?user=${usuario}`;
  return client.get(url);
};

export const createAd = (adObj) => {
  const url = "/api/ads";
  return client.post(url, adObj);
};
