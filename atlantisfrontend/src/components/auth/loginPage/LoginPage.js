import { useState } from "react";
import Button from "../../common/button";
import { login } from "../service";
import "./LoginPage.css";
import Alert from "../../common/Alert";
import { Link, useHistory } from "react-router-dom";
import * as Icon from 'react-feather';
import {setAuthorizationHeader} from "../../../api/client"
import socket from '../../message/socket'

function LoginPage( ) {
  const [value, setValue] = useState({
    nombre: "",
    password: ""
  });

  const history = useHistory();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({});
  const resetError = () => setError(null);

  const handleChange = event => {
    setValue(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

    //Comprobar que todos los campos estan rellenados
    const checker = Object.values(value).every(x => {
      if (x === "") {
      return true;
      }
      return false;
    });

    
  const handleSubmit = async event => {
    event.preventDefault();
      
    //Comprobar que todos los campos estan rellenados
    if (checker) {
      setAlert({
        msg: "All fields all required",
        error: true
      })
      return 
    }
    
    setIsLoading(true);
    resetError();
    
    try {
      // call to api - send value
      const data = await login(value);
        // const { usuario } = data; 
      //  localStorage.setItem("id_usuario", usuario._id)
      setIsLoading(false);
        setAlert({
          msg: data.msg,
          error: false
         })
    
      /* DIEGO */
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("nombre",value.nombre);
        setAuthorizationHeader(data.token)
        localStorage.setItem("sck",socket.id);
        socket.emit('conectado', value.nombre)
        history.push("/main");
      }
      /* FIN DIEGO */
      
     
      
      //setAuth(data)
     // onLogin();
      //const { from } = location.state || { from: { pathname: "/" } };
      
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  const { msg } = alert;
  
 

  return (

    <>

    <form className="col-lg-6" onSubmit={handleSubmit}>
 
        <div className="border mt-4 mt-lg-0 p-4">
                <div className="add-pdt-title-blk">
                    <span data-feather="key" className="mr-3 text-theme"></span>
                    <h5 className="text-grey d-inline-block align-middle">Sign in</h5>
                </div>
                  <hr className="my-4"/>                                    
            <div className="form-row mb-4">
                <div className="col-12">
                    <div className="input-group px-0">
                      <div className="input-group-prepend">
                  <span className="input-group-text no-bg-color border-0">
                    <Icon.User className="position-relative z-index-5 text-theme" />
                         
                        </span>
                      </div>
          <input
            type='text'
            name='nombre'
            className='form-control bg-input custom-input-group ml-n5 pl-5'
            value={value.nombre}
            onChange={handleChange}
            placeholder="Enter Username"
            ></input>
                  </div>                                        
              </div>
            </div>
            
          <div className="form-row">
              <div className="col-12">
                  <div className="input-group px-0">
                    <div className="input-group-prepend">
                  <span className="input-group-text no-bg-color border-0">
                     <Icon.Lock className="position-relative z-index-5 text-theme" />

                      </span>
                    </div>
     
          <input
            type='password'
            name='password'
            value={value.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="form-control bg-input custom-input-group ml-n5 pl-5"
          ></input>
          </div>
             </div>
              </div>
               </div>   
          
          {msg && <Alert alert={alert} /> }
          <Button
            type='submit'
            variant='primary'
        
          >
            Log in
            </Button>
            <nav className="">
   
          <Link
            className=""
            to="/password-forgot"
          >
                You forgot your password?
          </Link>
        </nav>
          {error && (
          <div onClick={resetError} className='loginPage-error'>
            {error.message}
          </div>
        )}   
      </form>
              
    </>
  );

}


export default LoginPage;
