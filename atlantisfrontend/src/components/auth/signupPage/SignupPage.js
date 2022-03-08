import { useState } from "react";
import Button from "../../common/button";
import { signup } from "../service";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import Layout from '../../../layout/Layout'

import Alert from "../../common/Alert";

function SignupPage({ onLogin, history, location }) {


  const [value, setValue] = useState({
    name: "",
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

    //Check if all the input are filled up
    const checker = Object.values(value).every(x => {
      if (x === "") {
      return true;
      }
      return false;
    });
    
  const handleSubmit = async event => {
    event.preventDefault();

    if (checker) {
      setAlert({
        msg: "All fields all required",
        error: true
      })
      return 
    }
    if (value.password !== value.passwordRepeat) {
            setAlert({
        msg: "Passwords are not equal",
        error: true
      })
      return 
    }
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
      await signup(value);
      setIsLoading(false);
      //onLogin();
      //const { from } = location.state || { from: { pathname: "/" } };
      //history.push("/SignupPage");
      } catch (error) {
        console.log(error);
      setError(error);
      setIsLoading(false);
    }
     setAlert({})
  };

  const { msg } = alert;
  return (
    <Layout>
    <div className='LoginPage'>
      <h1 className='loginPage-title'> Signup to WallaClon </h1>
      <form onSubmit={handleSubmit}>
         <span> Introduce tu nombre de usuario </span>
        <input
          type='name'
          name='name'
          className='loginForm-field'
          value={value.name}
          onChange={handleChange}
        ></input>
        <span> Introduce tu email </span>
        <input
          type='email'
          name='email'
          className='loginForm-field'
          value={value.email}
          onChange={handleChange}
        ></input>
        <span> Introduce tu contraseña </span>
        <input
          type='password'
          name='password'
          value={value.password}
          onChange={handleChange}
        ></input>
               <span> Repite tu contraseña </span>
        <input
          type='passwordRepeat'
          name='passwordRepeat'
          value={value.passwordRepeat}
          onChange={handleChange}
          ></input>
          {msg && <Alert alert={alert} /> }
        <Button
          type='submit'
          variant='primary'
          // disabled={isLoading || !value.email || !value.password}
        >
          Signup
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
      </div>
      </Layout>
  );
}



export default SignupPage;
