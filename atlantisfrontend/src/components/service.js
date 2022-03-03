import clients from "../api/clients";

export const detailAds = (id) => {
  const url = "http://localhost:3000";
  return clients.get(url, id);
};
