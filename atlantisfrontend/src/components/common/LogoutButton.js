import * as Icon from 'react-feather';
import { NavLink, Link } from "react-router-dom";
import { logout } from '../auth/service';
const LogoutButton = () => {



    return ( 
        <>
            <div onClick={logout} >
            <Link to="/">
             <Icon.LogOut className="d-inline-block mr-0 mr-lg-3 icons-header" />
                <span className="d-none d-lg-inline-block">
                 Logout
                </span>
            </Link>
            </div>
    </>
    );
}
 
export default LogoutButton;