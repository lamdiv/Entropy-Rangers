import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    name: '',
    email: '',
    onLogout: () => { },
    onLogin: (email, ) => { },
});

export default AuthContext;