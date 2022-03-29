import ActionsButtonsFavoritos from "./ActionsButtonsFavoritos";
import {  useHistory } from "react-router-dom"
export const AdsFavoritos = (ad, setRender, setCategorias) => {
    
   
    const history = useHistory();
    return (
        
        <>
     
        {ad.nombre ? (
            <tr key={ad._id} onClick={() => { history.push(`/adverts/${ad._id}`) }} className="tr-button" >
            
                    
                <td >
                     
                    <div className=" text-white ">
                        <img
                            src={`${process.env.REACT_APP_API_ATLANTIS_URL}/images/anuncios/${ad.imagen}`}
                            alt={ad.nombre}
                            className="img-fluid product-item-image img-style"
                            width="100px"
                            height="100px"
                            border-radius="30px"
                        ></img>
                    </div>
              
                </td>
                <td>
                
                    <h5>{ad.nombre}</h5>
                   
                </td>
                <td>
                    <p>{ad.venta}</p>
                </td>
                <td>
                
                    <div className="overflow-auto w-100 texto-description" >{ad.descripcion}</div>
                </td>
                <td>
                    {ad.tags.map((tags, index) => (
                        <h6 key={index}>{tags}</h6>

                    ))}
                    
                
                </td>
                <td><h5>{ad.precio}€</h5></td>
                <td><ActionsButtonsFavoritos onEdit={ad._id} ad={ad} setRender={ad.setRender} setCategorias={ad.setCategorias}  /></td>
      
                </tr>
            ):
            ([])
        }
            </>
    )
};
