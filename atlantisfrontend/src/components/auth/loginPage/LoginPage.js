import { useState } from "react";
import Button from "../../common/button";
import { login } from "../service";
import "./LoginPage.css";
//import { AuthContextConsumer } from "../context";
import Layout from '../../../layout/Layout'
import Alert from "../../common/Alert";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function LoginPage({ onLogin, history, location }) {
  const [value, setValue] = useState({
    nombre: "",
    password: ""
  });

  const { setAuth } = useAuth()

 
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
        setIsLoading(false);
        setAlert({
          msg: data.msg,
          error: false
         })
      setAlert({})
      
      localStorage.setItem('token', data.token)
      setAuth(data)

      //onLogin();
      //const { from } = location.state || { from: { pathname: "/" } };
      //history.push(from);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
const { msg } = alert;
  return (

    <Layout>
      <div className='LoginPage'>

        <h1 className='loginPage-title'> Log in to WallaClon </h1>
        <form onSubmit={handleSubmit}>
          <span> Introduce de usuario </span>
          <input
            type='nombre'
            name='nombre'
            className='loginForm-field'
            value={value.nombre}
            onChange={handleChange}
          ></input>
          <span> Introduce tu contraseña </span>
          <input
            type='password'
            name='password'
            value={value.password}
            onChange={handleChange}
          ></input>
        
          {msg && <Alert alert={alert} /> }
          <Button
            type='submit'
            variant='primary'
        
          >
            Log in
          </Button>
          
        </form>
        {error && (
          <div onClick={resetError} className='loginPage-error'>
            {error.message}
          </div>
        )}
        <nav className="">
          <Link
            className=""
            to="signup"
          >
                You dont have a account? Register
          </Link>
          <Link
            className=""
            to="password-forgot"
          >
                You forgot your password?
          </Link>
        </nav>
      </div>
    </Layout>
  );

}


export default LoginPage;
