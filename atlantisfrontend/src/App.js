import "./App.css";
//import Formik from "formik";
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from '../src/components/auth/loginPage/LoginPage';
import SignupPage from '../src/components/auth/signupPage/SignupPage'
import AdsListMainPage from './components/AdsListMainPage'

function App() {
  return (

    <Switch>
        <Route exact path="/adverts" component={AdsListMainPage}/>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage}/>
        <Route exact path="/404">
        </Route>
        <Route exact path="/" component={AdsListMainPage}/>
        <Redirect to="/404" />
      </Switch>
  );
}
export default App;
