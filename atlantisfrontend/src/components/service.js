import client from "../api/client";


export const detailAds = (id) => {
  const url = `/api/ads/${id}`;
  return client.get(url);
};

export const getAdsUserList = (usuario) => {
  const url = `/api/ads/?user=${usuario}`;
  return client.get(url);
};

export const getAdsFavList = () => {
  const url = `/api/users/?favs=true`;
  return client.get(url);
};

export const createAd = (adObj) => {
  const url = "/api/ads";
  return client.post(url, adObj);
};


export const getTags = () =>{
    const url = "/api/ads/tags";
    return client.get(url);
}

export const getAdsList = () => {
    const url = "/api/ads";
    return client.get(url)
}

export const updateAd = (id, adObj) => {
  const url = `/api/ads/${id}`;
  return client.put(url, adObj)
}

export const favAds = (favId) => {
  const url = `/api/users/?fav=${favId}`
  return client.get(url)
}

export const getAd = id => {
  const url = `/api/ads/${id}`
  return client.get(url)
}
export const getUser = id => {
  const url = `/api/users/${id}`
  return client.get(url)
}

export const deleteAd = (id) => {
  const url = `/api/ads/${id}`;
  return client.delete(url);
};

// getChats,getAd
export const getChats = (idusuario,idAd) => {
  console.log("UsuarioID-S---:",idusuario,"  AnuncioID-S---",idAd);
  const url = `/api/chats?user=${idusuario}&ad=${idAd}`;
  return client.get(url);
}

export const getChat = (idChat) => {
  //console.log("UsuarioID-S---:",idusuario,"  AnuncioID-S---",idAd);
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

//marcar como vendido
//PUT: localhost:3000/api/ads/62212d237780fc1d2069a940?vend=true
export const setAdSold = (idAd) => {
  const url = `/api/ads/${idAd}?vend=true`;
  return client.put(url);
}