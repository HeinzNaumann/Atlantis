import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import { getAdsUserList } from "../service";
import ControlledTabs from "./controlledTabs";
import MyProducts from "./MyProducts";
import MyFavorites from "./MyFavorites"
import NewAdPageSmall from "./NewAdPageSmall";
import EditComponentSmall from "./EditComponentSmall"
import * as Icon from "react-feather"
const AdminPanel = (   ) => {

    const id = useParams();
    const { userId } = id;
    const [ads, userAd] = useState([]);
    const [categorias, setCategorias] = useState("1")
    


    const handleCheckCategoria = (id) => {
        const idCat = id.target.id;
        setCategorias(idCat);
        console.log(id.target)
    }
   
    useEffect(() => {
       getAdsUserList(userId).then((ads) => {
            userAd(ads)
        });

    }, [userId]);

   

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

                            <div className="d-inline-flex p-2 gap-4">
                                <Icon.User  > </Icon.User>
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
                         <ControlledTabs onClck={handleCheckCategoria} />
                  </div>
                  <span className="lnr lnr-chevron-down d-block d-md-none yalign nav-arrow r-2"></span>
               </div>
            </div>
         </div>
            </div>
          {(() => {
             if (categorias === "1") {
                return (
                   <MyProducts setCategorias={setCategorias}/>
                )
             } else if (categorias === "2") {
                return (
                   <MyFavorites />
                )
             } else if ((categorias === "3")) {
                return (
                   <NewAdPageSmall />
                )
             } else if ((categorias === 4)) {
                return (
               
                   <EditComponentSmall  />
                )
             }
          })()}
    </Layout>
        </> );
}
 
export default AdminPanel;