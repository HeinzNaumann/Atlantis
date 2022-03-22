import { useEffect, useRef, useState } from 'react';
import socket from './socket'
import Layout from '../../layout/Layout';
import { Link } from "react-router-dom";
import { getChats,getAd } from '../../DataService';
import './chat.css'
import Button from '../common/button';

const EmptyList = () => (
    <div style={{ textAlign: 'center' }}>
      <p>No tienes mensajes aun!</p>
      {/* <Link to="/" variant="primary">
        Anuncios
      </Link> */}
    </div>
  );



const MessagePage=({ match }) =>{
   
    const[chats, setChats] = useState([])
    const[chat, setChat] = useState([])
    const[ad, setAd] = useState({});
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
            if(existChatAd){
                console.log("Result-->",result)
                console.log("existChatAd-->",existChatAd)
                setChats(result)
            }else{
                console.log("AD -->2", ad);
                const chatTemp ={
                    anuncio_nombre:ad.nombre,
                    anuncio: ad._id,
                    propietario: ad.usuario,
                    propietario_nombre:ad.usuario_nombre,
                    usuario_int:idusuario,
                    usuario_int_nombre:nombre
                }
                setChats([chatTemp,...result]);
            }
            
        })
    },[ad])

 /*    const divRef = useRef(null);
    useEffect(()=>{
        divRef.current.scrollIntoView({behavior:'smooth'})
    }) */

    const handleChatSelect = (e)=>{
        e.preventDefault();
        //const 
       // socket.emit('mensaje', nombre, msg)
        console.log("event--->",e.target)
       // setMsg("");
    }


    return (
        <Layout>
            
            <div>
                {chats.length ? (
                <ul>
                    {chats.map(({ _id,anuncio_nombre, ...chat }) => (
                    <li key={_id} onClick={handleChatSelect} value={nombre}>
                    
                            <p>{anuncio_nombre}</p>
                            <p>{console.log("chat",chat)}</p>
                    
                    </li>
                    ))}
                </ul>
                ) : (
                <EmptyList />
                )}
            </div>
        </Layout>
    )

}
export default  MessagePage;