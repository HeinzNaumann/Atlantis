import { useEffect, useRef, useState } from 'react';
import socket from './socket'
import { createChad, updateChad, getChats } from '../../../src/components/service';
import './chat.css'

const Chat=({ props }) =>{
    const[msg, setMsg] = useState("");
    const[message, setMessage] = useState([]);
    const nombre = localStorage.getItem('nombre');
      

    const setFirst = props =>{
        console.log("PROPS CARGA", props)
       if(props.length===0){
            setMessage([]);
        }else{
            setMessage(props.mensajes); 
        } 
    }

    useEffect(()=>{
        setFirst(props);
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

  /*  const divRef = useRef(null);
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

    return (
            
            <div className='message-chat'>  
                <div className="chat" >
                   { message.length ? (message.map((e,i)=><div  key={i+1}><div>{e.nombre}</div><div>{e.mensaje}</div></div>)):
                    ("")}
                    <br/>
                    {/* <div ref={divRef}></div> */}
                </div>
                <form onSubmit={handleSubmnit} className="form-chat">
                    <textarea cols="10" rows="1" value={msg} onChange={e=>setMsg(e.target.value)}></textarea>
                    <button className="sendMsj">Enviar</button>
                </form>
            </div>
        
    )

}
export default Chat;