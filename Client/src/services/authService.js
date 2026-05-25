import axios from 'axios';

export const signup = async(data)=>{
     console.log("Sending signup request", data);
    const signup = await axios.post('http://localhost:5000/auth/signup', data);
    return signup.data;
}

export const login = async (data)=>{
    const login = await axios.post('http://localhost:5000/auth/login', data);
    return login.data;
}