import Alert from "../../common/Alert";
import Layout from '../../../layout/Layout'
import { Link } from "react-router-dom";
import Button from "../../common/button";
import { changePassword } from "../service"
import { useEffect, useState } from "react"
import './changePassword.css'



const ChangePassword = ({match}) => {

  const [value, setValue] = useState({
    password: "",
    passwordRepeat:"",
    token:""
  });
  const [alert, setAlert] = useState({});
  const [error, setError] = useState(null);

  const resetError = () => setError(null);

  useEffect(()=>{
    setValue(prevState => ({
      ...prevState,
      token: match.params.tk,
    }));
  },[])

  const handleChange = event => {
    setValue(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    //Comprobar que las contraseñas son iguales
    if (value.password !== value.passwordRepeat) {
          setAlert({
              msg: "Passwords are not equal",
              error: true
            })
          setError(alert.error);
          return 
    }
    //Comprobar que la contraseña  al menos es de 6 caracteres
    if (value.password.length < 6) {
          setAlert({
              msg: "Password must have at least with 6 digits",
              error: true
            })
            setError(alert.error);
            return 
    }


  try {
    
    const data = await changePassword(value);

    setAlert({
      msg: data.msg,
      error: true
    })
    setError(alert.error);
  
  }catch(error){
    console.log(error)
  }
}



    return (  
      <Layout>
        <div className="container chgContainer">
      <div className='LoginPage'>

        <h1 className='loginPage-title title-chg'> Change your password</h1>
        <form onSubmit={handleSubmit}>
          <span > New Password </span>
          <input
                type='password'
                name='password'
                value={value.password}
                onChange={handleChange}
                className='loginForm-field mb-3'
                placeholder='Insert your new password'
                className='password'

        ></input>
        <span> Confirm New Password </span>
          <input
                type='password'
                name='passwordRepeat'
                value={value.passwordRepeat}
                onChange={handleChange}
                className='loginForm-field mb-3'
                placeholder='Confirm your new password'
                className='password'

        ></input>
          <Button
            type='submit'
              variant='primary'
                className='mb-3 btnChangePass'
                onSubmit={handleSubmit}
          >
            Change password
          </Button>
          <br/>
          {(error) && (
             <div onClick={resetError} className='changeDiv-msg'>
               {alert.msg}
              
             </div>
            
           )}
          <br/>
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
          </div>
        </Layout>
    );
}
 
export default ChangePassword;