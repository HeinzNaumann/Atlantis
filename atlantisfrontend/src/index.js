import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignupPage from './components/auth/signupPage/SignupPage';
import LoginPage from './components/auth/loginPage/index'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
    <SignupPage/>
  </React.StrictMode>,
  document.getElementById("root")
);


