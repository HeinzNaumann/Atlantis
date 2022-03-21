import client from "./api/client";

export const getAdsList = () => {
    const url = "/api/ads";
    return client.get(url)
}

export const createAd = (adObj) => {
    const url = "/api/ads";
    return client.post(url, adObj)
}

export const getTags = () =>{
    const url = "/api/ads/tags";
    return client.get(url);
}