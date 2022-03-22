import * as Icon from 'react-feather';
import { NavLink, Link} from "react-router-dom";

const AdminButton = () => {

     const user = localStorage.getItem("id_usuario")

    return ( 
         <Link to={`/admin/${user}`}>
                <Icon.User className="d-inline-block mr-0 mr-lg-3 icons-header" />
                 <span className="d-none d-lg-inline-block">
                 Admin Panel
                 </span>
          </Link>
     );
}
 
export default AdminButton;