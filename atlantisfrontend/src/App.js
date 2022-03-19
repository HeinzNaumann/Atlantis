import { Switch, Route, Redirect } from "react-router-dom";
import AdsListMainPage from "./components/AdsListMainPage";
import NewAdPage from "./components/NewAdPage";
import PasswordForgot from "./components/auth/passwordForgot/PasswordForgot";
import AccountConfirm from "./components/auth/accountConfirm/AccountConfirm";
import SignupLogin from "./components/auth/SignupLogin";
import Detail from "./components/Detail";
import { useState } from "react";
//import {AuthProvider} from "./context/AuthProvider";
function App() {

  const [isLogged, SetLogged] = useState(false);
  
  const handleLogin = () => SetLogged(true)

  return (
    // <AuthProvider>
    <Switch>
      <Route exact path="/adverts" component={AdsListMainPage}/> 
      <Route exact path="/adverts/new" component={NewAdPage} />
      <Route exact path="/adverts/:id" component={Detail} />
      <Route exact path="/login" >
        <SignupLogin onLogin={handleLogin}/>
      </Route>
      <Route exact path="/signup" component={SignupLogin} />
      <Route
        exact
        path="/password-forgot/:accessToken"
        component={PasswordForgot}
      />
      <Route exact path="/account-confirm/:id" component={AccountConfirm} />

      <Route exact path="/404"></Route>
      <Route exact path="/" component={AdsListMainPage} />
      <Redirect to="/404" />
    </Switch>
    // </AuthProvider>
  );
}
export default App;
