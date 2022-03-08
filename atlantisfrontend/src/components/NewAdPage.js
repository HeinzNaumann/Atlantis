import { useState } from "react";
import { createAd } from "../DataService";
import FormField from "./FormField";

export function NewAdPage() {
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
      data.append("files input", filesInput)
      const newAd = await createAd(data);
      console.log("Ad Created", newAd);
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
            label="Sale"
            className="venta"
            value={true}
            checked={ad.venta === true}
            onChange={handleChange}
          ></FormField>
          <FormField
            type="radio"
            name="venta"
            placeholder="are you buying?"
            label="Buy"
            className="venta"
            value={false}
            checked={ad.venta === false}
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
          <select name="tags" className="form-select" multiple></select>
          <FormField
            type="text"
            name="usuario"
            placeholder="What's your name?"
            label="Name of yourself"
            className="usuario"
            value={ad.usuario}
            onChange={handleChange}
          ></FormField>
          <button className="button" type="submit" variant="primary">
            Create Ad
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewAdPage;
