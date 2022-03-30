import Layout from "../../layout/Layout";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteUser, getAdsUserList } from "../service";
import ControlledTabs from "./controlledTabs";
import MyProducts from "./MyProducts";
import MyFavorites from "./MyFavorites";
import NewAdPageSmall from "./NewAdPageSmall";
import EditComponentSmall from "./EditComponentSmall";
import swal from "sweetalert";
import * as Icon from "react-feather";
import { logout } from "../auth/service";

const AdminPanel = ({ history }) => {
  const id = useParams();
  const { userId } = id;
  const [ads, userAd] = useState([]);
  const [categorias, setCategorias] = useState("1");
  const [idEdit, EditId] = useState();
  const nombre = localStorage.getItem("nombre");


  const handleCheckCategoria = (id) => {
    const idCat = id.target.id;
    setCategorias(idCat);
  };

  const handleDeleteUser = () => {
    const user = nombre;
    swal({
      title: "Do you want to delete",
      text: user + "?",
      icon: "warning",
      buttons: ["no", "yes"],
    }).then((respuesta) => {
      if (respuesta) {
        swal({
          text: user + " has been successfully deleted",
          icon: "success",
        });
      }
      try {
        deleteUser(userId).then(() => {
          logout();
          history.replace("/login");
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    getAdsUserList(userId).then((ads) => {
      userAd(ads);
    });
  }, [userId]);


  return (
    <>
      <Layout>
        <section className="userpanel-banner-wrapper py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="user-profile-snacksbar bg-white p-4 p-md-5">
                  <div className="row">
                    <div className="col-md-6 col-lg-5">
                      <div className="media mb-4 mb-md-0">
                        <h2>
                          <strong>My Account</strong>
                        </h2>
                        <div className="d-inline-flex p-2 gap-4">
                          <Icon.User> </Icon.User>
                          <h3>{nombre}</h3>
                        </div>
                        <br />
                        <button
                          className="btn btn-danger"
                          onClick={handleDeleteUser}
                        >
                          Delete Account
                        </button>
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
            return <MyProducts EditId={EditId} setCategorias={setCategorias} />;
          } else if (categorias === "2") {
            return <MyFavorites setCategorias={setCategorias} />;
          } else if (categorias === "3") {
            return <NewAdPageSmall setCategorias={setCategorias} />;
          } else if (categorias === 4) {
            return (
              <EditComponentSmall
                setCategorias={setCategorias}
                userId={userId}
                idEdit={idEdit}
              />
            );
          }
        })()}
      </Layout>
    </>
  );
};

export default AdminPanel;
