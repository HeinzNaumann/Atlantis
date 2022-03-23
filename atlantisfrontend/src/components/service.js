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

export const updateAd = (id, adObj) => {
  const url = `/api/ads/${id}`;
  return client.put(url, adObj)
}

export const getTags = () => {
  const url = "/api/ads/tags";
  return client.get(url);
};
export const favAds = (favId) => {
  const url = `/api/users/?fav=${favId}`
  return client.get(url)
}
