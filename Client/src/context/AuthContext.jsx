import { createContext } from "react";
import { useState} from "react";
import { useContext } from "react";
import { login as loginService, signup as signupService} from "../services/authService";

const AuthContext = createContext();
const AuthProvider = ({children})=>{
    const [user,setUser]= useState(null);

    const login = async (data)=>{
    const res = await loginService(data);
    localStorage.setItem('token',res.token);
    setUser(res.user);
    }

    const signup = async (data)=>{
    const res = await signupService(data);
    console.log(res);
    localStorage.setItem('token',res.token);
    setUser(res.user);
    }

    const logout = ()=>{
        localStorage.removeItem('token');
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user,login,signup,logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = ()=> useContext(AuthContext);
export default AuthProvider;