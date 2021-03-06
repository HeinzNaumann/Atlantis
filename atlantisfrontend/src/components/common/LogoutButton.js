import * as Icon from 'react-feather';
import {  Link } from "react-router-dom";
import { logout } from '../auth/service';
const LogoutButton = ( ) => {


    return ( 
        <>
           
            <Link onClick={logout} to={"/signup"}>
             <Icon.LogOut className="d-inline-block mr-0 mr-lg-3 icons-header" />
                <span className="d-none d-lg-inline-block">
                 Logout
                </span>
            </Link>
            
    </>
    );
}
 
export default LogoutButton;