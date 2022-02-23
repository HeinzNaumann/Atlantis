import client from "./api/client";

export const getAdsList = () => {
    const url = "/ads";
    return client.get(url)
}