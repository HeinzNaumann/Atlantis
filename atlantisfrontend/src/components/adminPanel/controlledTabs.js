import {useState} from 'react';
 import {Link} from "react-router-dom"

const ControlledTabs = ({ onClck }) => {

     
    const [key, setKey] = useState("myProducts")

     return (
         <>
             <div className="d-none d-md-flex text-center">
                <button to="/admin" id="1" className="tabs-admin-panel hover:cursor-pointer" onClick={(id)=>onClck(id)} autoFocus>
                    My Products
                    
                 
                </button>
           
            
            <button to="/admin" id="2" className="tabs-admin-panel hover:bg-amber-400" onClick={(id)=>onClck(id)}>
                    My Favorites

                </button>
           
            
            
            <button to="/admin" id="3" className="tabs-admin-panel hover:cursor-pointer" onClick={(id)=>onClck(id)}>
                    Add New Product
                    
                 
                </button>
           </div>
        </>                 
 );
 }
  
export default ControlledTabs ;