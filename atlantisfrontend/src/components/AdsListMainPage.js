import { useEffect, useState } from "react";
import { getAdsList, getTags } from "./service";
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
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [tags, setTags] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [filterByPrice, setFilterByPrice] = useState([0, 500]);
  const [filterBySale, setFilterBySale] = useState("");
  const [filterByTag, setFilterByTag] = useState([]);

  const limit = 6;
  const skip = currentPage * limit;

  useEffect(() => {
    getTags().then((tags) => setTags(tags));
  }, []);

  const getAds = () => {
    getAdsList().then(({ results, totalads }) => {
      const ads = results;
      ads.sort((t1, t2) => t2.createdAt.localeCompare(t1.createdAt));
      const slice = ads.slice(skip - limit, limit * currentPage);
      const slicedData = slice.map((ad) => ad);
      setAdsList(slicedData);
      setTotalPages(totalads / limit);
    });
  };

  useEffect(() => {
    getAds();
  }, [currentPage]);

  const handleSearch = (event) => {
    setFilterByName(event.target.value.toLowerCase());
  };

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    setFilterByTag(selectedOptions.map((tag) => tag.value));

    console.log(selectedOptions);
  };

  const filteredName = (ad) => {
    const name = ad.nombre.toLowerCase();
    return name.includes(filterByName);
  };

  const filteredPrice = (ad) => {
    return ad.precio >= filterByPrice[0] && ad.precio <= filterByPrice[1];
  };

  const filteredSale = (ad) => {
    if (filterBySale === "buy") {
      return ad.venta.includes("buy");
    } else if (filterBySale === "sell") {
      return ad.venta.includes("sell");
    } else {
      return "all";
    }
  };

  const filteredTags = (ad) => {
    return filterByTag.every((tag) => {
      if (tag !== "all") {
        return ad.tags.includes(tag);
      } else {
        return ad;
      }
    });
  };

  const filteredAds =
    adsList?.filter((ad) => {
      return (
        filteredPrice(ad) &&
        filteredName(ad) &&
        filteredTags(ad) &&
        filteredSale(ad)
      );
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
              <Range
                max={500}
                value={filterByPrice}
                onChange={setFilterByPrice}
              />
            </div>
            <input
              type="radio"
              name="sale"
              value="sell"
              checked={false}
              onChange={() => setFilterBySale("sell")}
            />
            Sell
            <input
              type="radio"
              name="sale"
              value="buy"
              checked={false}
              onChange={() => setFilterBySale("buy")}
            />
            Buy
            <input
              type="radio"
              name="sale"
              value="all"
              checked={true}
              onClick={() => setFilterBySale("all")}
            />
            All
            <div></div>
            <div className="tags-select">
              <select
                name="tags"
                className="form-select"
                onChange={handleSelectChange}
                multiple
              >
                <option key="all" value="all">
                  All
                </option>
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

      {totalPages > 0 && (
        <Pagination
          pages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        ></Pagination>
      )}
    </Layout>
  );
};

export default AdsListMainPage;
