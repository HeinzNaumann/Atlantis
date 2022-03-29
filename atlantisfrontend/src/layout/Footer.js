import "./footer.css";
import * as Icon from 'react-feather';
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div className="middle-footer py-6">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12 mb-md-5 mb-lg-0">
                <div className="company-info-widget mb-4 mb-md-0">
                  <h5 className="text-white text-uppercase text-center">About us</h5>
                  <p className="pt-4 text-center">
                    Equipo de desarrolladores para la realización del proyecto final de la edicion XI de Keepcoding Web, <br/>formado por Patricia Manzuelo, Diego Perez, Kiko Navarro, Esther y Heinz Naumann.
                  </p>
                
                  
                </div>
              </div>
              

            </div>
          </div>
        </div>
        <div className="bottom-footer text-center py-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-block d-md-flex justify-content-between">
                  <p>© Copyrights 2022. Atl@ntis - All Rights Reserved</p>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
