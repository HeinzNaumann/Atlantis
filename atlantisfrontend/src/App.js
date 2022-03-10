import Detail from "./components/Detail";
import Layout from "./layout/Layout";
//import ErrorPage from "./components/ErrorPage";
//import Login1 from "./login/Login1";
import Footer from "./layout/Footer";
import NewAdPage from "./components/NewAdPage";
import { Switch, Route, Redirect } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <Redirect to="/detail" />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/adverts/new" component={NewAdPage} />
        <Layout />
        <Route exact path="/adverts/:id" component={Detail} />
        <Footer />
        {/* <Redirect to="/404" /> */}
      </Switch>
    </>
  );
}
export default App;
