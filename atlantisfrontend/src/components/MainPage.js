import Layout from "../layout/Layout";
import Ad from "./Ad";
import Pagination from "./common/Pagination";
import Loader from "../common/Loader";
import { getAdsList, getUser } from "./service";
import { useState, useEffect } from "react";



export const MainPage = () => {
  const [adsList, setAdsList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const limit = 6;
  const skip = currentPage * limit;

  const EmptyList = () => {
    return <p> Nothing to show up </p>;
  };

    useEffect(() => {
    if (localStorage.getItem("nombre")) {
      getUser(localStorage.getItem("nombre")).then((user) => setUser(user));
    } else {
      setUser("");
    }
    return () => {};
  }, []);

    const [user, setUser] = useState("");

   if (user) {
    localStorage.setItem("id_usuario", user.result[0]._id);
  }

  const getAds = () => {
    getAdsList().then(({ results, totalads }) => {
      const ads = results;
      ads.sort((t1, t2) => t2.createdAt.localeCompare(t1.createdAt));
      const slice = ads.slice(skip - limit, limit * currentPage);
      setAdsList(slice);
      setTotalPages(totalads / limit);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAds();
  }, [currentPage]);

  return (
    <Layout>
      <section className="banner-wrapper">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="content-caption my-8 text-center bg-black-opacity bg-black-opacity p-3 p-md-5 text-white">
                        <h2 className="heading-top"><span className="text-theme">Find</span> out <span className="text-theme">the best</span> products</h2>
                        <h3>from particulars and companies around you and all over the world.</h3>
                        <div className="row">
                           <div className="col-12 col-lg-8 mx-auto">
                              
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      <div className="container">

        {isLoading ? (
          <div className="col-lg-12 container-fluid  justify-content-center">
            <Loader />
          </div>
        ) : (
          <div className="col-lg-12 m-20 anuncios-block">
            {adsList.length !== 0 ? (
              <div className="row">
                {adsList.map((ad) => (
                  <Ad {...ad}></Ad>
                ))}
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
    </Layout>
  );
};

export default MainPage;
