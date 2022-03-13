import "../css/Ad.css";
export const Ad = (ad) => {
  return (
    <div className=" d-flex flex-row ad-wrapper" key={ad.id}>
      <div className="pdt-item-blk mb-4">
        <div className="img">
          {ad.imagen && (
            <img
              src={`http://localhost:3002${ad.imagen}`}
              alt={ad.nombre}
              width="300px"
              height="300px"
            ></img>
          )}
        </div>
        <h6 className="mb-0">{ad.usuario}</h6>
        <p className="ad-sale">{ad.venta ? "buy" : "sell"}</p>
        <p className="ad-tags">{ad.tags}</p>
        <div className="content-top-blk pt-3">
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-warning font-bold">{ad.descripcion}</p>
          </div>
          <h5 className="text-theme font-amt font-bold">{ad.precio}</h5>
          <h4>
            <a href="#" className="display-block text-link">
              {ad.nombre}
            </a>
          </h4>
        </div>
        <p className="text-green font-bold"></p>
      </div>
    </div>
  );
};

export default Ad;
