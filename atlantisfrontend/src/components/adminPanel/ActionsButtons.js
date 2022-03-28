import * as Icon from 'react-feather';
import swal from "sweetalert";
import { useHistory } from "react-router-dom"
import { deleteAd } from "../service";
import { setAdSold,setAdReserved } from "../../components/service";
import socket from "../message/socket";

const ActionsButtons = ({ setCategorias, ad, EditId }) => {
  
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
              history.push(`/admin/${ad._id}`)
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

    
    return ( 
        <>
        <div className="d-flex gap-1 ">
                <button className="feather-Edit" ><Icon.Edit className=" size-xs" onClick={(e) => { e.stopPropagation(); setCategorias(4); EditId(ad._id);  }}></Icon.Edit></button>
                <button className="feather-Delete" >
            <Icon.Delete className="size-xs" onClick={(e) => {e.stopPropagation(); toDelete() }} ></Icon.Delete>
                </button>
           
           <button className="botones-fav" ><Icon.Heart className=" size-xs" onClick={e=>handleSold(e,"reserved")}></Icon.Heart></button>
           <button className="feather-Edit" ><Icon.Gift className=" size-xs" onClick={e=>handleSold(e,"sold")}></Icon.Gift></button>     
        </div>
        </>
     );
}
 
export default ActionsButtons;