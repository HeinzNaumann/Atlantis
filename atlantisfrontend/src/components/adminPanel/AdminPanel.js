import Layout from "../../layout/Layout";
import { Link, useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import { getAdsUserList } from "../service";
import { Ads } from "./Ads"


const AdminPanel = ({ match }) => {

    const id = useParams();
    const { userId } = id;
    const [ads, userAd] = useState([]);

   
    useEffect(() => {
       getAdsUserList(userId).then((ads) => {
            userAd(ads)
        });

    }, []);

   
    
 console.log(ads.results);

    return (<>
        
        <Layout>
      <section className="userpanel-banner-wrapper py-5">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="user-profile-snacksbar bg-white p-4 p-md-5">
                     <div className="row">
                        <div className="col-md-6 col-lg-5">
                           <div className="media mb-4 mb-md-0">

                            <div className="media-body">
                                <h6>User:</h6>
                                <h3>{ads.results ? ads.results[0].usuario_nombre : <span>User Name</span>}</h3>  
                              </div>
                           </div>
                        </div>
                       
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>



      <div className="user-features-menu-wrapper bg-btn-style">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="append user-features-menu-blk py-4 py-md-0">
                     <ul className="d-none d-md-flex text-center">
                        <li className="flex-fill">
                           <Link to="/admin" className="active">
                              <span data-feather="pie-chart" className="mr-0 mr-lg-2"></span>
                              <span className="d-none d-lg-inline-block">My Productos</span>
                           </Link>
                        </li>
                     
                        <li className="flex-fill">
                           <a href="my-wishlist.html" className="">
                              <span data-feather="mail" className="mr-0 mr-lg-2"></span>
                              <span className="d-none d-lg-inline-block">Favorites</span>
                           </a>
                        </li>
                        
                       
                        <li className="flex-fill">
                           <Link to="/adverts/new" className="" >
                              <span data-feather="archive" className="mr-0 mr-lg-2"></span>
                              <span className="d-none d-lg-inline-block">Add products</span>
                           </Link>
                        </li>
                        
                     </ul>
                  </div>
                  <span className="lnr lnr-chevron-down d-block d-md-none yalign nav-arrow r-2"></span>
               </div>
            </div>
         </div>
      </div>

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
    </Layout>
        </> );
}
 
export default AdminPanel;