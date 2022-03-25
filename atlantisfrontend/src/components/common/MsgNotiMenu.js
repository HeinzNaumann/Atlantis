import * as Icon from 'react-feather';
import {  Link } from "react-router-dom";
import socket from '../message/socket';
import { useEffect, useState } from "react";
import './msgNotiMenu.css'

const MsgNotiMenu = ( ) => {

    const[notifications, setNotifications]=useState([])
    const[open,setOpen]=useState(false);

    useEffect(()=>{
        socket.on("getNotification", data=>{
          setNotifications((prev)=>[...prev,data])
        })
      },[socket]);

      const handleClrNoti= ()=>{
          setNotifications([])
          setOpen(false)
      }

      const displayNotification=({senderName,type})=>{
          let action;
          console.log("Noti",notifications)
          //console.log("Noti",senderName);
          return (
              <span className="notification">{`${senderName} has ${type} the advert`}</span>
          )
       }

    return ( 
        <>
                    <li className="list-inline-item d-none d-md-inline-block">
                       <div className="icons">
                          <div className="icon" onClick={()=>setOpen(!open)}>
                             <Icon.AlertCircle />
                             { notifications.length>0 &&
                                 <div className="counter">{notifications.length}</div>
                             }
                                {open&& (
                                <div className="notifications">
                                      {notifications.map((n)=>displayNotification(n))}
                                      {<button className="notiButton" onClick={handleClrNoti}>Mark as read</button>}
                                      
                                </div>
                                )}
                          </div>
                        </div>
                        
                       
                      </li>
                      <li className="list-inline-item d-none d-md-inline-block">
                        <Link to="/chat">
                    
                           <Icon.MessageCircle className="d-inline-block mr-0 mr-lg-3 icons-header" />
                          <span className="d-none d-lg-inline-block">
                            Message
                          </span>
                       </Link>
                      </li>
    </>
    );
}
 
export default MsgNotiMenu;