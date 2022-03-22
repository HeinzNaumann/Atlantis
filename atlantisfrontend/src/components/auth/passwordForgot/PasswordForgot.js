

import Layout from '../../../layout/Layout'
import { Link } from "react-router-dom";
import Button from "../../common/button";
import { passwordRecover } from "../service"
import { useState } from "react"



const PasswordForgot = () => {

  const [value, setValue] = useState({
    nombre: "",
  });

  const handleChange = event => {
    setValue({ [event.target.name] : event.target.value })
  };

const handleSubmit = async event =>{
  event.preventDefault();

  try {
    await passwordRecover(value);
  
  }catch(error){
    console.log(error)
  }
}



    return (  
    <Layout>
      <div className='LoginPage'>

        <h1 className='loginPage-title'> Recover your password</h1>
        <form onSubmit={handleSubmit}>
          <span> Nombre </span>
        <input
          type='text'
          name='nombre'
          value={value.nombre}
          onChange={handleChange}
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
            to="/login"
          >
                You dont have a account? Register
          </Link>

        </nav>
      </div>
        </Layout>
    );
}
 
export default PasswordForgot;