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
      <div className="new-ad-page">
        Create your ad...
        <div className="create-ad-wrapper">
          What do you want to sell/buy today?
          <form className="create-ad-form" onSubmit={handleSubmit}>
            <FormField
              type="text"
              name="nombre"
              placeholder="What do you want to sell today?"
              label="Name of your item"
              className="nombre"
              value={ad.nombre}
              onChange={handleChange}
            ></FormField>
            <FormField
              type="file"
              name="imagen"
              placeholder="Upload a picture of your item"
              label="Imagen"
              className="imagen"
              value={ad.imagen}
              onChange={handleChange}
            ></FormField>
            <FormField
              type="radio"
              name="venta"
              placeholder="Are you selling?"
              label="Sell"
              className="venta"
              value={ad.venta === true}
              checked={true}
              onChange={handleChange}
            ></FormField>
            <FormField
              type="radio"
              name="venta"
              placeholder="Are you buying?"
              label="Buy"
              className="venta"
              value={ad.venta === false}
              onChange={handleChange}
            ></FormField>
            <FormField
              type="number"
              name="precio"
              placeholder="What price do you want to set? Don't be greedy!"
              label="Price of your item"
              className="precio"
              value={ad.precio}
              onChange={handleChange}
            ></FormField>
            <FormField
              type="text"
              name="descripcion"
              placeholder="Tell to the world a bit your item and why is the best"
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
              placeholder="What's your name?"
              label="Name of yourself"
              className="usuario"
              value={ad.usuario}
              onChange={handleChange}
            ></FormField>
            <Button className="button" type="submit" variant="primary">
              Create Ad
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default NewAdPage;
