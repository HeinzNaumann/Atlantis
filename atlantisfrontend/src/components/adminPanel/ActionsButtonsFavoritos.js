import * as Icon from 'react-feather';

const ActionsButtonsFavoritos = ( { setCategorias}) => {

    
    return ( 
        <>
        <div className="d-flex gap-1 ">
             
           
           <button className="botones-fav" ><Icon.Heart className=" size-xs"></Icon.Heart></button>
             
        </div>
        </>
     );
}
 
export default ActionsButtonsFavoritos;