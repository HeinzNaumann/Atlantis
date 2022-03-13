import {useEffect, useState, createContext} from 'react';
import { authUser } from './service';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const userAuth = async () => {
             const token = localStorage.getItem('token')
            if(!token){
                return
            }
            
            const config = {
                header: {
                    "Content-Type": "application/json",
                    Authorization : `Bearer ${token}`
                }
            }
            try {
                const { data } = await authUser(config)
                console.log(data)
            } catch (error) {
                
            }
        }

        userAuth()
       
    }, [])

    return (
        <AuthContext.Provider
            value={{
           setAuth
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;