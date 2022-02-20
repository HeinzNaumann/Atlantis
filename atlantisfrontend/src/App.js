import "./App.css";
import "./components/detail.css";
import "./components/Detail";

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
    <header className="bg-black">
      <nav className="navbar" id="home">
        <h1>AQUI</h1>
        <div className="container">
          <div className="navbar-left">
            <a className="navbar-brand" href="index.html">
              <img className="logo-dark" src="assets/img/logo.png" alt="logo" />
            </a>
          </div>
          <a
            href="#introduction"
            className="btn btn-md btn-theme text-white py-2 px-3 radius-5 text-capitalize"
          >
            Getting Started
          </a>
        </div>
      </nav>
    </header>
  );
}
export default App;
