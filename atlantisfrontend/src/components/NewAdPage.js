import { useEffect, useState } from "react";
import { createAd, getTags } from "./service";
import Layout from "../layout/Layout";
import Button from "./common/button"

import "./NewAdPage.css"

export function NewAdPage({ history }) {
  const [ad, setAd] = useState({
    nombre: "",
    imagen: "",
    descripcion: "",
    venta: false,
    precio: "",
    tags: [""],
    usuario: "",
  });
  const [filesInput, setFilesInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleChange = (event) => {
    setFilesInput({ [event.target.name]: event.target.files });
    setAd({
      ...ad,
      
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.target);
      data.append("files input", filesInput);
      
      
      // const token = localStorage.getItem('token', data.token)
      // data.append("token", token);
      const newAd = await createAd(data);
      if (newAd) {
        history.push("/adverts");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTags().then((tags) => setTags(tags));
  }, []);
  const { results } = tags;

  return (
    <Layout>

      
  <div className="row">
   <div className="col-lg-12">
      <div className="add-pdt-blk">
            <form className="create-ad-form" onSubmit={handleSubmit}>
               <div className="pdt-details-blk bg-white p-4 mb-3">
                  <div className="row">
                     <div className="col-lg-8">
                       <div className="add-pdt-title-blk">
                          <span data-feather="folder" className="mr-3 text-theme"></span>
                         <h5 className="text-grey d-inline-block align-middle">Add a product</h5>
                       </div>
                       <hr className="my-4"/>
                       <div className="form-row mb-4">
                      <div className="col-12">
                        <input
                          type="text"
                          name="nombre"
                          placeholder="What do you want to sell today?"
                          className="form-control mt-3"
                          value={ad.nombre}
                          onChange={handleChange}
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
                      value={ad.venta === true}
                      checked={true}
                      onChange={handleChange}
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
                      value={ad.venta === false}
                      onChange={handleChange}
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
                      value={ad.precio}
                      onChange={handleChange}
                      ></input>
                      </div>
                    <textarea
                      type="text"
                      name="descripcion"
                      placeholder="Tell to the world a bit about your item and why is the best..."
                      label="Description of your item"
                      className="form-control input-lg bg-input custom-textarea mt-3"
                      rows="5"
                      value={ad.descripcion}
                      onChange={handleChange}
                    ></textarea>
                    <select onChange={handleChange} name="tags" className="custom-select bg-input mt-3 input-lg" multiple>
                      {tags
                        ? results?.map((tag) => (
                            <option key={tag} value={tag} >
                              {tag}
                            </option>
                          ))
                        : []}
                    </select>
                    <div className="col-sm-4 mt-3">
                   
                      </div>
                    <input
                      type="file"
                      name="imagen"
                      placeholder="Upload a picture of your item"
                      label="Imagen"
                      className="form-control mt-3 mb-3"
                      value={ad.imagen}
                      onChange={handleChange}
                    ></input>
                    <Button className="button" type="submit" variant="primary">
                      Create Ad
                      </Button>
                  </div>
                  </div>
                  </div>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default NewAdPage;
