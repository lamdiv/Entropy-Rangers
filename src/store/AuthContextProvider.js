import axios from "axios";
import { useEffect, useState } from "react";
import AuthContext from "./auth-context";

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(()=>{
        let id = localStorage.getItem('id')
        if (id){ 
        fetchUserData(id)
        }else{
        setIsLoggedIn(false);
        }
    },[])

    const fetchUserData = async(id) => {
        let response = await axios.request(`https://co2-calculator-sahajrajmalla.herokuapp.com/user/${id}`);
        setEmail(response.data.email)
        setName(response.data.name)
        setIsLoggedIn(true);
        console.log(response.data)
    }

    const logoutHandler = () => {
        localStorage.removeItem('id')
        localStorage.removeItem('token')
        setEmail('')
        setName('')
        setUserId('')
        setIsLoggedIn(false);
    };

    const loginHandler = (data) => {
        const {name,email,id} = data
        console.log(data)
        setEmail(email)
        setName(name)
        setUserId(id)

        localStorage.setItem('id',id)
        localStorage.setItem('token',data.access_token)
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
                name:name,
                email:email,
                userId:userId
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};