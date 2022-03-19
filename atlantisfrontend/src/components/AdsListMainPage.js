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
      <div className="row" {...props}>
        <div className="col-lg-4">
          <div className="col-lg-8">
            <FormField
              type="text"
              name="query"
              placeholder="Find ads"
              onChange={handleSearch}
             ></FormField>
            <div className="range-price">
              <span>Min Price: {filterByPrice[0]}</span>{" "}
              <span>Max Price: {filterByPrice[1]}</span>
              <Range value={filterByPrice} onChange={setFilterByPrice} />
            </div>
            <div className="buy-sale-switch">
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
            </div>
            <div className="tags-select">
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
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          {adsList.length !== 0 ? (
            <div className="row">
              {filteredAds.map((ad) => (
                <Ad {...ad} />
              ))}
            </div>
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
      {/* <Pagination {...filteredAds}></Pagination> */}
    </Layout>
  );
};

export default AdsListMainPage;
