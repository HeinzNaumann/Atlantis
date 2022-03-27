import * as Icon from 'react-feather';

const ActionsButtonsFavoritos = ( { setCategorias}) => {

    
    return ( 
        <>
        <div className="d-flex justify-content-center">
             
           
           <button className="botones-fav" ><Icon.Heart className=" size-xs"></Icon.Heart></button>
             
        </div>
        </>
     );
}
 
export default ActionsButtonsFavoritos;