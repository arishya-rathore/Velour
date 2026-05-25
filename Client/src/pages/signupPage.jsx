import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

function Signup(){
const {signup} = useAuth();
const navigate = useNavigate();
const [email,setEmail] = useState("");
const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");
 async function handleSubmit(e){
     e.preventDefault();
    try{
    await signup({email,password,name,phone});
    navigate('/');
    }
    catch(err){
        console.log(err);
    }
}
return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type ="email" placeholder="Enter E-mail.." 
            onChange={(e)=> setEmail(e.target.value)} /> 
            <input type ="password" placeholder="Enter password.."
             onChange={(e)=> setPassword(e.target.value)} /> 
            <input type ="text" placeholder="Enter name.."
            onChange={(e)=> setName(e.target.value)} /> 
             <input type ="text" placeholder="Enter Phone.." 
            onChange={(e)=> setPhone(e.target.value)} /> 
            <button type ="submit">Submit</button>
        </form>
    </div>
);
}
export default Signup;