

import Layout from '../../../layout/Layout'
import { Link } from "react-router-dom";
import Button from "../../common/button";

const PasswordForgot = () => {
    return (  
    <Layout>
      <div className='LoginPage'>

        <h1 className='loginPage-title'> Recover your password</h1>
        <form >
          <span> EMAIL </span>
        <input
          type='email'
          name='email'
          className='loginForm-field'

        ></input>
          <Button
            type='submit'
            variant='primary'
           
          >
            Send instructions
          </Button>
        </form>
        
        <nav className="">
          <Link
            className=""
            to="signup"
          >
                You dont have a account? Register
          </Link>

        </nav>
      </div>
        </Layout>
    );
}
 
export default PasswordForgot;