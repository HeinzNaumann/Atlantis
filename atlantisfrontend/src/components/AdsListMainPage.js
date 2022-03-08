import { useEffect, useState } from "react";
import { getAdsList } from "../DataService";
import Ad from "./Ad";
import FormField from "./FormField";
import { Range } from "rc-slider";

import "rc-slider/assets/index.css";

const EmptyList = () => {
  return <p> Nothing to show up </p>;
};

const AdsListMainPage = (props) => {
  const [adsList, setAdsList] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [filterByPrice, setFilterByPrice] = useState([0, 1000]);

  useEffect(() => {
    getAdsList().then((adsList) => setAdsList(adsList));
  }, []);

  const handleSearch = (event) => {
    setFilterByName(event.target.value);
  };

  const filteredName = (ad) => {
    return ad.nombre.includes(filterByName);
  };

  const filteredPrice = (ad) => {
    return ad.precio >= filterByPrice[0] && ad.precio <= filterByPrice[1];
  };
  console.log(adsList)
  const { results } = adsList;
  console.log(results)

  const filteredAds = results.filter((ad) => {
    return (filteredPrice(ad) && filteredName(ad));
  });
  console.log(filteredAds);

  return (
    <section className="tab-blk-style bg-grey py-6" {...props}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-list-contents">
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane fade show active"
                  id="geo"
                >
                  <FormField
                    type="text"
                    name="query"
                    placeholder="Find ads"
                    onChange={handleSearch}
                  ></FormField>
                  <p>Min Price: {filterByPrice[0]}</p>{" "}
                  <p>Max Price: {filterByPrice[1]}</p>
                  <Range value={filterByPrice} onChange={setFilterByPrice} />
                  <div className="row">
                    {adsList.length !== 0 ? (
                      <div>
                        {filteredAds.map((ad) => (
                          <Ad {...ad} />
                        ))}
                      </div>
                    ) : (
                      <EmptyList />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsListMainPage;
