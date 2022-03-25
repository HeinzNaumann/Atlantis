import ActionsButtons from "./ActionsButtons";
import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
export const Ads = (ad) => {

    const history = useHistory();

    return (
        
        <> 
            <tr key={ad._id} onClick={() => {  history.push(`/adverts/${ad._id}`)  }} className="tr-button" >
                
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
                   <p>{ ad.venta }</p>
            </td>
            <td>
                
                    <p>{ ad.descripcion}</p>
            </td>
                <td>
                    {ad.tags.map((tags, index)=> (
                        <h6 key={index}>{tags}</h6>

                    ))}
                    
                
                </td>
                <td><h5>{ad.precio}€</h5></td>
                <td><ActionsButtons onEdit={ad._id} setCategorias={ad.setCategorias} /></td>
                
            </tr>
            </>
            );
}
