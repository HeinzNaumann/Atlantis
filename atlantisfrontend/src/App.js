
//import Formik from "formik";
import { Switch, Route, Redirect} from 'react-router-dom';
import AdsListMainPage from './components/AdsListMainPage'
import NewAdPage from "./components/NewAdPage";
import PasswordForgot from "./components/auth/passwordForgot/PasswordForgot";
import AccountConfirm from "./components/auth/accountConfirm/AccountConfirm"
import signupLogin from './components/auth/signupLogin';
//import {AuthProvider} from "./context/AuthProvider";
function App() {
  return (
   // <AuthProvider>
    
    <Switch>
      <Route exact path="/adverts" component={AdsListMainPage} />
      <Route exact path="/adverts/new" component={NewAdPage} />
       <Route exact path="/login" component={signupLogin} /> 
      <Route exact path="/signup" component={signupLogin} />
      {/* <Route exact path="/signuplogin" component={signupLogin} /> */}
      <Route exact path="/password-forgot/:accessToken" component={PasswordForgot} /> 
      <Route exact path="/account-confirm/:id" component={AccountConfirm} />
      <Route exact path="/404"></Route>
      <Route exact path="/" component={AdsListMainPage} />
      <Redirect to="/404" />
      </Switch>
     // </AuthProvider>
  );
}
export default App;
