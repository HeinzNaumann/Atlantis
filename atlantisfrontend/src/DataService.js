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

export const getAd = id => {
    const url = `/api/ads/${id}`
    return client.get(url)
}
export const getUser = id => {
    const url = `/api/users/${id}`
    return client.get(url)
}

// getChats,getAd
export const getChats = (idusuario,idAd) => {
    const url = `/api/chats?user=${idusuario}&ad=${idAd}`;
    return client.get(url);
}

export const getChat = (idChat) => {
    const url = `/api/chats/${idChat}`;
    return client.get(url);
}

export const setChatRead = (idChat) => {
    const url = `/api/chats/${idChat}?read=1`;
    return client.put(url);
}

export const createChad = (chatObj) => {
    const url = "/api/chats";
    return client.post(url, chatObj);
}


export const updateChad = (idChat,dataChat)=> {
    const url = `/api/chats/${idChat}`;
    return client.put(url, dataChat);
}