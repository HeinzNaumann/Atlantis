import { useState, useEffect } from "react";
import { Route, Redirect } from "react-router";
import { setAuthorizationHeader, removeAuthorizationHeader } from "../../api/client";

const PrivateRoute = props => {

  const [isLogged, setLogged] = useState([false]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthorizationHeader(token)
      setLogged(true)
    } else {
      removeAuthorizationHeader(token);
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
