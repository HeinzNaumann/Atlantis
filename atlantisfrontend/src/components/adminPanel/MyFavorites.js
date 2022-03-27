import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getAdsFavList } from "../service";
import { Ads } from "./Ads"
import Loader from "../../common/Loader";
const MyProducts = () => {

       const [isLoading, setLoading] = useState(true)
    const id = useParams();
    const { userId } = id;
    const [ads, userAd] = useState([]);
        useEffect(() => {
       getAdsFavList(userId).then((ads) => {
          userAd(ads);
           setLoading(false);
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
                        <h5 className="text-grey d-inline-block align-middle">My Favorites</h5>
                     </div>
                     <hr className="my-4"/>
                     <div className="notify-content-blk">
                         <div className="table-responsive">
                              {isLoading ? (
                                  <Loader />
                               ) : (
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
                                {ads.length !== 0 ? 
                
                                    ads.result.map((ad) => <Ads {...ad} /> )
                                 : 
                                  <div>otra cosa</div>
                                }
                              </tbody>
                                  </table>
                                  )}
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