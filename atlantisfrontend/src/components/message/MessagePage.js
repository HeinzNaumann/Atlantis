import { useEffect, useRef, useState } from 'react';
import socket from './socket'
import Layout from '../../layout/Layout';
import Chat from './Chat'
import { Link } from "react-router-dom";
import { getChats,getAd, setChatRead,getChat } from '../../DataService';
import './chat.css'
import Button from '../common/button';

const EmptyList = () => (
    <div style={{ textAlign: 'center' }}>
      <p>No tienes mensajes aun!</p>
      <Link to="/" variant="primary">
        Adverts
      </Link>
    </div>
  );

 //TODO 
 //actualizar nombre de usuario en chats si cambia, relevante para nombre de classsName en nuevo_msj

const MessagePage=({ match }) =>{
   
    const[chats, setChats] = useState([])
    const[chat, setChat] = useState([])
    const[ad, setAd] = useState({});
    const[arg,setArg]= useState("");
    const[first,setFirst]= useState(0);
    const nombre = localStorage.getItem('nombre');
    const idusuario = localStorage.getItem('usuario');
    const idAd =match.params.idAd? match.params.idAd:"";

    const gtAd = adId =>{
        if(!adId){
            setAd("");
        }else{
             getAd(adId).then(advert =>setAd(advert.result[0]));
        }
    }

    useEffect(()=>{
        gtAd(idAd);
      },[idAd])


    useEffect(()=>{
        setArg(match);
      },[arg])

    useEffect(()=>{
        getChats(idusuario,idAd).then(({result,existChatAd})=>{
            if(existChatAd || idusuario === ad.usuario){
                //console.log("ad.propietario",ad.propietario," == ",ad.usuario_int,"ad.usuario_int")
                //console.log("existChatAd-->",existChatAd)
                //console.log("RESULT", result, "  ");
                //console.log("AD", ad);
                setChats(result)
                setFirst(0);
            }else{
                console.log("AD -->2", ad);
                const chatTemp ={
                    anuncio_nombre:ad.nombre,
                    anuncio: ad._id,
                    precio: ad.precio? ad.precio:"",
                    propietario: ad.usuario,
                    propietario_nombre:ad.usuario_nombre,
                    usuario_int:idusuario,
                    usuario_int_nombre:nombre,
                    mensajes:[],
                    imagen:ad.imagen? ad.imagen:""
                }
          
                setChats([chatTemp,...result]);
            }
            
        })
    },[ad])

  /*   useEffect(()=>{
        setFirst(1);
      },[]) */

      const updChat = async (id) =>{
         const chat = await getChat(id);
         //console.log("chat", chat, "id", id, chat._id===id);
         //console.log("chat 1", chat1.result[0]);
         setChat(chat.result[0]);
         setFirst(1);
      }  


    const handleChatSelect = async (chat,e,_id)=>{
        e.preventDefault();
        //const 
       // socket.emit('mensaje', nombre, msg)
       
       
     /*    console.log("ID",_id)
        setChat(chat);
        setFirst(1); */

        //llama al servicio para que ponga nuevo_msj a false
       if(_id){ // si existe el chat no es temp
            updChat(_id);
            await setChatRead(_id);
        }else{
            setChat(chat);
            setFirst(1);
        }
     }

    const firstChatSelect= chat=>{
        console.log("FirstChat", chat)
        if(setFirst===1){
            setChat(chat);
            setFirst(2);
        }
    }
      
   return (
        <Layout>
            
            <div>
                
                {chats.length ? (
                <ul>
                    {chats.map(({ ...chat }) => ( 
                    <li key={chat._id} onClick={(e)=>handleChatSelect(chat,e,chat._id)} 
                       className={chat.mensajes.length>0?(nombre!==chat.mensajes[chat.mensajes.length-1].nombre&&chat.nuevo_msj?"unread":"read"):"normal"}>
                            {/* {_id==chats[0]._id? firstChatSelect(chat):"FALSE" }  */}
                            <p>{chat.anuncio_nombre}</p>
                            <p>{chat.propietario_nombre}</p>
                            <p>{chat.imagen}</p>
                            <p>{chat.precio}</p>
                    </li>
                 ))}
                </ul>
                ) : (
                <EmptyList />
                )}
            </div>

            <div>
                { first?(<Chat props={chat}/>):(chats.length?"Seleccione un Mensaje":"")}
                     
            </div>

        </Layout>
        
    )

}
export default  MessagePage;