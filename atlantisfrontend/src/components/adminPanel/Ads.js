export const Ads = (ad) => {
    return (
        
        <>
            <tr key={ad._id}>
                <td>
   <div className=" text-white ">
                    <img
                        src={`${process.env.REACT_APP_API_ATLANTIS_URL}/images/anuncios/${ad.imagen}`}
                        alt={ad.nombre}
                        className="img-fluid product-item-image"
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
                <div className="media">
                    <img src="assets/img/pdt-cat-iwatch-img.jpg" alt="user avatar"
                        className="mx-auto align-self-center w-50" />

                </div>
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
            </tr>
            </>
            );
}
