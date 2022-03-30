import { useEffect, useRef, useState } from 'react';
import socket from './socket'
import { createChad, updateChad, getChats, getAd } from '../../../src/components/service';
import './chat.css'
import { Link } from "react-router-dom";

const Chat=({ props }) =>{
    const[msg, setMsg] = useState("");
    const[message, setMessage] = useState([]);
    const[ad, setAd] = useState({});
    const nombre = localStorage.getItem('nombre');
      

    const setFirst = props =>{
        if(props.length===0){
            setMessage([]);
        }else{
            setMessage(props.mensajes); 
        } 
    }

    useEffect(()=>{
        setFirst(props);
      },[props])

    useEffect(()=>{
        getAd(props.anuncio).then(advert =>{
            if(advert.result[0]){
                setAd(advert.result[0])
            }else{
                const adtemp={
                    _id:"",
                    precio:"Ad deleted"
                }
                setAd(adtemp)
            }
            });
        
      },[props])

/*     useEffect(()=>{
        socket.emit('conectado', nombre)
    },[nombre]) */

    useEffect(()=>{
   
        socket.on('mensajes', mensaje =>{
            let idchat = props._id? props._id:""; 
            if(!props._id){
                getChats(props.usuario_int,props.anuncio).then(({result,existChatAd})=>{
                    if(existChatAd===1){
                        idchat= result[0]._id;
                       if(mensaje.id===idchat){
                             setMessage([...message,mensaje])
                        }
                    }
                })
                  
            }else{ 
                if(mensaje.id===idchat){
                    setMessage([...message,mensaje])
                }
            }
        });
        return ()=> {socket.off()}
    },[message])

   /* const divRef = useRef(null);
    useEffect(()=>{
          divRef.current.scrollIntoView({behavior: "smooth"})
    }) */

    const handleSubmnit = async (e)=>{
        e.preventDefault();
        //console.log("PROPS CHAT-->",props);
        //verifica si es un chat existente sino lo crea
        let idchat=props._id;
        if(!idchat){
            getChats(props.usuario_int,props.anuncio).then(({result,existChatAd})=>{
                if(existChatAd===1){
                    idchat= result[0]._id;
                    const dataChat={nombre:nombre,mensaje:msg}
                   //llama al servicio para almacenar en BD de chat los nuevos msj
                    updateChad(idchat,dataChat);
                    socket.emit('mensaje', nombre, msg,idchat);
                }
                if(existChatAd===0){ // no tiene chat con ese anuncio
                    const dataChat={...props,mensajes:[{nombre:nombre,mensaje:msg}]}
                    //llama al servicio para almacenar en BD de chat los nuevos msj
                    createChad(dataChat).then((chatcreated)=>{
                         idchat=chatcreated.chat._id;
                         socket.emit('mensaje', nombre, msg,idchat);
                    })
                }
                
            })
        }else{
                const dataChat={nombre:nombre,mensaje:msg}
                //llama al servicio para almacenar en BD de chat los nuevos msj
                await updateChad(idchat,dataChat);
                socket.emit('mensaje', nombre, msg,idchat);
            
        }
        setMsg("");
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSubmnit(event);
        }
      }
      
    return (
            
        <div className='message-chat'>  
            <div className="chatAdName"><Link to={`/adverts/${ad._id?ad._id:""}`}><h3>{props.anuncio_nombre+ " - "+ad.precio+"€"}</h3></Link></div>
                <div className="chat" >
                    { message.length ? (message.map((e,i)=>
                        <div className={(e.nombre!==message[0].nombre)? "left":"right"} key={i}>
                            <div className={(e.nombre!==message[0].nombre)? "dLeft":"dRight"}>
                                <div>
                                    <p className={(e.nombre!==message[0].nombre)? "chUserL":"chUserR"}>{e.nombre}</p>
                                    <small className={(e.nombre!==message[0].nombre)? "chMessageL":"chMessageR"}>{e.mensaje}</small>
                                </div>
                                <div className={(e.nombre!==message[0].nombre)? "dateL":"dateR"}>{e.createdAtMsg? 
                                        (new Date(e.createdAtMsg).getHours()+":"+
                                        new Date(e.createdAtMsg).getMinutes()+"  "+
                                        new Date(e.createdAtMsg).getDate()+"/"+
                                        (new Date(e.createdAtMsg).getMonth()+1)+"/"+
                                        new Date(e.createdAtMsg).getFullYear())
                                        : 
                                        (new Date().getHours()+":"+
                                        new Date().getMinutes()+"  "+
                                        new Date().getDate()+"/"+
                                        (new Date().getMonth()+1)+"/"+
                                        new Date().getFullYear()) }
                                </div>
                            </div>
                        </div>)):
                                  ("")}
                    <br/>
                    {/* <div ref={divRef}></div> */}
                </div>
                <form onSubmit={handleSubmnit} className="form-chat">
                    <input cols="10" rows="1" className="txtForm" value={msg} onChange={e=>setMsg(e.target.value)} onKeyDown={handleKeyDown}></input>
                    <button className="sendMsj" >Enviar</button>
                </form>
        </div>
        
    )

}
export default Chat;