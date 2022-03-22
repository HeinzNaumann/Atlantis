import { useEffect, useState } from "react";
import { getAdsList, getTags, getUser} from "../DataService";
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

    //* Diego *//
    const [user,setUser]=useState("");

    useEffect(() => {
      if(localStorage.getItem('nombre')){
        console.log('NOMBRE:',localStorage.getItem('nombre'))
        getUser(localStorage.getItem('nombre')).then((user) => setUser(user))}
      else{
        setUser("")
      }
  
      return()=>{console.log("Usuario--->", user)}
    }, []);
     
    if(user){
      localStorage.setItem('usuario',user.result[0]._id)
    }
  
    //* Fin Diego *//


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



    

