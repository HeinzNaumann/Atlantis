import { useEffect, useRef, useState } from 'react';
import socket from './socket'
import Layout from '../../layout/Layout';
import { createChad, updateChad, getUser } from '../../../src/components/service';
import './chat.css'

const Chat=({ props }) =>{
    const[msg, setMsg] = useState("");
    //const msjs = props.mensajes.length>0? props.mensajes:[];
    const[message, setMessage] = useState([]);
    const nombre = localStorage.getItem('nombre');
  

 /*    useEffect(()=>{
        //console.log("props.mensajes: ",props.mensajes);
        setMessage(props.mensajes);
        //console.log("message useEffect: ",message);
    },[props]) */

    const setFirst = props =>{
        console.log("PROPS", props)
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
            if(mensaje.id===props._id){
                //console.log("Mensajes", mensaje)
                setMessage([...message,mensaje])
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
        console.log("PROPS CHAT-->",props);
        //verifica si es un chat existente sino lo crea
        let idchat = props._id? props._id:""; 
        if(!idchat){
            // console.log("PROPS CHAT-->",props);
            const dataChat={...props,mensajes:[{nombre:nombre,mensaje:msg}]}
            //console.log("dataChat-->",dataChat);
            //llama al servicio para almacenar en BD de chat los nuevos msj
            const chatcreated =await createChad(dataChat);
            //almacena del id de chat creado para pasarselo emit
            idchat = chatcreated.chat[0]._id;
        }else{
            const dataChat={nombre:nombre,mensaje:msg}
            //llama al servicio para almacenar en BD de chat los nuevos msj
            await updateChad(props._id,dataChat);
        }
        
        socket.emit('mensaje', nombre, msg,idchat);
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