import {useState} from 'react';
 import {Link} from "react-router-dom"

const ControlledTabs = ({ onClck }) => {

     
    const [key, setKey] = useState("myProducts")

     return (
       <>
                <button to="/admin" id="1" className="hover:cursor-pointer" onClick={(id)=>onClck(id)}>
                    My producto
                    
                 
                </button>
           
            
            <button to="/admin" id="2" className="hover:bg-amber-400" onClick={(id)=>onClck(id)}>
                    Favorites

                </button>
           
            
            
            <button to="/admin" id="3" className="hover:cursor-pointer" onClick={(id)=>onClck(id)}>
                    Add Product
                    
                 
                </button>
           
        </>                 
 );
 }
  
export default ControlledTabs ;