import * as Icon from 'react-feather';
import swal from "sweetalert";
import { useHistory } from "react-router-dom"
import { deleteAd } from "../service";
import { setAdSold,setAdReserved } from "../../components/service";
import socket from "../message/socket";
import { useState, useEffect } from 'react';
const ActionsButtons = ({ setCategorias, ad, EditId, setRender }) => {
  const history = useHistory()
  const toDelete = () => {
        const name = ad.nombre;
        swal({
          title: "Do you want to delete",
          text: name + "?",
          icon: "warning",
          buttons: ["no", "yes"],
        }).then((respuesta) => {
          if (respuesta) {
            swal({
              text: name + " has been successfully deleted",
              icon: "success",
            });
          }
          try {
            deleteAd(ad._id).then(() => {
                ad.setRender("algo")
                setCategorias("1");
                 history.push(`/admin/${ad.usuario}`)
                 
            });
          } catch (error) {
            console.log(error);
          }
        });
      };

      const handleSold = (e,type)=>{
        e.preventDefault();
        e.stopPropagation();
        if(type==="sold"){
            setAdSold(ad._id);
        }
        if(type==="reserved"){
            setAdReserved(ad._id);
        }
        socket.emit("sendNotification", {
          senderName:localStorage.getItem('nombre'),
          recieverName:ad.usuario_nombre,
          article:ad._id,
          article_name: ad.nombre,
          type:type
        }) 
      }
  const [reservedEffect, reservedClickEffect] = useState();
  const [soldEffect, soldClickEffect] = useState();
    useEffect(() => {
    if (ad.vendido) {
      soldClickEffect("botones-resven-click")
    } else {
      soldClickEffect("botones-resven")
    }
    
  }, [ad.vendido]);

   useEffect(() => {
    if (ad.reservado) {
      reservedClickEffect("botones-resven-click")
    } else {
      reservedClickEffect("botones-resven")
    }
    
  }, [ad.reservado]);

    const Effect = () => {
    if (soldEffect === "botones-resven") {
      soldClickEffect("botones-resven-click")
    } else {
      soldClickEffect("botones-resven")
    }
    }
  
  
    const Effect2 = () => {
    if ( reservedEffect === "botones-resven") {
      reservedClickEffect("botones-resven-click")
    } else {
      reservedClickEffect("botones-resven")
    }
  }
    return ( 
        <>
        <div className="d-flex gap-1 ">
                <button className="feather-Message" ><Icon.Edit className=" size-xs" onClick={(e) => { e.stopPropagation(); setCategorias(4); EditId(ad._id);  }}></Icon.Edit></button>
                <button className="feather-Delete" >
            <Icon.Delete className="size-xs" onClick={(e) => {e.stopPropagation(); toDelete() }} ></Icon.Delete>
                </button>
           
           <button className={reservedEffect} onClick={(e) => { handleSold(e, "reserved"); Effect2("botones-resven-click")}} ><Icon.Gift className=" size-xs"  ></Icon.Gift></button>
          <button className={soldEffect} onClick={(e) => { handleSold(e, "sold"); Effect("botones-resven-click")}}><Icon.DollarSign className=" size-xs" ></Icon.DollarSign></button>     
        </div>
        </>
     );
}
 
export default ActionsButtons;