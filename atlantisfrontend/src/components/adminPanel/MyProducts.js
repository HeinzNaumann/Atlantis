import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getAdsUserList } from "../service";
import { Ads } from "./Ads"

const MyProducts = () => {
    const id = useParams();
    const { userId } = id;
    const [ads, userAd] = useState([]);
        useEffect(() => {
       getAdsUserList(userId).then((ads) => {
            userAd(ads)
        });

    }, [userId]);

    return ( <>
    
     
      <section className="orders-summary-wrapper bg-grey py-5">
         <div className="container">
           
            
            <div className="row">
               <div className="col-lg-12 d-block d-lg-flex">
                  <div className="notify-blk flex-fill bg-white p-4 mt-4">
                     <div className="orders-summary-title-blk">
                        <span data-feather="share-2" className="mr-3 text-theme"></span>
                        <h5 className="text-grey d-inline-block align-middle">My products</h5>
                     </div>
                     <hr className="my-4"/>
                     <div className="notify-content-blk">
                        <div className="table-responsive">
                           <table id="notify-table" className="table table-hover table-bordered table-striped mb-0">
                              <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                 </tr>
                              </thead>
                                <tbody>
                                {ads.results ? 
                
                                    ads.results.map((ad) => <Ads {...ad} /> )
                                 : 
                                  <div>prueba</div>
                                }
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>

               </div>
               
            </div>
         </div>
      </section>
    </>);
}
 
export default MyProducts;