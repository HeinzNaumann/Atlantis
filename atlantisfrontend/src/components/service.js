import client from "../api/client";

export const detailAds = (id) => {
  const url = `/api/ads/${id}`;
  return client.get(url);
};

export const getAdsList = () => {
  const url = "/api/ads";
  return client.get(url);
};

export const createAd = (adObj) => {
  const url = "/api/ads";
  return client.post(url, adObj);
};

export const deleteAd = (id) => {
  const url = `/api/ads/${id}`;
  return client.delete(url);
};
