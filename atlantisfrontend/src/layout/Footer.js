import "./footer.css";
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
                   We are a team of developers working for the realization of the final project of the XI edition of Keepcoding Web,
formed by <br/>Patricia Mazuelo, Diego Perez, Kiko Navarro, Esther Fernandez and Heinz Naumann.
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
