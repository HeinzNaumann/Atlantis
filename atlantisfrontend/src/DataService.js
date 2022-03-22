import client from "./api/client";

export const getAdsList = () => {
    const url = "/api/ads";
    return client.get(url)
}

export const createAd = (adObj) => {
    const url = "/api/ads";
    return client.post(url, adObj)
}

export const getAd = id => {
    const url = `/api/ads/${id}`
    return client.get(url)
}

export const getTags = () =>{
    const url = "/api/ads/tags";
    return client.get(url);
}

export const getUser = id => {
    const url = `/api/users/${id}`
    return client.get(url)
}

// getChats,getAd
export const getChats = (idusuario,idAd) => {
    console.log("UsuarioID-S---:",idusuario,"  AnuncioID-S---",idAd);
    const url = `/api/chats?user=${idusuario}&ad=${idAd}`;
    return client.get(url);
}