import * as Icon from 'react-feather';
import { NavLink, Link } from "react-router-dom";

const LoginButton = () => {
    return ( 
         <Link to="/signup">
                <Icon.User className="d-inline-block mr-0 mr-lg-3 icons-header" />
                 <span className="d-none d-lg-inline-block">
                 User
                 </span>
          </Link>
     );
}
 
export default LoginButton;