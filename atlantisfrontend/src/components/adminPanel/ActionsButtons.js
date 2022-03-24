import * as Icon from 'react-feather';

const ActionsButtons = () => {
    return ( 
        <>
        <div className="d-flex ">
            <button ><Icon.Edit></Icon.Edit></button>
                <button >
                <Icon.Delete></Icon.Delete>
                </button>
           
           <button ><Icon.Heart></Icon.Heart></button>
           <button ><Icon.Gift></Icon.Gift></button>     
        </div>
        </>
     );
}
 
export default ActionsButtons;