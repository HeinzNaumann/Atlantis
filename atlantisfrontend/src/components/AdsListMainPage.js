import { useEffect, useState } from "react";
import { getAdsList } from "../DataService";
import Ad from "./Ad";
import FormField from "./FormField";

const EmptyList = () => {
  return <p> Nothing to show up </p>;
};

export const AdsListMainPage = (props) => {
  const [adsList, setAdsList] = useState([]);
  const [filterByName, setFilterByName] = useState("");

  useEffect(() => {
    getAdsList().then((adsList) => setAdsList(adsList));
  }, []);

  const handleSearch = (event) => {
    setFilterByName(event.target.value);
  };

  const filteredName = (ad) => {
    for (var i = 0; i >= 0; i++) {
      return ad[i].nombre.includes(filterByName);
    }
  };

  const filteredAds = Object.values(adsList).filter((ad) => {
    return filteredName(ad);
  });
  console.log(adsList);
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
                  <div className="row">
                    {filteredAds.length !== 0 ? (
                      <div>
                        {filteredAds[0].map((ad) => (
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
