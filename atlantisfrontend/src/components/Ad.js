import "../css/Ad.css";
import {useEffect, useState} from "react"
import { useHistory } from "react-router-dom";
import socket from "./message/socket";
import { favAds } from "./service";
import * as Icon from 'react-feather';
import sold from "../assets/sold.png"
export const Ad = (ad) => {
  
  const [heartEffect, heartClickEffect] = useState()
  

  const Effect = () => {
    if (heartEffect === "botones-fav") {
      heartClickEffect("botones-fav-click")
    } else {
      heartClickEffect("botones-fav")
    }
  }

  //   console.log(ad.usuario, user)
  //  const filteredFav = (ad) => {
  //    if (ad.usuario ) {
  //      return ad;
  //    }
  //  };

  useEffect(() => {
    if (ad.fav) {
      heartClickEffect("botones-fav-click")
    } else {
      heartClickEffect("botones-fav")
    }
    
  }, [ad.fav]);

  
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
      
      <div key={ad._id} className="pdt-item-blk mb-4">
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
                  {token &&
                    <button onClick={(e) => { e.stopPropagation(); favAds(ad._id);Effect("botones-fav-click") }} className={heartEffect} >
                      <Icon.Heart className="feather-heart size-xs"/> 
                    </button>
                    
                  }
                  
                  {/* 
                  <button onClick={() => favAds(ad._id)} className="botones-fav">
                    <Icon.Message className=" feather-heart size-xs"/>
                  </button> */}
                </li>
                   <li className="list-inline-item align-middle">
                  {token &&
                    <button className="feather-Message" onClick={(e)=>{e.stopPropagation(); history.push(`/chat/${ad._id}`)}}  >
                      <Icon.MessageSquare className=" size-xs"/> 
                    </button>
                    
                  }
                </li>
              </ul>
            </div>
          </div>
          
          <div>{ad.fav }</div>
          <div className="content-top-blk pt-3">
                
            <p className={`${ad.venta === "sell" ? "text-warning font-bold p-sell" : "text-success font-bold p-sell"}`} > {ad.venta}</p>
            {ad.vendido ?
              <div className="sold-ovelay">
                <img src={sold} alt={sold} width="200px" height="auto" className="sold" />
                </div>
              : []}
            
            <h5 className="text-theme font-amt font-bold">{ad.precio} €</h5>
   

              <h4>
                <a href="" className="display-block text-link">
                  {ad.nombre}
                </a>
              </h4>
              
            <div className="content-btm-blk">
            
                <h6 className="d-flex gap-1 align-items-center pl-3">
                  <Icon.User />{ad.usuario_nombre}
               </h6>
              <div className="media-body pb-1">
                <span>Categories:</span>
                <div className="d-flex flex-wrap mt-0">
                  {ad.tags.map((tags, index) => (
                        <span className="pl-6 tags-ads " key={index}> &nbsp;<em className="pm-6 tags-ads "> {tags} </em></span>

                    ))}
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Ad;
