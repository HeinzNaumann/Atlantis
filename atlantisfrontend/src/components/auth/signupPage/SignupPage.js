import { useState } from "react";
import signupPage from ".";
import Button from "../../common/button";
import { login } from "../service";
import "./SignupPage.css";

function SignupPage({ onLogin, history, location }) {
  const [value, setValue] = useState({
    name: "",
    email: "",
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
      onLogin();
      const { from } = location.state || { from: { pathname: "/" } };
      history.push(from);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return (
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
               <span> Repite tu contraseña</span>
        <input
          type='password'
          name='password'
          value={value.password}
          onChange={handleChange}
        ></input>

        <Button
          type='submit'
          variant='primary'
          disabled={isLoading || !value.email || !value.password}
        >
          Log in
        </Button>
      </form>
      {error && (
        <div onClick={resetError} className='loginPage-error'>
          {error.message}
        </div>
      )}
    </div>
  );
}



export default SignupPage;
