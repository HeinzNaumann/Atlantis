import {useEffect, useState} from "react";
import { getAdsList } from "../DataService";
import Ad from "./Ad";

export const AdsListMainPage = (props) => {
  const [adsList, setAdsList] = useState([]);


  useEffect(() => {
    getAdsList().then((adsList) => setAdsList(adsList))
  }, [])
  
  
  return (
    <section className="tab-blk-style bg-grey py-6">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-list-contents">
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade show active" id="geo">
                  <div className="row">
                    
                      {adsList.length !==0 ?(
                        <div className="col-md-6 col-lg-3">
                          {adsList.results.map((ad)=>(
                            
                            <Ad {...ad} />
                          ))}
                        </div>
                      ) : (
                        <p>Nada que mostrar</p>
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
