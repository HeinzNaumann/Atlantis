import * as Icon from 'react-feather';
import { favAds } from "../service";


const ActionsButtonsFavoritos = ( { ad, onEdit, setRender, setCategorias}) => {


    return ( 
        <>
        <div className="d-flex justify-content-center">
             <button onClick={(e) => { e.stopPropagation(); favAds(onEdit); setRender(onEdit); }} className="botones-fav" ><Icon.Heart className=" size-xs"></Icon.Heart></button>
             
        </div>
        </>
     );
}
 
export default ActionsButtonsFavoritos;