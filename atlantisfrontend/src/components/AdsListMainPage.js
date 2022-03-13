import { useEffect, useState } from "react";
import { getAdsList, getTags } from "../DataService";
import Ad from "./Ad";
import FormField from "./FormField";
import Layout from "../layout/Layout";
import { Range } from "rc-slider";

import "rc-slider/assets/index.css";
import "../css/AdsListMainPage.css";
import { Pagination } from "./common/Pagination";

const EmptyList = () => {
  return <p> Nothing to show up </p>;
};

const AdsListMainPage = (props) => {
  const [adsList, setAdsList] = useState([]);
  //const [totalPages, setTotalPages] = useState(0);
  const [filterByName, setFilterByName] = useState("");
  const [filterByPrice, setFilterByPrice] = useState([0, 1000]);
  const [filterBySale, setFilterBySale] = useState("all");
  const [tags, setTags] = useState([]);
  const [filterByTag, setFilterByTag] = useState([]);

  useEffect(() => {
    getAdsList().then(
      (adsList) => setAdsList(adsList)
    );
  }, []);

  useEffect(() => {
    getTags().then((tags) => setTags(tags));
  }, []);

  const handleSearch = (event) => {
    setFilterByName(event.target.value);
  };

  const handleRadio = (event) => {
    setFilterBySale(event.target.value);
  };

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    setFilterByTag(selectedOptions.map((tag) => tag.value));
  };

  const filteredName = (ad) => {
    return ad.nombre.includes(filterByName);
  };

  const filteredPrice = (ad) => {
    return ad.precio >= filterByPrice[0] && ad.precio <= filterByPrice[1];
  };

  const filteredTags = (ad) => {
    return filterByTag.every((tag) => ad.tags.includes(tag));
  };

  const filteredSale = (ad) => {
    console.log(ad.venta);
    const sellBuy = ad.venta ? true : false;
    return filterBySale === "all" || filterBySale === sellBuy;
  };

  const { results } = adsList;

  const filteredAds =
    results?.filter((ad) => {
      return filteredPrice(ad) && filteredName(ad) && filteredTags(ad); //&& filteredSale(ad);
    }) || [];

  return (
    <Layout>
      <section className="tab-blk-style bg-grey py-6" {...props}>
        <FormField
          type="text"
          name="query"
          placeholder="Find ads"
          onChange={handleSearch}
        ></FormField>
        <p>Min Price: {filterByPrice[0]}</p>{" "}
        <p>Max Price: {filterByPrice[1]}</p>
        <Range value={filterByPrice} onChange={setFilterByPrice} />
        <input type="radio" name="venta" value={true} onChange={handleRadio} />
        Sell
        <input type="radio" name="venta" value={false} onChange={handleRadio} />
        Buy
        <input
          type="radio"
          name="venta"
          value="all"
          checked
          onChange={handleRadio}
        />
        All
        <select
          name="tags"
          className="form-select"
          onChange={handleSelectChange}
          multiple
        >
          {tags
            ? tags.results?.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))
            : []}
        </select>
        <>
          {adsList.length !== 0 ? (
            <div className="ad-container">
              {filteredAds.map((ad) => (
                <Ad {...ad} />
              ))}
            </div>
          ) : (
            <EmptyList />
          )}
        </>
      </section>
      {/* <Pagination {...filteredAds}></Pagination> */}
    </Layout>
  );
};

export default AdsListMainPage;
