import { Switch, Route, Redirect } from "react-router-dom";
import AdsListMainPage from "./components/AdsListMainPage";
import NewAdPage from "./components/NewAdPage";
import PasswordForgot from "./components/auth/passwordForgot/PasswordForgot";
import AccountConfirm from "./components/auth/accountConfirm/AccountConfirm";
import SignupLogin from "./components/auth/SignupLogin";
import AdminPanel from "./components/adminPanel/AdminPanel";
import Detail from "./components/Detail";
import PrivateRoute from "./components/auth/PrivateRoute";
import EditComponent from "./components/EditComponent";
import Message from "./components/message/MessagePage";
import MainPage from "./components/MainPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Switch>
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/adverts" component={AdsListMainPage} />
      <PrivateRoute path="/adverts/new" component={NewAdPage} />
      <PrivateRoute exact path="/admin" component={AdminPanel} />
      <PrivateRoute exact path="/admin/:userId" component={AdminPanel} />
      <Route exact path="/adverts/:id" component={Detail} />
      <Route exact path="/login">
        <SignupLogin />
      </Route>
      <Route exact path="/update" component={EditComponent} />
      <Route exact path="/signup" component={SignupLogin} />
      <Route exact path="/password-forgot" component={PasswordForgot} />

      <Route exact path="/chat/:idAd" component={Message} />
      <Route exact path="/chat" component={Message} />

      <Route exact path="/account-confirm/:id" component={AccountConfirm} />

      <Route exact path="/404" component={ErrorPage}></Route>
      <Route exact path="/" component={MainPage} />
      <Redirect to="/404" component={ErrorPage} />
    </Switch>
  );
}
export default App;
