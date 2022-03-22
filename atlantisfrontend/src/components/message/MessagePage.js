import { useEffect, useRef, useState } from 'react';
import socket from './socket'
import Layout from '../../layout/Layout';
import { getChats,getAd } from '../../DataService';
import './chat.css'

const EmptyList = () => (
    <div style={{ textAlign: 'center' }}>
      <p>No tienes mensajes aun!</p>
      <Button as={Link} to="/" variant="primary">
        Anuncios
      </Button>
    </div>
  );



const MessagePage=({ match }) =>{
   // const[msg, setMsg] = useState("");
    const[chats, setChats] = useState([])
    const[ad, setAd] = useState({});
    const nombre = localStorage.getItem('nombre');
    const idusuario = localStorage.getItem('usuario');
    const idAd =match.params.idAd? match.params.idAd:"";
    //const ad_ = useAd(idAd);
   // console.log("AD -->", ad_);
    
    //console.log("AD.nombre -->", ad.nombre);
 
   /*  useEffect(()=>{
        socket.emit('conectado', nombre)
    },[nombre]) */

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

    const handleSubmnit = (e)=>{
        e.preventDefault();
        //const 
       // socket.emit('mensaje', nombre, msg)

       // setMsg("");
    }


    return (
        <Layout>
            <div className="">
                {chats.length ? (
                <ul className="">
                    {chats.map(({ _id,anuncio_nombre, ...chat }) => (
                    <li key={id}>
                        <Link to={`/chat/${_id}`}>
                        <p>{}</p>
                        </Link>
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