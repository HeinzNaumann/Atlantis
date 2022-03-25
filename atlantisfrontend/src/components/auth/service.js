import socket from "../message/socket";
import client, { removeAuthorizationHeader
} from "../../api/client";


export const login = ({  ...credentials }) => {
  return client.post("/api/auth", credentials)
};

export const signup = ({  ...credentials }) => {
  return client.post("/api/users", credentials);
};

export const logout = () =>
  Promise.resolve().then(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("nombre");
    localStorage.removeItem("usuario");
    socket.emit('logout',localStorage.getItem('sck'));
    //socket.emit('conectado', value.nombre)
    localStorage.removeItem("sck");
  }).then(() => {
    removeAuthorizationHeader();
  });
