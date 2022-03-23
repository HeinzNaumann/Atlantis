import { Switch, Route, Redirect } from "react-router-dom";
import AdsListMainPage from "./components/AdsListMainPage";
import NewAdPage from "./components/NewAdPage";
import PasswordForgot from "./components/auth/passwordForgot/PasswordForgot";
import AccountConfirm from "./components/auth/accountConfirm/AccountConfirm";
import SignupLogin from "./components/auth/SignupLogin";
import AdminPanel from "./components/adminPanel/AdminPanel"
import Detail from "./components/Detail";
import PrivateRoute from "./components/auth/PrivateRoute";
import EditComponent from "./components/EditComponent";

function App() {

  return (
    <Switch>
      <Route exact path="/adverts" component={AdsListMainPage}/> 
      <PrivateRoute path="/adverts/new" component={NewAdPage} />
      <PrivateRoute exact path="/admin" component={AdminPanel} />
      <PrivateRoute exact path="/admin/:userId" component={AdminPanel} />
      <Route exact path="/adverts/:id" component={Detail} />
      <Route exact path="/login" >
        <SignupLogin />
      </Route>
      <Route exact path="/update" component={EditComponent} />
      <Route exact path="/signup" component={SignupLogin} />
      <Route
        exact
        path="/password-forgot"
        component={PasswordForgot}
      />
      <Route exact path="/account-confirm/:id" component={AccountConfirm} />

      <Route exact path="/404"></Route>
      <Route exact path="/" component={AdsListMainPage} />
      <Redirect to="/404" />
    </Switch>
  );
}
export default App;
