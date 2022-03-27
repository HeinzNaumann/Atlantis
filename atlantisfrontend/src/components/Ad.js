import "../css/Ad.css";
import {useEffect, useState} from "react"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import heart from "../../src/assets/img/heart.svg"
import socket from "./message/socket";
import { favAds } from "./service";
import * as Icon from 'react-feather';

export const Ad = (ad) => {
  
  const [heartEffect, heartClickEffect] = useState()
  

  const Effect = () => {
    if (heartEffect === "botones-fav") {
      heartClickEffect("botones-fav-click")
    } else {

      heartClickEffect("botones-fav")
    }
  }

  useEffect(() => {
    if (ad.fav) {
      heartClickEffect("botones-fav-click")
    } else {
      heartClickEffect("botones-fav")
    }
    
  }, [heartClickEffect]);

  
  const history = useHistory();
  const token = localStorage.getItem("token")
  
  const handleSold = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    socket.emit("sendNotification", {
      senderName:localStorage.getItem('nombre'),
      recieverName:ad.usuario_nombre,
      type:"sold"
    })
    console.log('ad.usuario_nombre',ad.usuario_nombre );
  }


  
  
  return (
    <div className=" col-md-4" onClick={()=> history.push(`/adverts/${ad._id}`)} key={ad._id}>
      <div key={ad.id} className="pdt-item-blk mb-4">
        <div className="pdt-img-blk">
          {ad.imagen && (
            <img
              src={`${process.env.REACT_APP_API_ATLANTIS_URL}/images/anuncios/${ad.imagen}`}
              alt={ad.nombre}
              className="img-fluid product-item-image img-style"
              width="900px"
              height="900px"
              border-radius="30px"
            ></img>
          )}
        </div>
        <div className="pdt-content-blk pt-0 px-3">
          <div className="position-relative">
            <div className="buy-blk position-absolute r-0">
              <ul className="pdt-item list-inline">
                <li className="list-inline-item align-middle">
                  {token ?
                    <button onClick={(e) => { e.stopPropagation(); favAds(ad._id);Effect("botones-fav-click") }} className={heartEffect} >
                      <Icon.Heart className="feather-heart size-xs"/> 
                   
                    </button>
                    : []
                     }
                  {/* <button onClick={() => favAds(ad._id)} className="botones-fav">
                    <Icon.Gift className=" feather-heart size-xs"/>
                  </button>
                  <button onClick={() => favAds(ad._id)} className="botones-fav">
                    <Icon.Heart className=" feather-heart size-xs"/>
                  </button> */}
                </li>
              </ul>
            </div>
          </div>
          
          <div>{ad.fav }</div>
          <div className="content-top-blk pt-3">
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-warning font-bold"> {ad.venta}</p>
            </div>
            <h5 className="text-theme font-amt font-bold">{ad.precio} €</h5>
   

              <h4>
                <a href="" className="display-block text-link">
                  {ad.nombre}
                </a>
              </h4>
              <h6 className="d-flex justify-content-between align-items-center">
                {ad.usuario_nombre}
              </h6>
            <div className="content-btm-blk">
              <div className="media py-3">
                <div className="media-body">
                  <h6 className="mb-0">{ad.tags}</h6>
                </div>
              </div>
               {/*  { console.log("AD :",ad)} */}
                {/* DIEGO */}
                <div className="interaction">
                  
                    <span onClick={(e)=>{e.stopPropagation(); history.push(`/chat/${ad._id}`)}} className="adIcon">
                         <span className="spanChat">Chat</span>
                    </span>
                    <Link to="" className="adIcon infoHeart">
                         <img id={ad._id} src={heart}  onClick={handleSold}></img>
                    </Link>
                    
                 </div>
                 {/* FIN DIEGO */}
              
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Ad;
