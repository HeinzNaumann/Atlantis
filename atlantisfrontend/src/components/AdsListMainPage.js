import { useEffect, useState } from "react";
import { getUser, getAdsList, getTags } from "./service";
import Ad from "./Ad";
import FormField from "./FormField";
import Layout from "../layout/Layout";
import { Range } from "rc-slider";
import Loader from "../common/Loader";
import "rc-slider/assets/index.css";
import "../css/AdsListMainPage.css";
import { Pagination } from "./common/Pagination";
import {
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from "../api/client";

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
  const [isLoading, setLoading] = useState(true);
  const limit = 6;
  const skip = currentPage * limit;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthorizationHeader(token);
    } else {
      removeAuthorizationHeader(token);
    }
  }, []);

  //**      Diego* */

  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("nombre")) {
      getUser(localStorage.getItem("nombre")).then((user) => setUser(user));
    } else {
      setUser("");
    }
    return () => {};
  }, []);

  if (user) {
    localStorage.setItem("id_usuario", user.result[0]._id);
  }

  /*Diego*/

  useEffect(() => {
    getTags().then((tags) => setTags(tags));
  }, []);

  const getAds = () => {
    getAdsList().then(({ results, totalads }) => {
      const ads = results;
      ads.sort((t1, t2) => t2.createdAt.localeCompare(t1.createdAt));
      setAdsList(ads);
      setTotalPages(totalads / limit);
      setLoading(false);
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

  const slice = filteredAds.slice(skip - limit, limit * currentPage);

  return (
    <Layout>
      <div className="container">
        <div className="row" {...props}>
          <div className="col-lg-4">
            <div className="col-lg-10 filters">
              <h5> Search by Name</h5>
              <hr />
              <FormField
                type="text"
                name="query"
                placeholder="Find ads"
                onChange={handleSearch}
              ></FormField>
              <h5> Filter by Price</h5>
              <hr />
              <div className="range-price">
                <span>Min Price: {filterByPrice[0]}</span>{" "}
                <span>Max Price: {filterByPrice[1]}</span>
                <Range
                  max={500}
                  value={filterByPrice}
                  onChange={setFilterByPrice}
                />
              </div>
              <h5> Filter by type</h5>
              <hr />
              <input
                type="radio"
                name="sale"
                value="sell"
                //checked={false}
                onChange={() => setFilterBySale("sell")}
              />
              Sell
              <input
                type="radio"
                name="sale"
                value="buy"
                //checked={false}
                onChange={() => setFilterBySale("buy")}
              />
              Buy
              <input
                type="radio"
                name="sale"
                value="all"
                //checked={true}
                onClick={() => setFilterBySale("all")}
              />
              All
              <h5> Filter by categories</h5>
              <hr />
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
                  {tags.length !== 0 ? (
                    tags.results?.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))
                  ) : (
                    <div>Nothing to show</div>
                  )}
                </select>
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="col-lg-8 container-fluid  justify-content-center">
              <Loader />
            </div>
          ) : (
            <div className="col-lg-8 m-20 anuncios-block">
              {adsList.length !== 0 ? (
                <div className="row">
                  {slice.length !== 0 ? (
                    slice.map((ad) => <Ad {...ad} />)
                  ) : (
                    <div className="d-flex justify-content-center p-4">
                      There are no results for that, sorry.
                    </div>
                  )}
                </div>
              ) : (
                <EmptyList />
              )}
              {totalPages > 0 && (
                <ul className="pagination d-flex justify-content-center ">
                  <Pagination
                    getAds={getAds}
                    pages={totalPages}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                  ></Pagination>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AdsListMainPage;
