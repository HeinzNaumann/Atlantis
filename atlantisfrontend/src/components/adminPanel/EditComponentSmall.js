import { useEffect, useState } from "react";
import {useHistory, Redirect} from "react-router-dom"
import { updateAd, detailAds, getTags } from "../../components/service";
import Button from "./../common/button";


export function EditComponentSmall(EditId /*userId*/) {

  
  const { idEdit } = EditId;
  const { userId } = EditId;
  console.log(userId)
  
  const [ad, getAd] = useState([])
  
  useEffect(() => {
    detailAds(idEdit).then((ad) => {
      getAd(ad.result[0]);
    })
  }, [EditId])



  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [venta, setVenta] = useState("");
  const [precio, setPrecio] = useState("");
  const [filesInput, setFilesInput] = useState("");
  const [tags, setTags] = useState([]);


  const history = useHistory();
  const handleChange = (event) => {
    setFilesInput({ [event.target.name]: event.target.files });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.target);
      data.append("files input", filesInput);
      const updatedAd = await updateAd(id, data);
      if (updatedAd) {
        history.push("/adverts")
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setId(ad._id);
    setNombre(ad.nombre);
    setDescripcion(ad.descripcion);
    setPrecio(ad.precio);
    setVenta(ad.venta);
  }, [ad.nombre]);

   useEffect(() => {
     getTags().then((tags) => setTags(tags));
   }, []);
  
  
  // console.log(tags)

  return (
  <>
     {true ?(
      <div className="row">
        <div className="col-lg-12">
          <div className="add-pdt-blk">
            <form className="create-ad-form" onSubmit={handleSubmit}>
              <div className="pdt-details-blk bg-white p-4 mb-3">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="add-pdt-title-blk">
                      <span
                        data-feather="folder"
                        className="mr-3 text-theme"
                      ></span>
                      <h5 className="text-grey d-inline-block align-middle">
                        Edit your product
                      </h5>
                    </div>
                    <hr className="my-4" />
                    <div className="form-row mb-4">
                      <div className="col-12">
                        <input
                          type="text"
                          name="nombre"
                          placeholder="What do you want to sell today?"
                          className="form-control mt-3"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        name="venta"
                        placeholder="Are you selling?"
                        label="Sell"
                        className="custom-control-input"
                        checked={true}
                        value={venta}
                        onChange={() => setVenta("sell")}
                      />
                      <label className="custom-control-label"> Sell </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        name="venta"
                        placeholder="Are you buying?"
                        label="Buy"
                        className="venta"
                        value={venta}
                        onChange={() => setVenta("buy")}
                      ></input>
                      <label className="custom-control-label"> Buy </label>
                    </div>
                    <div className="col-sm-4 mt-3 form-check form-check-inline">
                      <input
                        type="number"
                        name="precio"
                        placeholder="Enter price"
                        label="Price of your item"
                        className="form-control"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                      ></input>
                    </div>
                    <textarea
                      type="text"
                      name="descripcion"
                      placeholder="Tell to the world a bit about your item and why is the best..."
                      label="Description of your item"
                      className="form-control input-lg bg-input custom-textarea mt-3"
                      rows="5"
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                    ></textarea>
                    <select
                      //   onChange={(e) => setTags(e.target.value)}
                      name="tags"
                      className="custom-select bg-input mt-3 input-lg"
                      multiple
                    >
                      {tags.results
                        ? tags.results.map((tag) => (
                          
                            <option key={tag} value={tag}>
                              {tag}
                            </option>
                          ))
                        : []}
                    </select>
                    <div className="col-sm-4 mt-3"></div>
                    <input
                      type="file"
                      name="imagen"
                      placeholder="Upload a picture of your item"
                      label="Imagen"
                      className="form-control mt-3 mb-3"
                      onChange={handleChange}
                    ></input>
                    <Button className="button" type="submit" variant="primary">
                      Edit Ad
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
     ) : [] }
  </>
      );
}

export default EditComponentSmall;
