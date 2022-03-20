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
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [tags, setTags] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [filterByPrice, setFilterByPrice] = useState([0, 1000]);
  const [filterByTag, setFilterByTag] = useState([]);
  
  const limit = 3;
  const skip = currentPage * limit;


  useEffect(() => {
    getTags().then((tags) => setTags(tags));
  }, []);

  const getAds = () => {
    getAdsList().then(({ results, totalads }) => {
      const ads = results;
      results.sort((t1, t2) => t2.createdAt.localeCompare(t1.createdAt));
      const slice = ads.slice(skip-limit, limit*currentPage);
      const slicedData = slice.map(ad => ad);
      setAdsList(slicedData);
      setTotalPages(totalads/limit);
    }); 
  };
  

  useEffect(()=>{
    getAds();
  },[currentPage])


  const handleSearch = (event) => {
    setFilterByName(event.target.value);
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

  
  const filteredAds =
    adsList?.filter((ad) => {
      return filteredPrice(ad) && filteredName(ad) && filteredTags(ad);
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
