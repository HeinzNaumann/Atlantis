import { useEffect, useRef, useState } from 'react';
import socket from './socket'
import Layout from '../../layout/Layout';
import { getUser } from '../../DataService';
import './chat.css'

/* const useAd = adId => {
    const [advert, setAdvert] = useState(null);

    useEffect(() => {
      if(!adId){
          setAdvert("");
      }else{
           getAd(adId).then(advert => setAdvert(advert.result[0]));
      }
 
      return () => {}; 
    }, []);
 
    return advert;
  }; */


const Chat=({ match }) =>{
    const[msg, setMsg] = useState("");
    const[message, setMessage] = useState([])
    //const[ad, setAd] = useState({});
    const nombre = localStorage.getItem('nombre');
    const idusuario = localStorage.getItem('usuario');
    
  /*   const id =match.params.adId? match.params.adId:"";
    const ad = useAd(id);
    console.log("Match",match);
    console.log("AD: ",ad); */

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