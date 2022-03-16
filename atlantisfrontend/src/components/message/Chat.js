import { useEffect, useRef, useState } from 'react';
import socket from './socket'
import Layout from '../../layout/Layout';
import './chat.css'

const Chat=() =>{
    const[msg, setMsg] = useState("");
    const[message, setMessage] = useState([])
    const nombre = localStorage.getItem('nombre');

    useEffect(()=>{
        socket.emit('conectado', nombre)
    },[nombre])

    useEffect(()=>{
        socket.on('mensajes', mensaje =>{
            setMessage([...message,mensaje])
        });
        return ()=> {socket.off()}
    },[message])

    const divRef = useRef(null);
    useEffect(()=>{
        divRef.current.scrollIntoView({behavior:'smooth'})
    })

    const handleSubmnit = (e)=>{
        e.preventDefault();
        //const 
        socket.emit('mensaje', nombre, msg)

        setMsg("");
    }


    return (
        <Layout>
            <div>
                <div className="chat">
                    {message.map((e,i)=><div key={i}><div>{e.nombre}</div><div>{e.mensaje}</div></div>)}
                </div>
                <div ref={divRef}></div>
                <form onSubmit={handleSubmnit} className="form-chat">
                    <textarea cols="10" rows="1" value={msg} onChange={e=>setMsg(e.target.value)}></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        </Layout>
    )

}
export default Chat;