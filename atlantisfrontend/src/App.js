import Detail from "./components/Detail";

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

        <Route exact path="/adverts/:id" component={Detail} />

        <Redirect to="/404" />
      </Switch>
    </>
  );
}
export default App;
