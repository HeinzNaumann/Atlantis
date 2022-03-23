import { useEffect, useRef, useState } from 'react';
import socket from './socket'
import Layout from '../../layout/Layout';
import Chat from './Chat'
import { Link } from "react-router-dom";
import { getChats,getAd, setChatRead } from '../../DataService';
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
        getChats(idusuario,idAd).then(({result,existChatAd})=>{
            if(existChatAd || ad.propietario === ad.usuario_int){
                //console.log("Result-->",result)
               // console.log("existChatAd-->",existChatAd)
                console.log("RESULT", result, "  ");
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

    const handleChatSelect = async (chat,e,_id)=>{
        e.preventDefault();
        //const 
       // socket.emit('mensaje', nombre, msg)
        setChat(chat);
        setFirst(1);
        //llama al servicio para que ponga nuevo_msj a false
        console.log("chat Handle--->",chat," Chat ID:",_id)
        if(_id){ // si existe el chat no es temp
            await setChatRead(_id);
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