import { useEffect, useRef, useState } from 'react';
import socket from './socket'
import Layout from '../../layout/Layout';
import Chat from './Chat'
import { Link } from "react-router-dom";
import { getChats,getAd, setChatRead,getChat } from '../../../src/components/service'
import './messagepage.css'


const EmptyList = () => (
    <div className='empty'>
      <p>No tienes mensajes aun!</p>
      <Link to="/" variant="primary">
        Adverts
      </Link>
    </div>
  );


  const SelectMsg = () => (
    <div className='empty'>
      <p>Seleccione un mensaje</p>
     </div>
  );

 //TODO 
 //actualizar nombre de usuario en chats si cambia, relevante para nombre de classsName en nuevo_msj

const MessagePage=({ match }) =>{
   
    const[chats, setChats] = useState([])
    const[chat, setChat] = useState([])
    const[ad, setAd] = useState({});
    const[mensaje, setMensaje] = useState({});
    const[first,setFirst]= useState(0);
    const nombre = localStorage.getItem('nombre');
    const idusuario = localStorage.getItem('id_usuario');
    const idAd =match.params.idAd? match.params.idAd:"";

    const gtAd = adId =>{
        if(!adId){
            setAd("");
        }else{
             getAd(adId).then(advert =>setAd(advert.result[0]?advert.result[0]:""));
        }
    }

    useEffect(()=>{
        gtAd(idAd);
      },[idAd])


    useEffect(()=>{
        getChats(idusuario,idAd).then(({result,existChatAd})=>{
            if(existChatAd || idusuario === ad.usuario){
                setChats(result)
                setFirst(0);
            }else{
                
                const chatTemp ={}
                if(ad){
                    chatTemp={
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
         setChat(chat.result[0]);
         setFirst(1);
      }  


    const handleChatSelect = async (chat,e,_id)=>{
        e.preventDefault();
        
       let idchat=_id? _id:""; 
       if(!_id){
            getChats(chat.usuario_int,chat.anuncio).then(async ({result,existChatAd})=>{
                    if(existChatAd===1){
                        idchat= result[0]._id;
                        updChat(idchat);
                        await setChatRead(idchat);
                    }
                    else{
                        setChat(chat);
                        
                        setFirst(1);
                    }
                
                })
        }else{
            updChat(_id);
            await setChatRead(idchat);
        }
       
     /*    console.log("ID",_id)
        setChat(chat);
        setFirst(1); */

        //llama al servicio para que ponga nuevo_msj a false
       /* if(_id){ // si existe el chat no es temp
            updChat(_id);
            await setChatRead(_id);
        }else{
            setChat(chat);
            setFirst(1);
        } */
     }


     useEffect(()=>{
   
        socket.on('mensajes', mensaje =>{
              getChats(idusuario,0).then(({result,existChatAd})=>{
                 if(result.length>0){
                     result.forEach(element => {
                         if(element._id===mensaje.id){
                              setChats(result);
                        }
                     });
                 }
                setMensaje(mensaje); 
            })
        });
        return ()=> {socket.off()}
    },[socket])

      
   return (
        <Layout>

          <div className='msjPage'>   
            <div className='message-container'>            
                <div className='message-list'>
                    
                    {chats.length ? (
                    <ul className="ulList">
                        {chats.map(({ ...chat }) => ( 
                        <div className="listItem">
                        <li key={chat._id} onClick={(e)=>handleChatSelect(chat,e,chat._id)} 
                             className={chat.mensajes.length>0?(nombre!==chat.mensajes[chat.mensajes.length-1].nombre&&chat.nuevo_msj?"unread":"read"):"normal"}>
                                {/* {_id==chats[0]._id? firstChatSelect(chat):"FALSE" }  */}
                                
                                    <p className="ad">{chat.anuncio_nombre}</p>
                                    <small className="seller">{chat.propietario_nombre}</small>
                                    
                                                                                                       
                        </li>
                        </div>
                    ))}
                    </ul>
                    ) : (
                    <EmptyList />
                    )}
                </div>

                
                    { first?(<Chat props={chat} precio={ad.precio}/>):(chats.length?<SelectMsg/>:"")}
                        
            
            </div>
         </div>

        </Layout>
        
    )

}
export default  MessagePage;