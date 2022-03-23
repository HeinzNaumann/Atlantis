import { useEffect, useRef, useState } from 'react';
import socket from './socket'
import Layout from '../../layout/Layout';
import { createChad, updateChad, getUser } from '../../DataService';
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
        console.log("DivRef",divRef.current)
        divRef.current.scrollIntoView({behavior:'smooth'})
    }) */

    const handleSubmnit = async (e)=>{
        e.preventDefault();
        socket.emit('mensaje', nombre, msg,props._id);
        console.log("PROPS CHAT-->",props);
        //verifica si es un chat existente sino lo crea
        if(!props._id){
            // console.log("PROPS CHAT-->",props);
            const dataChat={...props,mensajes:[{nombre:nombre,mensaje:msg}]}
            //console.log("dataChat-->",dataChat);
            //llama al servicio para almacenar en BD de chat los nuevos msj
            await createChad(dataChat);
        }else{
            const dataChat={nombre:nombre,mensaje:msg}
            //llama al servicio para almacenar en BD de chat los nuevos msj
            await updateChad(props._id,dataChat);
        }

        setMsg("");
    }


    return (
            
            <div>
                <div className="chat" >
                   { message.length ? (message.map((e,i)=><div key={i+1}><div>{e.nombre}</div><div>{e.mensaje}</div></div>)):
                    ("")}
                    { console.log("Message",message, typeof(message))}
                    {/* {message.map((e,i)=><div key={i}><div>{e.nombre}</div><div>{e.mensaje}</div></div>)} */}
                </div>
                {/* <div ref={divRef}></div> */}
                <form onSubmit={handleSubmnit} className="form-chat">
                    <textarea cols="10" rows="1" value={msg} onChange={e=>setMsg(e.target.value)}></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        
    )

}
export default Chat;