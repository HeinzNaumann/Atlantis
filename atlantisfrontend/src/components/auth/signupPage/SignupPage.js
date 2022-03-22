import { useState } from "react";
import Button from "../../common/button";
import { signup } from "../service";
import "./SignupPage.css";
import { useHistory } from "react-router-dom";
import Alert from "../../common/Alert";
import * as Icon from 'react-feather';

function SignupPage({ onLogin, history, location }) {

  const [value, setValue] = useState({
    nombre: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });


  const [alert, setAlert] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    history = useHistory();
  
  //Funcion de envio de formulario Submit  
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
    //Comprobar que las contraseñas son iguales
    if (value.password !== value.passwordRepeat) {
            setAlert({
        msg: "Passwords are not equal",
        error: true
      })
      return 
    }
    //Comprobar que la contraseña  al menos es de 6 caracteres
    if (value.password < 6) {
            setAlert({
        msg: "Password must have at least with 6 digits or letters",
        error: true
      })
      return 
    }
    
    setIsLoading(true);
    resetError();

    try {
      // call to api - send value
      const data = await signup(value);
      setIsLoading(false);

       setValue({
            nombre: "",
             email: "",
             password: "",
             passwordRepeat: "",
        });
      
      setAlert({
        msg: data.msg,
        error: false
      })
       
      //console.log(onLogin());
      //const { from } = location.state || { from: { pathname: "/" } };
      history.push("/adverts");
      } catch (error) {
      setError(error);
      setIsLoading(false);
    }

  };

  const { msg } = alert;
  return (
<>
      <form className="col-lg-6" onSubmit={handleSubmit}>
        
                        <div className="border p-4">
                        <div className="add-pdt-title-blk">
                            <span data-feather="user-plus" className="mr-3 text-theme"></span>
                            <h5 className="text-grey d-inline-block align-middle">New Account</h5>
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
              <div className="form-row mb-4">
                  <div className="col-12">
                      <div className="input-group px-0">
                        <div className="input-group-prepend">
                  <span className="input-group-text no-bg-color border-0">
                    <Icon.Mail className="position-relative z-index-5 text-theme" />
                              
                          </span>
                        </div>
                <input
                  type='email'
                  name='email'
                  className='form-control bg-input custom-input-group ml-n5 pl-5'
                  value={value.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                ></input>
                </div>                                        
                  </div>
              </div>
              <div className="form-row mb-4">
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
                        className="form-control bg-input custom-input-group ml-n5 pl-5"
                  value={value.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                ></input>
                      </div>                                        
                  </div>
              </div>
              <div className="form-row mb-4">
                  <div className="col-12">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text no-bg-color border-0">
                              <Icon.Lock className="position-relative z-index-5 text-theme" />
                          </span>
                        </div>
                <input
                  type='password'
                  name='passwordRepeat'
                  value={value.passwordRepeat}
                        onChange={handleChange}
                        placeholder="Enter Password"
                        className="form-control bg-input custom-input-group ml-n5 pl-5"
                  ></input>
                    </div>                                        
                  </div>
                </div>   
                           
          {msg && <Alert alert={alert} /> }
        <Button
          type='submit'
          variant='primary'
          // disabled={isLoading || !value.email || !value.password}
        > Signup </Button>
              </div>
              
        {error && (
        <div onClick={resetError} className='loginPage-error'>
          {error.message}
        </div>
      )}
      </form>
     


    </>
  );
}



export default SignupPage;
