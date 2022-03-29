import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Layout>
      <div className="inner-wrapper">
        <section className="page-wrapper py-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 m-5">
                <div className="blank-content-blk text-center m-5">
                  <h2 className="text-capitalize  font-xl font-extra-bold">
                    404
                  </h2>
                  <h4 className="my-4 my-md-5 font-weight-bold ">
                    We are sorry, the page you have requested is not available
                  </h4>

                  <Link
                    className="btn btn-primary px-5 py-2 text-white radius-5"
                    to="/"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ErrorPage;
