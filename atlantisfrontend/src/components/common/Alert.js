const Alert = ({alert}) => {
    return ( 
        <div className={`${alert.error ? " danger "  :  "success " }`}>
            {alert.msg}
        </div>
     );
}
 
export default Alert;