import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

function Login(){
const {login} = useAuth();
const navigate = useNavigate();
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
 async function handleSubmit(e){
    e.preventDefault();
     console.log({email, password});
    await login({email,password});
    navigate('/');
}
return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type ="email" placeholder="Enter E-mail.." 
            onChange={(e)=> setEmail(e.target.value)} />
            <input type ="password" placeholder="Enter password.."
             onChange={(e)=> setPassword(e.target.value)} />
            <button type="submit" >Submit</button>
        </form>
    </div>
);
}
export default Login;