import * as Icon from 'react-feather';
import { setAdSold,setAdReserved } from "../../components/service";
import socket from "../message/socket";

const ActionsButtons = ( { setCategorias, ad, EditId }) => {


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

    
    return ( 
        <>
        <div className="d-flex gap-1 ">
                <button className="feather-Edit" ><Icon.Edit className=" size-xs" onClick={(e) => { e.stopPropagation(); setCategorias(4); EditId(ad._id);  }}></Icon.Edit></button>
                <button className="feather-Delete" >
                <Icon.Delete className=" size-xs"></Icon.Delete>
                </button>
           
           <button className="botones-fav" ><Icon.Heart className=" size-xs" onClick={e=>handleSold(e,"reserved")}></Icon.Heart></button>
           <button className="feather-Edit" ><Icon.Gift className=" size-xs" onClick={e=>handleSold(e,"sold")}></Icon.Gift></button>     
        </div>
        </>
     );
}
 
export default ActionsButtons;