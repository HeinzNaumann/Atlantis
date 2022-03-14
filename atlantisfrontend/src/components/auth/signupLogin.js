import SignupPage from "./signupPage/SignupPage";
import LoginPage from "./loginPage/LoginPage";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";
const signupLogin = () => {
    return ( 

        <Layout>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="reg-title-wrapper bg-white pl-4 pr-4 pt-4 text-center">
                        <h3 className="mb-4">Login or Create a free account!</h3>
                        <p>Join the Atlantis universe to meet the products you will love to buy and sell all over the world.</p>
                        <hr className="my-4"/>
                     </div>
                 </div>
            
                <div className="col-lg-12">
                    <div className="add-pdt-blk">
                          <div className="pdt-details-blk bg-white p-4">
                              <div className="row">
                
                    <SignupPage />
                    <LoginPage />

                    
                
                   </div>
                </div>
                   </div>
                </div>


            </div>
            

         <nav className="">
          <Link
            className=""
            to="login"
          >
                You have allready a account? Login
          </Link>
          <Link
            className=""
            to="password-forgot"
          >
                You forgot your password?
          </Link>
        </nav>
        
        </Layout>
     );
}
 
export default signupLogin;