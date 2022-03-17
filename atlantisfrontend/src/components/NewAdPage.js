import { useEffect, useState } from "react";
import { createAd, getTags } from "../DataService";
import Layout from "../layout/Layout";
import FormField from "./FormField";
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
      const newAd = await createAd(data);
      console.log("Ad Created", newAd);
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
                         <h5 className="text-grey d-inline-block align-middle">Product details</h5>
                       </div>
                       <hr className="my-4"/>
                       <div className="form-row mb-4">
                      <div className="col-12">
                        

                        <FormField
                          type="text"
                          name="nombre"
                          placeHolder="What do you want to sell today?"
                          label="Name of your item"
                          className="form-control"
                          value={ad.nombre}
                          onChange={handleChange}
                          ></FormField>
                          <div className="mt-2">
                             <p className="text-theme">
                                <span className="lnr lnr-warning mr-2"></span>Publishing the product, you agree all
                                its content and the product is your complete property.
                             </p>
                         </div>
                      </div>
                   </div>
                    
                    <FormField
                      type="radio"
                      name="venta"
                      placeHolder="Are you selling?"
                      label="Sell"
                      className="venta"
                      value={ad.venta === true}
                      checked={true}
                      onChange={handleChange}
                    ></FormField>
                    <FormField
                      type="radio"
                      name="venta"
                      placeHolder="Are you buying?"
                      label="Buy"
                      className="venta"
                      value={ad.venta === false}
                      onChange={handleChange}
                    ></FormField>
                    <FormField
                      type="number"
                      name="precio"
                      placeHolder="What price do you want to set? Don't be greedy!"
                      label="Price of your item"
                      className="precio"
                      value={ad.precio}
                      onChange={handleChange}
                    ></FormField>
                    <FormField
                      type="text"
                      name="descripcion"
                      placeHolder="Tell to the world a bit your item and why is the best"
                      label="Description of your item"
                      className="descripcion"
                      value={ad.descripcion}
                      onChange={handleChange}
                    ></FormField>
                    <select name="tags" className="form-select" multiple>
                      {tags
                        ? results?.map((tag) => (
                            <option key={tag} value={tag}>
                              {tag}
                            </option>
                          ))
                        : []}
                    </select>
                    <FormField
                      type="text"
                      name="usuario"
                      placeHolder="What's your name?"
                      label="Name of yourself"
                      classNamee="usuario"
                      value={ad.usuario}
                      onChange={handleChange}
                    ></FormField>
                    <FormField
                      type="file"
                      name="imagen"
                      placeHolder="Upload a picture of your item"
                      label="Imagen"
                      className="imagen"
                      value={ad.imagen}
                      onChange={handleChange}
                    ></FormField>
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
