import Detail from "./components/Detail";
import Layout from "./layout/Layout";
//import ErrorPage from "./components/ErrorPage";
//import Login1 from "./login/Login1";
import Footer from "./layout/Footer";

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
      {/* <Login1 /> */}
      <Layout />
      <Detail />
      <Footer />
      {/* <ErrorPage /> */}
    </>
  );
}
export default App;
