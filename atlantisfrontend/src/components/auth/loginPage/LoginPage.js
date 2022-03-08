import { useState } from "react";
import Button from "../../common/button";
import { login } from "../service";
import "./LoginPage.css";
//import { AuthContextConsumer } from "../context";
import Layout from '../../../layout/Layout'
import { Link } from "react-router-dom";

function LoginPage({ onLogin, history, location }) {
  const [value, setValue] = useState({
    nombre: "",
    password: "",
    mem: false,
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const resetError = () => setError(null);

  const handleChange = event => {
    setValue(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    resetError();
    try {
      // call to api - send value
      await login(value);
      setIsLoading(false);
      //onLogin();
      const { from } = location.state || { from: { pathname: "/" } };
      history.push(from);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

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
          <span> Click para mantenerme logeado </span>
          <input
            type='checkbox'
            name='mem'
            checked={value.mem}
            onChange={handleChange}
          ></input>
          <Button
            type='submit'
            variant='primary'
            disabled={isLoading || !value.nombre || !value.password}
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
