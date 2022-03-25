import { useState, useEffect } from "react";
import { Route, Redirect } from "react-router";


const PrivateRoute = props => {

  const [isLogged, setLogged] = useState([false]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLogged(true)
    } else {
      setLogged(false)
      }
  },[setLogged])

  return isLogged ? (
    <Route {...props} />
  ) : (
    <Route>
      {({ location }) => (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
