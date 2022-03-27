import * as Icon from 'react-feather';

const ActionsButtons = ( { setCategorias}) => {

    
    return ( 
        <>
        <div className="d-flex gap-1 ">
                <button className="feather-Edit" ><Icon.Edit className=" size-xs" onClick={(e) => { e.stopPropagation(); setCategorias(4) }}></Icon.Edit></button>
                <button className="feather-Delete" >
                <Icon.Delete className=" size-xs"></Icon.Delete>
                </button>
           
           <button className="botones-fav" ><Icon.Heart className=" size-xs"></Icon.Heart></button>
           <button className="feather-Edit" ><Icon.Gift className=" size-xs"></Icon.Gift></button>     
        </div>
        </>
     );
}
 
export default ActionsButtons;